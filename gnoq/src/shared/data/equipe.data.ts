interface TeamMemberLinks {
  linkedin?: string;
  github?: string;
}

interface TeamMember {
  foto?: string;
  id: string;
  nome: string;
  papel: string;
  especialidade: string;
  bio: string;
  links: TeamMemberLinks;
}

interface TeamArea {
  title: string;
  description: string;
  memberIds: string[];
}

export const equipe: TeamMember[] = [
  {
    id: "gabriel-neves",
    nome: "Gabriel Neves",
    papel: "CEO",
    especialidade: "Estratégia, produto e desenvolvimento",
    bio: "Conduz a GNOQ conectando visão de negócio, tecnologia e execução para transformar problemas reais em soluções digitais sob medida.",
    links: {},
  },
  {
    id: "vinicius-madureira",
    nome: "Vinicius Madureira",
    papel: "Tech Lead",
    especialidade: "Arquitetura, liderança técnica e qualidade de entrega",
    bio: "Lidera decisões técnicas, padrões de desenvolvimento e evolução das soluções para manter os projetos consistentes, escaláveis e bem executados.",
    links: {},
  },
  {
    id: "vinicius-miranda",
    nome: "Vinicius Miranda",
    papel: "Coordenador de Backend",
    especialidade: "APIs, regras de negócio, integrações e dados",
    bio: "Coordena a construção da base backend dos projetos, conectando lógica de negócio, integrações, banco de dados e segurança da aplicação.",
    links: {},
  },
  {
    id: "caio-diniz",
    nome: "Caio Diniz",
    papel: "Coordenador de Frontend",
    especialidade: "Interfaces, experiência do usuário e aplicações web",
    bio: "Coordena a camada visual e interativa dos produtos, garantindo interfaces claras, responsivas e alinhadas ao objetivo de cada solução.",
    links: {},
  },
];

export const equipe_hierarquia: TeamArea[] = [
  {
    title: "Direção",
    description:
      "Responsável por visão de negócio, relacionamento, estratégia e decisões principais da GNOQ.",
    memberIds: ["gabriel-neves"],
  },
  {
    title: "Liderança técnica",
    description:
      "Responsável por arquitetura, padrões técnicos e consistência das entregas.",
    memberIds: ["vinicius-madureira"],
  },
  {
    title: "Coordenações",
    description:
      "Responsáveis por organizar as frentes de desenvolvimento e transformar estratégia em execução técnica.",
    memberIds: ["vinicius-miranda", "caio-diniz"],
  },
];
