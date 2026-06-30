import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bell,
  Download,
  Filter,
  Globe,
  Layers,
  PiggyBank,
  ShieldCheck,
  Smartphone,
  Tags,
  WalletCards,
} from "lucide-react";

export const languages = ["pt-BR", "en"] as const;
export type Language = (typeof languages)[number];

export type NavItem = {
  href: string;
  label: string;
};

export type AppFeature = {
  icon: LucideIcon;
  title: string;
  text: string;
};

export type ProductApp = {
  name: string;
  status: string;
  price: string;
  description: string;
  platforms: string[];
  features: string[];
  downloadHref?: string;
  downloadFilename?: string;
};

export type HomeCardText = {
  title: string;
  description: string;
};

export type QuoteModalContent = {
  closeLabel: string;
  eyebrow: string;
  title: string;
  description: string;
  requiredError: string;
  validationError: string;
  successMessage: string;
  submitError: string;
  fields: {
    name: { label: string; placeholder: string };
    email: { label: string; placeholder: string };
    subject: { label: string; placeholder: string };
    message: { label: string; placeholder: string };
  };
  submitLabel: string;
  benefits: string[];
  directContactLabel: string;
};

export type SiteContent = {
  languageToggle: {
    label: string;
  };
  menuLabel: string;
  nav: NavItem[];
  footer: {
    description: string;
    navigationTitle: string;
    contactTitle: string;
    privacy: string;
    terms: string;
  };
  home: {
    badge: string;
    title: string;
    titleAccent: string;
    description: string;
    primaryCta: string;
    appsCta: string;
    stats: Array<{ value: string; label: string }>;
    servicesEyebrow: string;
    servicesTitle: string;
    servicesDescription: string;
    servicesCta: string;
    freeAppsCta: string;
    finalTitle: string;
    finalDescription: string;
    finalCta: string;
    differentiatorsEyebrow: string;
    differentiatorsTitle: string;
    differentiatorsDescription: string;
    differentiators: HomeCardText[];
    serviceItems: HomeCardText[];
    middleCtaEyebrow: string;
    middleCtaTitle: string;
    middleCtaDescription: string;
    middleCtaChecklist: string[];
    techEyebrow: string;
    techTitle: string;
    techDescription: string;
  };
  quoteModal: QuoteModalContent;
  appsPage: {
    breadcrumb: string;
    badge: string;
    title: string;
    titleAccent: string;
    description: string;
    noticeTitle: string;
    noticeText: string;
    sectionEyebrow: string;
    sectionTitle: string;
    sectionDescription: string;
    notifyCta: string;
    downloadCta: string;
    platformsLabel: string;
    finalTitle: string;
    finalDescription: string;
    finalCta: string;
    apps: ProductApp[];
    featureCards: AppFeature[];
  };
};

export const siteContent = {
  "pt-BR": {
    languageToggle: {
      label: "Mudar idioma para inglês",
    },
    menuLabel: "Abrir menu",
    nav: [
      { href: "/", label: "Início" },
      { href: "/produtos", label: "Serviços" },
      { href: "/aplicativos", label: "Aplicativos" },
      { href: "/privacidade", label: "Privacidade" },
      { href: "/contato", label: "Contato" },
    ],
    footer: {
      description:
        "Engenharia digital para empresas que pensam à frente. Sistemas robustos, escaláveis e sob medida que transformam processos em vantagem competitiva.",
      navigationTitle: "Navegação",
      contactTitle: "Contato",
      privacy: "Privacidade",
      terms: "Termos",
    },
    home: {
      badge: "Engenharia digital de alto impacto",
      title: "Engenharia digital",
      titleAccent: "para quem pensa à frente",
      description:
        "Criamos sistemas robustos, escaláveis e sob medida que transformam processos complexos em vantagem competitiva real. Do MVP ao produto de escala global.",
      primaryCta: "Solicitar Orçamento",
      appsCta: "Ver aplicativos",
      stats: [
        { value: "48h", label: "para proposta" },
        { value: "100%", label: "com contrato" },
        { value: "6+", label: "áreas de atuação" },
        { value: "LGPD", label: "compliance" },
      ],
      servicesEyebrow: "Serviços",
      servicesTitle: "Tudo que seu negócio precisa em tecnologia",
      servicesDescription:
        "Do sistema interno ao app mobile, passando por integrações e dashboards, entregamos soluções completas com time dedicado e comunicação transparente.",
      servicesCta: "Ver todos os serviços",
      freeAppsCta: "Ver aplicativos gratuitos",
      finalTitle: "Vamos construir o futuro do seu negócio juntos?",
      finalDescription:
        "Mande uma mensagem. Em até 48h você recebe diagnóstico inicial e proposta sem compromisso.",
      finalCta: "Falar com um especialista",
      differentiatorsEyebrow: "Diferenciais",
      differentiatorsTitle: "Por que escolher a GNOQ?",
      differentiatorsDescription:
        "Não entregamos apenas código. Entregamos resultados mensuráveis e sistemas preparados para o futuro.",
      differentiators: [
        {
          title: "Velocidade sem abrir mão da qualidade",
          description:
            "Arquitetura moderna, CI/CD automatizado e deploy contínuo. Seu produto no ar mais rápido, com estabilidade e sem surpresas.",
        },
        {
          title: "Segurança por design",
          description:
            "Autenticação robusta, criptografia ponta a ponta, conformidade LGPD e proteção contra ameaças atuais, desde a concepção.",
        },
        {
          title: "Escalabilidade real",
          description:
            "De 100 para 1 milhão de usuários sem reescrever tudo. Microservices, serverless e cloud-native quando faz sentido para o seu caso.",
        },
      ],
      serviceItems: [
        {
          title: "Sistemas sob medida & ERP",
          description:
            "Gestão completa adaptada ao seu processo, com RBAC, relatórios e integrações.",
        },
        {
          title: "Desenvolvimento Web",
          description:
            "Sites, plataformas SaaS e landing pages com performance e SEO técnico.",
        },
        {
          title: "Aplicativos Mobile",
          description:
            "Apps Android do conceito ao deploy, com UX pensada para retenção.",
        },
        {
          title: "Integrações & Automações",
          description:
            "APIs, webhooks, RPA e ETL para conectar sistemas e eliminar retrabalho.",
        },
        {
          title: "Power BI & Analytics",
          description:
            "Dashboards executivos e relatórios automáticos a partir dos seus dados.",
        },
        {
          title: "Consultoria Técnica",
          description:
            "Auditoria de arquitetura, code review e mentoria para times que querem escalar.",
        },
      ],
      middleCtaEyebrow: "Sem compromisso",
      middleCtaTitle: "Pronto para acelerar seu negócio?",
      middleCtaDescription:
        "Em até 48h devolvemos um diagnóstico inicial e uma proposta alinhada com seus objetivos, sem enrolação, sem jargão, com clareza.",
      middleCtaChecklist: [
        "Reunião de discovery gratuita",
        "Proposta com escopo, prazo e investimento",
        "Contrato formal + NDA quando necessário",
        "Conformidade LGPD garantida",
      ],
      techEyebrow: "Stack",
      techTitle: "Tecnologias que dominamos",
      techDescription:
        "Frontend moderno, backend escalável, bancos relacionais robustos e inteligência de negócios, combinados para entregar soluções completas.",
    },
    quoteModal: {
      closeLabel: "Fechar modal",
      eyebrow: "Novo projeto",
      title: "Conte o que você quer construir",
      description:
        "Em até 48h retornamos com um diagnóstico inicial e próximos passos claros para tirar a ideia do papel.",
      requiredError: "Campo obrigatório",
      validationError: "Preencha todos os campos.",
      successMessage: "Solicitação enviada com sucesso.",
      submitError: "Erro ao enviar. Tente novamente em instantes.",
      fields: {
        name: { label: "Nome", placeholder: "Seu nome" },
        email: { label: "E-mail", placeholder: "voce@empresa.com" },
        subject: {
          label: "Assunto",
          placeholder: "Ex: aplicativo mobile, sistema interno, automação...",
        },
        message: {
          label: "Descrição",
          placeholder:
            "Descreva o problema, objetivo, prazo desejado e qualquer detalhe importante.",
        },
      },
      submitLabel: "Enviar solicitação",
      benefits: [
        "Resposta em até 48h",
        "Discovery sem compromisso",
        "Escopo, prazo e investimento",
      ],
      directContactLabel: "Contato direto",
    },
    appsPage: {
      breadcrumb: "Aplicativos",
      badge: "Apps gratuitos e produtos digitais",
      title: "Aplicativos GNOQ",
      titleAccent: "para baixar e usar",
      description:
        "Esta área reúne os aplicativos próprios da GNOQ, incluindo ferramentas gratuitas para download, versões beta e produtos em desenvolvimento.",
      noticeTitle: "Primeira vitrine pronta",
      noticeText: "Preparada para links de download reais.",
      sectionEyebrow: "Downloads",
      sectionTitle: "Aplicativos disponíveis",
      sectionDescription:
        "Baixe os aplicativos próprios da GNOQ direto por aqui. Por enquanto, o UP Cents está disponível apenas para Android.",
      notifyCta: "Quero ser avisado",
      downloadCta: "Baixar APK",
      platformsLabel: "Plataformas",
      finalTitle: "Tem uma ideia de aplicativo?",
      finalDescription:
        "Além dos apps próprios, a GNOQ também cria aplicativos sob medida para empresas que precisam transformar processos em produto digital.",
      finalCta: "Conversar sobre um app",
      apps: [
        {
          name: "UP Cents",
          status: "Disponível",
          price: "Grátis",
          description:
            "Gerenciamento financeiro diário para registrar gastos e entradas, organizar categorias e acompanhar sua rotina com filtros simples e rápidos.",
          platforms: ["Android"],
          downloadHref: "/downloads/up-cents.apk",
          downloadFilename: "up-cents.apk",
          features: [
            "Controle de gastos e entradas no mesmo app",
            "Categorias personalizadas para organizar lançamentos",
            "Filtros por período, categoria e tipo de movimentação",
            "Conta conectada para manter dados salvos com segurança",
          ],
        },
      ],
      featureCards: [
        {
          icon: WalletCards,
          title: "Gastos e entradas",
          text: "Registre despesas e receitas do dia a dia sem complicar a rotina.",
        },
        {
          icon: Tags,
          title: "Categorias",
          text: "Separe cada lançamento por categoria e mantenha tudo mais fácil de entender.",
        },
        {
          icon: Filter,
          title: "Filtros rápidos",
          text: "Encontre movimentações por período, categoria ou tipo de lançamento.",
        },
      ],
    },
  },
  en: {
    languageToggle: {
      label: "Change language to Portuguese",
    },
    menuLabel: "Open menu",
    nav: [
      { href: "/", label: "Home" },
      { href: "/produtos", label: "Services" },
      { href: "/aplicativos", label: "Apps" },
      { href: "/privacidade", label: "Privacy" },
      { href: "/contato", label: "Contact" },
    ],
    footer: {
      description:
        "Digital engineering for forward-thinking companies. Robust, scalable and custom systems that turn processes into competitive advantage.",
      navigationTitle: "Navigation",
      contactTitle: "Contact",
      privacy: "Privacy",
      terms: "Terms",
    },
    home: {
      badge: "High-impact digital engineering",
      title: "Digital engineering",
      titleAccent: "for forward thinkers",
      description:
        "We build robust, scalable and custom systems that turn complex processes into real competitive advantage, from MVP to global-scale products.",
      primaryCta: "Request a Quote",
      appsCta: "View apps",
      stats: [
        { value: "48h", label: "to proposal" },
        { value: "100%", label: "contract-backed" },
        { value: "6+", label: "service areas" },
        { value: "LGPD", label: "compliance" },
      ],
      servicesEyebrow: "Services",
      servicesTitle: "Everything your business needs in technology",
      servicesDescription:
        "From internal systems to mobile apps, integrations and dashboards, we deliver complete solutions with a dedicated team and clear communication.",
      servicesCta: "View all services",
      freeAppsCta: "View free apps",
      finalTitle: "Shall we build your business future together?",
      finalDescription:
        "Send us a message. Within 48 hours, you receive an initial diagnosis and a no-obligation proposal.",
      finalCta: "Talk to a specialist",
      differentiatorsEyebrow: "Why GNOQ",
      differentiatorsTitle: "Why choose GNOQ?",
      differentiatorsDescription:
        "We do not only deliver code. We deliver measurable outcomes and systems prepared for what comes next.",
      differentiators: [
        {
          title: "Speed without sacrificing quality",
          description:
            "Modern architecture, automated CI/CD and continuous deployment. Your product goes live faster, with stability and no surprises.",
        },
        {
          title: "Security by design",
          description:
            "Robust authentication, end-to-end encryption, LGPD alignment and protection against current threats from day one.",
        },
        {
          title: "Real scalability",
          description:
            "From 100 to 1 million users without rebuilding everything. Microservices, serverless and cloud-native where they make sense.",
        },
      ],
      serviceItems: [
        {
          title: "Custom systems & ERP",
          description:
            "Complete management adapted to your process, with RBAC, reports and integrations.",
        },
        {
          title: "Web development",
          description:
            "Websites, SaaS platforms and landing pages with performance and technical SEO.",
        },
        {
          title: "Mobile apps",
          description:
            "Android apps from concept to deployment, with UX designed for retention.",
        },
        {
          title: "Integrations & automation",
          description:
            "APIs, webhooks, RPA and ETL to connect systems and eliminate rework.",
        },
        {
          title: "Power BI & analytics",
          description:
            "Executive dashboards and automatic reports built from your data.",
        },
        {
          title: "Technical consulting",
          description:
            "Architecture audits, code reviews and mentoring for teams that want to scale.",
        },
      ],
      middleCtaEyebrow: "No commitment",
      middleCtaTitle: "Ready to accelerate your business?",
      middleCtaDescription:
        "Within 48 hours, we return an initial diagnosis and a proposal aligned with your goals, no fluff, no jargon, just clarity.",
      middleCtaChecklist: [
        "Free discovery meeting",
        "Proposal with scope, timeline and investment",
        "Formal contract + NDA when needed",
        "LGPD compliance guaranteed",
      ],
      techEyebrow: "Stack",
      techTitle: "Technologies we master",
      techDescription:
        "Modern frontend, scalable backend, robust relational databases and business intelligence, combined to deliver complete solutions.",
    },
    quoteModal: {
      closeLabel: "Close modal",
      eyebrow: "New project",
      title: "Tell us what you want to build",
      description:
        "Within 48 hours, we return an initial diagnosis and clear next steps to move the idea forward.",
      requiredError: "Required field",
      validationError: "Please fill in all fields.",
      successMessage: "Request sent successfully.",
      submitError: "Error sending your request. Please try again shortly.",
      fields: {
        name: { label: "Name", placeholder: "Your name" },
        email: { label: "Email", placeholder: "you@company.com" },
        subject: {
          label: "Subject",
          placeholder: "Ex: mobile app, internal system, automation...",
        },
        message: {
          label: "Description",
          placeholder:
            "Describe the problem, goal, expected timeline and any important detail.",
        },
      },
      submitLabel: "Send request",
      benefits: [
        "Response within 48h",
        "No-obligation discovery",
        "Scope, timeline and investment",
      ],
      directContactLabel: "Direct contact",
    },
    appsPage: {
      breadcrumb: "Apps",
      badge: "Free apps and digital products",
      title: "GNOQ Apps",
      titleAccent: "to download and use",
      description:
        "This area gathers GNOQ-owned apps, including free download tools, beta releases and products in development.",
      noticeTitle: "First showcase ready",
      noticeText: "Prepared for real download links.",
      sectionEyebrow: "Downloads",
      sectionTitle: "Available apps",
      sectionDescription:
        "Download GNOQ-owned apps directly from here. For now, UP Cents is available for Android only.",
      notifyCta: "Notify me",
      downloadCta: "Download APK",
      platformsLabel: "Platforms",
      finalTitle: "Have an app idea?",
      finalDescription:
        "Beyond our own apps, GNOQ also builds custom applications for companies that need to turn processes into digital products.",
      finalCta: "Talk about an app",
      apps: [
        {
          name: "UP Cents",
          status: "Available",
          price: "Free",
          description:
            "Daily financial management to track expenses and income, organize categories and follow your routine with simple, fast filters.",
          platforms: ["Android"],
          downloadHref: "/downloads/up-cents.apk",
          downloadFilename: "up-cents.apk",
          features: [
            "Expense and income tracking in the same app",
            "Custom categories to organize entries",
            "Filters by period, category and movement type",
            "Connected account to keep data securely saved",
          ],
        },
      ],
      featureCards: [
        {
          icon: WalletCards,
          title: "Expenses and income",
          text: "Log daily expenses and revenue without complicating your routine.",
        },
        {
          icon: Tags,
          title: "Categories",
          text: "Separate each entry by category and keep everything easier to understand.",
        },
        {
          icon: Filter,
          title: "Fast filters",
          text: "Find entries by period, category or movement type.",
        },
      ],
    },
  },
} as const satisfies Record<Language, SiteContent>;

export const appShowcaseIcons = {
  Download,
  Bell,
  Smartphone,
  ShieldCheck,
  PiggyBank,
  Layers,
  Globe,
  BarChart3,
} as const;
