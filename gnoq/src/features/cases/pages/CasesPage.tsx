import { PageHero } from "@/shared/components/PageHero/PageHero";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { ArrowRightIcon, Building2Icon, CheckIcon } from "lucide-react";
import Link from "next/link";

const caseItems = [
  "ERP sob medida para apoiar a operação",
  "Painéis de BI integrados ao sistema",
  "Centralização de processos e informações",
  "Dados organizados para tomada de decisão",
];

const proofItems = [
  {
    title: "Construção de sistema operacional crítico",
    description:
      "O ERP apoia rotinas importantes da operação, por isso precisa ser pensado com estabilidade, clareza de fluxo e aderência ao dia a dia da equipe.",
  },
  {
    title: "Integração entre operação, dados e gestão",
    description:
      "Os painéis de BI conectados ao sistema ajudam a transformar informações operacionais em leitura gerencial para acompanhar desempenho e tomar decisões.",
  },
  {
    title: "Entrega B2B sob medida para contexto real",
    description:
      "A solução nasce do funcionamento da empresa, respeitando processos, responsabilidades e necessidades específicas do mercado de field marketing.",
  },
];

export function CasesPage() {
  return (
    <main>
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

      <section className="mx-auto grid max-w-7xl gap-6 px-6 py-14 lg:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardHeader>
            <div className="flex size-11 items-center justify-center rounded-xl bg-muted">
              <Building2Icon className="size-5" />
            </div>
            <div className="space-y-2">
              <Badge variant="outline" className="w-fit">
                Field marketing e serviços
              </Badge>
              <CardTitle className="text-2xl">
                Lider Field Marketing e Serviços
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-5">
            <p className="leading-relaxed text-muted-foreground">
              Desenvolvimento de ERP sob medida e painéis de BI integrados para
              apoiar operação, gestão e análise de dados da empresa.
            </p>
            <div className="grid gap-4 rounded-xl border bg-muted/30 p-4 md:grid-cols-2">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Desafio
                </p>
                <p className="mt-2 text-sm leading-relaxed">
                  Organizar processos, centralizar informações e transformar
                  dados operacionais em visão gerencial.
                </p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Solução
                </p>
                <p className="mt-2 text-sm leading-relaxed">
                  ERP personalizado com painéis de BI conectados ao sistema.
                </p>
              </div>
            </div>
            <div className="grid gap-3">
              {caseItems.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm">
                  <CheckIcon className="size-4" />
                  {item}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4">
          {proofItems.map((item) => (
            <div key={item.title} className="rounded-xl border p-5">
              <p className="font-medium">{item.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
