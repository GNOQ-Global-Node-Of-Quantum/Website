import { PageHero } from "@/shared/components/PageHero/PageHero";
import { Button } from "@/shared/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export function ContactHero() {
  return (
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
  );
}
