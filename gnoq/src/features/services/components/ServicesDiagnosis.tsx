import { service_matches } from "@/features/services/constants/services.constants";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export function ServicesDiagnosis() {
  return (
    <section id="diagnostico" className="border-y bg-muted/30">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="flex flex-col gap-3">
          <Badge variant="outline" className="w-fit bg-background">
            Diagnóstico
          </Badge>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Não sabe exatamente do que precisa?
          </h2>
          <p className="text-muted-foreground">
            Muitas vezes o cliente chega pedindo uma tecnologia, mas o primeiro
            passo é entender a dor e escolher a solução certa.
          </p>
          <Button
            nativeButton={false}
            className="mt-2 w-fit"
            render={<Link href="/diagnostico" />}
          >
            Solicitar diagnóstico
          </Button>
        </div>

        <div className="grid gap-3">
          {service_matches.map((match) => (
            <div
              key={match.pensamento}
              className="grid gap-3 rounded-xl border bg-background p-4 md:grid-cols-[1fr_auto_1fr] md:items-center"
            >
              <p className="text-sm font-medium">"{match.pensamento}"</p>
              <ArrowRightIcon className="hidden size-4 text-muted-foreground md:block" />
              <p className="text-sm text-muted-foreground">{match.solucao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
