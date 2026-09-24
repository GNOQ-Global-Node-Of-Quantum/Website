"use client";

import { LeadInterests } from "./LeadInterests";
import { LeadSuccess } from "./LeadSuccess";

import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { whatsappLink } from "@/shared/constants/contact.constants";
import { cn } from "@/shared/lib/utils";
import { ArrowRightIcon, Loader2Icon } from "lucide-react";

import { useLeadForm } from "../hooks/useLeadForm";
import type { LeadFormProps } from "../types/lead.types";

export function LeadForm({
  origin,
  interests,
  showProjectFields = false,
  submitLabel = "Enviar",
  className,
}: LeadFormProps) {
  const { status, errorMsg, handleSubmit } = useLeadForm(origin);

  if (status === "success") {
    return <LeadSuccess className={className} />;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("grid gap-4", className)}
      noValidate
    >
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
          <Input
            name="prazo"
            placeholder="Prazo desejado"
            aria-label="Prazo desejado"
          />
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
        <LeadInterests interests={interests} />
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
