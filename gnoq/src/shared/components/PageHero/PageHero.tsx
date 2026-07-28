import { cn } from "@/shared/lib/utils";
import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  description: string;
  eyebrow?: string;
  className?: string;
  actions?: ReactNode;
  aside?: ReactNode;
}

export function PageHero({
  title,
  description,
  eyebrow,
  className,
  actions,
  aside,
}: PageHeroProps) {
  return (
    <section className={cn("border-b bg-background px-6 py-16 md:py-24", className)}>
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.7fr] lg:items-end">
        <div className="flex max-w-4xl flex-col gap-6">
          {eyebrow && (
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              {eyebrow}
            </p>
          )}

          <div className="space-y-4">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              {title}
            </h1>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
              {description}
            </p>
          </div>

          {actions && (
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              {actions}
            </div>
          )}
        </div>

        {aside && <div className="lg:justify-self-end">{aside}</div>}
      </div>
    </section>
  );
}
