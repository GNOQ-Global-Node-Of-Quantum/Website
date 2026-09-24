import type { LucideIcon } from "lucide-react";
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
