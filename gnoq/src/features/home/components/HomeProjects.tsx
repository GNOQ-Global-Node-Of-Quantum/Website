import { LiderProjectCard } from "@/features/home/components/LiderProjectCard";
import { whatsappLink } from "@/shared/constants/contact.constants";
import { ArrowUpRight } from "lucide-react";
export function HomeProjects() {
  return (
    <section
      className="section container project-section"
      id="projetos"
      aria-labelledby="project-title"
    >
      <div className="project-intro" data-reveal>
        <p className="eyebrow">03 / CLIENTES</p>
        <h2 id="project-title">
          Quem constrói
          <br />
          com a GNOQ.
        </h2>
        <p>
          Conheça nossos clientes e as soluções que desenvolvemos para os desafios
          de cada negócio.
        </p>
        <a
          className="text-link"
          href={whatsappLink(
            "Olá! Quero entender como a GNOQ pode ajudar na operação da minha empresa.",
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          Converse sobre seu projeto <ArrowUpRight size={18} />
        </a>
      </div>
      <LiderProjectCard />
    </section>
  );
}
