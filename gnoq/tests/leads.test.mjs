import assert from "node:assert/strict";
import { test } from "node:test";
import {
  leadSchema,
  leadResponseSchema,
} from "../src/features/leads/schemas/lead.schema.ts";
import { renderLeadEmail } from "../src/features/leads/server/render-lead-email.ts";

test("lead validation rejects malformed and incomplete external values", () => {
  for (const value of [
    null,
    123,
    [],
    {},
    { nome: "A", email: "invalid" },
    { nome: "Ana", email: "ana@example.com", interesses: [42] },
  ]) {
    assert.equal(leadSchema.safeParse(value).success, false);
  }
});
test("minimal lead receives the same defaults", () => {
  const lead = leadSchema.parse({ nome: "Ana", email: "ana@example.com" });
  assert.equal(lead.origin, "site");
  assert.equal(lead.mensagem, "");
  assert.deepEqual(lead.interesses, []);
});
test("API responses must explicitly report success or a message", () => {
  for (const value of [{}, { ok: false }, { error: 42 }, null])
    assert.equal(leadResponseSchema.safeParse(value).success, false);
  assert.equal(leadResponseSchema.safeParse({ ok: true }).success, true);
  assert.equal(
    leadResponseSchema.safeParse({ error: "Indisponível" }).success,
    true,
  );
});
test("lead email escapes contact fields and free text", () => {
  const lead = leadSchema.parse({
    nome: '<img src=x onerror="alert(1)">',
    email: "ana@example.com",
    mensagem: "<script>alert(1)</script> & texto",
  });
  const html = renderLeadEmail(lead);
  assert.ok(html.includes("&lt;img"));
  assert.ok(html.includes("&lt;script&gt;"));
  assert.ok(html.includes("&amp; texto"));
  assert.equal(html.includes("<script>"), false);
  assert.equal(html.includes("<img"), false);
});
