// components/Footer.tsx
import Link from "next/link";
import { Github, Instagram, Linkedin } from "lucide-react";
import { FooterLink } from "../FooterLink";
import { SocialLink } from "../SocialLink";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#000000] border-t border-[#4f4f4f] text-[#dceef7]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {/* Coluna 1 - Logo + descrição */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <img
                src="/gnoq.png"
                alt="GNOQ"
                className="h-10 w-auto"
              />
            </Link>

            <p className="text-sm leading-relaxed text-[#9ca3af] max-w-md">
              Engenharia digital para empresas que pensam à frente.
              <br />
              Criamos sistemas robustos, escaláveis e soluções tecnológicas
              que transformam processos em vantagem competitiva real.
            </p>

            {/* Ícones sociais na versão mobile (aparecem aqui em telas pequenas) */}
            <div className="flex items-center gap-5 md:hidden">
              <SocialLink
                href="https://www.linkedin.com/company/gnoq/"
                icon={<Linkedin className="h-5 w-5" />}
                label="LinkedIn"
              />
              <SocialLink
                href="https://www.instagram.com/gnoq.br/"
                icon={<Instagram className="h-5 w-5" />}
                label="Instagram"
              />
              <SocialLink
                href="https://github.com/GNOQ-Global-Node-Of-Quantum"
                icon={<Github className="h-5 w-5" />}
                label="GitHub"
              />
            </div>
          </div>

          {/* Coluna 2 - Empresa */}
          <div className="space-y-6">
            <h3 className="text-base font-semibold text-white">Empresa</h3>
            <ul className="space-y-3 text-sm text-[#9ca3af]">
              <FooterLink href="/sobre">Sobre nós</FooterLink>
              <FooterLink href="/servicos">Serviços</FooterLink>
              <FooterLink href="/projetos">Projetos</FooterLink>
              <FooterLink href="/contato">Contato</FooterLink>
            </ul>
          </div>

          {/* Coluna 3 - Social + Contato rápido (opcional) */}
          <div className="space-y-6">
            <h3 className="text-base font-semibold text-white">Conecte-se</h3>
            <ul className="space-y-3 text-sm text-[#9ca3af] hidden md:block">
              <SocialLink
                href="https://www.linkedin.com/company/gnoq/"
                icon={<Linkedin className="h-5 w-5" />}
                label="LinkedIn"
              />
              <SocialLink
                href="https://www.instagram.com/gnoq.br/"
                icon={<Instagram className="h-5 w-5" />}
                label="Instagram"
              />
              <SocialLink
                href="https://github.com/GNOQ-Global-Node-Of-Quantum"
                icon={<Github className="h-5 w-5" />}
                label="GitHub"
              />
            </ul>

            <div className="pt-4">
              <p className="text-sm text-[#9ca3af]">
                gabriel.neves@gnoq.com.br
              </p>
            </div>
          </div>
        </div>

        {/* Linha inferior */}
        <div className="border-t border-[#4f4f4f] py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#6b7280]">
            <p>© {currentYear} GNOQ - Global Node Of Quantum</p>

            <div className="flex items-center gap-6">
              <Link href="/politica-de-privacidade" className="hover:text-[#4f46e5] transition-colors">
                Privacidade
              </Link>
              <Link href="/termos-de-uso" className="hover:text-[#4f46e5] transition-colors">
                Termos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}