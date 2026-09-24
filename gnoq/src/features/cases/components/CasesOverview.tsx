import { caseItems, proofItems } from "@/features/cases/data/cases.data";
import { Badge } from "@/shared/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Building2Icon, CheckIcon } from "lucide-react";

export function CasesOverview() {
  return (
    <section className="mx-auto grid max-w-7xl gap-6 px-6 py-14 lg:grid-cols-[1.1fr_0.9fr]">
      <Card>
        <CardHeader>
          <div className="flex size-11 items-center justify-center rounded-xl bg-muted">
            <Building2Icon className="size-5" />
          </div>
          <div className="space-y-2">
            <Badge variant="outline" className="w-fit">
              Field marketing e serviços
            </Badge>
            <CardTitle className="text-2xl">
              Lider Field Marketing e Serviços
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-5">
          <p className="leading-relaxed text-muted-foreground">
            Desenvolvimento de ERP sob medida e painéis de BI integrados para
            apoiar operação, gestão e análise de dados da empresa.
          </p>
          <div className="grid gap-4 rounded-xl border bg-muted/30 p-4 md:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Desafio
              </p>
              <p className="mt-2 text-sm leading-relaxed">
                Organizar processos, centralizar informações e transformar dados
                operacionais em visão gerencial.
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Solução
              </p>
              <p className="mt-2 text-sm leading-relaxed">
                ERP personalizado com painéis de BI conectados ao sistema.
              </p>
            </div>
          </div>
          <div className="grid gap-3">
            {caseItems.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm">
                <CheckIcon className="size-4" />
                {item}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        {proofItems.map((item) => (
          <div key={item.title} className="rounded-xl border p-5">
            <p className="font-medium">{item.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
