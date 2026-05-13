"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/",            label: "Início" },
  { href: "/produtos",    label: "Produtos" },
  { href: "/privacidade", label: "Privacidade" },
  { href: "/contato",     label: "Contato" },
];

export function Header() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-gray-100/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">

          {/* Logo — troque por /gnoq-light.png quando tiver a versão para fundo claro */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <img src="/gnoq.png" alt="GNOQ" className="h-8 sm:h-10 w-auto rounded-lg" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <Button
                key={href}
                variant="ghost"
                className={isActive(href)
                  ? "text-[#4f46e5] bg-[#4f46e5]/8 hover:bg-[#4f46e5]/10 hover:text-[#4f46e5] font-medium"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }
                asChild
              >
                <Link href={href}>{label}</Link>
              </Button>
            ))}
          </nav>

          {/* Mobile */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-600 hover:bg-gray-100">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menu</span>
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
                          ? "text-[#4f46e5] bg-[#4f46e5]/8"
                          : "text-gray-700 hover:text-[#4f46e5] hover:bg-[#4f46e5]/5"
                      }`}
                    >{label}</Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </header>
  );
}