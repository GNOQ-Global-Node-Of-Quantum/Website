import { TeamHero } from "@/features/team/components/TeamHero";
import { TeamMembers } from "@/features/team/components/TeamMembers";

export function TeamPage() {
  return (
    <main>
      <TeamHero />
      <TeamMembers />
    </main>
  );
}
