import type { TeamMember } from "@/features/team/types/team.types";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { UserIcon } from "lucide-react";
interface TeamMemberCardProps {
  member: TeamMember;
}
export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <Card key={member.id} className="bg-background">
      <CardHeader>
        <div className="flex size-14 items-center justify-center rounded-2xl bg-muted">
          <UserIcon className="size-6" />
        </div>
        <div>
          <CardTitle className="text-xl">{member.nome}</CardTitle>
          <p className="mt-1 text-sm text-muted-foreground">{member.papel}</p>
          <p className="mt-2 text-sm font-medium">{member.especialidade}</p>
        </div>
      </CardHeader>
      <CardContent className="space-y-5">
        <p className="text-sm leading-relaxed text-muted-foreground">
          {member.bio}
        </p>
      </CardContent>
    </Card>
  );
}
