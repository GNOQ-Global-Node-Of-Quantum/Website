import { ChartNoAxesCombined, Code2, Compass } from "lucide-react";
import type { ProjectService } from "../types/home.types";
export const services: readonly ProjectService[] = [
  {
    icon: ChartNoAxesCombined,
    title: "Business Intelligence",
    description:
      "Painéis de BI para visualizar informações e apoiar a análise do negócio.",
  },
  {
    icon: Code2,
    title: "ERP personalizado",
    description:
      "Desenvolvimento de um sistema de gestão adaptado às necessidades da empresa.",
  },
  {
    icon: Compass,
    title: "Consultoria técnica",
    description:
      "Apoio às decisões de tecnologia e à definição dos próximos passos técnicos.",
  },
];
