import { PageHero } from "@/shared/components/PageHero/PageHero";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { equipe, equipe_hierarquia } from "@/shared/data/equipe.data";
import { cn } from "@/shared/lib/utils";
import { ArrowRightIcon, UserIcon } from "lucide-react";
import Link from "next/link";

export function TeamPage() {
  const membersById = new Map(equipe.map((member) => [member.id, member]));

  return (
    <main>
      <PageHero
        eyebrow="Equipe"
        title="Tecnologia é feita por pessoas que entendem contexto."
        description="A GNOQ combina desenvolvimento, produto e visão de negócio para criar soluções digitais sob medida."
        actions={[
          <Button
            key="contact"
            nativeButton={false}
            render={<Link href="/diagnostico" />}
          >
            Conversar com a equipe
            <ArrowRightIcon className="size-4" />
          </Button>,
        ]}
      />

      <section className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14">
        <div className="flex max-w-3xl flex-col gap-3">
          <Badge variant="outline" className="w-fit">
            Quem constrói
          </Badge>
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Um time próximo para entender, construir e evoluir.
          </h2>
        </div>

        <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center gap-8">
          {equipe_hierarquia.map((area, areaIndex) => (
            <div
              key={area.title}
              className="relative flex w-full flex-col items-center gap-4"
            >
              {areaIndex > 0 && (
                <div className="hidden h-8 w-px bg-border md:block" />
              )}

              <div className="flex max-w-2xl flex-col items-center gap-2 text-center">
                <Badge variant="outline" className="bg-background">
                  {area.title}
                </Badge>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {area.description}
                </p>
              </div>

              <div
                className={cn(
                  "grid w-full gap-5",
                  area.memberIds.length === 1
                    ? "mx-auto max-w-xl"
                    : "md:grid-cols-2",
                )}
              >
                {area.memberIds.map((memberId) => {
                  const member = membersById.get(memberId);

                  if (!member) {
                    return null;
                  }

                  return (
                    <Card key={member.id} className="bg-background">
                      <CardHeader>
                        <div className="flex size-14 items-center justify-center rounded-2xl bg-muted">
                          <UserIcon className="size-6" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">
                            {member.nome}
                          </CardTitle>
                          <p className="mt-1 text-sm text-muted-foreground">
                            {member.papel}
                          </p>
                          <p className="mt-2 text-sm font-medium">
                            {member.especialidade}
                          </p>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-5">
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {member.bio}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
