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

type FormState = "idle" | "loading" | "success" | "error";
interface FormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  budget: string;
  message: string;
}

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
    icon: <Mail className="h-5 w-5 text-[#0F4C81]" />,
    label: "E-mail",
    value: "desenvolvimento@gnoq.com.br",
    href: "mailto:desenvolvimento@gnoq.com.br",
  },
  {
    icon: <Phone className="h-5 w-5 text-[#0F4C81]" />,
    label: "Telefone",
    value: "(31) 99452-5631",
    href: "tel:31994525631",
  },
  {
    icon: <MapPin className="h-5 w-5 text-[#0F4C81]" />,
    label: "Localização",
    value: "Contagem - Minas Gerais",
    href: undefined,
  },
];

const SOCIALS = [
  {
    icon: <MessageCircle className="h-5 w-5" />,
    label: "WhatsApp",
    href: "https://wa.me/5531994525631",
  },
  {
    icon: <Instagram className="h-5 w-5" />,
    label: "Instagram",
    href: "https://instagram.com/gnoq.br",
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    label: "LinkedIn",
    href: "https://linkedin.com/company/gnoq",
  },
  {
    icon: <Github className="h-5 w-5" />,
    label: "GitHub",
    href: "https://github.com/GNOQ-Global-Node-Of-Quantum",
  },
];

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
      <label className="text-sm font-medium text-gray-600">
        {label}
        {required && <span className="text-[#0F4C81] ml-1">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#0F4C81] focus:ring-2 focus:ring-[#0F4C81]/15 transition-colors duration-200 shadow-sm";

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

  const set =
    (field: keyof FormData) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

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
      setForm({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        budget: "",
        message: "",
      });
    } catch (err: any) {
      setState("error");
      setErrorMsg(err.message || "Tente novamente em instantes.");
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F4C81]/4 via-transparent to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#0F4C81 1px, transparent 1px), linear-gradient(90deg, #0F4C81 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-20">
          <div className="flex items-center gap-2 mb-6 text-xs text-gray-400">
            <Link href="/" className="hover:text-gray-600 transition-colors">
              Início
            </Link>
            <span>/</span>
            <span className="text-gray-500">Contato</span>
          </div>
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0F4C81]/20 bg-[#0F4C81]/8 px-4 py-1.5 text-sm text-[#0F4C81] font-medium mb-6">
              <Send className="h-3.5 w-3.5" />
              Resposta em até 48h
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] text-gray-900">
              Vamos conversar
              <br />
              <span className="text-[#0F4C81]">sobre seu projeto</span>
            </h1>
            <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-xl">
              Preencha o formulário ou use um dos canais abaixo. Sem compromisso
              — devolvemos um diagnóstico inicial + proposta em até 48h.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main ── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 xl:gap-20 items-start">
            {/* Form */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10 shadow-sm">
              {state === "success" ? (
                <div className="flex flex-col items-center justify-center gap-5 py-16 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0F4C81]/10 border border-[#0F4C81]/20">
                    <CheckCircle2 className="h-8 w-8 text-[#0F4C81]" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Mensagem enviada!
                    </h2>
                    <p className="text-gray-500">
                      Recebemos seu contato. Retornaremos em até 48h úteis.
                    </p>
                  </div>
                  <button
                    onClick={() => setState("idle")}
                    className="mt-2 text-sm text-[#0F4C81] hover:underline underline-offset-4 font-medium"
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
                          <option value="" disabled>
                            Selecione...
                          </option>
                          {SERVICE_TYPES.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                      </div>
                    </Field>
                  </div>

                  <Field label="Orçamento estimado">
                    <div className="flex flex-wrap gap-2">
                      {BUDGETS.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() =>
                            setForm((prev) => ({ ...prev, budget: b }))
                          }
                          className={`rounded-full px-4 py-1.5 text-sm border transition-colors duration-150 ${
                            form.budget === b
                              ? "border-[#0F4C81] bg-[#0F4C81]/10 text-[#0F4C81] font-medium"
                              : "border-gray-200 text-gray-500 bg-white hover:border-[#0F4C81]/40 hover:text-[#0F4C81]"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </Field>

                  <Field label="Mensagem" required>
                    <textarea
                      className={`${inputClass} resize-none min-h-[140px]`}
                      placeholder="Descreva brevemente o que você precisa, o prazo esperado e qualquer detalhe relevante..."
                      value={form.message}
                      onChange={set("message")}
                      required
                    />
                  </Field>

                  {state === "error" && (
                    <div className="flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      {errorMsg}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={state === "loading"}
                    className="w-full bg-[#00719C] hover:bg-[#005f85] text-white py-6 text-base font-medium disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-[#0F4C81]/20"
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

                  <p className="text-center text-xs text-gray-400">
                    Ao enviar, você concorda com nossa{" "}
                    <Link
                      href="/privacidade"
                      className="text-[#0F4C81] hover:underline font-medium"
                    >
                      Política de Privacidade
                    </Link>
                    .
                  </p>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-5 lg:sticky lg:top-28">
              {/* Contact info */}
              <div className="rounded-2xl border border-gray-200 bg-white p-7 space-y-5 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900">
                  Informações de contato
                </h3>
                {CONTACT_INFO.map(({ icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0F4C81]/10 border border-[#0F4C81]/15">
                      {icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">{label}</p>
                      {href ? (
                        <a
                          href={href}
                          className="text-sm text-gray-700 hover:text-[#0F4C81] transition-colors font-medium"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm text-gray-700 font-medium">
                          {value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/5531994525631?text=Olá! Vim pelo site da GNOQ e gostaria de conversar sobre um projeto."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-green-200 bg-green-50 p-6 hover:border-green-300 hover:bg-green-100 transition-all duration-200 group"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 border border-green-200">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                    Falar pelo WhatsApp
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Resposta mais rápida
                  </p>
                </div>
              </a>

              {/* Socials */}
              <div className="rounded-2xl border border-gray-200 bg-white p-7 shadow-sm">
                <h3 className="text-base font-semibold text-gray-900 mb-5">
                  Redes sociais
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {SOCIALS.map(({ icon, label, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-500 hover:border-[#0F4C81]/30 hover:text-[#0F4C81] hover:bg-[#0F4C81]/5 transition-all duration-200"
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
