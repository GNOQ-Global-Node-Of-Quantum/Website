import {
  BotIcon,
  BriefcaseBusinessIcon,
  CheckCircle2Icon,
  Gamepad2Icon,
  Globe2Icon,
  LightbulbIcon,
  RocketIcon,
  SearchCheckIcon,
  type LucideIcon,
} from "lucide-react";

export interface HomeService {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface HomeAudience {
  title: string;
  description: string;
}

export interface HomeStep {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const home_services: HomeService[] = [
  {
    title: "Apps e plataformas",
    description:
      "Produtos digitais sob medida para operação, vendas ou experiência do usuário.",
    icon: RocketIcon,
  },
  {
    title: "Sites e landing pages",
    description:
      "Presença digital pensada para gerar confiança, leads e oportunidades comerciais.",
    icon: Globe2Icon,
  },
  {
    title: "Sistemas e automações",
    description:
      "ERPs, sistemas internos, BI e automações para centralizar operação e dados.",
    icon: BotIcon,
  },
  {
    title: "Jogos e experiências",
    description:
      "Soluções interativas para engajamento, treinamento ou entretenimento.",
    icon: Gamepad2Icon,
  },
];

export const home_audiences: HomeAudience[] = [
  {
    title: "Empresas com processo manual",
    description:
      "Operações que ainda dependem de planilhas, WhatsApp, retrabalho e dados espalhados.",
  },
  {
    title: "Negócios que precisam vender melhor",
    description:
      "Empresas que querem transformar presença digital em contatos e propostas.",
  },
  {
    title: "Startups e novos produtos",
    description:
      "Ideias que precisam de MVP, protótipo ou produto digital sob medida.",
  },
  {
    title: "Marcas que querem engajar",
    description:
      "Projetos que precisam de jogos, gamificação ou experiências interativas.",
  },
];

export const home_steps: HomeStep[] = [
  {
    title: "Diagnóstico",
    description: "Entendemos o problema, o contexto e o objetivo do negócio.",
    icon: SearchCheckIcon,
  },
  {
    title: "Estratégia",
    description:
      "Definimos o caminho mais simples para gerar valor e aprender.",
    icon: LightbulbIcon,
  },
  {
    title: "Desenvolvimento",
    description: "Construímos a solução com foco em uso, clareza e evolução.",
    icon: BriefcaseBusinessIcon,
  },
  {
    title: "Validação",
    description: "Acompanhamos resultado, feedback e próximos passos.",
    icon: CheckCircle2Icon,
  },
];
