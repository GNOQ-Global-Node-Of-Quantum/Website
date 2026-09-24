import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { ArrowRightIcon, CheckIcon } from "lucide-react";
import Link from "next/link";
import type { ServiceCard as ServiceCardData } from "../types/services.types";
interface ServiceCardProps {
  card: ServiceCardData;
}
export function ServiceCard({ card }: ServiceCardProps) {
  return (
    <Card
      key={card.titulo}
      className="relative justify-between transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <CardHeader className="gap-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <div
              className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${card.accentClassName}`}
            >
              <card.icon className="size-5" />
            </div>
            <div className="space-y-1">
              <CardTitle className="text-xl">{card.titulo}</CardTitle>
              <CardDescription>{card.oferta}</CardDescription>
            </div>
          </div>
          <Badge variant="secondary" className="hidden md:inline-flex">
            Sob medida
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col gap-5">
        <div className="rounded-lg border bg-muted/30 p-4">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Dor comum
          </p>
          <p className="mt-2 text-sm font-medium leading-relaxed">{card.dor}</p>
        </div>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {card.texto}
        </p>

        <div className="grid gap-4 md:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-sm font-medium">Ideal para</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {card.idealPara}
            </p>
          </div>

          <div>
            <p className="text-sm font-medium">Entregas possíveis</p>
            <ul className="mt-2 grid gap-2">
              {card.entregas.map((entrega) => (
                <li
                  key={entrega}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <CheckIcon className="size-4 text-foreground" />
                  {entrega}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-lg bg-foreground p-4 text-background">
          <p className="text-xs font-medium uppercase tracking-wide text-background/70">
            Resultado esperado
          </p>
          <p className="mt-2 text-sm font-medium leading-relaxed">
            {card.resultado}
          </p>
        </div>
      </CardContent>

      <CardFooter>
        <Button
          nativeButton={false}
          className="w-full"
          render={<Link href="/diagnostico" />}
        >
          {card.cta}
          <ArrowRightIcon className="size-4" />
        </Button>
      </CardFooter>
    </Card>
  );
}
