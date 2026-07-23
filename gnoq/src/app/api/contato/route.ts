import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    const {
      name,
      company,
      email,
      contact,
      phone,
      serviceType,
      solutionType,
      deadline,
      budget,
      message,
      problem,
      source,
    } = await req.json();

    const contactValue = contact || email || phone;
    const serviceValue = solutionType || serviceType;
    const messageValue = problem || message;

    if (!name || !contactValue || !messageValue) {
      return NextResponse.json({ error: "Campos obrigatórios ausentes." }, { status: 400 });
    }

    const safeName = escapeHtml(name);
    const safeCompany = escapeHtml(company);
    const safeContact = escapeHtml(contactValue);
    const safeService = escapeHtml(serviceValue);
    const safeDeadline = escapeHtml(deadline);
    const safeBudget = escapeHtml(budget);
    const safeMessage = escapeHtml(messageValue);
    const safeSource = escapeHtml(source || "Contato");

    await resend.emails.send({
      from: "GNOQ Contato <desenvolvimento@gnoq.com.br>",
      to: ["desenvolvimento@gnoq.com.br"],
      replyTo: String(email || contactValue).includes("@") ? String(email || contactValue) : undefined,
      subject: `[GNOQ] Novo ${source === "Diagnóstico" ? "diagnóstico" : "contato"} — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #1a1a1a;">
          <div style="background: #0F4C81; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">Novo ${safeSource} via site</h1>
          </div>
          <div style="border: 1px solid #e5e7eb; border-top: none; padding: 32px; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #6b7280; font-size: 13px; width: 160px;">Nome</td>
                <td style="padding: 10px 0; font-weight: 600;">${safeName}</td>
              </tr>
              ${company ? `
              <tr style="border-top: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; color: #6b7280; font-size: 13px;">Empresa</td>
                <td style="padding: 10px 0;">${safeCompany}</td>
              </tr>` : ""}
              <tr style="border-top: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; color: #6b7280; font-size: 13px;">Contato</td>
                <td style="padding: 10px 0;">${safeContact}</td>
              </tr>
              ${phone ? `
              <tr style="border-top: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; color: #6b7280; font-size: 13px;">Telefone</td>
                <td style="padding: 10px 0;">${escapeHtml(phone)}</td>
              </tr>` : ""}
              ${serviceValue ? `
              <tr style="border-top: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; color: #6b7280; font-size: 13px;">Solução</td>
                <td style="padding: 10px 0;">${safeService}</td>
              </tr>` : ""}
              ${deadline ? `
              <tr style="border-top: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; color: #6b7280; font-size: 13px;">Prazo</td>
                <td style="padding: 10px 0;">${safeDeadline}</td>
              </tr>` : ""}
              ${budget ? `
              <tr style="border-top: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; color: #6b7280; font-size: 13px;">Orçamento</td>
                <td style="padding: 10px 0;">${safeBudget}</td>
              </tr>` : ""}
            </table>

            <div style="margin-top: 24px; background: #f9fafb; border-radius: 8px; padding: 20px;">
              <p style="color: #6b7280; font-size: 13px; margin: 0 0 8px 0;">Problema / mensagem</p>
              <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${safeMessage}</p>
            </div>

            <p style="margin-top: 24px; font-size: 12px; color: #9ca3af;">
              Enviado em ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("[contato] Resend error:", err);
    return NextResponse.json({ error: "Falha ao enviar e-mail." }, { status: 500 });
  }
}
