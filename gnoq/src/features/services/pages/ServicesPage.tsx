import { PageHero } from "@/shared/components/PageHero/PageHero";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { ArrowRightIcon, CheckIcon } from "lucide-react";
import Link from "next/link";
import {
  process_steps,
  proof_points,
  service_cards,
  service_matches,
} from "../constants/services.constants";

export function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Serviços"
        title="Soluções digitais para empresas que precisam vender, automatizar ou criar novos produtos."
        description="A GNOQ desenvolve apps, sites, sistemas, automações, jogos e MVPs sob medida, sempre partindo do problema de negócio antes da tecnologia."
        actions={[
          <Button
            key="diagnostico"
            nativeButton={false}
            render={<Link href="/diagnostico" />}
          >
            Solicitar diagnóstico
          </Button>,
          <Button
            key="processo"
            nativeButton={false}
            variant="outline"
            render={<Link href="#como-trabalhamos" />}
          >
            Ver como trabalhamos
          </Button>,
        ]}
      />

      <section className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14">
        <div className="flex max-w-3xl flex-col gap-3">
          <Badge variant="outline" className="w-fit">
            Serviços
          </Badge>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Escolha pelo problema que sua empresa precisa resolver.
          </h2>
          <p className="text-muted-foreground">
            Cada frente abaixo pode virar um projeto completo ou um primeiro
            MVP para validar o caminho com menos risco.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {service_cards.map((card) => (
            <Card
              key={card.titulo}
              className="relative justify-between transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <CardHeader className="gap-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${card.accentClassName}`}
                    >
                      <card.icon className="size-5" />
                    </div>
                    <div className="space-y-1">
                      <CardTitle className="text-xl">{card.titulo}</CardTitle>
                      <CardDescription>{card.oferta}</CardDescription>
                    </div>
                  </div>
                  <Badge variant="secondary" className="hidden md:inline-flex">
                    Sob medida
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col gap-5">
                <div className="rounded-lg border bg-muted/30 p-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    Dor comum
                  </p>
                  <p className="mt-2 text-sm font-medium leading-relaxed">
                    {card.dor}
                  </p>
                </div>

                <p className="text-sm leading-relaxed text-muted-foreground">
                  {card.texto}
                </p>

                <div className="grid gap-4 md:grid-cols-[1fr_1.1fr]">
                  <div>
                    <p className="text-sm font-medium">Ideal para</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {card.idealPara}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium">Entregas possíveis</p>
                    <ul className="mt-2 grid gap-2">
                      {card.entregas.map((entrega) => (
                        <li
                          key={entrega}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <CheckIcon className="size-4 text-foreground" />
                          {entrega}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg bg-foreground p-4 text-background">
                  <p className="text-xs font-medium uppercase tracking-wide text-background/70">
                    Resultado esperado
                  </p>
                  <p className="mt-2 text-sm font-medium leading-relaxed">
                    {card.resultado}
                  </p>
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  nativeButton={false}
                  className="w-full"
                  render={<Link href="/diagnostico" />}
                >
                  {card.cta}
                  <ArrowRightIcon className="size-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section id="diagnostico" className="border-y bg-muted/30">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="flex flex-col gap-3">
            <Badge variant="outline" className="w-fit bg-background">
              Diagnóstico
            </Badge>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Não sabe exatamente do que precisa?
            </h2>
            <p className="text-muted-foreground">
              Muitas vezes o cliente chega pedindo uma tecnologia, mas o
              primeiro passo é entender a dor e escolher a solução certa.
            </p>
            <Button
              nativeButton={false}
              className="mt-2 w-fit"
              render={<Link href="/diagnostico" />}
            >
              Solicitar diagnóstico
            </Button>
          </div>

          <div className="grid gap-3">
            {service_matches.map((match) => (
              <div
                key={match.pensamento}
                className="grid gap-3 rounded-xl border bg-background p-4 md:grid-cols-[1fr_auto_1fr] md:items-center"
              >
                <p className="text-sm font-medium">"{match.pensamento}"</p>
                <ArrowRightIcon className="hidden size-4 text-muted-foreground md:block" />
                <p className="text-sm text-muted-foreground">
                  {match.solucao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="como-trabalhamos"
        className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14"
      >
        <div className="flex max-w-3xl flex-col gap-3">
          <Badge variant="outline" className="w-fit">
            Como trabalhamos
          </Badge>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Tecnologia com processo, não chute.
          </h2>
          <p className="text-muted-foreground">
            O desenvolvimento começa pela clareza do problema e evolui com
            validação, entrega e aprendizado.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {process_steps.map((step) => (
            <Card key={step.etapa} className="gap-5">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-muted text-foreground">
                    <step.icon className="size-5" />
                  </div>
                  <span className="text-sm font-semibold text-muted-foreground">
                    {step.etapa}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold">{step.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.descricao}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y bg-foreground text-background">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="flex flex-col gap-3">
            <Badge className="w-fit bg-background/15 text-background hover:bg-background/20">
              Prova de capacidade
            </Badge>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Projetos digitais precisam resolver problemas reais.
            </h2>
            <p className="text-background/75">
              A GNOQ combina desenvolvimento, produto e visão de negócio para
              construir soluções que façam sentido no contexto da empresa.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {proof_points.map((point) => (
              <div
                key={point.titulo}
                className="rounded-xl border border-background/15 bg-background/10 p-5"
              >
                <point.icon className="size-5 text-background" />
                <h3 className="mt-4 font-semibold">{point.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-background/70">
                  {point.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            <Button nativeButton={false} variant="outline" render={<Link href="/" />}>
              Voltar para início
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
