"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Layers,
  Globe,
  Smartphone,
  Zap,
  BarChart3,
  MessageSquare,
  ArrowRight,
  Plus,
  Minus,
  CheckCircle2,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  deliverables: string[];
  tag?: string;
}

interface Case {
  sector: string;
  title: string;
  description: string;
  results: string[];
  tech: string[];
}

interface Plan {
  name: string;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  highlight?: boolean;
  cta: string;
}

interface FaqItem {
  q: string;
  a: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICES: Service[] = [
  {
    icon: <Layers className="h-7 w-7 text-[#4f46e5]" />,
    title: "Sistemas sob medida / ERP",
    tag: "Mais solicitado",
    description:
      "Construímos sistemas de gestão, ERPs e plataformas internas adaptados 100% ao seu processo — sem forçar seu negócio a caber em uma caixa pronta.",
    deliverables: [
      "Módulos de gestão (estoque, financeiro, RH, etc.)",
      "Controle de acesso e permissões (RBAC)",
      "Relatórios e dashboards integrados",
      "Integrações com sistemas legados",
      "Suporte e evolução contínua",
    ],
  },
  {
    icon: <Globe className="h-7 w-7 text-[#4f46e5]" />,
    title: "Desenvolvimento Web",
    description:
      "Sites institucionais, landing pages de alta conversão e aplicações web completas com performance, SEO técnico e design que converte.",
    deliverables: [
      "Sites institucionais e portfólios",
      "Landing pages otimizadas para conversão",
      "Plataformas SaaS e portais",
      "E-commerce e lojas digitais",
      "Deploy e infraestrutura inclusos",
    ],
  },
  {
    icon: <Smartphone className="h-7 w-7 text-[#4f46e5]" />,
    title: "Aplicativos Mobile",
    description:
      "Apps nativos e híbridos para iOS e Android, do conceito ao deploy nas lojas. UX pensada para retenção e usabilidade real.",
    deliverables: [
      "Apps iOS e Android (React Native)",
      "Protótipo e validação de UX",
      "Publicação nas lojas (App Store / Play Store)",
      "Backend e APIs próprias",
      "Analytics de uso integrado",
    ],
  },
  {
    icon: <Zap className="h-7 w-7 text-[#4f46e5]" />,
    title: "Integrações & Automações",
    description:
      "Conectamos sistemas que não conversam, automatizamos processos manuais e eliminamos retrabalho com APIs, webhooks e RPA.",
    deliverables: [
      "Integrações entre ERPs, CRMs e plataformas",
      "Automação de processos repetitivos (RPA)",
      "Webhooks e event-driven architecture",
      "ETL e sincronização de dados",
      "Monitoramento e alertas de falha",
    ],
  },
  {
    icon: <BarChart3 className="h-7 w-7 text-[#4f46e5]" />,
    title: "Power BI & Analytics",
    description:
      "Transformamos dados dispersos em dashboards claros, acionáveis e bonitos. Do modelo de dados ao relatório executivo.",
    deliverables: [
      "Dashboards interativos no Power BI",
      "Modelagem de dados (Star Schema, DAX)",
      "Conexão com banco de dados e APIs",
      "Relatórios automáticos por e-mail",
      "Treinamento da equipe incluso",
    ],
  },
  {
    icon: <MessageSquare className="h-7 w-7 text-[#4f46e5]" />,
    title: "Consultoria Técnica",
    description:
      "Revisão de arquitetura, code review, escolha de stack e mentoria para times que querem escalar com qualidade.",
    deliverables: [
      "Auditoria de código e arquitetura",
      "Definição de stack e roadmap técnico",
      "Code review e pair programming",
      "Documentação técnica",
      "Mentoria para devs júnior / pleno",
    ],
  },
];

const CASES: Case[] = [
  {
    sector: "Indústria",
    title: "[PLACEHOLDER — Ex: Sistema de gestão de produção]",
    description:
      "[PLACEHOLDER — Descreva o problema do cliente, o que foi construído e o impacto gerado. Ex: 'Empresa do setor industrial precisava substituir planilhas manuais por um sistema centralizado...']",
    results: [
      "[PLACEHOLDER — Ex: 40% de redução no tempo de abertura de OS]",
      "[PLACEHOLDER — Ex: Integração com 3 sistemas legados]",
      "[PLACEHOLDER — Ex: 200 usuários simultâneos]",
    ],
    tech: ["Next.js", "PostgreSQL", "Supabase"],
  },
  {
    sector: "Varejo",
    title: "[PLACEHOLDER — Ex: Plataforma de e-commerce B2B]",
    description:
      "[PLACEHOLDER — Descreva o contexto, solução e resultado. Inclua números sempre que possível para dar credibilidade.]",
    results: [
      "[PLACEHOLDER — Ex: R$ 2M em pedidos no 1º mês]",
      "[PLACEHOLDER — Ex: Integração com ERP próprio]",
      "[PLACEHOLDER — Ex: App mobile para equipe de vendas]",
    ],
    tech: ["Angular", "TypeScript", "Node.js"],
  },
  {
    sector: "Serviços",
    title: "[PLACEHOLDER — Ex: Dashboard executivo em Power BI]",
    description:
      "[PLACEHOLDER — Contexto e solução. Ex: 'Empresa de serviços precisava consolidar dados de 5 fontes distintas em uma visão única para o board...']",
    results: [
      "[PLACEHOLDER — Ex: 5 fontes de dados consolidadas]",
      "[PLACEHOLDER — Ex: Relatórios diários automatizados]",
      "[PLACEHOLDER — Ex: Redução de 8h/semana em relatórios manuais]",
    ],
    tech: ["Power BI", "DAX", "SQL Server"],
  },
];

const PLANS: Plan[] = [
  {
    name: "Starter",
    price: "[PLACEHOLDER]",
    priceNote: "projeto único",
    description: "Ideal para MVPs, landing pages e automações pontuais.",
    features: [
      "Escopo definido e fechado",
      "Entrega em 2–6 semanas",
      "1 rodada de revisões",
      "Documentação básica",
      "30 dias de suporte pós-entrega",
    ],
    cta: "Solicitar orçamento",
  },
  {
    name: "Growth",
    price: "[PLACEHOLDER]",
    priceNote: "/ mês",
    description: "Para empresas que precisam de time técnico dedicado e evolução contínua.",
    highlight: true,
    features: [
      "Squad dedicado (dev + designer)",
      "Sprints quinzenais com entrega",
      "Revisões e ajustes ilimitados",
      "Documentação completa",
      "Suporte prioritário (SLA 24h)",
      "Relatório mensal de evolução",
    ],
    cta: "Falar com especialista",
  },
  {
    name: "Enterprise",
    price: "Sob consulta",
    priceNote: "personalizado",
    description: "Projetos complexos, múltiplos sistemas e contratos de longo prazo.",
    features: [
      "Time multidisciplinar escalável",
      "Arquitetura e planejamento técnico",
      "SLA customizado",
      "Gestão de projeto dedicada",
      "Integrações e compliance inclusos",
      "Treinamento da equipe interna",
    ],
    cta: "Entrar em contato",
  },
];

const FAQ: FaqItem[] = [
  {
    q: "Como funciona o processo desde o primeiro contato até a entrega?",
    a: "Após o contato inicial, fazemos uma reunião de discovery (gratuita) para entender o problema e os objetivos. Em até 48h enviamos uma proposta com escopo, prazo e investimento. Com a aprovação, iniciamos o planejamento técnico e as sprints de desenvolvimento com reuniões quinzenais de acompanhamento.",
  },
  {
    q: "Vocês trabalham com empresas de qual porte?",
    a: "Atendemos desde startups em fase de validação até empresas de médio/grande porte. Nosso modelo é adaptável — o que importa é que o problema seja real e o comprometimento também.",
  },
  {
    q: "O cliente precisa saber de tecnologia para contratar?",
    a: "Não. Nosso trabalho inclui traduzir necessidades de negócio em soluções técnicas. Você foca no problema, a gente cuida da solução. Comunicação clara e sem jargão desnecessário faz parte do nosso processo.",
  },
  {
    q: "Após a entrega, há suporte contínuo?",
    a: "Sim. Todo projeto inclui um período de suporte pós-entrega. Para quem quer evolução contínua, oferecemos contratos de retainer (plano Growth ou Enterprise) com squad dedicado e entregas regulares.",
  },
  {
    q: "Vocês assinam NDA e contrato formal?",
    a: "Sempre. Todos os projetos são formalizados com contrato, NDA quando necessário e, para dados pessoais, DPA alinhado à LGPD. Segurança jurídica para os dois lados.",
  },
  {
    q: "É possível começar com um projeto pequeno e expandir depois?",
    a: "Sim, e é uma abordagem que recomendamos. Começar com um MVP ou módulo específico permite validar a parceria com menos risco antes de escalar para projetos maiores.",
  },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group relative flex flex-col gap-5 rounded-2xl border border-[#2a2a3a] bg-[#0a0a12] p-8 hover:border-[#4f46e5]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#4f46e5]/5">
      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#4f46e5] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#4f46e5]/10 border border-[#4f46e5]/20 shrink-0">
          {service.icon}
        </div>
        {service.tag && (
          <span className="shrink-0 rounded-full bg-[#4f46e5]/15 px-3 py-1 text-xs font-medium text-[#818cf8] border border-[#4f46e5]/20">
            {service.tag}
          </span>
        )}
      </div>

      <div>
        <h3 className="text-lg font-semibold text-[#dceef7] mb-2">{service.title}</h3>
        <p className="text-sm text-[#9ca3af] leading-relaxed">{service.description}</p>
      </div>

      <ul className="space-y-2 pt-1">
        {service.deliverables.map((d) => (
          <li key={d} className="flex items-start gap-2.5 text-sm text-[#6b7280]">
            <CheckCircle2 className="h-4 w-4 text-[#4f46e5] shrink-0 mt-0.5" />
            {d}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-4 border-t border-[#1e1e2e]">
        <Button
          variant="ghost"
          className="w-full text-[#818cf8] hover:text-[#dceef7] hover:bg-[#1a1a2e] group/btn"
          asChild
        >
          <Link href="/contato">
            Solicitar proposta
            <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

function CaseCard({ c }: { c: Case }) {
  return (
    <div className="rounded-2xl border border-[#2a2a3a] bg-[#0a0a12] p-8 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <span className="rounded-full border border-[#2a2a3a] px-3 py-1 text-xs text-[#6b7280] font-medium">
          {c.sector}
        </span>
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-[#4f46e5] text-[#4f46e5]" />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-[#dceef7] mb-2">{c.title}</h3>
        <p className="text-sm text-[#9ca3af] leading-relaxed">{c.description}</p>
      </div>

      <div className="space-y-2">
        {c.results.map((r) => (
          <div key={r} className="flex items-start gap-2.5 text-sm text-[#6b7280]">
            <ArrowRight className="h-4 w-4 text-[#4f46e5] shrink-0 mt-0.5" />
            {r}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 pt-2 border-t border-[#1e1e2e]">
        {c.tech.map((t) => (
          <span key={t} className="rounded-md bg-[#4f46e5]/10 px-2.5 py-1 text-xs font-mono text-[#818cf8]">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 ${
        plan.highlight
          ? "border-[#4f46e5] bg-[#0d0d1f] shadow-xl shadow-[#4f46e5]/10"
          : "border-[#2a2a3a] bg-[#0a0a12]"
      }`}
    >
      {plan.highlight && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-[#4f46e5] px-4 py-1 text-xs font-semibold text-white shadow">
            Mais escolhido
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold text-[#dceef7] mb-1">{plan.name}</h3>
        <p className="text-sm text-[#6b7280]">{plan.description}</p>
      </div>

      <div className="mb-6 pb-6 border-b border-[#1e1e2e]">
        <span className="text-3xl font-bold text-[#dceef7]">{plan.price}</span>
        <span className="text-sm text-[#6b7280] ml-2">{plan.priceNote}</span>
      </div>

      <ul className="space-y-3 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-[#9ca3af]">
            <CheckCircle2 className={`h-4 w-4 shrink-0 mt-0.5 ${plan.highlight ? "text-[#4f46e5]" : "text-[#374151]"}`} />
            {f}
          </li>
        ))}
      </ul>

      <Button
        className={`mt-8 w-full py-6 text-base font-medium ${
          plan.highlight
            ? "bg-[#4f46e5] hover:bg-[#4338ca] text-white"
            : "bg-[#1a1a2e] hover:bg-[#242440] text-[#dceef7] border border-[#2a2a3a]"
        }`}
        asChild
      >
        <Link href="/contato">{plan.cta}</Link>
      </Button>
    </div>
  );
}

function FaqRow({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#1e1e2e] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-base font-medium text-[#dceef7]">{item.q}</span>
        {open ? (
          <Minus className="h-5 w-5 text-[#4f46e5] shrink-0" />
        ) : (
          <Plus className="h-5 w-5 text-[#6b7280] shrink-0" />
        )}
      </button>
      {open && (
        <p className="pb-5 text-sm text-[#9ca3af] leading-relaxed">{item.a}</p>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProdutosPage() {
  return (
    <main className="min-h-screen bg-[#000000] text-[#dceef7]">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-[#1e1e2e]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5]/8 via-transparent to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/" className="text-sm text-[#6b7280] hover:text-[#9ca3af] transition-colors">
              Início
            </Link>
            <span className="text-[#2a2a3a]">/</span>
            <span className="text-sm text-[#9ca3af]">Produtos & Serviços</span>
          </div>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#4f46e5]/30 bg-[#4f46e5]/10 px-4 py-1.5 text-sm text-[#818cf8] mb-6">
              <Layers className="h-3.5 w-3.5" />
              Do MVP ao produto de escala global
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08]">
              Soluções para cada
              <span className="block text-[#4f46e5]">etapa do seu negócio</span>
            </h1>
            <p className="mt-6 text-lg text-[#9ca3af] leading-relaxed max-w-2xl">
              Desenvolvemos desde sistemas críticos de gestão até dashboards executivos.
              Tudo com arquitetura sólida, código limpo e entrega dentro do prazo.
            </p>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="servicos" className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">O que entregamos</h2>
            <p className="mt-3 text-[#9ca3af] max-w-xl mx-auto">
              Cada serviço é executado por um time especializado, com processos definidos e comunicação transparente.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Cases ── */}
      <section id="cases" className="py-20 md:py-28 border-t border-[#1e1e2e] bg-gradient-to-b from-[#000000] to-[#04040d]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">Cases & Portfólio</h2>
            <p className="mt-3 text-[#9ca3af] max-w-xl mx-auto">
              Projetos reais, resultados mensuráveis. Os números falam por si.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CASES.map((c) => (
              <CaseCard key={c.title} c={c} />
            ))}
          </div>
          <p className="text-center mt-8 text-xs text-[#4b5563]">
            Cases com detalhes omitidos por NDA. Referências disponíveis mediante solicitação.
          </p>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="planos" className="py-20 md:py-28 border-t border-[#1e1e2e]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">Planos & Investimento</h2>
            <p className="mt-3 text-[#9ca3af] max-w-xl mx-auto">
              Modelos flexíveis para projetos pontuais ou parcerias de longo prazo.
              Valores finais definidos após entendimento do escopo.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {PLANS.map((p) => (
              <PlanCard key={p.name} plan={p} />
            ))}
          </div>
          <p className="text-center mt-8 text-sm text-[#4b5563]">
            Todos os planos incluem contrato formal, NDA e conformidade com a LGPD.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-20 md:py-28 border-t border-[#1e1e2e] bg-gradient-to-b from-[#04040d] to-[#000000]">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Perguntas frequentes</h2>
            <p className="mt-3 text-[#9ca3af]">
              Dúvidas que aparecem antes de todo projeto.
            </p>
          </div>
          <div className="rounded-2xl border border-[#2a2a3a] bg-[#0a0a12] px-8 divide-y divide-[#1e1e2e]">
            {FAQ.map((item) => (
              <FaqRow key={item.q} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="py-20 md:py-28 border-t border-[#1e1e2e]">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para começar?
          </h2>
          <p className="text-lg text-[#9ca3af] mb-10 max-w-xl mx-auto">
            Mande uma mensagem. Em até 48h você recebe diagnóstico + proposta sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-[#4f46e5] hover:bg-[#4338ca] text-white px-10 py-6 text-base"
              asChild
            >
              <Link href="/contato">
                Solicitar proposta gratuita
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-[#9ca3af] hover:text-[#dceef7] hover:bg-[#1a1a2e] px-8 py-6 text-base border border-[#2a2a3a]"
              asChild
            >
              <a
                href="https://wa.me/55[PLACEHOLDER]?text=Olá! Quero saber mais sobre os serviços da GNOQ."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="h-5 w-5 mr-2 text-[#25d366]" />
                Falar pelo WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

    </main>
  );
}