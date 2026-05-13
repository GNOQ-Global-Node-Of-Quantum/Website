"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Instagram,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ─── Types ────────────────────────────────────────────────────────────────────

type FormState = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  budget: string;
  message: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const SERVICE_TYPES = [
  "Desenvolvimento Web / Aplicação",
  "Sistema sob medida / ERP",
  "Integração de APIs",
  "Consultoria técnica",
  "Power BI / Analytics",
  "Outro",
];

const BUDGETS = [
  "Ainda não sei",
  "Até R$ 5.000",
  "R$ 5.000 – R$ 15.000",
  "R$ 15.000 – R$ 50.000",
  "Acima de R$ 50.000",
];

const CONTACT_INFO = [
  {
    icon: <Mail className="h-5 w-5 text-[#4f46e5]" />,
    label: "E-mail",
    value: "desenvolvimento@gnoq.com.br",
    href: "mailto:desenvolvimento@gnoq.com.br",
  },
  {
    icon: <Phone className="h-5 w-5 text-[#4f46e5]" />,
    label: "Telefone",
    value: "(31) 99452-5631",
    href: "tel:31994525631",
  },
  {
    icon: <MapPin className="h-5 w-5 text-[#4f46e5]" />,
    label: "Localização",
    value: "Contagem - Minas Gerais",
    href: undefined,
  },
];

const SOCIALS = [
  { icon: <MessageCircle className="h-5 w-5" />, label: "WhatsApp",  href: "https://wa.me/5531994525631" },
  { icon: <Instagram className="h-5 w-5" />,     label: "Instagram", href: "https://instagram.com/gnoq" },
  { icon: <Linkedin className="h-5 w-5" />,      label: "LinkedIn",  href: "https://linkedin.com/company/gnoq" },
  { icon: <Github className="h-5 w-5" />,        label: "GitHub",    href: "https://github.com/gnoq" },
];

// ─── Field component ──────────────────────────────────────────────────────────

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-[#9ca3af]">
        {label}
        {required && <span className="text-[#4f46e5] ml-1">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-[#2a2a3a] bg-[#0a0a12] px-4 py-3 text-[#dceef7] text-sm placeholder:text-[#374151] focus:outline-none focus:border-[#4f46e5] focus:ring-1 focus:ring-[#4f46e5]/40 transition-colors duration-200";

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContatoPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    budget: "",
    message: "",
  });
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [field]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Erro ao enviar.");
      }

      setState("success");
      setForm({ name: "", email: "", phone: "", serviceType: "", budget: "", message: "" });
    } catch (err: any) {
      setState("error");
      setErrorMsg(err.message || "Tente novamente em instantes.");
    }
  }

  return (
    <main className="min-h-screen bg-[#000000] text-[#dceef7]">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-[#1e1e2e]">
        <div className="absolute inset-0 bg-linear-to-br from-[#4f46e5]/8 via-transparent to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-20">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/" className="text-sm text-[#6b7280] hover:text-[#9ca3af] transition-colors">
              Início
            </Link>
            <span className="text-[#2a2a3a]">/</span>
            <span className="text-sm text-[#9ca3af]">Contato</span>
          </div>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#4f46e5]/30 bg-[#4f46e5]/10 px-4 py-1.5 text-sm text-[#818cf8] mb-6">
              <Send className="h-3.5 w-3.5" />
              Resposta em até 48h
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08]">
              Vamos conversar<br />
              <span className="text-[#4f46e5]">sobre seu projeto</span>
            </h1>
            <p className="mt-6 text-lg text-[#9ca3af] leading-relaxed max-w-xl">
              Preencha o formulário ou use um dos canais abaixo. Sem compromisso —
              devolvemos um diagnóstico inicial + proposta em até 48h.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 xl:gap-20 items-start">

            {/* ── Form ── */}
            <div className="rounded-2xl border border-[#2a2a3a] bg-[#0a0a12] p-8 md:p-10">
              {state === "success" ? (
                <div className="flex flex-col items-center justify-center gap-5 py-16 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#4f46e5]/15 border border-[#4f46e5]/30">
                    <CheckCircle2 className="h-8 w-8 text-[#4f46e5]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Mensagem enviada!</h2>
                    <p className="text-[#9ca3af]">
                      Recebemos seu contato. Retornaremos em até 48h úteis.
                    </p>
                  </div>
                  <button
                    onClick={() => setState("idle")}
                    className="mt-2 text-sm text-[#818cf8] hover:underline underline-offset-4"
                  >
                    Enviar outra mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Field label="Nome completo" required>
                      <input
                        className={inputClass}
                        placeholder="Seu nome"
                        value={form.name}
                        onChange={set("name")}
                        required
                      />
                    </Field>
                    <Field label="E-mail" required>
                      <input
                        type="email"
                        className={inputClass}
                        placeholder="voce@empresa.com"
                        value={form.email}
                        onChange={set("email")}
                        required
                      />
                    </Field>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Field label="Telefone / WhatsApp">
                      <input
                        className={inputClass}
                        placeholder="(00) 00000-0000"
                        value={form.phone}
                        onChange={set("phone")}
                      />
                    </Field>
                    <Field label="Tipo de serviço">
                      <div className="relative">
                        <select
                          className={`${inputClass} appearance-none pr-10`}
                          value={form.serviceType}
                          onChange={set("serviceType")}
                        >
                          <option value="" disabled>Selecione...</option>
                          {SERVICE_TYPES.map((s) => (
                            <option key={s} value={s} className="bg-[#0a0a12]">{s}</option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#6b7280]" />
                      </div>
                    </Field>
                  </div>

                  <Field label="Orçamento estimado">
                    <div className="flex flex-wrap gap-2">
                      {BUDGETS.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setForm((prev) => ({ ...prev, budget: b }))}
                          className={`rounded-full px-4 py-1.5 text-sm border transition-colors duration-150 ${
                            form.budget === b
                              ? "border-[#4f46e5] bg-[#4f46e5]/15 text-[#818cf8]"
                              : "border-[#2a2a3a] text-[#6b7280] hover:border-[#4f46e5]/50 hover:text-[#9ca3af]"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </Field>

                  <Field label="Mensagem" required>
                    <textarea
                      className={`${inputClass} resize-none min-h-35`}
                      placeholder="Descreva brevemente o que você precisa, o prazo esperado e qualquer detalhe relevante..."
                      value={form.message}
                      onChange={set("message")}
                      required
                    />
                  </Field>

                  {state === "error" && (
                    <div className="flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      {errorMsg}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={state === "loading"}
                    className="w-full bg-[#4f46e5] hover:bg-[#4338ca] text-white py-6 text-base font-medium disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {state === "loading" ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Enviar mensagem
                      </span>
                    )}
                  </Button>

                  <p className="text-center text-xs text-[#4b5563]">
                    Ao enviar, você concorda com nossa{" "}
                    <Link href="/privacidade" className="text-[#818cf8] hover:underline">
                      Política de Privacidade
                    </Link>
                    .
                  </p>
                </form>
              )}
            </div>

            {/* ── Sidebar ── */}
            <div className="space-y-6 lg:sticky lg:top-28">
              {/* Contact info */}
              <div className="rounded-2xl border border-[#2a2a3a] bg-[#0a0a12] p-7 space-y-5">
                <h3 className="text-base font-semibold text-[#dceef7]">Informações de contato</h3>
                {CONTACT_INFO.map(({ icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#4f46e5]/10 border border-[#4f46e5]/20">
                      {icon}
                    </div>
                    <div>
                      <p className="text-xs text-[#6b7280] mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-sm text-[#dceef7] hover:text-[#818cf8] transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-[#dceef7]">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/55[PLACEHOLDER]?text=Olá! Vim pelo site da GNOQ e gostaria de conversar sobre um projeto."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-[#25d366]/20 bg-[#25d366]/5 p-6 hover:border-[#25d366]/40 hover:bg-[#25d366]/10 transition-all duration-200 group"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#25d366]/15 border border-[#25d366]/20">
                  <MessageCircle className="h-6 w-6 text-[#25d366]" />
                </div>
                <div>
                  <p className="font-semibold text-[#dceef7] group-hover:text-[#25d366] transition-colors">
                    Falar pelo WhatsApp
                  </p>
                  <p className="text-xs text-[#6b7280] mt-0.5">Resposta mais rápida</p>
                </div>
              </a>

              {/* Social links */}
              <div className="rounded-2xl border border-[#2a2a3a] bg-[#0a0a12] p-7">
                <h3 className="text-base font-semibold text-[#dceef7] mb-5">Redes sociais</h3>
                <div className="grid grid-cols-2 gap-3">
                  {SOCIALS.map(({ icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-xl border border-[#2a2a3a] px-4 py-3 text-sm text-[#9ca3af] hover:border-[#4f46e5]/40 hover:text-[#dceef7] transition-all duration-200"
                    >
                      {icon}
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}