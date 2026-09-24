import { SolutionCard } from "@/features/home/components/SolutionCard";
import { solutions } from "@/features/home/data/home.data";
export function HomeSolutions() {
  return (
    <section
      className="section container"
      id="solucoes"
      aria-labelledby="solutions-title"
    >
      <div className="section-heading" data-reveal>
        <div>
          <p className="eyebrow">01 / SOLUÇÕES</p>
          <h2 id="solutions-title">
            O que precisa mudar
            <br />
            no seu negócio?
          </h2>
        </div>
        <p>
          A tecnologia certa começa com a pergunta certa.
          <br />
          Encontre o ponto de partida do seu projeto.
        </p>
      </div>
      <div className="solutions-grid">
        {solutions.map((solution) => (
          <SolutionCard key={solution.number} solution={solution} />
        ))}
      </div>
    </section>
  );
}
