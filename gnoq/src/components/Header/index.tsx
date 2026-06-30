"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Languages, Menu } from "lucide-react";
import { useLanguage } from "@/app/shared/features/language-context";
import {
  Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const pathname = usePathname();
  const { content, language, toggleLanguage } = useLanguage();
  const navLinks = content.nav;
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-gray-100/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">

          {/* Logo — troque por /gnoq-light.png quando tiver a versão para fundo claro */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <img src="/gnoq.png" alt="GNOQ" className="h-40 sm:h-40 w-auto rounded-lg" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <Button
                key={href}
                variant="ghost"
                className={isActive(href)
                  ? "text-[#0F4C81] bg-[#0F4C81]/8 hover:bg-[#0F4C81]/10 hover:text-[#0F4C81] font-medium"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }
                asChild
              >
                <Link href={href}>{label}</Link>
              </Button>
            ))}
            <Button
              variant="ghost"
              size="sm"
              className="ml-2 gap-1 border border-gray-200 px-3 text-[#0F4C81] hover:border-[#0F4C81]/30 hover:bg-[#0F4C81]/8 hover:text-[#0F4C81]"
              onClick={toggleLanguage}
              aria-label={content.languageToggle.label}
            >
              <Languages className="h-4 w-4" />
              <span className={language === "pt-BR" ? "font-bold text-[#0F4C81]" : "text-gray-400"}>PT</span>
              <span className="text-gray-300">|</span>
              <span className={language === "en" ? "font-bold text-[#0F4C81]" : "text-gray-400"}>EN</span>
            </Button>
          </nav>

          {/* Mobile */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-600 hover:bg-gray-100">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">{content.menuLabel}</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-75 sm:w-100 bg-gray-100 border-l border-gray-200 p-5">
                <SheetHeader>
                  <SheetTitle>
                    <img src="/gnoq.png" alt="GNOQ" className="h-8 w-auto rounded-lg" />
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-1 mt-10">
                  {navLinks.map(({ href, label }) => (
                    <Link key={href} href={href}
                      className={`rounded-lg px-4 py-3 text-xl font-medium transition-colors ${
                        isActive(href)
                          ? "text-[#0F4C81] bg-[#0F4C81]/8"
                          : "text-gray-700 hover:text-[#0F4C81] hover:bg-[#0F4C81]/5"
                      }`}
                    >{label}</Link>
                  ))}
                  <button
                    type="button"
                    onClick={toggleLanguage}
                    className="mt-3 flex items-center gap-3 rounded-lg border border-gray-200 px-4 py-3 text-left text-xl font-medium text-[#0F4C81] transition-colors hover:bg-[#0F4C81]/5"
                    aria-label={content.languageToggle.label}
                  >
                    <Languages className="h-5 w-5" />
                    <span className={language === "pt-BR" ? "font-bold text-[#0F4C81]" : "text-gray-400"}>PT</span>
                    <span className="text-gray-300">|</span>
                    <span className={language === "en" ? "font-bold text-[#0F4C81]" : "text-gray-400"}>EN</span>
                  </button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </header>
  );
}
