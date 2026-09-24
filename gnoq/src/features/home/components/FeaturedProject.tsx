import { ArrowUpRight } from "lucide-react";
export function FeaturedProject() {
  return (
    <div className="featured-proof">
      <div className="container featured-proof-inner" data-reveal>
        <p className="eyebrow">TECNOLOGIA NA PRÁTICA</p>
        <div>
          <strong>Lider Field Marketing</strong>
          <p>BI, ERP personalizado e consultoria técnica.</p>
        </div>
        <a className="text-link" href="#projetos">
          Conheça o projeto <ArrowUpRight size={17} />
        </a>
      </div>
    </div>
  );
}
