"use client";

// app/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Code2, Zap, ShieldCheck, Cpu,
  Database, BarChart3, Code, Smartphone, Globe,
  Layers, MessageSquare, CheckCircle2,
} from "lucide-react";
import { SolicitarOrcamento } from "@/components/SolicitarOrcamento";
import { useLanguage } from "@/app/shared/features/language-context";

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="group flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-8 hover:border-[#0F4C81]/40 hover:shadow-lg hover:shadow-[#0F4C81]/8 transition-all duration-300">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0F4C81]/10 border border-[#0F4C81]/15 group-hover:bg-[#0F4C81]/15 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
}

function ServiceItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="group flex gap-5 p-6 rounded-xl border border-gray-200 bg-white hover:border-[#0F4C81]/30 hover:shadow-md transition-all duration-200">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0F4C81]/10 border border-[#0F4C81]/15 text-[#0F4C81]">
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
      <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-gray-200 bg-white group-hover:border-[#0F4C81]/40 group-hover:bg-[#0F4C81]/5 transition-all duration-300 shadow-sm">
        {icon}
      </div>
      <span className="text-sm font-medium text-gray-500 group-hover:text-gray-700 transition-colors">{label}</span>
    </div>
  );
}

const differentiatorIcons = [
  <Zap key="speed" className="h-6 w-6 text-[#0F4C81]" />,
  <ShieldCheck key="security" className="h-6 w-6 text-[#0F4C81]" />,
  <Cpu key="scale" className="h-6 w-6 text-[#0F4C81]" />,
];

const serviceIcons = [
  <Layers key="systems" className="h-5 w-5" />,
  <Globe key="web" className="h-5 w-5" />,
  <Smartphone key="mobile" className="h-5 w-5" />,
  <Zap key="automation" className="h-5 w-5" />,
  <BarChart3 key="analytics" className="h-5 w-5" />,
  <MessageSquare key="consulting" className="h-5 w-5" />,
];

export default function Home() {
  const { content } = useLanguage();
  const home = content.home;

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-[#0F4C81]/6 blur-[140px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "linear-gradient(#0F4C81 1px, transparent 1px), linear-gradient(90deg, #0F4C81 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-24 pb-32 md:pt-36 md:pb-44 text-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#0F4C81]/25 bg-[#0F4C81]/8 px-4 py-2 text-xs text-[#0F4C81] mb-8 tracking-wide font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0F4C81] animate-pulse" />
            {home.badge}
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.04] max-w-5xl mx-auto text-gray-900">
            {home.title}
            <span className="block text-[#0F4C81] mt-2">{home.titleAccent}</span>
          </h1>

          <p className="mt-8 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            {home.description}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-stretch justify-center gap-3">
            <SolicitarOrcamento
              label={home.primaryCta}
              className="h-12 rounded-lg bg-[#0F4C81] px-7 text-base font-semibold shadow-[0_18px_34px_-20px_rgba(15,76,129,0.9)] hover:bg-[#0a3d6b]"
              icon={<ArrowRight className="ml-1 h-4 w-4" />}
            />
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-lg border-[#0F4C81]/20 bg-white/85 px-7 text-base font-semibold text-[#0F4C81] shadow-sm shadow-[#0F4C81]/5 backdrop-blur-sm hover:border-[#0F4C81]/35 hover:bg-[#0F4C81]/5 hover:text-[#0F4C81]"
              asChild
            >
              <Link href="/aplicativos">
                <Smartphone className="h-4 w-4" />
                {home.appsCta}
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="mt-20 inline-flex flex-wrap justify-center gap-10 sm:gap-16 border border-gray-200 rounded-2xl bg-gray-50 px-10 py-6 shadow-sm">
            {home.stats.map((s) => (
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
              <span className="h-px w-8 bg-[#0F4C81]" />
              <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">{home.differentiatorsEyebrow}</span>
              <span className="h-px w-8 bg-[#0F4C81]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{home.differentiatorsTitle}</h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
              {home.differentiatorsDescription}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {home.differentiators.map((item, index) => (
              <FeatureCard
                key={item.title}
                icon={differentiatorIcons[index]}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Serviços ── */}
      <section className="py-24 md:py-32 border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-4 mb-4">
                <span className="h-px w-8 bg-[#0F4C81]" />
                <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">{home.servicesEyebrow}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                {home.servicesTitle}
              </h2>
              <p className="text-gray-500 leading-relaxed text-sm mb-8">
                {home.servicesDescription}
              </p>
              <Button className="bg-[#00719C] hover:bg-[#005f85] text-white px-7 py-5 text-sm font-medium shadow-lg shadow-[#0F4C81]/20" asChild>
                <Link href="/produtos">
                  {home.servicesCta}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
              <Button variant="ghost" className="mt-3 text-gray-600 hover:text-gray-900 hover:bg-gray-100 border border-gray-200 hover:border-gray-300 px-7 py-5 text-sm font-medium" asChild>
                <Link href="/aplicativos">
                  {home.freeAppsCta}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {home.serviceItems.map((item, index) => (
                <ServiceItem
                  key={item.title}
                  icon={serviceIcons[index]}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA intermediário ── */}
      <section className="py-24 md:py-32 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl border border-[#0F4C81]/20 bg-[#0F4C81]/5 overflow-hidden px-8 py-16 md:py-20">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[700px] rounded-full bg-[#0F4C81]/8 blur-[100px] pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0F4C81]/30 to-transparent" />
            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs font-mono text-[#0F4C81] tracking-widest uppercase mb-4 font-semibold">{home.middleCtaEyebrow}</p>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 leading-tight">
                  {home.middleCtaTitle}
                </h2>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {home.middleCtaDescription}
                </p>
              </div>
              <div className="flex flex-col gap-4">
                {home.middleCtaChecklist.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-[#0F4C81] shrink-0" />
                    {item}
                  </div>
                ))}
                <div className="pt-4">
                  <SolicitarOrcamento label={home.primaryCta} />
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
              <span className="h-px w-8 bg-[#0F4C81]" />
              <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">{home.techEyebrow}</span>
              <span className="h-px w-8 bg-[#0F4C81]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{home.techTitle}</h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
              {home.techDescription}
            </p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 md:gap-8 items-start justify-items-center">
            <TechBadge icon={<Zap className="h-6 w-6 text-[#0F4C81]" />} label="Next.js" />
            <TechBadge icon={<Code2 className="h-6 w-6 text-[#0F4C81]" />} label="Angular" />
            <TechBadge icon={<Database className="h-6 w-6 text-[#0F4C81]" />} label="Supabase" />
            <TechBadge icon={<Database className="h-6 w-6 text-[#0F4C81]" />} label="PostgreSQL" />
            <TechBadge icon={<BarChart3 className="h-6 w-6 text-[#0F4C81]" />} label="Power BI" />
            <TechBadge icon={<Code className="h-6 w-6 text-[#0F4C81]" />} label="TypeScript" />
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="py-24 md:py-32 border-t border-gray-100">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
            {home.finalTitle}
          </h2>
          <p className="text-gray-500 mb-10 max-w-xl mx-auto text-base leading-relaxed">
            {home.finalDescription}
          </p>
          <Button size="lg" className="bg-[#00719C] hover:bg-[#005f85] text-white px-10 py-7 text-base font-medium shadow-xl shadow-[#0F4C81]/20" asChild>
            <Link href="/contato">
              {home.finalCta}
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

    </main>
  );
}
