import { HeroVisual } from "@/features/home/components/HeroVisual";
import { whatsappLink } from "@/shared/constants/contact.constants";
import { ArrowDown, ArrowUpRight, Check } from "lucide-react";
export function HomeHero() {
  return (
    <section
      className="hero container"
      id="inicio"
      aria-labelledby="hero-title"
    >
      <div className="hero-copy" data-reveal>
        <p className="eyebrow">
          <span className="status-dot" /> TECNOLOGIA COM VISÃO DE NEGÓCIO
        </p>
        <h1 id="hero-title">
          Software sob medida.
          <br />
          <span>
            Seu negócio,
            <br />
            um passo à frente.
          </span>
        </h1>
        <p className="hero-description">
          Desenvolvemos sistemas, sites e aplicativos para simplificar sua
          operação, conectar informações e criar novas oportunidades de negócio.
        </p>
        <div className="hero-actions">
          <a
            className="button"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Conversar sobre meu projeto <ArrowUpRight size={19} />
          </a>
          <a className="text-link" href="#solucoes">
            Explore as soluções <ArrowDown size={16} />
          </a>
        </div>
        <p className="hero-note">
          <Check size={14} /> Não precisa ter um escopo pronto. Comece pelo
          problema.
        </p>
      </div>
      <HeroVisual />
    </section>
  );
}
