import { CasesHero } from "@/features/cases/components/CasesHero";
import { CasesOverview } from "@/features/cases/components/CasesOverview";

export function CasesPage() {
  return (
    <main>
      <CasesHero />
      <CasesOverview />
    </main>
  );
}
