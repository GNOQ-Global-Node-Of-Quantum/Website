"use client";

import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  FileQuestion,
  Gamepad2,
  Lightbulb,
  MessageCircle,
  MousePointerClick,
  Rocket,
  Sparkles,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const painServices = [
  {
    icon: MousePointerClick,
    pain: "Preciso vender melhor online",
    solution: "Sites, landing pages e e-commerce",
    text: "Criamos páginas e jornadas pensadas para transformar tráfego em conversas comerciais, pedidos e leads qualificados.",
  },
  {
    icon: Workflow,
    pain: "Tenho processo manual demais",
    solution: "Sistemas internos e automações",
    text: "Mapeamos tarefas repetitivas, centralizamos informações e conectamos ferramentas para reduzir retrabalho operacional.",
  },
  {
    icon: Rocket,
    pain: "Quero criar um produto digital",
    solution: "Apps, SaaS e plataformas",
    text: "Saímos da ideia para um produto utilizável, com arquitetura preparada para evoluir depois da primeira versão.",
  },
  {
    icon: Gamepad2,
    pain: "Quero engajar pessoas",
    solution: "Jogos e experiências interativas",
    text: "Desenvolvemos experiências para campanhas, treinamento, eventos, educação, marca empregadora e relacionamento.",
  },
  {
    icon: FileQuestion,
    pain: "Tenho uma ideia, mas não sei se vale",
    solution: "MVP e validação",
    text: "Ajudamos a testar hipóteses antes de grandes investimentos, com escopo enxuto e aprendizado real de mercado.",
  },
];

const proofPoints = [
  "Leitura do problema antes da solução",
  "Escopo claro para evitar investimento errado",
  "Entrega sob medida: app, site, sistema, jogo, automação ou MVP",
  "Comunicação direta, contrato formal e próximos passos objetivos",
];

const educationalContents = [
  {
    title: "Quando sua empresa precisa de um sistema interno?",
    text: "Sinais de que planilhas, mensagens soltas e controles manuais já estão custando tempo, erro e oportunidade.",
  },
  {
    title: "Como validar uma ideia de app antes de gastar muito?",
    text: "Caminhos para testar demanda, público e funcionalidades essenciais antes de partir para um produto completo.",
  },
  {
    title: "Site institucional ou landing page: qual usar?",
    text: "Entenda quando sua empresa precisa fortalecer presença, vender uma oferta específica ou captar leads para vendas.",
  },
  {
    title: "O que automatizar primeiro em uma empresa?",
    text: "Um jeito simples de priorizar automações que reduzem retrabalho sem bagunçar a operação.",
  },
  {
    title: "Como um MVP reduz risco em projetos digitais?",
    text: "Por que começar menor pode acelerar aprendizado, proteger orçamento e revelar o que realmente precisa ser construído.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-[#0F4C81]">
      <span className="h-px w-8 bg-[#0F4C81]" />
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <section className="relative overflow-hidden border-b border-gray-200 bg-white">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#0F4C81 1px, transparent 1px), linear-gradient(90deg, #0F4C81 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-6 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-lg border border-[#0F4C81]/20 bg-[#0F4C81]/8 px-4 py-2 text-sm font-medium text-[#0F4C81]">
              <Sparkles className="h-4 w-4" />
              Diagnóstico, estratégia e desenvolvimento sob medida
            </div>
            <h1 className="max-w-4xl text-4xl font-bold leading-[1.05] tracking-tight text-gray-950 sm:text-5xl md:text-6xl">
              Soluções digitais para vender melhor, automatizar processos e tirar ideias do papel.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              A GNOQ cria apps, sites, jogos, sistemas, plataformas, automações e produtos digitais sob medida para empresas que precisam resolver problemas reais com tecnologia.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button className="h-12 rounded-lg bg-[#0F4C81] px-6 text-base font-semibold text-white shadow-lg shadow-[#0F4C81]/20 hover:bg-[#0a3d6b]" asChild>
                <Link href="/diagnostico">
                  Solicitar diagnóstico
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" className="h-12 rounded-lg border-[#0F4C81]/25 bg-white px-6 text-base font-semibold text-[#0F4C81] hover:bg-[#0F4C81]/5 hover:text-[#0F4C81]" asChild>
                <a href="https://wa.me/5531994525631?text=Olá! Vim pelo site da GNOQ e quero conversar sobre um projeto." target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  Conversar sobre meu projeto
                </a>
              </Button>
            </div>
          </div>

          <aside className="self-end rounded-lg border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">Primeiro passo</p>
            <h2 className="mt-3 text-2xl font-bold leading-tight text-gray-950">
              Descubra qual solução digital sua empresa precisa antes de investir errado.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              O diagnóstico organiza problema, prioridade, tipo de solução, prazo e investimento provável antes de virar proposta.
            </p>
            <div className="mt-6 grid gap-3">
              {proofPoints.map((item) => (
                <div key={item} className="flex gap-3 text-sm text-gray-700">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0F4C81]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section id="servicos" className="border-b border-gray-200 bg-white py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionLabel>Serviços</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
              Escolha pelo problema que sua empresa quer resolver.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Nem toda demanda começa com um escopo pronto. Ajudamos a transformar dores do negócio em soluções digitais úteis, viáveis e bem direcionadas.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {painServices.map(({ icon: Icon, pain, solution, text }) => (
              <article key={pain} className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-[#0F4C81]/15 bg-white text-[#0F4C81]">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold leading-snug text-gray-950">{pain}</h3>
                <p className="mt-2 text-sm font-semibold text-[#0F4C81]">{solution}</p>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="diagnostico" className="border-b border-gray-200 bg-gray-50 py-18 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <SectionLabel>Diagnóstico gratuito</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
              Descubra o melhor caminho antes de investir em desenvolvimento.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Antes de criar um app, site, sistema ou automação, vale entender o problema, o impacto esperado e a primeira entrega que realmente faz sentido.
            </p>
            <Button className="mt-8 h-12 rounded-lg bg-[#0F4C81] px-6 text-base font-semibold text-white hover:bg-[#0a3d6b]" asChild>
              <Link href="/diagnostico">
                Solicitar diagnóstico
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-400">O que você recebe</p>
            <div className="mt-5 grid gap-4">
              {[
                {
                  title: "Direção da solução",
                  text: "Entenda se faz mais sentido começar por site, app, sistema, automação, jogo, MVP ou outra rota.",
                },
                {
                  title: "Riscos antes do investimento",
                  text: "Mapeamos pontos que podem inflar prazo, custo ou escopo antes de você assumir um projeto maior.",
                },
                {
                  title: "Próximos passos comerciais",
                  text: "Saia com clareza para reunião, proposta, escopo inicial e primeira entrega possível.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <h3 className="text-sm font-bold text-gray-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="cases" className="border-b border-gray-200 bg-white py-18 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <SectionLabel>Case</SectionLabel>
            <h2 className="text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
              Tecnologia sob medida para uma operação que precisa de controle e evolução.
            </h2>
          </div>
          <article className="rounded-lg border border-gray-200 bg-gray-50 p-7">
            <div className="mb-5 flex items-center gap-3 text-[#0F4C81]">
              <BadgeCheck className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-widest">ERP em desenvolvimento</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-950">Lider Field Marketing e Serviços</h3>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Desenvolvimento de um ERP sob medida para uma empresa de field marketing e serviços, com foco em operação, gestão de processos e centralização de informações.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["ERP sob medida", "Operação", "Processos"].map((item) => (
                <div key={item} className="rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-700">
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section id="conteudos" className="border-b border-gray-200 bg-gray-50 py-18 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[380px_1fr]">
            <div>
              <SectionLabel>Conteúdos</SectionLabel>
              <h2 className="text-3xl font-bold tracking-tight text-gray-950 md:text-4xl">
                Guias rápidos para tomar decisões digitais com mais clareza.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Materiais objetivos para empresas que querem entender melhor quando criar, automatizar, validar ou melhorar uma solução digital.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {educationalContents.map((item) => (
                <article key={item.title} className="rounded-lg border border-gray-200 bg-white p-5">
                  <Lightbulb className="mb-5 h-5 w-5 text-[#0F4C81]" />
                  <h3 className="text-base font-bold leading-snug text-gray-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0F4C81] py-18 text-white md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-white/65">Próximo passo</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">
              Vamos entender o que sua empresa precisa construir agora?
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75">
              Conte o desafio e receba uma primeira orientação sobre escopo, prioridade e tipo de solução digital mais adequada.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Button className="h-12 rounded-lg bg-white px-6 text-base font-semibold text-[#0F4C81] hover:bg-gray-100" asChild>
              <Link href="/diagnostico">
                Solicitar diagnóstico
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" className="h-12 rounded-lg border-white/25 bg-transparent px-6 text-base font-semibold text-white hover:bg-white/10 hover:text-white" asChild>
              <a href="https://wa.me/5531994525631?text=Olá! Vim pelo site da GNOQ e quero conversar sobre um projeto." target="_blank" rel="noopener noreferrer">
                Conversar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
