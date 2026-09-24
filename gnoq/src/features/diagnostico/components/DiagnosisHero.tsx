import { PageHero } from "@/shared/components/PageHero/PageHero";
import { CheckIcon } from "lucide-react";

export function DiagnosisHero() {
  return (
    <PageHero
      eyebrow="Diagnóstico"
      title="Descubra qual solução digital sua empresa precisa antes de investir errado."
      description="Conte rapidamente o problema, o momento do negócio e o que você imagina construir. A GNOQ ajuda a clarear se o caminho é site, app, sistema, automação, jogo, MVP ou algo mais simples."
      aside={
        <div className="rounded-2xl border bg-muted/30 p-5">
          <p className="text-sm font-medium">Quando usar este diagnóstico?</p>
          <div className="mt-5 grid gap-3">
            {[
              "Quando existe uma dor, mas o escopo ainda está confuso.",
              "Quando você tem uma ideia e quer validar antes de gastar.",
              "Quando a empresa precisa melhorar operação ou captação.",
            ].map((item) => (
              <div key={item} className="flex gap-2 text-sm leading-relaxed">
                <CheckIcon className="mt-0.5 size-4 shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      }
    />
  );
}
