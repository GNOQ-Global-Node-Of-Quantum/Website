import { SolicitarOrcamento } from "@/components/SolicitarOrcamento";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-85px)] bg-black text-white flex items-center justify-center px-6">
      <section className="max-w-4xl text-center space-y-6">
        
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Engenharia digital para empresas que pensam à frente.
        </h1>

        <p className="text-lg md:text-xl text-gray-400">
          Sistemas modernos, arquitetura escalável e soluções sob medida 
          para quem quer crescer sem limites.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <SolicitarOrcamento />

          <Button className="px-6 py-3 border border-gray-700 hover:border-gray-500 transition rounded-xl font-medium">
            Conhecer Soluções
          </Button>
        </div>

      </section>
    </main>
  );
}