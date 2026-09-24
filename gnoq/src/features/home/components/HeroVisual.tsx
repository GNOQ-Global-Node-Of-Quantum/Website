import { HomeMotion } from "@/features/home/components/HomeMotion";
import { ArrowUpRight, Code2 } from "lucide-react";
export function HeroVisual() {
  return (
    <div
      className="hero-visual"
      data-reveal
      data-delay="140"
      aria-label="Do desafio à solução: estratégia, desenvolvimento e evolução"
    >
      <div className="visual-topline">
        <span>CONEXÕES QUE TRANSFORMAM</span>
        <HomeMotion />
      </div>
      <div className="orbit-field" aria-hidden="true">
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="orbit orbit-three" />
        <div className="orbit-center">
          <Code2 strokeWidth={1.3} size={42} />
        </div>
        <span className="orbit-point point-one" />
        <span className="orbit-point point-two" />
        <span className="orbit-point point-three" />
        <span className="orbit-label label-one">Estratégia</span>
        <span className="orbit-label label-two">Desenvolvimento</span>
        <span className="orbit-label label-three">Evolução</span>
      </div>
      <a className="visual-bottom" href="#solucoes">
        <span>
          Seu negócio no centro.
          <br />
          <strong>Explore as soluções para sua empresa.</strong>
        </span>
        <ArrowUpRight size={25} strokeWidth={1.2} aria-hidden="true" />
      </a>
    </div>
  );
}
