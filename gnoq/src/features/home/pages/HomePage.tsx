import { PageHero } from "@/shared/components/PageHero/PageHero";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { whatsappLink } from "@/shared/constants/contact.constants";
import { clientes } from "@/shared/data/clientes.data";
import {
  ArrowRightIcon,
  CheckIcon,
  MapPinIcon,
  MessageCircleIcon,
} from "lucide-react";
import Link from "next/link";
import {
  home_audiences,
  home_services,
  home_steps,
} from "../constants/home.constants";

const trust_stats = [
  { value: "Negócio primeiro", label: "Entendemos o problema antes da tecnologia" },
  { value: "ERP + BI real", label: "Sistemas em operação, não só protótipo" },
  { value: "Time sênior", label: "Estratégia, backend e frontend dedicados" },
  { value: "Resposta rápida", label: "Diagnóstico e retorno sem enrolação" },
];

export function HomePage() {
  return (
    <main>
      <PageHero
        eyebrow="Apps · Sites · Sistemas · ERP · BI · Automações · Jogos"
        title="Software sob medida que resolve o problema real da sua empresa."
        description="A GNOQ transforma operação manual, dados espalhados e ideias soltas em sistemas, sites e produtos digitais que geram controle, vendas e decisão. Tudo começa entendendo o seu negócio — não o código."
        actions={[
          <Button
            key="diagnostico"
            nativeButton={false}
            render={<Link href="/diagnostico" />}
          >
            Solicitar diagnóstico gratuito
            <ArrowRightIcon className="size-4" />
          </Button>,
          <Button
            key="whatsapp"
            nativeButton={false}
            variant="outline"
            render={
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            <MessageCircleIcon className="size-4" />
            Falar no WhatsApp
          </Button>,
        ]}
        aside={
          <div className="rounded-2xl border bg-muted/40 p-5">
            <p className="text-sm font-medium">Comece pelo diagnóstico</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Antes de pedir um app, site ou sistema, entenda qual solução
              realmente resolve o seu problema — e evite investir errado.
            </p>
            <div className="mt-5 grid gap-3">
              {[
                "Escopo claro em vez de achismo",
                "Menos risco de investimento",
                "Um próximo passo objetivo",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm">
                  <CheckIcon className="size-4 text-accent" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        }
      />

      {/* Faixa de prova / diferenciais */}
      <section className="border-b bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {trust_stats.map((stat) => (
            <div key={stat.value}>
              <p className="text-lg font-semibold">{stat.value}</p>
              <p className="mt-1 text-sm text-primary-foreground/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Clientes */}
      {clientes.length > 0 && (
        <section className="border-b bg-muted/30">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-10">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Empresas que confiam na GNOQ
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {clientes.map((cliente) =>
                cliente.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={cliente.nome}
                    src={cliente.logo}
                    alt={cliente.nome}
                    className="h-8 w-auto opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
                  />
                ) : (
                  <span
                    key={cliente.nome}
                    className="text-lg font-semibold text-muted-foreground"
                  >
                    {cliente.nome}
                  </span>
                ),
              )}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16">
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
            <Card
              key={service.title}
              className="transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-md"
            >
              <CardHeader>
                <div className="flex size-10 items-center justify-center rounded-lg bg-secondary text-primary">
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

        <div>
          <Button
            variant="outline"
            nativeButton={false}
            render={<Link href="/services" />}
          >
            Ver todos os serviços
            <ArrowRightIcon className="size-4" />
          </Button>
        </div>
      </section>

      <section className="border-y bg-muted/30">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col gap-3">
            <Badge variant="outline" className="w-fit bg-background">
              Para quem
            </Badge>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Feito para empresas que precisam transformar operação, dados,
              venda ou ideia em produto digital.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {home_audiences.map((audience) => (
              <div
                key={audience.title}
                className="rounded-xl border bg-background p-5"
              >
                <h3 className="font-semibold">{audience.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
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

        <div className="rounded-2xl border bg-secondary/60 p-6">
          <div className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <MapPinIcon className="size-5" />
          </div>
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

      <section className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16">
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
                  <div className="flex size-10 items-center justify-center rounded-lg bg-secondary text-primary">
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
        </div>
      </section>

      {/* CTA final */}
      <section className="border-t bg-primary px-6 py-20 text-primary-foreground">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
          <Badge className="border-0 bg-primary-foreground/15 text-primary-foreground">
            Diagnóstico gratuito
          </Badge>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            Vamos descobrir qual solução digital faz sentido para sua empresa?
          </h2>
          <p className="max-w-2xl text-primary-foreground/80">
            Conte o problema, o objetivo e o momento do negócio. A partir disso,
            a GNOQ indica o caminho mais coerente — sem compromisso.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              variant="secondary"
              nativeButton={false}
              render={<Link href="/diagnostico" />}
            >
              Solicitar diagnóstico
              <ArrowRightIcon className="size-4" />
            </Button>
            <Button
              nativeButton={false}
              className="bg-[#25D366] text-white hover:bg-[#1FAE55]"
              render={
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              <MessageCircleIcon className="size-4" />
              Falar no WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
