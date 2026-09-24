import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { LEAD_EMAIL } from "@/shared/constants/contact.constants";

// Runs on the Node runtime so the Resend SDK works.
export const runtime = "nodejs";

const leadSchema = z.object({
  // Honeypot: real users leave this empty; bots fill it.
  company_website: z.string().optional(),
  origin: z.string().default("site"),
  nome: z.string().min(2, "Informe seu nome.").max(120),
  empresa: z.string().max(160).optional().default(""),
  email: z.string().email("E-mail inválido."),
  whatsapp: z.string().max(40).optional().default(""),
  prazo: z.string().max(120).optional().default(""),
  orcamento: z.string().max(120).optional().default(""),
  mensagem: z.string().max(4000).optional().default(""),
  interesses: z.array(z.string().max(120)).optional().default([]),
});

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(payload);
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
  const from = process.env.LEAD_FROM_EMAIL ?? "GNOQ Site <onboarding@resend.dev>";
  // Recipient can be overridden via env without touching code.
  const to = process.env.LEAD_EMAIL ?? LEAD_EMAIL;

  const rows: Array<[string, string]> = [
    ["Nome", data.nome],
    ["Empresa", data.empresa || "—"],
    ["E-mail", data.email],
    ["WhatsApp", data.whatsapp || "—"],
    ["Prazo", data.prazo || "—"],
    ["Orçamento", data.orcamento || "—"],
    ["Interesses", data.interesses.length ? data.interesses.join(", ") : "—"],
    ["Origem", data.origin],
  ];

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;color:#111;max-width:640px">
      <h2 style="margin:0 0 4px">Novo lead pelo site 🚀</h2>
      <p style="margin:0 0 20px;color:#555">Origem: <strong>${escapeHtml(data.origin)}</strong></p>
      <table style="border-collapse:collapse;width:100%">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding:8px 12px;border:1px solid #eee;background:#fafafa;font-weight:600;width:150px">${escapeHtml(
              label,
            )}</td>
            <td style="padding:8px 12px;border:1px solid #eee">${escapeHtml(value)}</td>
          </tr>`,
          )
          .join("")}
      </table>
      ${
        data.mensagem
          ? `<h3 style="margin:24px 0 8px">Mensagem</h3>
             <p style="white-space:pre-wrap;line-height:1.6;background:#fafafa;border:1px solid #eee;border-radius:8px;padding:12px 16px">${escapeHtml(
               data.mensagem,
             )}</p>`
          : ""
      }
    </div>`;

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
