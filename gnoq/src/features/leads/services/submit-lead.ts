import { leadResponseSchema } from "../schemas/lead.schema";
import type { Lead } from "../types/lead.types";

export async function submitLead(payload: Lead): Promise<void> {
  const response = await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const result = leadResponseSchema.safeParse(
    await response.json().catch(() => null),
  );
  if (!result.success) throw new Error("Não foi possível enviar.");
  if ("error" in result.data) throw new Error(result.data.error);
  if (!response.ok) throw new Error("Não foi possível enviar.");
}
