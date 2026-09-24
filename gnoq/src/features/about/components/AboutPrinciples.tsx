import { principles, steps } from "@/features/about/data/about.data";
import { Badge } from "@/shared/components/ui/badge";
import { CheckIcon } from "lucide-react";

export function AboutPrinciples() {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-2">
      <div className="rounded-2xl border p-6">
        <Badge variant="outline" className="w-fit">
          Princípios
        </Badge>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight">
          Como pensamos projetos digitais.
        </h2>
        <div className="mt-6 grid gap-3">
          {principles.map((principle) => (
            <div key={principle} className="flex items-center gap-2 text-sm">
              <CheckIcon className="size-4" />
              {principle}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl border bg-muted/30 p-6">
        <Badge variant="outline" className="w-fit bg-background">
          Processo
        </Badge>
        <h2 className="mt-4 text-2xl font-semibold tracking-tight">
          Do entendimento à evolução.
        </h2>
        <div className="mt-6 grid gap-3">
          {steps.map((step, index) => (
            <div key={step} className="rounded-xl border bg-background p-4">
              <p className="text-sm font-medium text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-1 font-medium">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
