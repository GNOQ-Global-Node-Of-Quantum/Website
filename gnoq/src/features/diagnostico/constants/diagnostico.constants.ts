import {
  BotIcon,
  CheckCircle2Icon,
  Gamepad2Icon,
  Globe2Icon,
  LightbulbIcon,
  RocketIcon,
  SearchCheckIcon,
  ShieldCheckIcon,
} from "lucide-react";

import type {
  DiagnosisOption,
  DiagnosisStep,
} from "../types/diagnostico.types";
export const diagnosis_options: DiagnosisOption[] = [
  {
    title: "Site ou landing page",
    description: "Para gerar presença, confiança, leads e vendas.",
    icon: Globe2Icon,
  },
  {
    title: "App ou plataforma",
    description: "Para criar produto digital, SaaS ou experiência própria.",
    icon: RocketIcon,
  },
  {
    title: "Sistema interno",
    description: "Para organizar operação, rotina, equipe e dados.",
    icon: SearchCheckIcon,
  },
  {
    title: "Automação",
    description: "Para reduzir tarefas manuais, retrabalho e gargalos.",
    icon: BotIcon,
  },
  {
    title: "ERP ou BI",
    description:
      "Para centralizar processos e transformar dados em visão gerencial.",
    icon: SearchCheckIcon,
  },
  {
    title: "Jogo ou experiência",
    description: "Para engajar usuários, equipes, alunos ou público.",
    icon: Gamepad2Icon,
  },
  {
    title: "MVP ou validação",
    description: "Para testar demanda antes de investir no produto completo.",
    icon: LightbulbIcon,
  },
];

export const diagnosis_steps: DiagnosisStep[] = [
  {
    title: "Você conta o cenário",
    description:
      "Contexto da empresa, problema, urgência, ideia e o que já foi tentado.",
  },
  {
    title: "A GNOQ organiza o caminho",
    description:
      "Avaliamos se faz sentido site, app, sistema, automação, jogo, MVP ou outro passo mais simples.",
  },
  {
    title: "Você recebe um próximo passo",
    description:
      "A conversa vira direção: reunião, proposta, protótipo, validação ou escopo inicial.",
  },
];

export const diagnosis_trust_points = [
  {
    title: "Sem começar pelo código",
    description:
      "Entendemos negócio, problema e objetivo antes de recomendar tecnologia.",
    icon: SearchCheckIcon,
  },
  {
    title: "Menos risco de investimento",
    description:
      "O diagnóstico ajuda a evitar construir algo grande antes de clarear a necessidade.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Próximo passo objetivo",
    description:
      "A ideia é sair da dúvida com uma direção prática para avançar.",
    icon: CheckCircle2Icon,
  },
];
