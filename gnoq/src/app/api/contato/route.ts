import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, serviceType, budget, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Campos obrigatórios ausentes." }, { status: 400 });
    }

    await resend.emails.send({
      from: "GNOQ Contato <contato@gnoq.com.br>",   // ← troque pelo domínio verificado no Resend
      to: ["contato@gnoq.com.br"],                    // ← e-mail que vai receber
      replyTo: email,
      subject: `[GNOQ] Novo contato — ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #1a1a1a;">
          <div style="background: #4f46e5; padding: 24px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 20px;">Novo contato via site</h1>
          </div>
          <div style="border: 1px solid #e5e7eb; border-top: none; padding: 32px; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; color: #6b7280; font-size: 13px; width: 160px;">Nome</td>
                <td style="padding: 10px 0; font-weight: 600;">${name}</td>
              </tr>
              <tr style="border-top: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; color: #6b7280; font-size: 13px;">E-mail</td>
                <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #4f46e5;">${email}</a></td>
              </tr>
              ${phone ? `
              <tr style="border-top: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; color: #6b7280; font-size: 13px;">Telefone</td>
                <td style="padding: 10px 0;">${phone}</td>
              </tr>` : ""}
              ${serviceType ? `
              <tr style="border-top: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; color: #6b7280; font-size: 13px;">Serviço</td>
                <td style="padding: 10px 0;">${serviceType}</td>
              </tr>` : ""}
              ${budget ? `
              <tr style="border-top: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; color: #6b7280; font-size: 13px;">Orçamento</td>
                <td style="padding: 10px 0;">${budget}</td>
              </tr>` : ""}
            </table>

            <div style="margin-top: 24px; background: #f9fafb; border-radius: 8px; padding: 20px;">
              <p style="color: #6b7280; font-size: 13px; margin: 0 0 8px 0;">Mensagem</p>
              <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
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