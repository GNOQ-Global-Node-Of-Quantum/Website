import {
  ArrowRightIcon,
  BotIcon,
  ChartNoAxesCombinedIcon,
  CheckCircle2Icon,
  Gamepad2Icon,
  Globe2Icon,
  LightbulbIcon,
  MapPinIcon,
  type LucideIcon,
  RocketIcon,
  SearchCheckIcon,
  ShieldCheckIcon,
  SparklesIcon,
  WorkflowIcon,
} from "lucide-react";

export interface ServiceCard {
  titulo: string;
  oferta: string;
  dor: string;
  texto: string;
  idealPara: string;
  entregas: string[];
  resultado: string;
  cta: string;
  icon: LucideIcon;
  accentClassName: string;
}

export interface ServiceMatch {
  pensamento: string;
  solucao: string;
}

export interface ProcessStep {
  etapa: string;
  titulo: string;
  descricao: string;
  icon: LucideIcon;
}

export interface ProofPoint {
  titulo: string;
  descricao: string;
  icon: LucideIcon;
}

export const service_cards: ServiceCard[] = [
  {
    titulo: "Vender melhor online",
    oferta: "Sites, landing pages e e-commerce",
    dor: "Tenho presença digital, mas ela não gera contatos, propostas ou vendas.",
    texto:
      "Criamos experiências digitais com mensagem clara, navegação objetiva e pontos de conversão pensados para transformar visitantes em oportunidades.",
    idealPara: "Empresas que precisam ser encontradas, gerar confiança e captar leads.",
    entregas: [
      "Sites institucionais",
      "Landing pages",
      "E-commerce",
      "Páginas de campanha",
    ],
    resultado: "Mais clareza, confiança e oportunidades comerciais.",
    cta: "Melhorar presença digital",
    icon: Globe2Icon,
    accentClassName: "bg-muted text-foreground",
  },
  {
    titulo: "Automatizar processos",
    oferta: "ERPs, sistemas internos, BI e automações",
    dor: "Minha operação depende de planilhas, WhatsApp, retrabalho e dados espalhados.",
    texto:
      "Desenhamos ferramentas para centralizar operação, organizar fluxos, reduzir tarefas repetitivas e transformar dados em visão gerencial.",
    idealPara:
      "Operações que precisam ganhar controle, velocidade, previsibilidade e tomada de decisão com dados.",
    entregas: [
      "ERP sob medida",
      "Dashboards",
      "Painéis de BI",
      "Automações",
      "Integrações com APIs",
    ],
    resultado: "Operação mais organizada e gestão apoiada por dados.",
    cta: "Automatizar operação",
    icon: BotIcon,
    accentClassName: "bg-muted text-foreground",
  },
  {
    titulo: "Criar produto digital",
    oferta: "Apps, SaaS e plataformas",
    dor: "Tenho uma ideia de produto, mas preciso transformar isso em uma solução real.",
    texto:
      "Ajudamos a estruturar, projetar e desenvolver produtos digitais sob medida, conectando estratégia, experiência e tecnologia.",
    idealPara: "Empresas e empreendedores criando novos canais, produtos ou plataformas.",
    entregas: ["Apps", "SaaS", "Plataformas web", "Áreas administrativas"],
    resultado: "Um produto digital com base técnica e visão de negócio.",
    cta: "Criar produto",
    icon: RocketIcon,
    accentClassName: "bg-muted text-foreground",
  },
  {
    titulo: "Validar uma ideia",
    oferta: "MVP e protótipos",
    dor: "Quero testar demanda antes de gastar com desenvolvimento completo.",
    texto:
      "Construímos versões enxutas para validar hipóteses, medir interesse e aprender com usuários reais antes de escalar investimento.",
    idealPara: "Ideias novas, startups e empresas que querem reduzir risco.",
    entregas: [
      "MVPs",
      "Protótipos navegáveis",
      "Landing pages de teste",
      "Validação de fluxo",
    ],
    resultado: "Mais evidência antes de decidir o próximo investimento.",
    cta: "Validar ideia",
    icon: LightbulbIcon,
    accentClassName: "bg-muted text-foreground",
  },
  {
    titulo: "Engajar pessoas",
    oferta: "Jogos e experiências interativas",
    dor: "Preciso criar uma experiência mais envolvente para usuários, equipes ou público.",
    texto:
      "Criamos jogos e interações digitais para treinamento, campanhas, educação, eventos e experiências de marca.",
    idealPara: "Marcas, escolas, eventos e empresas que precisam aumentar atenção e participação.",
    entregas: [
      "Jogos web",
      "Experiências interativas",
      "Gamificação",
      "Protótipos jogáveis",
    ],
    resultado: "Mais participação, retenção e memória da experiência.",
    cta: "Criar experiência",
    icon: Gamepad2Icon,
    accentClassName: "bg-muted text-foreground",
  },
];

export const service_matches: ServiceMatch[] = [
  {
    pensamento: "Meu site existe, mas não traz cliente.",
    solucao: "Site orientado a conversão ou landing page.",
  },
  {
    pensamento: "Minha operação depende muito de planilha.",
    solucao: "ERP sob medida, sistema interno, BI ou automação.",
  },
  {
    pensamento: "Tenho uma ideia de app, mas não sei se vale.",
    solucao: "MVP, protótipo ou landing page de validação.",
  },
  {
    pensamento: "Quero lançar uma plataforma para clientes.",
    solucao: "Produto digital sob medida.",
  },
  {
    pensamento: "Preciso engajar equipe, alunos ou público.",
    solucao: "Jogo, gamificação ou experiência interativa.",
  },
];

export const process_steps: ProcessStep[] = [
  {
    etapa: "01",
    titulo: "Entendemos o problema",
    descricao:
      "Antes da tecnologia, investigamos a dor, o contexto e o objetivo do negócio.",
    icon: SearchCheckIcon,
  },
  {
    etapa: "02",
    titulo: "Desenhamos o caminho",
    descricao:
      "Definimos solução, escopo inicial, prioridades e o melhor formato para começar.",
    icon: WorkflowIcon,
  },
  {
    etapa: "03",
    titulo: "Validamos e desenvolvemos",
    descricao:
      "Construímos com foco no que precisa funcionar, medir e evoluir.",
    icon: CheckCircle2Icon,
  },
  {
    etapa: "04",
    titulo: "Evoluímos com dados",
    descricao:
      "Acompanhamos uso, feedback e oportunidades para melhorar a solução.",
    icon: ChartNoAxesCombinedIcon,
  },
];

export const proof_points: ProofPoint[] = [
  {
    titulo: "Problemas reais",
    descricao:
      "Atuamos com ERP sob medida e painéis de BI integrados para empresa de field marketing e serviços.",
    icon: ShieldCheckIcon,
  },
  {
    titulo: "Visão consultiva",
    descricao:
      "A GNOQ entende negócio, problema e objetivo antes de escolher a tecnologia.",
    icon: SparklesIcon,
  },
  {
    titulo: "Imersão no cliente",
    descricao:
      "Quando o projeto pede profundidade, visitamos a operação para observar rotina, equipe e dores reais.",
    icon: MapPinIcon,
  },
  {
    titulo: "Próximo passo claro",
    descricao:
      "O diagnóstico ajuda a decidir se faz sentido criar site, app, sistema, automação, jogo ou MVP.",
    icon: ArrowRightIcon,
  },
];
