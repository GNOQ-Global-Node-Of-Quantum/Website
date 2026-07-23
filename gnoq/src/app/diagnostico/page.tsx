"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AlertCircle,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Mail,
  MessageCircle,
  Send,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type FormState = "idle" | "loading" | "success" | "error";

type FormData = {
  name: string;
  company: string;
  contact: string;
  problem: string;
  solutionType: string;
  deadline: string;
  budget: string;
};

const solutionTypes = [
  "Site ou landing page",
  "E-commerce",
  "Aplicativo",
  "Sistema interno",
  "Jogo ou experiência interativa",
  "Automação",
  "MVP / validação de ideia",
  "Ainda não sei",
];

const deadlines = [
  "Urgente",
  "Até 30 dias",
  "1 a 3 meses",
  "3 a 6 meses",
  "Sem prazo definido",
];

const budgets = [
  "Ainda não sei",
  "Até R$ 5.000",
  "R$ 5.000 a R$ 15.000",
  "R$ 15.000 a R$ 50.000",
  "Acima de R$ 50.000",
];

const inputClass =
  "w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 shadow-sm transition-colors placeholder:text-gray-400 focus:border-[#0F4C81] focus:outline-none focus:ring-2 focus:ring-[#0F4C81]/15";

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
    <label className="flex flex-col gap-2">
      <span className="text-sm font-semibold text-gray-700">
        {label}
        {required && <span className="ml-1 text-[#0F4C81]">*</span>}
      </span>
      {children}
    </label>
  );
}

export default function DiagnosticoPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    company: "",
    contact: "",
    problem: "",
    solutionType: "",
    deadline: "",
    budget: "",
  });
  const [state, setState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const set =
    (field: keyof FormData) =>
    (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((current) => ({ ...current, [field]: event.target.value }));

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setState("loading");
    setErrorMsg("");

    try {
      const response = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          company: form.company,
          email: form.contact,
          contact: form.contact,
          problem: form.problem,
          solutionType: form.solutionType,
          deadline: form.deadline,
          budget: form.budget,
          serviceType: form.solutionType,
          message: form.problem,
          source: "Diagnóstico",
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Erro ao enviar diagnóstico.");
      }

      setState("success");
      setForm({
        name: "",
        company: "",
        contact: "",
        problem: "",
        solutionType: "",
        deadline: "",
        budget: "",
      });
    } catch (error: any) {
      setState("error");
      setErrorMsg(error.message || "Tente novamente em instantes.");
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-6 md:py-22 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <div className="mb-8 flex items-center gap-2 text-sm text-gray-400">
              <Link href="/" className="font-medium transition-colors hover:text-[#0F4C81]">
                Início
              </Link>
              <span>/</span>
              <span className="text-gray-600">Diagnóstico</span>
            </div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-md bg-[#0F4C81]/8 px-3 py-1.5 text-sm font-semibold text-[#0F4C81]">
              <Target className="h-4 w-4" />
              Diagnóstico gratuito
            </div>
            <h1 className="text-4xl font-bold leading-[1.06] tracking-tight text-gray-950 sm:text-5xl md:text-6xl">
              Descubra qual solução digital sua empresa precisa antes de investir errado.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              Preencha o formulário e a GNOQ avalia o problema, o tipo de solução mais adequado, riscos do escopo e próximos passos para uma conversa comercial mais objetiva.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                ["Clareza", "Entenda se o caminho é site, app, sistema, automação, jogo ou MVP."],
                ["Prioridade", "Separe o que precisa resolver agora do que pode ficar para depois."],
                ["Próximo passo", "Saia com uma recomendação inicial para reunião e proposta."],
                ["Sem compromisso", "A primeira conversa serve para diagnosticar, não para empurrar escopo."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <CheckCircle2 className="mb-3 h-5 w-5 text-[#0F4C81]" />
                  <h2 className="text-sm font-bold text-gray-950">{title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm md:p-8">
            {state === "success" ? (
              <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-[#0F4C81]/20 bg-[#0F4C81]/10">
                  <CheckCircle2 className="h-8 w-8 text-[#0F4C81]" />
                </div>
                <h2 className="mt-6 text-2xl font-bold text-gray-950">Diagnóstico solicitado.</h2>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-600">
                  Recebemos suas informações. Vamos analisar e retornar com próximos passos claros.
                </p>
                <Button className="mt-7 rounded-lg bg-[#0F4C81] text-white hover:bg-[#0a3d6b]" onClick={() => setState("idle")}>
                  Enviar outro diagnóstico
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-[#0F4C81]">Comece por aqui</p>
                  <h2 className="mt-2 text-2xl font-bold text-gray-950">Solicitar diagnóstico</h2>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Nome" required>
                    <input className={inputClass} placeholder="Seu nome" value={form.name} onChange={set("name")} required />
                  </Field>
                  <Field label="Empresa" required>
                    <input className={inputClass} placeholder="Nome da empresa" value={form.company} onChange={set("company")} required />
                  </Field>
                </div>

                <Field label="WhatsApp ou e-mail" required>
                  <input className={inputClass} placeholder="(00) 00000-0000 ou voce@empresa.com" value={form.contact} onChange={set("contact")} required />
                </Field>

                <Field label="Qual problema quer resolver?" required>
                  <textarea
                    className={`${inputClass} min-h-32 resize-none`}
                    placeholder="Ex: preciso captar mais leads, meu processo é manual, quero validar uma ideia de app..."
                    value={form.problem}
                    onChange={set("problem")}
                    required
                  />
                </Field>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="O que precisa?" required>
                    <div className="relative">
                      <select className={`${inputClass} appearance-none pr-10`} value={form.solutionType} onChange={set("solutionType")} required>
                        <option value="" disabled>Selecione...</option>
                        {solutionTypes.map((item) => (
                          <option key={item} value={item}>{item}</option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    </div>
                  </Field>
                  <Field label="Prazo">
                    <div className="relative">
                      <select className={`${inputClass} appearance-none pr-10`} value={form.deadline} onChange={set("deadline")}>
                        <option value="">Selecione...</option>
                        {deadlines.map((item) => (
                          <option key={item} value={item}>{item}</option>
                        ))}
                      </select>
                      <Clock3 className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    </div>
                  </Field>
                </div>

                <Field label="Orçamento, se fizer sentido">
                  <div className="flex flex-wrap gap-2">
                    {budgets.map((budget) => (
                      <button
                        key={budget}
                        type="button"
                        onClick={() => setForm((current) => ({ ...current, budget }))}
                        className={`rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${
                          form.budget === budget
                            ? "border-[#0F4C81] bg-[#0F4C81]/10 text-[#0F4C81]"
                            : "border-gray-200 bg-white text-gray-500 hover:border-[#0F4C81]/40 hover:text-[#0F4C81]"
                        }`}
                      >
                        {budget}
                      </button>
                    ))}
                  </div>
                </Field>

                {state === "error" && (
                  <div className="flex items-center gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    {errorMsg}
                  </div>
                )}

                <Button type="submit" disabled={state === "loading"} className="h-12 w-full rounded-lg bg-[#0F4C81] text-base font-semibold text-white shadow-lg shadow-[#0F4C81]/20 hover:bg-[#0a3d6b] disabled:cursor-not-allowed disabled:opacity-60">
                  {state === "loading" ? "Enviando..." : "Enviar diagnóstico"}
                  <Send className="h-4 w-4" />
                </Button>

                <div className="grid gap-3 border-t border-gray-100 pt-5 text-sm text-gray-600 sm:grid-cols-2">
                  <a href="mailto:desenvolvimento@gnoq.com.br" className="flex items-center gap-2 transition-colors hover:text-[#0F4C81]">
                    <Mail className="h-4 w-4" />
                    desenvolvimento@gnoq.com.br
                  </a>
                  <a href="https://wa.me/5531994525631?text=Olá! Vim pelo site da GNOQ e gostaria de solicitar um diagnóstico." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-[#0F4C81]">
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp direto
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
