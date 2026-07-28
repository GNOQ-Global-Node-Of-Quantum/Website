import { PageHero } from "@/shared/components/PageHero/PageHero";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { ArrowRightIcon, MailIcon, MessageCircleIcon } from "lucide-react";
import Link from "next/link";

const contactReasons = [
  "Parcerias",
  "Projetos",
  "Suporte",
  "Comercial",
  "Imprensa ou institucional",
];

export function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contato"
        title="Fale com a GNOQ."
        description="Use esta página para mensagens diretas. Se você quer avaliar uma solução digital para sua empresa, o melhor caminho é solicitar um diagnóstico."
        actions={[
          <Button
            key="diagnostico"
            nativeButton={false}
            render={<Link href="/diagnostico" />}
          >
            Solicitar diagnóstico
            <ArrowRightIcon className="size-4" />
          </Button>,
        ]}
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[1fr_0.8fr]">
        <form className="rounded-2xl border p-6">
          <Badge variant="outline" className="w-fit">
            Mensagem
          </Badge>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Input placeholder="Nome" aria-label="Nome" />
            <Input placeholder="Empresa" aria-label="Empresa" />
            <Input placeholder="E-mail" aria-label="E-mail" type="email" />
            <Input placeholder="WhatsApp" aria-label="WhatsApp" />
          </div>

          <div className="mt-6">
            <p className="text-sm font-medium">Assunto</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {contactReasons.map((reason) => (
                <span
                  key={reason}
                  className="rounded-full border px-3 py-1 text-sm text-muted-foreground"
                >
                  {reason}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <Textarea
              placeholder="Como podemos ajudar?"
              aria-label="Como podemos ajudar?"
              className="min-h-32"
            />
          </div>

          <Button className="mt-6" type="submit">
            Enviar mensagem
            <ArrowRightIcon className="size-4" />
          </Button>
        </form>

        <aside className="grid gap-4">
          <div className="rounded-2xl border bg-muted/30 p-6">
            <MessageCircleIcon className="size-5" />
            <h2 className="mt-4 font-semibold">Quer começar um projeto?</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Para projetos de site, app, sistema, automação, jogo ou MVP, o
              diagnóstico ajuda a organizar melhor o pedido.
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
            <h2 className="mt-4 font-semibold">Contato institucional</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Use o formulário para assuntos comerciais, parcerias, suporte ou
              mensagens institucionais.
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}
