// app/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Code2, Zap, ShieldCheck, Cpu,
  Database, BarChart3, Code, Smartphone, Globe,
  Layers, MessageSquare, CheckCircle2,
} from "lucide-react";
import { SolicitarOrcamento } from "@/components/SolicitarOrcamento";

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="group flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-8 hover:border-[#4f46e5]/40 hover:shadow-lg hover:shadow-[#4f46e5]/8 transition-all duration-300">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4f46e5]/10 border border-[#4f46e5]/15 group-hover:bg-[#4f46e5]/15 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
}

function ServiceItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="group flex gap-5 p-6 rounded-xl border border-gray-200 bg-white hover:border-[#4f46e5]/30 hover:shadow-md transition-all duration-200">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#4f46e5]/10 border border-[#4f46e5]/15 text-[#4f46e5]">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-gray-900 text-sm mb-1">{title}</p>
        <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function TechBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="group flex flex-col items-center gap-3 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-gray-200 bg-white group-hover:border-[#4f46e5]/40 group-hover:bg-[#4f46e5]/5 transition-all duration-300 shadow-sm">
        {icon}
      </div>
      <span className="text-sm font-medium text-gray-500 group-hover:text-gray-700 transition-colors">{label}</span>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-[#4f46e5]/6 blur-[140px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-24 pb-32 md:pt-36 md:pb-44 text-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#4f46e5]/25 bg-[#4f46e5]/8 px-4 py-2 text-xs text-[#4f46e5] mb-8 tracking-wide font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4f46e5] animate-pulse" />
            Engenharia digital de alto impacto
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.04] max-w-5xl mx-auto text-gray-900">
            Engenharia digital
            <span className="block text-[#4f46e5] mt-2">para quem pensa à frente</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Criamos sistemas robustos, escaláveis e sob medida que transformam processos
            complexos em vantagem competitiva real. Do MVP ao produto de escala global.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <SolicitarOrcamento />
            <Button
              variant="ghost"
              size="lg"
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 px-8 py-6 text-base"
              asChild
            >
              <Link href="/produtos">
                Ver serviços
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="mt-20 inline-flex flex-wrap justify-center gap-10 sm:gap-16 border border-gray-200 rounded-2xl bg-gray-50 px-10 py-6 shadow-sm">
            {[
              { value: "48h", label: "para proposta" },
              { value: "100%", label: "com contrato" },
              { value: "6+", label: "áreas de atuação" },
              { value: "LGPD", label: "compliance" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-2xl font-bold text-gray-900">{s.value}</p>
                <p className="text-xs text-gray-400 mt-0.5 uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Por que a GNOQ ── */}
      <section className="py-24 md:py-32 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-px w-8 bg-[#4f46e5]" />
              <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">Diferenciais</span>
              <span className="h-px w-8 bg-[#4f46e5]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Por que escolher a GNOQ?</h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
              Não entregamos apenas código. Entregamos resultados mensuráveis e sistemas preparados para o futuro.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard icon={<Zap className="h-6 w-6 text-[#4f46e5]" />} title="Velocidade sem abrir mão da qualidade" description="Arquitetura moderna, CI/CD automatizado e deploy contínuo. Seu produto no ar mais rápido, com estabilidade e sem surpresas." />
            <FeatureCard icon={<ShieldCheck className="h-6 w-6 text-[#4f46e5]" />} title="Segurança por design" description="Autenticação robusta, criptografia ponta a ponta, conformidade LGPD e proteção contra ameaças atuais — desde a concepção." />
            <FeatureCard icon={<Cpu className="h-6 w-6 text-[#4f46e5]" />} title="Escalabilidade real" description="De 100 para 1 milhão de usuários sem reescrever tudo. Microservices, serverless e cloud-native quando faz sentido para o seu caso." />
          </div>
        </div>
      </section>

      {/* ── Serviços ── */}
      <section className="py-24 md:py-32 border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-4 mb-4">
                <span className="h-px w-8 bg-[#4f46e5]" />
                <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">Serviços</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                Tudo que seu negócio precisa em tecnologia
              </h2>
              <p className="text-gray-500 leading-relaxed text-sm mb-8">
                Do sistema interno ao app mobile, passando por integrações e dashboards — entregamos
                soluções completas com time dedicado e comunicação transparente.
              </p>
              <Button className="bg-[#4f46e5] hover:bg-[#4338ca] text-white px-7 py-5 text-sm font-medium shadow-lg shadow-[#4f46e5]/20" asChild>
                <Link href="/produtos">
                  Ver todos os serviços
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ServiceItem icon={<Layers className="h-5 w-5" />} title="Sistemas sob medida & ERP" description="Gestão completa adaptada ao seu processo, com RBAC, relatórios e integrações." />
              <ServiceItem icon={<Globe className="h-5 w-5" />} title="Desenvolvimento Web" description="Sites, plataformas SaaS e landing pages com performance e SEO técnico." />
              <ServiceItem icon={<Smartphone className="h-5 w-5" />} title="Aplicativos Mobile" description="Apps iOS e Android do conceito ao deploy nas lojas, com UX pensada para retenção." />
              <ServiceItem icon={<Zap className="h-5 w-5" />} title="Integrações & Automações" description="APIs, webhooks, RPA e ETL para conectar sistemas e eliminar retrabalho." />
              <ServiceItem icon={<BarChart3 className="h-5 w-5" />} title="Power BI & Analytics" description="Dashboards executivos e relatórios automáticos a partir dos seus dados." />
              <ServiceItem icon={<MessageSquare className="h-5 w-5" />} title="Consultoria Técnica" description="Auditoria de arquitetura, code review e mentoria para times que querem escalar." />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA intermediário ── */}
      <section className="py-24 md:py-32 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl border border-[#4f46e5]/20 bg-[#4f46e5]/5 overflow-hidden px-8 py-16 md:py-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[700px] rounded-full bg-[#4f46e5]/8 blur-[100px] pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4f46e5]/30 to-transparent" />
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs font-mono text-[#4f46e5] tracking-widest uppercase mb-4 font-semibold">Sem compromisso</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
                  Pronto para acelerar<br />seu negócio?
                </h2>
                <p className="text-gray-500 leading-relaxed text-sm">
                  Em até 48h devolvemos um diagnóstico inicial e uma proposta alinhada com seus objetivos — sem enrolação, sem jargão, com clareza.
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {["Reunião de discovery gratuita", "Proposta com escopo, prazo e investimento", "Contrato formal + NDA quando necessário", "Conformidade LGPD garantida"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-[#4f46e5] shrink-0" />
                    {item}
                  </div>
                ))}
                <div className="pt-4">
                  <SolicitarOrcamento />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tecnologias ── */}
      <section className="py-24 md:py-32 border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="h-px w-8 bg-[#4f46e5]" />
              <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">Stack</span>
              <span className="h-px w-8 bg-[#4f46e5]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tecnologias que dominamos</h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
              Frontend moderno, backend escalável, bancos relacionais robustos e inteligência de negócios — combinados para entregar soluções completas.
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 md:gap-8 items-start justify-items-center">
            <TechBadge icon={<Zap className="h-6 w-6 text-[#4f46e5]" />} label="Next.js" />
            <TechBadge icon={<Code2 className="h-6 w-6 text-[#4f46e5]" />} label="Angular" />
            <TechBadge icon={<Database className="h-6 w-6 text-[#4f46e5]" />} label="Supabase" />
            <TechBadge icon={<Database className="h-6 w-6 text-[#4f46e5]" />} label="PostgreSQL" />
            <TechBadge icon={<BarChart3 className="h-6 w-6 text-[#4f46e5]" />} label="Power BI" />
            <TechBadge icon={<Code className="h-6 w-6 text-[#4f46e5]" />} label="TypeScript" />
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="py-24 md:py-32 border-t border-gray-100">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            Vamos construir o futuro<br />do seu negócio juntos?
          </h2>
          <p className="text-gray-500 mb-10 max-w-xl mx-auto text-base leading-relaxed">
            Mande uma mensagem. Em até 48h você recebe diagnóstico inicial e proposta sem compromisso.
          </p>
          <Button size="lg" className="bg-[#4f46e5] hover:bg-[#4338ca] text-white px-10 py-7 text-base font-medium shadow-xl shadow-[#4f46e5]/20" asChild>
            <Link href="/contato">
              Falar com um especialista
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

    </main>
  );
}