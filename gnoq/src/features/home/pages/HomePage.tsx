import { PageHero } from "@/shared/components/PageHero/PageHero";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { ArrowRightIcon, CheckIcon, MapPinIcon } from "lucide-react";
import Link from "next/link";
import { home_audiences, home_services, home_steps } from "../constants/home.constants";

export function HomePage() {
  return (
    <main>
      <PageHero
        eyebrow="Apps, sites, jogos, ERPs, BI e automações"
        title="Soluções digitais sob medida para empresas que precisam sair do improviso."
        description="A GNOQ ajuda empresas a vender melhor, centralizar operação, transformar dados em decisão, validar ideias e criar produtos digitais com visão de negócio antes da tecnologia."
        actions={[
          <Button
            key="diagnostico"
            nativeButton={false}
            render={<Link href="/diagnostico" />}
          >
            Solicitar diagnóstico
            <ArrowRightIcon className="size-4" />
          </Button>,
          <Button
            key="servicos"
            nativeButton={false}
            variant="outline"
            render={<Link href="/services" />}
          >
            Ver serviços
          </Button>,
        ]}
        aside={
          <div className="rounded-2xl border bg-muted/30 p-5">
            <p className="text-sm font-medium">Primeiro passo recomendado</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Antes de pedir um app, site ou sistema, faça um diagnóstico para
              entender qual solução realmente resolve o problema.
            </p>
            <div className="mt-5 grid gap-3">
              {["Clareza de escopo", "Menos risco", "Próximo passo objetivo"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <CheckIcon className="size-4" />
                    {item}
                  </div>
                ),
              )}
            </div>
          </div>
        }
      />

      <section className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14">
        <div className="flex max-w-3xl flex-col gap-3">
          <Badge variant="outline" className="w-fit">
            O que fazemos
          </Badge>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Tecnologia pensada para resolver problemas de negócio.
          </h2>
          <p className="text-muted-foreground">
            Organizamos as soluções por necessidade do cliente, não só por tipo
            de tecnologia.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {home_services.map((service) => (
            <Card key={service.title} className="transition-all hover:-translate-y-1 hover:shadow-md">
              <CardHeader>
                <div className="flex size-10 items-center justify-center rounded-lg bg-muted text-foreground">
                  <service.icon className="size-5" />
                </div>
              </CardHeader>
              <CardContent>
                <CardTitle>{service.title}</CardTitle>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y bg-muted/30">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col gap-3">
            <Badge variant="outline" className="w-fit bg-background">
              Para quem
            </Badge>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Clientes que precisam transformar operação, dados, venda ou ideia
              em produto digital.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {home_audiences.map((audience) => (
              <div key={audience.title} className="rounded-xl border bg-background p-5">
                <h3 className="font-semibold">{audience.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div className="flex flex-col gap-3">
          <Badge variant="outline" className="w-fit">
            Diferencial
          </Badge>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            A solução nasce perto da operação real.
          </h2>
          <p className="text-muted-foreground">
            Quando o projeto pede profundidade, a GNOQ vai até o cliente para
            conhecer a rotina, conversar com a equipe e entender as dores que
            aparecem no dia a dia.
          </p>
        </div>

        <div className="rounded-2xl border bg-muted/30 p-6">
          <MapPinIcon className="size-5" />
          <p className="mt-4 text-lg font-semibold">
            Presença, escuta e tecnologia sob medida.
          </p>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            Antes de escrever código, entramos no contexto do cliente para
            transformar dores reais em sistemas, automações, BI, apps, sites e
            produtos digitais que fazem sentido para o negócio.
          </p>
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14">
        <div className="flex max-w-3xl flex-col gap-3">
          <Badge variant="outline" className="w-fit">
            Método
          </Badge>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Um processo simples para criar com mais clareza.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {home_steps.map((step, index) => (
            <div key={step.title} className="rounded-xl border p-5">
              <div className="flex items-center justify-between">
                <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                  <step.icon className="size-5" />
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t px-6 py-16">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 rounded-2xl border bg-muted/30 px-6 py-12 text-center">
          <Badge variant="outline" className="bg-background">
            Diagnóstico
          </Badge>
          <h2 className="max-w-2xl text-2xl font-semibold tracking-tight md:text-3xl">
            Vamos descobrir qual solução digital faz sentido para sua empresa?
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Conte o problema, o objetivo e o momento do negócio. A partir disso,
            a GNOQ indica o caminho mais coerente.
          </p>
          <Button nativeButton={false} render={<Link href="/diagnostico" />}>
            Solicitar diagnóstico
            <ArrowRightIcon className="size-4" />
          </Button>
        </div>
      </section>
    </main>
  );
}
