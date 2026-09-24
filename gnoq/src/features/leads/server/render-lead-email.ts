import type { Lead } from "../types/lead.types";
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function renderLeadEmail(data: Lead): string {
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

  return html;
}
