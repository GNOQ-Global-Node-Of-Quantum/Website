"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Layers, Globe, Smartphone, Zap, BarChart3, MessageSquare,
  ArrowRight, Plus, Minus, CheckCircle2, Star, MoveRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Service { icon: React.ReactNode; title: string; description: string; deliverables: string[]; tag?: string; label: string; }
interface Case { sector: string; title: string; description: string; results: string[]; tech: string[]; }
interface Plan { name: string; price: string; priceNote: string; description: string; features: string[]; highlight?: boolean; cta: string; }
interface FaqItem { q: string; a: string; }

// ─── Data ─────────────────────────────────────────────────────────────────────

const SERVICES: Service[] = [
  { icon: <Layers className="h-6 w-6 text-[#0F4C81]" />, label: "01", tag: "Mais solicitado", title: "Sistemas sob medida & ERP", description: "Construímos sistemas de gestão e ERPs adaptados 100% ao seu processo — sem forçar seu negócio a caber em uma caixa pronta.", deliverables: ["Módulos de gestão (estoque, financeiro, RH)", "Controle de acesso baseado em papéis (RBAC)", "Relatórios e dashboards integrados", "Integrações com sistemas legados", "Suporte e evolução contínua"] },
  { icon: <Globe className="h-6 w-6 text-[#0F4C81]" />, label: "02", title: "Desenvolvimento Web", description: "Sites institucionais, landing pages de alta conversão e aplicações web completas — com performance, SEO técnico e design que converte.", deliverables: ["Sites institucionais e portfólios", "Landing pages otimizadas para conversão", "Plataformas SaaS e portais", "E-commerce e lojas digitais", "Deploy e infraestrutura inclusos"] },
  { icon: <Smartphone className="h-6 w-6 text-[#0F4C81]" />, label: "03", title: "Aplicativos Mobile", description: "Apps nativos e híbridos para iOS e Android, do conceito ao deploy nas lojas. UX pensada para retenção e usabilidade real.", deliverables: ["Apps iOS e Android (React Native)", "Protótipo e validação de UX", "Publicação nas lojas (App Store / Play Store)", "Backend e APIs próprias", "Analytics de uso integrado"] },
  { icon: <Zap className="h-6 w-6 text-[#0F4C81]" />, label: "04", title: "Integrações & Automações", description: "Conectamos sistemas que não conversam, automatizamos processos manuais e eliminamos retrabalho com APIs, webhooks e RPA.", deliverables: ["Integrações entre ERPs, CRMs e plataformas", "Automação de processos repetitivos (RPA)", "Webhooks e event-driven architecture", "ETL e sincronização de dados", "Monitoramento e alertas de falha"] },
  { icon: <BarChart3 className="h-6 w-6 text-[#0F4C81]" />, label: "05", title: "Power BI & Analytics", description: "Transformamos dados dispersos em dashboards claros, acionáveis e bonitos. Do modelo de dados ao relatório executivo.", deliverables: ["Dashboards interativos no Power BI", "Modelagem de dados (Star Schema, DAX)", "Conexão com banco de dados e APIs", "Relatórios automáticos por e-mail", "Treinamento da equipe incluso"] },
  { icon: <MessageSquare className="h-6 w-6 text-[#0F4C81]" />, label: "06", title: "Consultoria Técnica", description: "Revisão de arquitetura, code review, escolha de stack e mentoria para times que querem escalar com qualidade.", deliverables: ["Auditoria de código e arquitetura", "Definição de stack e roadmap técnico", "Code review e pair programming", "Documentação técnica", "Mentoria para devs júnior / pleno"] },
];

const CASES: Case[] = [
  { sector: "Indústria", title: "[PLACEHOLDER — Ex: Sistema de gestão de produção]", description: "[PLACEHOLDER — Descreva o problema do cliente, o que foi construído e o impacto gerado.]", results: ["[PLACEHOLDER — Ex: 40% de redução no tempo de abertura de OS]", "[PLACEHOLDER — Ex: Integração com 3 sistemas legados]", "[PLACEHOLDER — Ex: 200 usuários simultâneos]"], tech: ["Next.js", "PostgreSQL", "Supabase"] },
  { sector: "Varejo", title: "[PLACEHOLDER — Ex: Plataforma de e-commerce B2B]", description: "[PLACEHOLDER — Descreva o contexto, solução e resultado com números sempre que possível.]", results: ["[PLACEHOLDER — Ex: R$ 2M em pedidos no 1º mês]", "[PLACEHOLDER — Ex: Integração com ERP próprio]", "[PLACEHOLDER — Ex: App mobile para equipe de vendas]"], tech: ["Angular", "TypeScript", "Node.js"] },
  { sector: "Serviços", title: "[PLACEHOLDER — Ex: Dashboard executivo em Power BI]", description: "[PLACEHOLDER — Contexto e solução. Ex: dados de 5 fontes consolidados em uma visão única.]", results: ["[PLACEHOLDER — Ex: 5 fontes de dados consolidadas]", "[PLACEHOLDER — Ex: Relatórios diários automatizados]", "[PLACEHOLDER — Ex: 8h/semana economizadas em relatórios manuais]"], tech: ["Power BI", "DAX", "SQL Server"] },
];

const PLANS: Plan[] = [
  { name: "Starter", price: "[PLACEHOLDER]", priceNote: "projeto único", description: "Ideal para MVPs, landing pages e automações pontuais.", features: ["Escopo definido e fechado", "Entrega em 2–6 semanas", "1 rodada de revisões", "Documentação básica", "30 dias de suporte pós-entrega"], cta: "Solicitar orçamento" },
  { name: "Growth", price: "[PLACEHOLDER]", priceNote: "/ mês", description: "Para empresas que precisam de time dedicado e evolução contínua.", highlight: true, features: ["Squad dedicado (dev + designer)", "Sprints quinzenais com entrega", "Revisões e ajustes ilimitados", "Documentação completa", "Suporte prioritário — SLA 24h", "Relatório mensal de evolução"], cta: "Falar com especialista" },
  { name: "Enterprise", price: "Sob consulta", priceNote: "personalizado", description: "Projetos complexos, múltiplos sistemas e contratos de longo prazo.", features: ["Time multidisciplinar escalável", "Arquitetura e planejamento técnico", "SLA customizado", "Gestão de projeto dedicada", "Integrações e compliance inclusos", "Treinamento da equipe interna"], cta: "Entrar em contato" },
];

const FAQ: FaqItem[] = [
  { q: "Como funciona o processo desde o primeiro contato até a entrega?", a: "Após o contato inicial, fazemos uma reunião de discovery (gratuita) para entender o problema e os objetivos. Em até 48h enviamos uma proposta com escopo, prazo e investimento. Com a aprovação, iniciamos o planejamento técnico e as sprints com reuniões quinzenais de acompanhamento." },
  { q: "Vocês trabalham com empresas de qual porte?", a: "Atendemos desde startups em fase de validação até empresas de médio/grande porte. Nosso modelo é adaptável — o que importa é que o problema seja real e o comprometimento também." },
  { q: "O cliente precisa saber de tecnologia para contratar?", a: "Não. Nosso trabalho inclui traduzir necessidades de negócio em soluções técnicas. Você foca no problema, a gente cuida da solução. Comunicação clara e sem jargão desnecessário faz parte do nosso processo." },
  { q: "Após a entrega, há suporte contínuo?", a: "Sim. Todo projeto inclui um período de suporte pós-entrega. Para quem quer evolução contínua, oferecemos contratos de retainer (plano Growth ou Enterprise) com squad dedicado e entregas regulares." },
  { q: "Vocês assinam NDA e contrato formal?", a: "Sempre. Todos os projetos são formalizados com contrato, NDA quando necessário e, para dados pessoais, DPA alinhado à LGPD. Segurança jurídica para os dois lados." },
  { q: "É possível começar com um projeto pequeno e expandir depois?", a: "Sim, e é uma abordagem que recomendamos. Começar com um MVP ou módulo específico permite validar a parceria com menos risco antes de escalar para projetos maiores." },
];

// ─── Sub-components ──────────────────────────────────────────────────────────

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group relative flex flex-col border-b border-r border-gray-200 p-8 md:p-10 transition-all duration-300 hover:bg-[#00719C]/[0.03] cursor-default">
      <span className="font-mono text-xs text-[#0F4C81]/50 mb-8 tracking-widest">{service.label}</span>
      <div className="flex items-start justify-between mb-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0F4C81]/10 border border-[#0F4C81]/15 group-hover:bg-[#0F4C81]/15 transition-all duration-300">
          {service.icon}
        </div>
        {service.tag && (
          <span className="rounded-full bg-[#0F4C81]/10 border border-[#0F4C81]/20 px-3 py-1 text-[10px] font-semibold tracking-wide text-[#0F4C81] uppercase">{service.tag}</span>
        )}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#0F4C81] transition-colors">{service.title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed mb-8">{service.description}</p>
      <ul className="space-y-2.5 mt-auto">
        {service.deliverables.map((d) => (
          <li key={d} className="flex items-start gap-2.5 text-sm text-gray-400 group-hover:text-gray-500 transition-colors">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#00719C]/40 shrink-0" />{d}
          </li>
        ))}
      </ul>
      <div className="mt-8 pt-6 border-t border-gray-100">
        <Link href="/contato" className="inline-flex items-center gap-2 text-sm text-[#0F4C81] hover:text-[#0a3d6b] transition-colors group/link font-medium">
          Solicitar proposta
          <MoveRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

function CaseCard({ c, i }: { c: Case; i: number }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 hover:border-[#0F4C81]/30 hover:shadow-lg hover:shadow-[#0F4C81]/8 transition-all duration-300 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-500 font-medium">{c.sector}</span>
        <span className="font-mono text-xs text-gray-300">0{i + 1}</span>
      </div>
      <div>
        <h3 className="text-base font-semibold text-gray-900 mb-2 leading-snug">{c.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{c.description}</p>
      </div>
      <div className="space-y-2 flex-1">
        {c.results.map((r) => (
          <div key={r} className="flex items-start gap-3 text-sm text-gray-500">
            <ArrowRight className="h-3.5 w-3.5 text-[#0F4C81] shrink-0 mt-0.5" />{r}
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
        {c.tech.map((t) => (
          <span key={t} className="rounded-md bg-[#0F4C81]/8 px-2.5 py-1 text-[11px] font-mono text-[#0F4C81]">{t}</span>
        ))}
      </div>
    </div>
  );
}

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 ${plan.highlight ? "border border-[#0F4C81] bg-white shadow-2xl shadow-[#0F4C81]/12" : "border border-gray-200 bg-white hover:border-[#0F4C81]/30 hover:shadow-md"}`}>
      {plan.highlight && (
        <>
          <div className="absolute inset-x-0 top-0 h-1 bg-[#00719C] rounded-t-2xl" />
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <span className="rounded-full bg-[#00719C] px-4 py-1 text-[11px] font-semibold text-white tracking-wide uppercase shadow-lg shadow-[#0F4C81]/30">Mais escolhido</span>
          </div>
        </>
      )}
      <div className="mb-6">
        <p className="text-xs font-mono text-[#0F4C81] tracking-widest uppercase mb-2">{plan.name}</p>
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-4xl font-bold text-gray-900 tracking-tight">{plan.price}</span>
          <span className="text-sm text-gray-400">{plan.priceNote}</span>
        </div>
        <p className="text-sm text-gray-500 leading-relaxed">{plan.description}</p>
      </div>
      <div className="h-px bg-gray-100 mb-6" />
      <ul className="space-y-3 flex-1">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
            <CheckCircle2 className={`h-4 w-4 shrink-0 mt-0.5 ${plan.highlight ? "text-[#0F4C81]" : "text-gray-300"}`} />{f}
          </li>
        ))}
      </ul>
      <Button className={`mt-8 w-full py-6 text-sm font-medium ${plan.highlight ? "bg-[#00719C] hover:bg-[#005f85] text-white shadow-lg shadow-[#0F4C81]/20" : "bg-transparent hover:bg-gray-50 text-gray-700 hover:text-gray-900 border border-gray-200 hover:border-gray-300"}`} asChild>
        <Link href="/contato">{plan.cta}</Link>
      </Button>
    </div>
  );
}

function FaqRow({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between gap-6 py-6 text-left group">
        <span className={`text-sm font-medium transition-colors ${open ? "text-gray-900" : "text-gray-600 group-hover:text-gray-900"}`}>{item.q}</span>
        <span className={`shrink-0 flex h-6 w-6 items-center justify-center rounded-full border transition-all duration-200 ${open ? "border-[#0F4C81] bg-[#0F4C81]/10 text-[#0F4C81]" : "border-gray-200 text-gray-400"}`}>
          {open ? <Minus className="h-3 w-3" /> : <Plus className="h-3 w-3" />}
        </span>
      </button>
      {open && <p className="pb-6 text-sm text-gray-500 leading-relaxed max-w-2xl">{item.a}</p>}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ProdutosPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C81]/4 via-transparent to-transparent" />
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "linear-gradient(#0F4C81 1px, transparent 1px), linear-gradient(90deg, #0F4C81 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="flex items-center gap-2 mb-6 text-xs text-gray-400">
            <Link href="/" className="hover:text-gray-600 transition-colors">Início</Link>
            <span>/</span>
            <span className="text-gray-500">Produtos & Serviços</span>
          </div>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0F4C81]/20 bg-[#0F4C81]/8 px-4 py-1.5 text-sm text-[#0F4C81] font-medium mb-6">
              <Layers className="h-3.5 w-3.5" />
              Do MVP ao produto de escala global
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] text-gray-900">
              Soluções para cada
              <span className="block text-[#0F4C81]">etapa do seu negócio</span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-2xl">
              Desenvolvemos desde sistemas críticos de gestão até dashboards executivos.
              Tudo com arquitetura sólida, código limpo e entrega dentro do prazo.
            </p>
          </div>
          {/* Stats */}
          <div className="mt-12 flex flex-wrap gap-10 border-t border-gray-100 pt-10">
            {[{ value: "6+", label: "áreas de atuação" }, { value: "48h", label: "para proposta inicial" }, { value: "100%", label: "projetos com contrato" }, { value: "LGPD", label: "compliance garantido" }].map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-bold text-gray-900">{s.value}</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services grid ── */}
      <section id="servicos" className="border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="py-10 flex items-center justify-between border-b border-gray-100">
            <div className="flex items-center gap-4">
              <span className="h-px w-8 bg-[#0F4C81]" />
              <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">Serviços</span>
            </div>
            <span className="text-xs text-gray-300 font-mono">{SERVICES.length} áreas</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -mx-px">
            {SERVICES.map((s) => <ServiceCard key={s.title} service={s} />)}
          </div>
        </div>
      </section>

      {/* ── Cases ── */}
      <section id="cases" className="py-24 md:py-32 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="h-px w-8 bg-[#0F4C81]" />
                <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">Portfólio</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Cases & Resultados</h2>
            </div>
            <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
              Projetos reais com resultados mensuráveis. Detalhes omitidos por NDA — referências disponíveis sob solicitação.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {CASES.map((c, i) => <CaseCard key={c.title} c={c} i={i} />)}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="planos" className="py-24 md:py-32 border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-px w-8 bg-[#0F4C81]" />
              <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">Planos</span>
              <span className="h-px w-8 bg-[#0F4C81]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Modelos de engajamento</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
              Projetos pontuais ou parcerias contínuas — escolha o modelo que faz sentido para o momento do seu negócio.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
            {PLANS.map((p) => <PlanCard key={p.name} plan={p} />)}
          </div>
          <p className="text-center mt-8 text-xs text-gray-400">Todos os planos incluem contrato formal, NDA e conformidade com a LGPD.</p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="py-24 md:py-32 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="h-px w-8 bg-[#0F4C81]" />
                <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">FAQ</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Perguntas<br />frequentes</h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                Dúvidas que aparecem antes de todo projeto. Se a sua não estiver aqui,{" "}
                <Link href="/contato" className="text-[#0F4C81] hover:underline underline-offset-4 font-medium">fale com a gente</Link>.
              </p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white px-8 divide-y divide-gray-100 shadow-sm">
              {FAQ.map((item) => <FaqRow key={item.q} item={item} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="py-24 md:py-32 border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl border border-[#0F4C81]/20 bg-[#0F4C81]/5 overflow-hidden px-8 py-16 md:py-20 text-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-[#0F4C81]/8 blur-[100px] pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0F4C81]/30 to-transparent" />
            <div className="relative">
              <p className="text-xs font-mono text-[#0F4C81] tracking-widest uppercase mb-4 font-semibold">Próximo passo</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 max-w-2xl mx-auto leading-tight">
                Pronto para construir algo que dure?
              </h2>
              <p className="text-gray-500 mb-10 max-w-lg mx-auto text-sm leading-relaxed">
                Mande uma mensagem. Em até 48h você recebe diagnóstico inicial e proposta sem compromisso.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="bg-[#00719C] hover:bg-[#005f85] text-white px-10 py-6 text-sm font-medium shadow-xl shadow-[#0F4C81]/20" asChild>
                  <Link href="/contato">
                    Solicitar proposta gratuita
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="ghost" className="text-gray-600 hover:text-gray-900 hover:bg-white px-8 py-6 text-sm border border-gray-200 hover:border-gray-300 hover:shadow-sm" asChild>
                  <a href="https://wa.me/55[PLACEHOLDER]?text=Olá! Quero saber mais sobre os serviços da GNOQ." target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="h-4 w-4 mr-2 text-[#25d366]" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}