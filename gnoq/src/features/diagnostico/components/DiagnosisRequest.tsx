import {
  diagnosis_options,
  diagnosis_trust_points,
} from "@/features/diagnostico/constants/diagnostico.constants";
import { LeadForm } from "@/features/leads";
import { Badge } from "@/shared/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";

export function DiagnosisRequest() {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[1fr_0.85fr]">
      <div className="rounded-2xl border p-6">
        <Badge variant="outline" className="w-fit">
          Solicitação
        </Badge>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight">
          Conte o cenário.
        </h2>
        <p className="mt-2 mb-6 text-sm leading-relaxed text-muted-foreground">
          Não precisa chegar com escopo pronto. O objetivo é entender o problema
          e transformar isso em um próximo passo claro.
        </p>

        <LeadForm
          origin="diagnóstico"
          showProjectFields
          submitLabel="Enviar diagnóstico"
          interests={diagnosis_options.map((option) => ({
            title: option.title,
            description: option.description,
          }))}
        />
      </div>

      <aside className="grid gap-4">
        {diagnosis_trust_points.map((point) => (
          <Card key={point.title}>
            <CardHeader>
              <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                <point.icon className="size-5" />
              </div>
              <CardTitle>{point.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {point.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </aside>
    </section>
  );
}
