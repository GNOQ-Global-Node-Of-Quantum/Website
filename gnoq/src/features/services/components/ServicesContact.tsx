import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export function ServicesContact() {
  return (
    <section className="mx-auto px-6 py-16">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 rounded-2xl border bg-muted/30 px-6 py-12 text-center">
        <Badge variant="outline" className="bg-background">
          Próximo passo
        </Badge>
        <h2 className="max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">
          Quer entender qual solução digital faz sentido para sua empresa?
        </h2>
        <p className="max-w-2xl text-muted-foreground">
          Antes de desenvolver qualquer coisa, a GNOQ ajuda você a clarear o
          problema, avaliar o caminho e escolher a solução digital mais
          adequada.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button nativeButton={false} render={<Link href="/diagnostico" />}>
            Solicitar diagnóstico
            <ArrowRightIcon className="size-4" />
          </Button>
          <Button
            nativeButton={false}
            variant="outline"
            render={<Link href="/" />}
          >
            Voltar para início
          </Button>
        </div>
      </div>
    </section>
  );
}
