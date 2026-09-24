import { whatsappLink } from "@/shared/constants/contact.constants";
import { ArrowUpRight } from "lucide-react";
import type { HomeSolution } from "../types/home.types";
interface SolutionCardProps {
  solution: HomeSolution;
}
export function SolutionCard({ solution }: SolutionCardProps) {
  const Icon = solution.icon;
  return (
    <article
      className="solution"
      key={solution.number}
      data-reveal
      data-delay={(Number(solution.number) - 1) * 80}
    >
      <div className="solution-top">
        <Icon size={27} strokeWidth={1.4} />
        <span>{solution.number}</span>
      </div>
      <p className="solution-tag">{solution.tags}</p>
      <h3>{solution.title}</h3>
      <p className="solution-description">{solution.description}</p>
      <a
        className="solution-link"
        href={whatsappLink(solution.message)}
        target="_blank"
        rel="noopener noreferrer"
      >
        Conversar sobre essa solução <ArrowUpRight size={19} />
      </a>
    </article>
  );
}
