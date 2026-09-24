import { process_steps } from "@/features/services/constants/services.constants";
import { Badge } from "@/shared/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/shared/components/ui/card";

export function ServicesProcess() {
  return (
    <section
      id="como-trabalhamos"
      className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14"
    >
      <div className="flex max-w-3xl flex-col gap-3">
        <Badge variant="outline" className="w-fit">
          Como trabalhamos
        </Badge>
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Tecnologia com processo, não chute.
        </h2>
        <p className="text-muted-foreground">
          O desenvolvimento começa pela clareza do problema e evolui com
          validação, entrega e aprendizado.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
        {process_steps.map((step) => (
          <Card key={step.etapa} className="gap-5">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex size-10 items-center justify-center rounded-lg bg-muted text-foreground">
                  <step.icon className="size-5" />
                </div>
                <span className="text-sm font-semibold text-muted-foreground">
                  {step.etapa}
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold">{step.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.descricao}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
