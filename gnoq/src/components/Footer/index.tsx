// components/Footer/index.tsx
import Link from "next/link";
import { Github, Instagram, Linkedin, Mail } from "lucide-react";

const footerLinks = [
  { href: "/produtos",    label: "Produtos" },
  { href: "/privacidade", label: "Privacidade" },
  { href: "/contato",     label: "Contato" },
];

const socials = [
  { href: "https://www.linkedin.com/company/gnoq/", icon: <Linkedin className="h-4 w-4" />, label: "LinkedIn" },
  { href: "https://www.instagram.com/gnoq.br/",    icon: <Instagram className="h-4 w-4" />, label: "Instagram" },
  { href: "https://github.com/GNOQ-Global-Node-Of-Quantum", icon: <Github className="h-4 w-4" />, label: "GitHub" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-100 border-t border-gray-200 text-gray-600">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Main grid */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">

          {/* Col 1 — Logo + descrição */}
          <div className="space-y-5">
            <Link href="/" className="inline-block">
              {/* Troque por /gnoq-light.png quando tiver a versão para fundo claro */}
              <img src="/gnoq.png" alt="GNOQ" className="h-20 w-auto rounded-lg" />
            </Link>
            <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
              Engenharia digital para empresas que pensam à frente. Sistemas robustos,
              escaláveis e sob medida que transformam processos em vantagem competitiva.
            </p>
            {/* Sociais no mobile */}
            <div className="flex items-center gap-3 md:hidden pt-1">
              {socials.map(({ href, icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:border-[#0F4C81]/30 hover:text-[#0F4C81] hover:bg-[#0F4C81]/5 transition-all duration-200"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Links */}
          <div className="space-y-5">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-widest">Navegação</h3>
            <ul className="space-y-3">
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-gray-500 hover:text-[#0F4C81] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contato + sociais */}
          <div className="space-y-5">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-widest">Contato</h3>

            <a href="mailto:gabriel.neves@gnoq.com.br"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#0F4C81] transition-colors"
            >
              <Mail className="h-4 w-4" />
              gabriel.neves@gnoq.com.br
            </a>

            {/* Sociais no desktop */}
            <div className="hidden md:flex items-center gap-3 pt-1">
              {socials.map(({ href, icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:border-[#0F4C81]/30 hover:text-[#0F4C81] hover:bg-[#0F4C81]/5 transition-all duration-200"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-100 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
            <p>© {currentYear} GNOQ — Global Node Of Quantum · CNPJ 57.738.857/0001-20</p>
            <div className="flex items-center gap-5">
              <Link href="/privacidade" className="hover:text-[#0F4C81] transition-colors">Privacidade</Link>
              <Link href="/privacidade" className="hover:text-[#0F4C81] transition-colors">Termos</Link>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}