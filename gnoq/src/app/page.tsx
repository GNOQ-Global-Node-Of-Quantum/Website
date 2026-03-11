// app/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Zap, ShieldCheck, Cpu, Users, Database, BarChart3, Server, Code } from "lucide-react";
import { SolicitarOrcamento } from "@/components/SolicitarOrcamento";
import { FeatureCard } from "@/components/FutureCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#000000] text-[#dceef7]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Fundo gradiente sutil */}
        <div className="absolute inset-0 bg-linear-to-br from-[#4f46e5]/10 via-transparent to-[#000000]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-20 pb-28 md:pt-32 md:pb-40 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Engenharia digital
            <span className="block text-[#4f46e5] mt-2">para quem pensa à frente</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-[#9ca3af] max-w-3xl mx-auto leading-relaxed">
            Criamos sistemas robustos, escaláveis e sob medida que transformam processos complexos
            em vantagem competitiva real. Do MVP ao produto de escala global.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
            <SolicitarOrcamento />
          </div>
        </div>
      </section>

      {/* Seção de Destaques / Benefícios */}
      <section className="py-20 md:py-32 border-t border-[#4f4f4f]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Por que escolher a GNOQ?</h2>
            <p className="mt-4 text-[#9ca3af] text-lg max-w-2xl mx-auto">
              Não entregamos apenas código. Entregamos resultados mensuráveis e sistemas preparados para o futuro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <FeatureCard
              icon={<Zap className="h-10 w-10 text-[#4f46e5]" />}
              title="Velocidade sem abrir mão da qualidade"
              description="Arquitetura moderna, CI/CD automatizado e deploy contínuo. Seu produto no ar mais rápido, com estabilidade."
            />
            <FeatureCard
              icon={<ShieldCheck className="h-10 w-10 text-[#4f46e5]" />}
              title="Segurança por design"
              description="Autenticação robusta, criptografia ponta a ponta, conformidade LGPD/GDPR e proteção contra ameaças atuais."
            />
            <FeatureCard
              icon={<Cpu className="h-10 w-10 text-[#4f46e5]" />}
              title="Escalabilidade real"
              description="De 100 para 1 milhão de usuários sem reescrever tudo. Microservices, serverless e cloud-native quando faz sentido."
            />
          </div>
        </div>
      </section>

      {/* Seção CTA intermediária */}
      <section className="py-20 md:py-32 bg-linear-to-b from-[#000000] to-[#0f0f1a] border-t border-b border-[#4f4f4f]">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para acelerar seu negócio?
          </h2>
          <p className="text-lg md:text-xl text-[#9ca3af] mb-10 max-w-3xl mx-auto">
            Vamos conversar sem compromisso. Em até 48h devolvemos um diagnóstico inicial + proposta alinhada com seus objetivos.
          </p>

          <SolicitarOrcamento /> {/* Seu componente já existente */}
        </div>
      </section>

      {/* Seção Tecnologias / Stack */}
      <section className="py-20 md:py-28 border-t border-[#4f4f4f]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Tecnologias que dominamos
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-10 items-center justify-items-center opacity-90">
            {/* Next.js */}
            <div className="flex flex-col items-center gap-3 text-center group">
              <Zap className="h-12 w-12 md:h-14 md:w-14 text-[#4f46e5] group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm md:text-base font-medium text-[#dceef7]">Next.js</span>
            </div>

            {/* Angular */}
            <div className="flex flex-col items-center gap-3 text-center group">
              <Code2 className="h-12 w-12 md:h-14 md:w-14 text-[#4f46e5] group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm md:text-base font-medium text-[#dceef7]">Angular</span>
            </div>

            {/* Supabase */}
            <div className="flex flex-col items-center gap-3 text-center group">
              <Database className="h-12 w-12 md:h-14 md:w-14 text-[#4f46e5] group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm md:text-base font-medium text-[#dceef7]">Supabase</span>
            </div>

            {/* PostgreSQL (para representar SQL) */}
            <div className="flex flex-col items-center gap-3 text-center group">
              <Database className="h-12 w-12 md:h-14 md:w-14 text-[#4f46e5] group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm md:text-base font-medium text-[#dceef7]">PostgreSQL / SQL</span>
            </div>

            {/* Power BI */}
            <div className="flex flex-col items-center gap-3 text-center group">
              <BarChart3 className="h-12 w-12 md:h-14 md:w-14 text-[#4f46e5] group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm md:text-base font-medium text-[#dceef7]">Power BI</span>
            </div>

            {/* Exemplo extra: TypeScript */}
            <div className="flex flex-col items-center gap-3 text-center group">
              <Code className="h-12 w-12 md:h-14 md:w-14 text-[#4f46e5] group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm md:text-base font-medium text-[#dceef7]">TypeScript</span>
            </div>
          </div>

          <p className="text-center mt-12 text-[#9ca3af] text-sm md:text-base">
            Combinamos frontend moderno, backend escalável, bancos relacionais robustos e inteligência de negócios para entregar soluções completas e de alto impacto.
          </p>
        </div>
      </section>

      {/* Último CTA antes do footer */}
      <section className="py-20 border-t border-[#4f4f4f]">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Vamos construir o futuro do seu negócio juntos?
          </h2>
          <Button
            size="lg"
            className="bg-[#4f46e5] hover:bg-[#4338ca] text-white px-10 py-7 text-xl mt-6"
            asChild
          >
            <Link href="/contato">
              Falar com um especialista
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}