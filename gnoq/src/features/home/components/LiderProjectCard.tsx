import { ArrowUpRight } from "lucide-react";

import { services } from "../data/lider.data";

export function LiderProjectCard() {
  return (
    <article
      className="project-card lider-card"
      data-reveal
      data-delay="100"
      aria-labelledby="lider-name"
    >
      <header className="lider-header">
        <p className="project-sector">Trade marketing e merchandising</p>
        <h3 id="lider-name">Lider Field Marketing</h3>
        <p className="lider-company">
          Desde 1994, a Lider atua em todo o Brasil com soluções para pontos de
          venda, incluindo equipes exclusivas, compartilhadas e temporárias.
        </p>
      </header>
      <div className="lider-scope">
        <h4>O que a GNOQ faz hoje</h4>
        <ul className="lider-services">
          {services.map(({ icon: Icon, title, description }) => (
            <li key={title}>
              <span className="lider-service-icon" aria-hidden="true">
                <Icon size={21} strokeWidth={1.6} />
              </span>
              <div>
                <h5>{title}</h5>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <a
        className="lider-website"
        href="https://liderfield.com.br/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Conheça a Lider Field <ArrowUpRight size={18} aria-hidden="true" />
      </a>
    </article>
  );
}
