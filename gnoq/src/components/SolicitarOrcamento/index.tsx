"use client";

import { useState } from "react";
import { ArrowRight, BriefcaseBusiness, CheckCircle2, Mail, X } from "lucide-react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { sendOrcamento } from "@/utils/email";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/app/shared/features/language-context";

type FieldName = "name" | "email" | "titulo" | "mensagem";

const requiredFields: FieldName[] = ["name", "email", "titulo", "mensagem"];

function Field({
  label,
  error,
  errorText,
  children,
}: {
  label: string;
  error?: boolean;
  errorText: string;
  children: React.ReactNode;
}) {
  return (
    <label className="group flex flex-col gap-2">
      <span className="text-xs font-semibold uppercase tracking-widest text-gray-400 group-focus-within:text-[#0F4C81]">
        {label}
      </span>
      {children}
      {error && (
        <span className="text-xs font-medium text-red-500">
          {errorText}
        </span>
      )}
    </label>
  );
}

export function SolicitarOrcamento({
  label = "Solicitar Orçamento",
  className,
  icon,
}: {
  label?: string;
  className?: string;
  icon?: React.ReactNode;
}) {
  const { content } = useLanguage();
  const modal = content.quoteModal;
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<Record<FieldName, string>>({
    name: "",
    email: "",
    titulo: "",
    mensagem: "",
  });

  const set =
    (field: FieldName) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((current) => ({ ...current, [field]: event.target.value }));

  const isInvalid = (field: FieldName) => submitted && !form[field].trim();

  function resetForm() {
    setSubmitted(false);
    setForm({
      name: "",
      email: "",
      titulo: "",
      mensagem: "",
    });
  }

  function enviar() {
    setSubmitted(true);

    if (requiredFields.some((field) => !form[field].trim())) {
      toast.error(modal.validationError);
      return;
    }

    try {
      sendOrcamento(form.email, form.name, form.titulo, form.mensagem);
      toast.success(modal.successMessage);
      setOpen(false);
      resetForm();
    } catch {
      toast.error(modal.submitError);
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        setOpen(nextOpen);
        if (!nextOpen) {
          setSubmitted(false);
        }
      }}
    >
      <DialogTrigger asChild>
        <Button
          className={cn(
            "cursor-pointer rounded-lg bg-[#00719C] px-6 py-3 font-medium text-white shadow-lg shadow-[#0F4C81]/20 transition hover:bg-[#005f85]",
            className,
          )}
        >
          {label}
          {icon}
        </Button>
      </DialogTrigger>

      <DialogContent
        showCloseButton={false}
        className="max-h-[calc(100vh-2rem)] overflow-hidden rounded-2xl border border-gray-200 bg-white p-0 shadow-2xl shadow-[#0F4C81]/20 sm:max-w-4xl"
      >
        <div className="relative overflow-hidden border-b border-gray-100 bg-gray-50 px-6 py-5 sm:px-8 sm:py-6">
          <div
            className="absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage:
                "linear-gradient(#0F4C81 1px, transparent 1px), linear-gradient(90deg, #0F4C81 1px, transparent 1px)",
              backgroundSize: "42px 42px",
            }}
          />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm transition-colors hover:border-[#0F4C81]/30 hover:text-[#0F4C81]"
            aria-label={modal.closeLabel}
          >
            <X className="h-4 w-4" />
          </button>

          <DialogHeader className="relative max-w-xl text-left">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-[#0F4C81]/15 bg-white text-[#0F4C81] shadow-sm sm:mb-5 sm:h-12 sm:w-12">
              <BriefcaseBusiness className="h-6 w-6" />
            </div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#0F4C81]">
              {modal.eyebrow}
            </p>
            <DialogTitle className="text-2xl font-bold leading-tight tracking-tight text-gray-900 sm:text-3xl">
              {modal.title}
            </DialogTitle>
            <p className="mt-2 text-sm leading-relaxed text-gray-500 sm:mt-3">
              {modal.description}
            </p>
          </DialogHeader>
        </div>

        <div className="grid max-h-[calc(100vh-14rem)] gap-0 overflow-y-auto sm:max-h-[calc(100vh-17rem)] sm:grid-cols-[minmax(0,1fr)_280px]">
          <div className="space-y-5 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label={modal.fields.name.label} error={isInvalid("name")} errorText={modal.requiredError}>
                <Input
                  className="h-12 rounded-lg border-gray-200 bg-white px-4 text-sm shadow-sm focus-visible:border-[#0F4C81] focus-visible:ring-[#0F4C81]/15"
                  placeholder={modal.fields.name.placeholder}
                  type="text"
                  value={form.name}
                  aria-invalid={isInvalid("name")}
                  onChange={set("name")}
                />
              </Field>

              <Field label={modal.fields.email.label} error={isInvalid("email")} errorText={modal.requiredError}>
                <Input
                  className="h-12 rounded-lg border-gray-200 bg-white px-4 text-sm shadow-sm focus-visible:border-[#0F4C81] focus-visible:ring-[#0F4C81]/15"
                  placeholder={modal.fields.email.placeholder}
                  type="email"
                  value={form.email}
                  aria-invalid={isInvalid("email")}
                  onChange={set("email")}
                />
              </Field>
            </div>

            <Field label={modal.fields.subject.label} error={isInvalid("titulo")} errorText={modal.requiredError}>
              <Input
                className="h-12 rounded-lg border-gray-200 bg-white px-4 text-sm shadow-sm focus-visible:border-[#0F4C81] focus-visible:ring-[#0F4C81]/15"
                placeholder={modal.fields.subject.placeholder}
                type="text"
                value={form.titulo}
                aria-invalid={isInvalid("titulo")}
                onChange={set("titulo")}
              />
            </Field>

            <Field label={modal.fields.message.label} error={isInvalid("mensagem")} errorText={modal.requiredError}>
              <Textarea
                className="min-h-28 resize-none rounded-lg border-gray-200 bg-white px-4 py-3 text-sm leading-relaxed shadow-sm focus-visible:border-[#0F4C81] focus-visible:ring-[#0F4C81]/15 sm:min-h-36"
                placeholder={modal.fields.message.placeholder}
                value={form.mensagem}
                aria-invalid={isInvalid("mensagem")}
                onChange={set("mensagem")}
              />
            </Field>

            <Button
              className="h-12 w-full rounded-lg bg-[#0F4C81] text-base font-semibold text-white shadow-lg shadow-[#0F4C81]/20 hover:bg-[#0a3d6b]"
              onClick={enviar}
            >
              {modal.submitLabel}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <aside className="border-t border-gray-100 bg-gray-50 p-6 sm:border-l sm:border-t-0 sm:p-6">
            <div className="space-y-5">
              {modal.benefits.map((item) => (
                <div key={item} className="flex gap-3 text-sm text-gray-600">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0F4C81]" />
                  <span>{item}</span>
                </div>
              ))}

              <div className="rounded-xl border border-gray-200 bg-white p-4">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0F4C81]/10 text-[#0F4C81]">
                  <Mail className="h-5 w-5" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                  {modal.directContactLabel}
                </p>
                <a
                  href="mailto:desenvolvimento@gnoq.com.br"
                  className="mt-2 block break-all text-sm font-semibold text-gray-800 transition-colors hover:text-[#0F4C81]"
                >
                  desenvolvimento@gnoq.com.br
                </a>
              </div>
            </div>
          </aside>
        </div>
      </DialogContent>
    </Dialog>
  );
}
