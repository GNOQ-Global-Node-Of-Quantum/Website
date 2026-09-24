import { Logo } from "@/shared/components/Logo/Logo";
import { Button } from "@/shared/components/ui/button";
import {
WHATSAPP_DISPLAY,
whatsappLink,
} from "@/shared/constants/contact.constants";
import { header_routes } from "@/shared/constants/header.constants";
import { ArrowRightIcon,MailIcon,MessageCircleIcon } from "lucide-react";
import Link from "next/link";

const solutionLinks = [
  "ERPs e sistemas internos",
  "Painéis de BI",
  "Automações",
  "Apps e plataformas",
  "Sites e landing pages",
  "Jogos e experiências",
  "MVPs e validação",
];

export function AppFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.1fr_0.7fr_0.7fr_1fr]">
        <div className="flex flex-col gap-5">
          <Link href="/" className="flex items-center text-primary">
            <Logo className="h-7" />
          </Link>

          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            Soluções digitais sob medida para empresas que precisam organizar
            operação, transformar dados em decisão, vender melhor ou criar novos
            produtos.
          </p>

          <div className="grid gap-2 text-sm">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <MessageCircleIcon className="size-4" />
              WhatsApp {WHATSAPP_DISPLAY}
            </a>
            <a
              href="mailto:gabriel.neves@gnoq.com.br"
              className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <MailIcon className="size-4" />
              gabriel.neves@gnoq.com.br
            </a>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold">Navegação</p>
          <nav className="mt-4 grid gap-3">
            {header_routes.map((route) => (
              <Link
                key={route.id}
                href={route.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {route.name}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-sm font-semibold">Soluções</p>
          <div className="mt-4 grid gap-3">
            {solutionLinks.map((solution) => (
              <span key={solution} className="text-sm text-muted-foreground">
                {solution}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border bg-background p-5">
          <p className="text-sm font-semibold">Comece pelo diagnóstico</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Conte o problema, o objetivo e o momento da empresa. A GNOQ ajuda a
            clarear o melhor caminho antes de falar em escopo.
          </p>
          <Button
            nativeButton={false}
            className="mt-5"
            render={<Link href="/diagnostico" />}
          >
            Solicitar diagnóstico
            <ArrowRightIcon className="size-4" />
          </Button>
        </div>
      </div>

      <div className="border-t">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} GNOQ. Todos os direitos reservados.</p>
          <p>Presença, escuta e tecnologia sob medida.</p>
        </div>
      </div>
    </footer>
  );
}
