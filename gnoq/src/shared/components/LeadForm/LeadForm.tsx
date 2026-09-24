"use client";

import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { whatsappLink } from "@/shared/constants/contact.constants";
import { cn } from "@/shared/lib/utils";
import {
  ArrowRightIcon,
  CheckCircle2Icon,
  Loader2Icon,
  MessageCircleIcon,
} from "lucide-react";
import { useState } from "react";

interface InterestOption {
  title: string;
  description?: string;
}

interface LeadFormProps {
  /** Identifies where the lead came from (shown in the email). */
  origin: string;
  /** Optional interest checkboxes (used on the diagnóstico page). */
  interests?: InterestOption[];
  /** Show prazo / orçamento fields (diagnóstico only). */
  showProjectFields?: boolean;
  submitLabel?: string;
  className?: string;
}

type Status = "idle" | "loading" | "success" | "error";

export function LeadForm({
  origin,
  interests,
  showProjectFields = false,
  submitLabel = "Enviar",
  className,
}: LeadFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      origin,
      company_website: String(formData.get("company_website") ?? ""),
      nome: String(formData.get("nome") ?? "").trim(),
      empresa: String(formData.get("empresa") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      whatsapp: String(formData.get("whatsapp") ?? "").trim(),
      prazo: String(formData.get("prazo") ?? "").trim(),
      orcamento: String(formData.get("orcamento") ?? "").trim(),
      mensagem: String(formData.get("mensagem") ?? "").trim(),
      interesses: formData.getAll("interesses").map(String),
    };

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Não foi possível enviar.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Não foi possível enviar.",
      );
    }
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "flex flex-col items-start gap-4 rounded-2xl border bg-muted/30 p-8",
          className,
        )}
      >
        <div className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2Icon className="size-6" />
        </div>
        <div>
          <h3 className="text-xl font-semibold">Recebemos sua mensagem!</h3>
          <p className="mt-2 text-muted-foreground">
            A GNOQ vai te responder em breve. Se quiser adiantar, chame no
            WhatsApp agora.
          </p>
        </div>
        <Button
          nativeButton={false}
          render={
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" />
          }
        >
          <MessageCircleIcon className="size-4" />
          Falar no WhatsApp
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("grid gap-4", className)} noValidate>
      {/* Honeypot — hidden from humans, catches bots. */}
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <div className="grid gap-4 md:grid-cols-2">
        <Input name="nome" placeholder="Nome*" aria-label="Nome" required />
        <Input name="empresa" placeholder="Empresa" aria-label="Empresa" />
        <Input
          name="email"
          type="email"
          placeholder="E-mail*"
          aria-label="E-mail"
          required
        />
        <Input name="whatsapp" placeholder="WhatsApp" aria-label="WhatsApp" />
      </div>

      {showProjectFields && (
        <div className="grid gap-4 md:grid-cols-2">
          <Input name="prazo" placeholder="Prazo desejado" aria-label="Prazo desejado" />
          <Input
            name="orcamento"
            placeholder="Orçamento estimado, se houver"
            aria-label="Orçamento estimado"
          />
        </div>
      )}

      <Textarea
        name="mensagem"
        placeholder={
          showProjectFields
            ? "Qual problema você quer resolver?"
            : "Como podemos ajudar?"
        }
        aria-label="Mensagem"
        className="min-h-32"
      />

      {interests && interests.length > 0 && (
        <div>
          <p className="text-sm font-medium">O que você imagina precisar?</p>
          <div className="mt-3 grid gap-3 md:grid-cols-2">
            {interests.map((option) => (
              <label
                key={option.title}
                className="flex cursor-pointer gap-3 rounded-xl border p-4 transition-colors hover:bg-muted/50"
              >
                <input
                  type="checkbox"
                  name="interesses"
                  value={option.title}
                  className="mt-1"
                />
                <span>
                  <span className="block text-sm font-medium">{option.title}</span>
                  {option.description && (
                    <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                      {option.description}
                    </span>
                  )}
                </span>
              </label>
            ))}
          </div>
        </div>
      )}

      {status === "error" && (
        <p className="text-sm text-destructive" role="alert">
          {errorMsg} Se preferir,{" "}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            fale no WhatsApp
          </a>
          .
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? (
            <>
              <Loader2Icon className="size-4 animate-spin" />
              Enviando...
            </>
          ) : (
            <>
              {submitLabel}
              <ArrowRightIcon className="size-4" />
            </>
          )}
        </Button>
        <span className="text-xs text-muted-foreground">
          Resposta rápida • Sem compromisso
        </span>
      </div>
    </form>
  );
}
