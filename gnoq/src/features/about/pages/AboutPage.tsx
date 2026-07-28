import { PageHero } from "@/shared/components/PageHero/PageHero";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { ArrowRightIcon, CheckIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";

const principles = [
  "Conhecer a operação de perto quando o projeto pede profundidade",
  "Entender o problema antes da tecnologia",
  "Criar soluções sob medida",
  "Validar antes de escalar investimento",
  "Construir com clareza, uso e evolução",
];

const steps = [
  "Diagnóstico da dor e do objetivo",
  "Definição do caminho mais coerente",
  "Construção da primeira versão",
  "Acompanhamento e evolução",
];

export function AboutPage() {
  return (
    <main>
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

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-2">
        <div className="rounded-2xl border p-6">
          <Badge variant="outline" className="w-fit">
            Princípios
          </Badge>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight">
            Como pensamos projetos digitais.
          </h2>
          <div className="mt-6 grid gap-3">
            {principles.map((principle) => (
              <div key={principle} className="flex items-center gap-2 text-sm">
                <CheckIcon className="size-4" />
                {principle}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border bg-muted/30 p-6">
          <Badge variant="outline" className="w-fit bg-background">
            Processo
          </Badge>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight">
            Do entendimento à evolução.
          </h2>
          <div className="mt-6 grid gap-3">
            {steps.map((step, index) => (
              <div key={step} className="rounded-xl border bg-background p-4">
                <p className="text-sm font-medium text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-1 font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y bg-muted/30">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="flex flex-col gap-3">
            <Badge variant="outline" className="w-fit bg-background">
              Diferencial
            </Badge>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Imersão no contexto do cliente.
            </h2>
          </div>

          <div className="rounded-2xl border bg-background p-6">
            <MapPinIcon className="size-5" />
            <p className="mt-4 text-lg font-semibold">
              Visitamos, observamos e ouvimos antes de propor.
            </p>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Em projetos que envolvem operação, ERP, BI, automação ou sistemas
              internos, entender a rotina presencialmente pode revelar dores
              que não aparecem em um briefing. Essa proximidade ajuda a GNOQ a
              desenhar soluções mais aderentes ao dia a dia da empresa.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
