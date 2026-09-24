import { ServicesCatalog } from "@/features/services/components/ServicesCatalog";
import { ServicesContact } from "@/features/services/components/ServicesContact";
import { ServicesDiagnosis } from "@/features/services/components/ServicesDiagnosis";
import { ServicesHero } from "@/features/services/components/ServicesHero";
import { ServicesProcess } from "@/features/services/components/ServicesProcess";
import { ServicesProof } from "@/features/services/components/ServicesProof";

export function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesCatalog />
      <ServicesDiagnosis />
      <ServicesProcess />
      <ServicesProof />
      <ServicesContact />
    </main>
  );
}
