export interface TeamMemberLinks {
  linkedin?: string;
  github?: string;
}

export interface TeamMember {
  foto?: string;
  id: string;
  nome: string;
  papel: string;
  especialidade: string;
  bio: string;
  links: TeamMemberLinks;
}

export interface TeamArea {
  title: string;
  description: string;
  memberIds: string[];
}
