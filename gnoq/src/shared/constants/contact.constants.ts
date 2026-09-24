// Central contact configuration for the whole site.
// Change these in one place and every button/link/form updates.

/** WhatsApp number in international format, digits only (55 = Brazil). */
export const WHATSAPP_NUMBER = "5531994525631";

/** Human-friendly display of the WhatsApp / phone number. */
export const WHATSAPP_DISPLAY = "(31) 99452-5631";

/** Inbox that receives lead notifications (used by the API route). */
export const LEAD_EMAIL = "gabriel.neves@gnoq.com.br";

/**
 * Builds a wa.me link with a pre-filled message.
 * Keeps the first message low-friction so the person just hits send.
 */
export function whatsappLink(message?: string): string {
  const text =
    message ??
    "Olá! Vim pelo site da GNOQ e quero conversar sobre um projeto.";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}
