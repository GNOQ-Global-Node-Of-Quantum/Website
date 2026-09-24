import { DiagnosisHero } from "@/features/diagnostico/components/DiagnosisHero";
import { DiagnosisNextSteps } from "@/features/diagnostico/components/DiagnosisNextSteps";
import { DiagnosisRequest } from "@/features/diagnostico/components/DiagnosisRequest";

export function DiagnosticoPage() {
  return (
    <main>
      <DiagnosisHero />
      <DiagnosisRequest />
      <DiagnosisNextSteps />
    </main>
  );
}
