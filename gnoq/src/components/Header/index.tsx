// app/components/Header.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  return (
    <header className="w-full border-b border-[#4f4f4f] bg-[#000000]">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <img src="/gnoq.png" alt="GNOQ" className="h-8 sm:h-10 w-auto"/>
          </Link>

          {/* Desktop - Botões / links (exemplo) */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              className="text-[#dceef7] hover:text-[#4f46e5] hover:bg-[#1a1a2e]"
            >
              Início
            </Button>
            <Button
              variant="ghost"
              className="text-[#dceef7] hover:text-[#4f46e5] hover:bg-[#1a1a2e]"
            >
              Produtos
            </Button>
            <Button
              variant="ghost"
              className="text-[#dceef7] hover:text-[#4f46e5] hover:bg-[#1a1a2e]"
            >
              Contato
            </Button>
          </div>

          {/* Mobile - Menu hamburguer */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-[#dceef7] hover:bg-[#1a1a2e]">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Abrir menu</span>
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-75 sm:w-100 bg-[#000000] border-l-[#4f4f4f] p-5">
                <SheetHeader>
                  <SheetTitle><img src="/gnoq.png" alt="GNOQ" className="h-8 sm:h-10 w-auto"/></SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-6 mt-10">
                  <Link href="/" className="text-xl font-medium text-[#dceef7] hover:text-[#4f46e5]">
                    Início
                  </Link>
                  <Link href="/produtos" className="text-xl font-medium text-[#dceef7] hover:text-[#4f46e5]">
                    Produtos
                  </Link>
                  <Link
                    href="/contato"
                    className="text-xl font-medium text-[#dceef7] hover:text-[#4f46e5]"
                  >
                    Contato
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}