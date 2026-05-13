"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/",           label: "Início" },
  { href: "/produtos",   label: "Produtos" },
  { href: "/privacidade", label: "Privacidade" },
  { href: "/contato",    label: "Contato" },
];

export function Header() {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#4f4f4f] bg-[#000000]/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <img src="/gnoq.png" alt="GNOQ" className="h-8 sm:h-10 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ href, label }) => (
              <Button
                key={href}
                variant="ghost"
                className={
                  isActive(href)
                    ? "text-[#4f46e5] bg-[#1a1a2e] hover:text-[#4f46e5] hover:bg-[#1a1a2e]"
                    : "text-[#dceef7] hover:text-[#4f46e5] hover:bg-[#1a1a2e]"
                }
                asChild
              >
                <Link href={href}>{label}</Link>
              </Button>
            ))}
          </nav>

          {/* Mobile — hamburger */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-[#dceef7] hover:bg-[#1a1a2e]"
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-75 sm:w-100 bg-[#000000] border-l border-[#4f4f4f] p-5"
              >
                <SheetHeader>
                  <SheetTitle>
                    <img src="/gnoq.png" alt="GNOQ" className="h-8 w-auto" />
                  </SheetTitle>
                </SheetHeader>

                <nav className="flex flex-col gap-1 mt-10">
                  {navLinks.map(({ href, label }) => (
                    <Link
                      key={href}
                      href={href}
                      className={`rounded-lg px-4 py-3 text-xl font-medium transition-colors ${
                        isActive(href)
                          ? "text-[#4f46e5] bg-[#1a1a2e]"
                          : "text-[#dceef7] hover:text-[#4f46e5] hover:bg-[#1a1a2e]"
                      }`}
                    >
                      {label}
                    </Link>
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