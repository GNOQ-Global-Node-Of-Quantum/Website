import { ArrowRight } from "lucide-react";
import type { HomeProcessStep } from "../types/home.types";
interface ProcessStepCardProps {
  step: HomeProcessStep;
}
export function ProcessStepCard({ step }: ProcessStepCardProps) {
  return (
    <article
      key={step.number}
      className="step"
      data-reveal
      data-delay={(Number(step.number) - 1) * 70}
    >
      <div className="step-top">
        <span>{step.number}</span>
        <ArrowRight size={18} />
      </div>
      <h3>{step.title}</h3>
      <p>{step.text}</p>
    </article>
  );
}
