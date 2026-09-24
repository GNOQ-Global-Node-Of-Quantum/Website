import { TeamMemberCard } from "@/features/team/components/TeamMemberCard";
import { equipe, equipe_hierarquia } from "@/features/team/data/team.data";
import { Badge } from "@/shared/components/ui/badge";
import { cn } from "@/shared/lib/utils";

export function TeamMembers() {
  const membersById = new Map(equipe.map((member) => [member.id, member]));
  return (
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

                return <TeamMemberCard key={member.id} member={member} />;
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
