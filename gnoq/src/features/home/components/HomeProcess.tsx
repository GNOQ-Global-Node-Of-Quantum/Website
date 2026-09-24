import { ProcessStepCard } from "@/features/home/components/ProcessStepCard";
import { steps } from "@/features/home/data/home.data";
export function HomeProcess() {
  return (
    <section
      className="process-section"
      id="processo"
      aria-labelledby="process-title"
    >
      <div className="container section">
        <div className="section-heading" data-reveal>
          <div>
            <p className="eyebrow">02 / NOSSO JEITO DE TRABALHAR</p>
            <h2 id="process-title">
              Primeiro, o seu negócio.
              <br />
              Depois, cada linha de código.
            </h2>
          </div>
          <p>
            Escuta, proximidade e clareza.
            <br />
            Do problema à solução, construímos juntos.
          </p>
        </div>
        <div className="steps-grid">
          {steps.map((step) => (
            <ProcessStepCard key={step.number} step={step} />
          ))}
        </div>
      </div>
    </section>
  );
}
