import { ServiceCard } from "@/features/services/components/ServiceCard";
import { service_cards } from "@/features/services/constants/services.constants";
import { Badge } from "@/shared/components/ui/badge";

export function ServicesCatalog() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14">
      <div className="flex max-w-3xl flex-col gap-3">
        <Badge variant="outline" className="w-fit">
          Serviços
        </Badge>
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Escolha pelo problema que sua empresa precisa resolver.
        </h2>
        <p className="text-muted-foreground">
          Cada frente abaixo pode virar um projeto completo ou um primeiro MVP
          para validar o caminho com menos risco.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {service_cards.map((card) => (
          <ServiceCard key={card.titulo} card={card} />
        ))}
      </div>
    </section>
  );
}
