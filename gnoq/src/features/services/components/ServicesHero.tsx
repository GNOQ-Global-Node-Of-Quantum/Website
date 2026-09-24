import { PageHero } from "@/shared/components/PageHero/PageHero";
import { Button } from "@/shared/components/ui/button";
import Link from "next/link";

export function ServicesHero() {
  return (
    <PageHero
      eyebrow="Serviços"
      title="Soluções digitais para empresas que precisam vender, automatizar ou criar novos produtos."
      description="A GNOQ desenvolve apps, sites, sistemas, automações, jogos e MVPs sob medida, sempre partindo do problema de negócio antes da tecnologia."
      actions={[
        <Button
          key="diagnostico"
          nativeButton={false}
          render={<Link href="/diagnostico" />}
        >
          Solicitar diagnóstico
        </Button>,
        <Button
          key="processo"
          nativeButton={false}
          variant="outline"
          render={<Link href="#como-trabalhamos" />}
        >
          Ver como trabalhamos
        </Button>,
      ]}
    />
  );
}
