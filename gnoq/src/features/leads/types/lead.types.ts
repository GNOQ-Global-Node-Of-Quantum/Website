import type { FormEvent } from "react";
import type { z } from "zod";
import type { leadResponseSchema, leadSchema } from "../schemas/lead.schema";
export type Lead = z.infer<typeof leadSchema>;
export type LeadResponse = z.infer<typeof leadResponseSchema>;
export interface InterestOption {
  title: string;
  description?: string;
}

export interface LeadFormProps {
  /** Identifies where the lead came from (shown in the email). */
  origin: string;
  /** Optional interest checkboxes (used on the diagnóstico page). */
  interests?: readonly InterestOption[];
  /** Show prazo / orçamento fields (diagnóstico only). */
  showProjectFields?: boolean;
  submitLabel?: string;
  className?: string;
}

export type LeadFormStatus = "idle" | "loading" | "success" | "error";

export interface LeadFormState {
  readonly status: LeadFormStatus;
  readonly errorMsg: string;
  readonly handleSubmit: (event: FormEvent<HTMLFormElement>) => Promise<void>;
}
