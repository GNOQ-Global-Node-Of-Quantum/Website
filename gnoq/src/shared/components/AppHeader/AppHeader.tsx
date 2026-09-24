"use client";

import { Logo } from "@/shared/components/Logo/Logo";
import { Button } from "@/shared/components/ui/button";
import { header_routes } from "@/shared/constants/header.constants";
import { cn } from "@/shared/lib/utils";
import { ArrowRightIcon,MenuIcon,XIcon } from "lucide-react";
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
          className="flex items-center text-primary"
          aria-label="Ir para a página inicial da GNOQ"
        >
          <Logo className="h-7" />
        </Link>

        <nav
          className="ml-auto hidden items-center gap-1 lg:flex"
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

        <Button
          nativeButton={false}
          size="sm"
          className="ml-auto hidden lg:ml-4 lg:inline-flex"
          render={<Link href="/diagnostico" />}
        >
          Solicitar diagnóstico
          <ArrowRightIcon className="size-4" />
        </Button>

        <button
          type="button"
          className="ml-auto inline-flex size-9 items-center justify-center rounded-lg border bg-background lg:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <XIcon className="size-4" /> : <MenuIcon className="size-4" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t bg-background px-6 py-4 lg:hidden">
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
            <Button
              nativeButton={false}
              className="mt-2"
              render={<Link href="/diagnostico" onClick={closeMenu} />}
            >
              Solicitar diagnóstico
              <ArrowRightIcon className="size-4" />
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
