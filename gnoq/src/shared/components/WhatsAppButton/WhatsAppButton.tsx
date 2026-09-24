import { whatsappLink } from "@/shared/constants/contact.constants";
import { MessageCircleIcon } from "lucide-react";

/**
 * Floating WhatsApp button, fixed to the bottom-right on every page.
 * In Brazil this is the highest-converting contact channel for B2B services.
 */
export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a GNOQ no WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
    >
      <MessageCircleIcon className="size-5" />
      <span className="hidden sm:inline">Falar no WhatsApp</span>
    </a>
  );
}
