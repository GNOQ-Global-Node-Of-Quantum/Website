import { Badge } from "@/shared/components/ui/badge";
import { MapPinIcon } from "lucide-react";

export function AboutImmersion() {
  return (
    <section className="border-y bg-muted/30">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="flex flex-col gap-3">
          <Badge variant="outline" className="w-fit bg-background">
            Diferencial
          </Badge>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Imersão no contexto do cliente.
          </h2>
        </div>

        <div className="rounded-2xl border bg-background p-6">
          <MapPinIcon className="size-5" />
          <p className="mt-4 text-lg font-semibold">
            Visitamos, observamos e ouvimos antes de propor.
          </p>
          <p className="mt-2 leading-relaxed text-muted-foreground">
            Em projetos que envolvem operação, ERP, BI, automação ou sistemas
            internos, entender a rotina presencialmente pode revelar dores que
            não aparecem em um briefing. Essa proximidade ajuda a GNOQ a
            desenhar soluções mais aderentes ao dia a dia da empresa.
          </p>
        </div>
      </div>
    </section>
  );
}
