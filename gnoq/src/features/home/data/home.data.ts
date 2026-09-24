import { Globe2, Layers3, Workflow } from "lucide-react";
import type {
  HomeFaqItem,
  HomeProcessStep,
  HomeSolution,
} from "../types/home.types";
export const solutions: readonly HomeSolution[] = [
  {
    number: "01",
    icon: Workflow,
    title: "Menos planilhas. Mais controle.",
    description:
      "Sistemas internos, ERP, BI e automações para conectar informações e reduzir tarefas manuais.",
    tags: "SISTEMAS & AUTOMAÇÕES",
    message:
      "Olá! Quero conversar com a GNOQ sobre sistemas e automações para minha empresa.",
  },
  {
    number: "02",
    icon: Globe2,
    title: "Seu negócio pronto para ser encontrado.",
    description:
      "Sites e landing pages que apresentam seu negócio com clareza e facilitam o próximo contato.",
    tags: "SITES & LANDING PAGES",
    message:
      "Olá! Quero conversar com a GNOQ sobre um site para minha empresa.",
  },
  {
    number: "03",
    icon: Layers3,
    title: "Da ideia à primeira versão.",
    description:
      "Apps, plataformas, MVPs e experiências interativas construídos a partir do que seu público precisa.",
    tags: "APPS & PRODUTOS DIGITAIS",
    message:
      "Olá! Quero conversar com a GNOQ sobre uma ideia de produto digital.",
  },
];
export const steps: readonly HomeProcessStep[] = [
  {
    number: "01",
    title: "Entender",
    text: "Conversamos sobre sua rotina, seus desafios e o que precisa mudar.",
  },
  {
    number: "02",
    title: "Definir",
    text: "Organizamos prioridades e propomos um escopo com entregas claras.",
  },
  {
    number: "03",
    title: "Construir",
    text: "Desenvolvemos a solução com você por perto, acompanhando cada etapa.",
  },
  {
    number: "04",
    title: "Evoluir",
    text: "Validamos o uso e identificamos os próximos passos do produto.",
  },
];
export const faqs: readonly HomeFaqItem[] = [
  {
    question: "Preciso saber exatamente qual solução quero?",
    answer:
      "Não. Você pode começar contando o problema. A primeira conversa serve para entender o contexto e avaliar se faz sentido construir um site, sistema, automação ou outro produto digital.",
  },
  {
    question: "Como são definidos o prazo e o investimento?",
    answer:
      "A partir do escopo, das integrações e da complexidade do projeto. Depois de entender suas necessidades, organizamos uma proposta com entregas, prazo e investimento para sua avaliação.",
  },
  {
    question: "Vocês desenvolvem soluções sob medida?",
    answer:
      "Sim. O projeto parte das necessidades do seu negócio. Podemos conversar sobre uma nova solução ou avaliar como integrar e melhorar ferramentas que sua empresa já utiliza.",
  },
];
