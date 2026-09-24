import { PageHero } from "@/shared/components/PageHero/PageHero";
import { Button } from "@/shared/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export function CasesHero() {
  return (
    <PageHero
      eyebrow="Cases"
      title="Projetos digitais precisam provar capacidade, não só intenção."
      description="Esta área reúne entregas, aprendizados e provas de que a GNOQ entende problemas reais e transforma operação, dados e contexto de negócio em solução digital."
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
