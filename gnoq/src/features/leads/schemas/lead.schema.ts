import { z } from "zod";
export const leadSchema = z.object({
  // Honeypot: real users leave this empty; bots fill it.
  company_website: z.string().optional(),
  origin: z.string().default("site"),
  nome: z.string().min(2, "Informe seu nome.").max(120),
  empresa: z.string().max(160).optional().default(""),
  email: z.string().email("E-mail inválido."),
  whatsapp: z.string().max(40).optional().default(""),
  prazo: z.string().max(120).optional().default(""),
  orcamento: z.string().max(120).optional().default(""),
  mensagem: z.string().max(4000).optional().default(""),
  interesses: z.array(z.string().max(120)).optional().default([]),
});

export const leadResponseSchema = z.union([
  z.object({ ok: z.literal(true) }),
  z.object({ error: z.string() }),
]);
