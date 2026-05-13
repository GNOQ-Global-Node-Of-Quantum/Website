// app/privacidade/page.tsx
import { Shield, FileText, Lock, Download, ExternalLink, ChevronRight, CheckCircle2, ScrollText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface DocCardProps { icon: React.ReactNode; title: string; description: string; lastUpdated: string; version: string; downloadHref?: string; filename?: string; }
interface SectionProps { id: string; title: string; children: React.ReactNode; }
interface RightItem { title: string; description: string; }

function DocCard({ icon, title, description, lastUpdated, version, downloadHref, filename }: DocCardProps) {
  return (
    <div className="group relative flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-7 hover:border-[#4f46e5]/40 hover:shadow-lg hover:shadow-[#4f46e5]/8 transition-all duration-300">
      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#4f46e5]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4f46e5]/10 border border-[#4f46e5]/15 group-hover:bg-[#4f46e5]/15 transition-all duration-300">{icon}</div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
            <div className="flex items-center gap-3 mt-1">
              <span className="text-xs text-gray-400 font-mono">v{version}</span>
              <span className="text-xs text-gray-300">•</span>
              <span className="text-xs text-gray-400">Atualizado em {lastUpdated}</span>
            </div>
          </div>
        </div>
        <span className="shrink-0 rounded-full bg-[#4f46e5]/8 px-3 py-1 text-xs font-medium text-[#4f46e5] border border-[#4f46e5]/15">PDF</span>
      </div>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
      <div className="flex items-center gap-3 pt-1">
        {downloadHref ? (
          <a href={downloadHref} download={filename} className="inline-flex items-center gap-2 rounded-lg bg-[#4f46e5] hover:bg-[#4338ca] px-4 py-2.5 text-sm font-medium text-white transition-colors duration-200 shadow-sm shadow-[#4f46e5]/20">
            <Download className="h-4 w-4" />Baixar documento
          </a>
        ) : (
          <button disabled className="inline-flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2.5 text-sm font-medium text-gray-400 cursor-not-allowed border border-gray-200">
            <Download className="h-4 w-4" />Em breve
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
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900">{title}</h2>
      </div>
      <div className="text-gray-500 leading-relaxed space-y-4 pl-8 border-l-2 border-[#4f46e5]/15">{children}</div>
    </section>
  );
}

const documents: DocCardProps[] = [
  { icon: <Lock className="h-5 w-5 text-[#4f46e5]" />, title: "Política de Privacidade", description: "Descreve quais dados pessoais coletamos, como utilizamos, armazenamos e protegemos as informações dos nossos clientes e visitantes, em conformidade com a LGPD.", lastUpdated: new Date().toLocaleDateString("pt-BR"), version: "1.0", downloadHref: "/docs/politica-de-privacidade-gnoq.pdf", filename: "politica-de-privacidade-gnoq.pdf" },
  { icon: <FileText className="h-5 w-5 text-[#4f46e5]" />, title: "Termos de Uso", description: "Estabelece as condições gerais para uso dos nossos serviços, responsabilidades das partes, limitações de uso e direitos de propriedade intelectual.", lastUpdated: new Date().toLocaleDateString("pt-BR"), version: "1.0", downloadHref: "/docs/termos-de-uso-gnoq.pdf", filename: "termos-de-uso-gnoq.pdf" },
  { icon: <Shield className="h-5 w-5 text-[#4f46e5]" />, title: "LGPD & Compliance", description: "Programa de Governança em Privacidade: detalha as práticas de governança de dados pessoais da GNOQ, bases legais de tratamento e medidas técnicas adotadas.", lastUpdated: new Date().toLocaleDateString("pt-BR"), version: "1.0", downloadHref: "/docs/programa-governanca-privacidade-gnoq.pdf", filename: "programa-governanca-privacidade-gnoq.pdf" },
  { icon: <ScrollText className="h-5 w-5 text-[#4f46e5]" />, title: "Código de Ética", description: "Define os padrões de conduta esperados de todos que atuam em nome da GNOQ — sócios, colaboradores, prestadores de serviço e parceiros.", lastUpdated: new Date().toLocaleDateString("pt-BR"), version: "1.0", downloadHref: "/docs/codigo-de-etica-gnoq.pdf", filename: "codigo-de-etica-gnoq.pdf" },
];

const userRights: RightItem[] = [
  { title: "Confirmação e acesso", description: "Saber se tratamos seus dados e acessar as informações que possuímos sobre você." },
  { title: "Correção", description: "Solicitar a correção de dados incompletos, inexatos ou desatualizados." },
  { title: "Anonimização ou eliminação", description: "Pedir o bloqueio ou exclusão de dados desnecessários ou tratados em desconformidade." },
  { title: "Portabilidade", description: "Receber seus dados em formato estruturado para transferência a outro fornecedor." },
  { title: "Revogação do consentimento", description: "Retirar o consentimento a qualquer momento, sem prejuízo do tratamento anterior." },
  { title: "Informação sobre compartilhamento", description: "Saber com quais entidades públicas ou privadas seus dados são compartilhados." },
];

const navLinks = [
  { href: "#documentos", label: "Documentos" },
  { href: "#resumo", label: "Resumo" },
  { href: "#seus-direitos", label: "Seus direitos" },
  { href: "#contato-dpo", label: "Contato DPO" },
];

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4f46e5]/4 via-transparent to-transparent" />
        <div className="absolute inset-0 opacity-[0.035]" style={{ backgroundImage: "linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-24">
          <div className="flex items-center gap-2 mb-6 text-xs text-gray-400">
            <Link href="/" className="hover:text-gray-600 transition-colors">Início</Link>
            <span>/</span>
            <span className="text-gray-500">Privacidade & Compliance</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#4f46e5]/20 bg-[#4f46e5]/8 px-4 py-1.5 text-sm text-[#4f46e5] font-medium mb-6">
                <Shield className="h-3.5 w-3.5" />Transparência &amp; Proteção de Dados
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] text-gray-900">
                Privacidade, <span className="text-[#4f46e5]">LGPD</span><br />e Compliance
              </h1>
              <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-xl">
                A GNOQ trata seus dados com responsabilidade e transparência. Aqui você encontra todos os documentos legais, seus direitos como titular e como falar com nosso DPO.
              </p>
            </div>
            <nav className="flex flex-wrap gap-2 md:flex-col md:items-end shrink-0">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-sm text-gray-400 hover:text-gray-700 transition-colors hover:underline underline-offset-4">{link.label}</a>
              ))}
            </nav>
          </div>
        </div>
      </section>

      {/* ── Documents ── */}
      <section id="documentos" className="py-20 md:py-28 scroll-mt-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Documentos para download</h2>
            <p className="mt-3 text-gray-500 max-w-xl">Versões completas em PDF. Clique para baixar o documento correspondente.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {documents.map((doc) => <DocCard key={doc.title} {...doc} />)}
          </div>
          <p className="mt-8 text-xs text-gray-400 text-center">
            Em caso de dúvidas, entre em contato com{" "}
            <a href="mailto:gabriel.neves@gnoq.com.br" className="text-[#4f46e5] hover:underline font-medium">gabriel.neves@gnoq.com.br</a>.
          </p>
        </div>
      </section>

      {/* ── Summary ── */}
      <section id="resumo" className="py-20 md:py-28 border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Resumo da nossa política</h2>
            <p className="mt-3 text-gray-500">Uma visão clara e objetiva de como tratamos seus dados — sem juridiquês.</p>
          </div>
          <div className="space-y-10">
            <Section id="resumo-dados" title="Quais dados coletamos?">
              <p>Coletamos dados cadastrais e de contato (nome, e-mail, telefone, CPF/CNPJ), dados financeiros quando necessários para faturamento, e dados de acesso e navegação (IP, navegador, dispositivo).</p>
              <p>Coletamos apenas os dados estritamente necessários para a prestação dos nossos serviços, sempre com base em uma das hipóteses legais previstas na LGPD (Lei nº 13.709/2018).</p>
            </Section>
            <Section id="resumo-uso" title="Como utilizamos seus dados?">
              <p>Utilizamos seus dados para prestação dos serviços contratados, comunicações essenciais, emissão de notas fiscais, suporte técnico e melhoria contínua dos nossos sistemas. Com seu consentimento, podemos enviar comunicações de marketing — sempre com opção de descadastro.</p>
            </Section>
            <Section id="resumo-compartilhamento" title="Compartilhamento com terceiros">
              <p>Seus dados podem ser compartilhados com plataformas de pagamento, prestadores de TI e autoridades legais quando exigido por lei. Todos os parceiros são contratualmente obrigados a manter confidencialidade e segurança.</p>
              <p>A GNOQ não vende dados pessoais a terceiros, em nenhuma hipótese.</p>
            </Section>
            <Section id="resumo-retencao" title="Por quanto tempo armazenamos?">
              <p>Armazenamos seus dados pelo tempo de duração do relacionamento contratual e pelos prazos legais obrigatórios — 6 meses para logs de acesso (Marco Civil da Internet) e 5 anos para dados fiscais. Após esse período, os dados são excluídos ou anonimizados.</p>
            </Section>
            <Section id="resumo-seguranca" title="Segurança dos dados">
              <p>Adotamos medidas técnicas e organizacionais para proteger os dados contra acesso não autorizado, perda, alteração ou divulgação indevida — incluindo criptografia em trânsito e em repouso, RBAC, monitoramento contínuo e backups regulares.</p>
            </Section>
          </div>
        </div>
      </section>

      {/* ── User rights ── */}
      <section id="seus-direitos" className="py-20 md:py-28 border-t border-gray-100">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Seus direitos como titular</h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">A LGPD garante a você, titular dos dados, um conjunto de direitos que a GNOQ está comprometida a respeitar e facilitar o exercício.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {userRights.map((right) => (
              <div key={right.title} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-6 hover:border-[#4f46e5]/30 hover:shadow-md transition-all duration-200">
                <CheckCircle2 className="h-5 w-5 text-[#4f46e5] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm mb-1">{right.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{right.description}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-gray-500">
            Para exercer qualquer um desses direitos, entre em contato pelo e-mail{" "}
            <a href="mailto:gabriel.neves@gnoq.com.br" className="text-[#4f46e5] hover:underline font-medium">gabriel.neves@gnoq.com.br</a>.
            Responderemos em até 15 dias úteis, conforme previsto na legislação.
          </p>
        </div>
      </section>

      {/* ── DPO Contact ── */}
      <section id="contato-dpo" className="py-20 md:py-28 border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-[#4f46e5]/20 bg-[#4f46e5]/5 p-10 md:p-14 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#4f46e5]/8 blur-3xl pointer-events-none" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#4f46e5]/30 to-transparent" />
            <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-[#4f46e5]/20 bg-white px-4 py-1.5 text-sm text-[#4f46e5] font-medium mb-5">
                  <Shield className="h-3.5 w-3.5" />Encarregado de Dados (DPO)
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Fale com nosso DPO</h2>
                <p className="text-gray-500 leading-relaxed max-w-lg text-sm">Tem dúvidas, solicitações ou quer exercer seus direitos como titular? Nosso Encarregado de Proteção de Dados está à disposição.</p>
                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-gray-400 w-14">Nome</span>
                    <span className="text-gray-700 font-medium">Gabriel Neves Oliveira Quintao</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-gray-400 w-14">E-mail</span>
                    <a href="mailto:gabriel.neves@gnoq.com.br" className="text-[#4f46e5] hover:underline font-mono font-medium">gabriel.neves@gnoq.com.br</a>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-gray-400 w-14">Prazo</span>
                    <span className="text-gray-700">15 dias úteis para resposta</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-gray-400 w-14">ANPD</span>
                    <a href="https://www.gov.br/anpd" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[#4f46e5] hover:underline font-medium">
                      gov.br/anpd <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="shrink-0">
                <Button size="lg" className="bg-[#4f46e5] hover:bg-[#4338ca] text-white px-8 py-6 text-base shadow-lg shadow-[#4f46e5]/20" asChild>
                  <Link href="/contato">Abrir chamado</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer note ── */}
      <div className="border-t border-gray-100 py-8 text-center">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} GNOQ Engenharia Digital. Todos os direitos reservados.{" "}
          <span className="text-gray-300">·</span> CNPJ: 57.738.857/0001-20{" "}
          <span className="text-gray-300">·</span> Versão da política: 1.0
        </p>
      </div>
    </main>
  );
}