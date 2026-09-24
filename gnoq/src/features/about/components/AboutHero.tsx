import { PageHero } from "@/shared/components/PageHero/PageHero";
import { Button } from "@/shared/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export function AboutHero() {
  return (
    <PageHero
      eyebrow="Sobre"
      title="A GNOQ cria tecnologia para resolver problemas reais."
      description="Cada projeto começa pelo entendimento do negócio, do problema e do objetivo. A tecnologia vem depois, como resposta ao que realmente precisa ser resolvido."
      actions={[
        <Button
          key="contact"
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
