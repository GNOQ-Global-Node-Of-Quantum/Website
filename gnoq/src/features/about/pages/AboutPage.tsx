import { AboutHero } from "@/features/about/components/AboutHero";
import { AboutImmersion } from "@/features/about/components/AboutImmersion";
import { AboutPrinciples } from "@/features/about/components/AboutPrinciples";

export function AboutPage() {
  return (
    <main>
      <AboutHero />
      <AboutPrinciples />
      <AboutImmersion />
    </main>
  );
}
