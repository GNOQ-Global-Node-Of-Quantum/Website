import { PageHero } from "@/shared/components/PageHero/PageHero";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { ArrowRightIcon, CheckIcon } from "lucide-react";
import {
  diagnosis_options,
  diagnosis_steps,
  diagnosis_trust_points,
} from "../constants/diagnostico.constants";

export function DiagnosticoPage() {
  return (
    <main>
      <PageHero
        eyebrow="Diagnóstico"
        title="Descubra qual solução digital sua empresa precisa antes de investir errado."
        description="Conte rapidamente o problema, o momento do negócio e o que você imagina construir. A GNOQ ajuda a clarear se o caminho é site, app, sistema, automação, jogo, MVP ou algo mais simples."
        aside={
          <div className="rounded-2xl border bg-muted/30 p-5">
            <p className="text-sm font-medium">Quando usar este diagnóstico?</p>
            <div className="mt-5 grid gap-3">
              {[
                "Quando existe uma dor, mas o escopo ainda está confuso.",
                "Quando você tem uma ideia e quer validar antes de gastar.",
                "Quando a empresa precisa melhorar operação ou captação.",
              ].map((item) => (
                <div key={item} className="flex gap-2 text-sm leading-relaxed">
                  <CheckIcon className="mt-0.5 size-4 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        }
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[1fr_0.85fr]">
        <form className="rounded-2xl border p-6">
          <Badge variant="outline" className="w-fit">
            Solicitação
          </Badge>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight">
            Conte o cenário.
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Não precisa chegar com escopo pronto. O objetivo é entender o
            problema e transformar isso em um próximo passo claro.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Input placeholder="Nome" aria-label="Nome" />
            <Input placeholder="Empresa" aria-label="Empresa" />
            <Input placeholder="E-mail" aria-label="E-mail" type="email" />
            <Input placeholder="WhatsApp" aria-label="WhatsApp" />
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <Input placeholder="Prazo desejado" aria-label="Prazo desejado" />
            <Input
              placeholder="Orçamento estimado, se houver"
              aria-label="Orçamento estimado"
            />
          </div>

          <div className="mt-4">
            <Textarea
              placeholder="Qual problema você quer resolver?"
              aria-label="Qual problema você quer resolver?"
              className="min-h-32"
            />
          </div>

          <div className="mt-6">
            <p className="text-sm font-medium">O que você imagina precisar?</p>
            <div className="mt-3 grid gap-3 md:grid-cols-2">
              {diagnosis_options.map((option) => (
                <label
                  key={option.title}
                  className="flex cursor-pointer gap-3 rounded-xl border p-4 transition-colors hover:bg-muted/50"
                >
                  <input
                    type="checkbox"
                    name="projectType"
                    value={option.title}
                    className="mt-1"
                  />
                  <span>
                    <span className="block text-sm font-medium">
                      {option.title}
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                      {option.description}
                    </span>
                  </span>
                </label>
              ))}
            </div>
          </div>

          <Button className="mt-6" type="submit">
            Enviar diagnóstico
            <ArrowRightIcon className="size-4" />
          </Button>
        </form>

        <aside className="grid gap-4">
          {diagnosis_trust_points.map((point) => (
            <Card key={point.title}>
              <CardHeader>
                <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                  <point.icon className="size-5" />
                </div>
                <CardTitle>{point.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {point.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </aside>
      </section>

      <section className="border-y bg-muted/30">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14">
          <div className="flex max-w-3xl flex-col gap-3">
            <Badge variant="outline" className="w-fit bg-background">
              Depois do envio
            </Badge>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              O diagnóstico transforma dúvida em direção.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {diagnosis_steps.map((step, index) => (
              <div key={step.title} className="rounded-2xl border bg-background p-5">
                <p className="text-sm font-medium text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
