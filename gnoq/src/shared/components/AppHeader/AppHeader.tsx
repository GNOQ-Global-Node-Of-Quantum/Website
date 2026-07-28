"use client";

import { header_routes } from "@/shared/constants/header.contansts";
import { cn } from "@/shared/lib/utils";
import { MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function AppHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center gap-8 px-6">
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-3"
          aria-label="Ir para a página inicial da GNOQ"
        >
          <span className="flex size-10 items-center justify-center rounded-xl border bg-foreground text-sm font-semibold text-background">
            G
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-semibold tracking-tight">GNOQ</span>
            <span className="mt-1 text-xs text-muted-foreground">
              Digital studio
            </span>
          </span>
        </Link>

        <nav
          className="ml-auto hidden items-center gap-1 md:flex"
          aria-label="Menu principal"
        >
          {header_routes.map((route) => {
            const isActive = pathname === route.href;

            return (
              <Link
                key={route.id}
                href={route.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                  isActive && "bg-muted text-foreground",
                )}
              >
                {route.name}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex size-9 items-center justify-center rounded-lg border bg-background md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <XIcon className="size-4" /> : <MenuIcon className="size-4" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t bg-background px-6 py-4 md:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2" aria-label="Menu mobile">
            {header_routes.map((route) => {
              const isActive = pathname === route.href;

              return (
                <Link
                  key={route.id}
                  href={route.href}
                  onClick={closeMenu}
                  className={cn(
                    "rounded-lg px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                    isActive && "bg-muted text-foreground",
                  )}
                >
                  {route.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
