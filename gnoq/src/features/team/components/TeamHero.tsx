import { PageHero } from "@/shared/components/PageHero/PageHero";
import { Button } from "@/shared/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export function TeamHero() {
  return (
    <PageHero
      eyebrow="Equipe"
      title="Tecnologia é feita por pessoas que entendem contexto."
      description="A GNOQ combina desenvolvimento, produto e visão de negócio para criar soluções digitais sob medida."
      actions={[
        <Button
          key="contact"
          nativeButton={false}
          render={<Link href="/diagnostico" />}
        >
          Conversar com a equipe
          <ArrowRightIcon className="size-4" />
        </Button>,
      ]}
    />
  );
}
