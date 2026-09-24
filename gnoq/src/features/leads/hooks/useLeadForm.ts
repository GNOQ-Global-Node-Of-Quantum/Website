"use client";
import { useState, type FormEvent } from "react";
import { submitLead } from "../services/submit-lead";
import type { Lead, LeadFormState, LeadFormStatus } from "../types/lead.types";
export function useLeadForm(origin: string): LeadFormState {
  const [status, setStatus] = useState<LeadFormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "loading") return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload: Lead = {
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
      await submitLead(payload);

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Não foi possível enviar.",
      );
    }
  }

  return { status, errorMsg, handleSubmit };
}
