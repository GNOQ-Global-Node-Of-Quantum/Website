// app/privacidade/page.tsx
import { Shield, FileText, Lock, Download, ExternalLink, ChevronRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// ─── Types ───────────────────────────────────────────────────────────────────

interface DocCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  lastUpdated: string;
  version: string;
  downloadHref?: string;
}

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

interface RightItem {
  title: string;
  description: string;
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function DocCard({ icon, title, description, lastUpdated, version, downloadHref }: DocCardProps) {
  return (
    <div className="group relative flex flex-col gap-5 rounded-2xl border border-[#2a2a3a] bg-[#0a0a12] p-7 hover:border-[#4f46e5]/60 transition-all duration-300 hover:shadow-lg hover:shadow-[#4f46e5]/5">
      {/* Accent line on hover */}
      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#4f46e5] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4f46e5]/10 border border-[#4f46e5]/20">
            {icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#dceef7]">{title}</h3>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-xs text-[#6b7280] font-mono">v{version}</span>
              <span className="text-xs text-[#4b5563]">•</span>
              <span className="text-xs text-[#6b7280]">Atualizado em {lastUpdated}</span>
            </div>
          </div>
        </div>
        <span className="shrink-0 rounded-full bg-[#4f46e5]/10 px-3 py-1 text-xs font-medium text-[#818cf8] border border-[#4f46e5]/20">
          PDF
        </span>
      </div>

      <p className="text-sm text-[#9ca3af] leading-relaxed">{description}</p>

      <div className="flex items-center gap-3 pt-1">
        {downloadHref ? (
          <a
            href={downloadHref}
            download
            className="inline-flex items-center gap-2 rounded-lg bg-[#4f46e5] hover:bg-[#4338ca] px-4 py-2.5 text-sm font-medium text-white transition-colors duration-200"
          >
            <Download className="h-4 w-4" />
            Baixar documento
          </a>
        ) : (
          <button
            disabled
            className="inline-flex items-center gap-2 rounded-lg bg-[#1a1a2e] px-4 py-2.5 text-sm font-medium text-[#4b5563] cursor-not-allowed border border-[#2a2a3a]"
          >
            <Download className="h-4 w-4" />
            Em breve
          </button>
        )}
      </div>
    </div>
  );
}

function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="flex items-center gap-3 mb-6">
        <ChevronRight className="h-5 w-5 text-[#4f46e5] shrink-0" />
        <h2 className="text-xl md:text-2xl font-semibold text-[#dceef7]">{title}</h2>
      </div>
      <div className="text-[#9ca3af] leading-relaxed space-y-4 pl-8 border-l border-[#1e1e2e]">
        {children}
      </div>
    </section>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const documents: DocCardProps[] = [
  {
    icon: <Lock className="h-5 w-5 text-[#4f46e5]" />,
    title: "Política de Privacidade",
    description:
      "Descreve quais dados pessoais coletamos, como utilizamos, armazenamos e protegemos as informações dos nossos clientes e visitantes, em conformidade com a LGPD.",
    lastUpdated: "A definir",
    version: "1.0",
    downloadHref: undefined, // substitua pelo caminho real: "/docs/politica-de-privacidade.pdf"
  },
  {
    icon: <FileText className="h-5 w-5 text-[#4f46e5]" />,
    title: "Termos de Uso",
    description:
      "Estabelece as condições gerais para uso dos nossos serviços, responsabilidades das partes, limitações de uso e direitos de propriedade intelectual.",
    lastUpdated: "A definir",
    version: "1.0",
    downloadHref: undefined,
  },
  {
    icon: <Shield className="h-5 w-5 text-[#4f46e5]" />,
    title: "LGPD & Compliance",
    description:
      "Documento que detalha as práticas de governança de dados pessoais da GNOQ, bases legais de tratamento, canal de atendimento ao titular e medidas técnicas adotadas.",
    lastUpdated: "A definir",
    version: "1.0",
    downloadHref: undefined,
  },
];

const userRights: RightItem[] = [
  {
    title: "Confirmação e acesso",
    description: "Saber se tratamos seus dados e acessar as informações que possuímos sobre você.",
  },
  {
    title: "Correção",
    description: "Solicitar a correção de dados incompletos, inexatos ou desatualizados.",
  },
  {
    title: "Anonimização ou eliminação",
    description: "Pedir o bloqueio ou exclusão de dados desnecessários ou tratados em desconformidade.",
  },
  {
    title: "Portabilidade",
    description: "Receber seus dados em formato estruturado para transferência a outro fornecedor.",
  },
  {
    title: "Revogação do consentimento",
    description: "Retirar o consentimento a qualquer momento, sem prejuízo do tratamento anterior.",
  },
  {
    title: "Informação sobre compartilhamento",
    description: "Saber com quais entidades públicas ou privadas seus dados são compartilhados.",
  },
];

const navLinks = [
  { href: "#documentos", label: "Documentos" },
  { href: "#resumo", label: "Resumo" },
  { href: "#seus-direitos", label: "Seus direitos" },
  { href: "#contato-dpo", label: "Contato DPO" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen bg-[#000000] text-[#dceef7]">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-[#1e1e2e]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5]/8 via-transparent to-transparent" />
        {/* Subtle grid */}
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
            <span className="text-sm text-[#9ca3af]">Privacidade & Compliance</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#4f46e5]/30 bg-[#4f46e5]/10 px-4 py-1.5 text-sm text-[#818cf8] mb-6">
                <Shield className="h-3.5 w-3.5" />
                Transparência &amp; Proteção de Dados
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08]">
                Privacidade,{" "}
                <span className="text-[#4f46e5]">LGPD</span>
                <br />e Compliance
              </h1>

              <p className="mt-6 text-lg text-[#9ca3af] leading-relaxed max-w-xl">
                A GNOQ trata seus dados com responsabilidade e transparência. Aqui você encontra todos
                os documentos legais, seus direitos como titular e como falar com nosso DPO.
              </p>
            </div>

            {/* Quick-nav pill */}
            <nav className="flex flex-wrap gap-2 md:flex-col md:items-end shrink-0">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#6b7280] hover:text-[#dceef7] transition-colors hover:underline underline-offset-4"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* ── Documents ── */}
      <section id="documentos" className="py-20 md:py-28 scroll-mt-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">Documentos para download</h2>
            <p className="mt-3 text-[#9ca3af] max-w-xl">
              Versões completas e juridicamente válidas. Clique para baixar o PDF correspondente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {documents.map((doc) => (
              <DocCard key={doc.title} {...doc} />
            ))}
          </div>

          <p className="mt-8 text-xs text-[#4b5563] text-center">
            Os documentos serão disponibilizados assim que aprovados pelo departamento jurídico.
            Em caso de dúvidas, entre em contato com{" "}
            <a href="mailto:dpo@gnoq.com.br" className="text-[#818cf8] hover:underline">
              dpo@gnoq.com.br
            </a>
            .
          </p>
        </div>
      </section>

      {/* ── Summary ── */}
      <section
        id="resumo"
        className="py-20 md:py-28 border-t border-[#1e1e2e] bg-gradient-to-b from-[#000000] to-[#04040d]"
      >
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold">Resumo da nossa política</h2>
            <p className="mt-3 text-[#9ca3af]">
              Uma visão clara e objetiva de como tratamos seus dados — sem juridiquês.
            </p>
          </div>

          <div className="space-y-10">
            <Section id="resumo-dados" title="Quais dados coletamos?">
              <p>
                [PLACEHOLDER — Seu advogado deve descrever aqui quais dados são coletados: nome, e-mail,
                dados de navegação, cookies, dados de uso dos sistemas, informações de pagamento, etc.]
              </p>
              <p>
                Coletamos apenas os dados estritamente necessários para a prestação dos nossos serviços,
                sempre com base em uma das hipóteses legais previstas na LGPD (Lei nº 13.709/2018).
              </p>
            </Section>

            <Section id="resumo-uso" title="Como utilizamos seus dados?">
              <p>
                [PLACEHOLDER — Descreva as finalidades: execução de contrato, comunicação, melhoria de
                serviços, cumprimento de obrigação legal, exercício de direitos em processos, etc.]
              </p>
            </Section>

            <Section id="resumo-compartilhamento" title="Compartilhamento com terceiros">
              <p>
                [PLACEHOLDER — Liste os terceiros/subprocessadores com quem dados podem ser
                compartilhados: provedores de cloud, ferramentas de analytics, parceiros de cobrança, etc.
                Inclua garantias contratuais exigidas.]
              </p>
              <p>
                A GNOQ não vende dados pessoais a terceiros, em nenhuma hipótese.
              </p>
            </Section>

            <Section id="resumo-retencao" title="Por quanto tempo armazenamos?">
              <p>
                [PLACEHOLDER — Descreva a política de retenção: prazo por tipo de dado, critérios de
                exclusão ou anonimização, obrigações legais de guarda mínima.]
              </p>
            </Section>

            <Section id="resumo-seguranca" title="Segurança dos dados">
              <p>
                Adotamos medidas técnicas e organizacionais para proteger os dados contra acesso não
                autorizado, perda, alteração ou divulgação indevida — incluindo criptografia, controle de
                acesso baseado em papéis (RBAC) e monitoramento contínuo.
              </p>
              <p>
                [PLACEHOLDER — Seu advogado pode complementar com detalhes específicos das certificações
                ou frameworks de segurança adotados.]
              </p>
            </Section>
          </div>
        </div>
      </section>

      {/* ── User rights ── */}
      <section id="seus-direitos" className="py-20 md:py-28 border-t border-[#1e1e2e]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold">Seus direitos como titular</h2>
            <p className="mt-3 text-[#9ca3af] max-w-xl mx-auto">
              A LGPD garante a você, titular dos dados, um conjunto de direitos que a GNOQ está
              comprometida a respeitar e facilitar o exercício.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {userRights.map((right) => (
              <div
                key={right.title}
                className="flex gap-4 rounded-xl border border-[#1e1e2e] bg-[#040409] p-6 hover:border-[#2a2a3a] transition-colors duration-200"
              >
                <CheckCircle2 className="h-5 w-5 text-[#4f46e5] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#dceef7] text-sm mb-1">{right.title}</p>
                  <p className="text-xs text-[#6b7280] leading-relaxed">{right.description}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-[#6b7280]">
            Para exercer qualquer um desses direitos, entre em contato pelo e-mail{" "}
            <a href="mailto:dpo@gnoq.com.br" className="text-[#818cf8] hover:underline">
              dpo@gnoq.com.br
            </a>
            . Responderemos em até 15 dias úteis, conforme previsto na legislação.
          </p>
        </div>
      </section>

      {/* ── DPO Contact ── */}
      <section
        id="contato-dpo"
        className="py-20 md:py-28 border-t border-[#1e1e2e] bg-gradient-to-b from-[#04040d] to-[#000000]"
      >
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-[#2a2a3a] bg-[#0a0a12] p-10 md:p-14 relative overflow-hidden">
            {/* decorative */}
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#4f46e5]/5 blur-3xl pointer-events-none" />

            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#4f46e5]/30 bg-[#4f46e5]/10 px-4 py-1.5 text-sm text-[#818cf8] mb-5">
                  <Shield className="h-3.5 w-3.5" />
                  Encarregado de Dados (DPO)
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Fale com nosso DPO</h2>
                <p className="text-[#9ca3af] leading-relaxed max-w-lg">
                  Tem dúvidas, solicitações ou quer exercer seus direitos como titular? Nosso
                  Encarregado de Proteção de Dados está à disposição.
                </p>

                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-[#6b7280] w-14">E-mail</span>
                    <a
                      href="mailto:dpo@gnoq.com.br"
                      className="text-[#818cf8] hover:underline font-mono"
                    >
                      dpo@gnoq.com.br
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-[#6b7280] w-14">Prazo</span>
                    <span className="text-[#dceef7]">15 dias úteis para resposta</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-[#6b7280] w-14">ANPD</span>
                    <a
                      href="https://www.gov.br/anpd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-[#818cf8] hover:underline"
                    >
                      gov.br/anpd <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="shrink-0">
                <Button
                  size="lg"
                  className="bg-[#4f46e5] hover:bg-[#4338ca] text-white px-8 py-6 text-base"
                  asChild
                >
                  <Link href="/contato">
                    Abrir chamado
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer note ── */}
      <div className="border-t border-[#0f0f1a] py-8 text-center">
        <p className="text-xs text-[#374151]">
          © {new Date().getFullYear()} GNOQ Engenharia Digital. Todos os direitos reservados.{" "}
          <span className="text-[#1f2937]">·</span> CNPJ: [PLACEHOLDER]{" "}
          <span className="text-[#1f2937]">·</span> Versão da política: 1.0
        </p>
      </div>
    </main>
  );
}