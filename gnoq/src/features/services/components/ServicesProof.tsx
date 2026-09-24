import { proof_points } from "@/features/services/constants/services.constants";
import { Badge } from "@/shared/components/ui/badge";

export function ServicesProof() {
  return (
    <section className="border-y bg-foreground text-background">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div className="flex flex-col gap-3">
          <Badge className="w-fit bg-background/15 text-background hover:bg-background/20">
            Prova de capacidade
          </Badge>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Projetos digitais precisam resolver problemas reais.
          </h2>
          <p className="text-background/75">
            A GNOQ combina desenvolvimento, produto e visão de negócio para
            construir soluções que façam sentido no contexto da empresa.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {proof_points.map((point) => (
            <div
              key={point.titulo}
              className="rounded-xl border border-background/15 bg-background/10 p-5"
            >
              <point.icon className="size-5 text-background" />
              <h3 className="mt-4 font-semibold">{point.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-background/70">
                {point.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
