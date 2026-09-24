import { diagnosis_steps } from "@/features/diagnostico/constants/diagnostico.constants";
import { Badge } from "@/shared/components/ui/badge";

export function DiagnosisNextSteps() {
  return (
    <section className="border-y bg-muted/30">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14">
        <div className="flex max-w-3xl flex-col gap-3">
          <Badge variant="outline" className="w-fit bg-background">
            Depois do envio
          </Badge>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            O diagnóstico transforma dúvida em direção.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {diagnosis_steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-2xl border bg-background p-5"
            >
              <p className="text-sm font-medium text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
