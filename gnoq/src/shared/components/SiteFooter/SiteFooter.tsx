import { Logo } from "@/shared/components/Logo/Logo";
import { ArrowUpRight } from "lucide-react";
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <a
          href="#inicio"
          className="brand-link"
          draggable={false}
          aria-label="GNOQ — voltar ao início"
        >
          <Logo variant="white" />
        </a>
        <p>
          Negócio, pessoas e tecnologia.
          <br />
          Conectados para construir.
        </p>
        <a className="text-link" href="#inicio">
          Voltar ao topo <ArrowUpRight size={16} />
        </a>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} GNOQ. Todos os direitos reservados.
        </span>
        <span>Software sob medida. Relações de perto.</span>
      </div>
    </footer>
  );
}
