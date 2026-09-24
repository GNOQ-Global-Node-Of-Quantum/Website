"use client";

import { Logo } from "@/shared/components/Logo/Logo";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

import { siteNavigation } from "@/shared/constants/site-navigation.constants";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape") setOpen(false);
      }}
    >
      <div className="container header-inner">
        <a
          href="#inicio"
          className="brand-link"
          draggable={false}
          aria-label="GNOQ — início"
          onClick={() => setOpen(false)}
        >
          <Logo />
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {siteNavigation.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <a className="button button-small header-contact" href="#contato">
          Vamos conversar <ArrowUpRight size={16} />
        </a>
        <button
          className="menu-toggle"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-menu"
          className="mobile-nav"
          aria-label="Navegação móvel"
        >
          {[
            ...siteNavigation,
            { href: "#contato", label: "Vamos conversar" },
          ].map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
              <ArrowUpRight size={16} />
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
