import { LEAD_EMAIL } from "@/shared/constants/contact.constants";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import type { z } from "zod";
import { leadSchema } from "../schemas/lead.schema";
import type { Lead, LeadResponse } from "../types/lead.types";
import { renderLeadEmail } from "./render-lead-email";
export async function handleLeadPost(
  request: Request,
): Promise<NextResponse<LeadResponse>> {
  let parsed: z.ZodSafeParseResult<Lead>;
  try {
    parsed = leadSchema.safeParse(await request.json());
  } catch {
    return NextResponse.json(
      { error: "Requisição inválida." },
      { status: 400 },
    );
  }

  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0]?.message ?? "Dados inválidos.";
    return NextResponse.json({ error: firstIssue }, { status: 422 });
  }

  const data = parsed.data;

  // Silently accept bots so they think it worked, but send nothing.
  if (data.company_website && data.company_website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY ausente — não é possível enviar o lead.");
    return NextResponse.json(
      { error: "Configuração de e-mail ausente no servidor." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);
  // Use a verified domain once gnoq.com.br is set up in Resend.
  // Until then, onboarding@resend.dev works but only delivers to the
  // Resend account owner's address.
  const from =
    process.env.LEAD_FROM_EMAIL ?? "GNOQ Site <onboarding@resend.dev>";
  // Recipient can be overridden via env without touching code.
  const to = process.env.LEAD_EMAIL ?? LEAD_EMAIL;

  const html = renderLeadEmail(data);

  try {
    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: data.email,
      subject: `Novo lead — ${data.nome}${data.empresa ? ` (${data.empresa})` : ""}`,
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Não foi possível enviar agora. Tente pelo WhatsApp." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Erro ao enviar lead:", err);
    return NextResponse.json(
      { error: "Erro inesperado. Tente pelo WhatsApp." },
      { status: 500 },
    );
  }
}
