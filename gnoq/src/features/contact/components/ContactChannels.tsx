import { LeadForm } from "@/features/leads";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import {
  WHATSAPP_DISPLAY,
  whatsappLink,
} from "@/shared/constants/contact.constants";
import { ArrowRightIcon, MailIcon, MessageCircleIcon } from "lucide-react";
import Link from "next/link";

export function ContactChannels() {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[1fr_0.8fr]">
      <div className="rounded-2xl border p-6">
        <Badge variant="outline" className="w-fit">
          Mensagem
        </Badge>
        <p className="mt-4 mb-6 text-sm leading-relaxed text-muted-foreground">
          Preencha e a GNOQ te responde. Assuntos comerciais, parcerias, suporte
          ou mensagens institucionais.
        </p>
        <LeadForm origin="contato" submitLabel="Enviar mensagem" />
      </div>

      <aside className="grid gap-4">
        <div className="rounded-2xl border bg-[#25D366]/10 p-6">
          <MessageCircleIcon className="size-5 text-[#128C4B]" />
          <h2 className="mt-4 font-semibold">Fale agora no WhatsApp</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            O jeito mais rápido de falar com a GNOQ. Respondemos direto por lá —{" "}
            {WHATSAPP_DISPLAY}.
          </p>
          <Button
            nativeButton={false}
            className="mt-5 bg-[#25D366] text-white hover:bg-[#1FAE55]"
            render={
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            <MessageCircleIcon className="size-4" />
            Abrir conversa
          </Button>
        </div>
        <div className="rounded-2xl border bg-muted/30 p-6">
          <ArrowRightIcon className="size-5" />
          <h2 className="mt-4 font-semibold">Quer começar um projeto?</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Para site, app, sistema, automação, jogo ou MVP, o diagnóstico ajuda
            a organizar melhor o pedido.
          </p>
          <Button
            nativeButton={false}
            variant="outline"
            className="mt-5"
            render={<Link href="/diagnostico" />}
          >
            Ir para diagnóstico
          </Button>
        </div>
        <div className="rounded-2xl border p-6">
          <MailIcon className="size-5" />
          <h2 className="mt-4 font-semibold">E-mail</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            gabriel.neves@gnoq.com.br
          </p>
        </div>
      </aside>
    </section>
  );
}
