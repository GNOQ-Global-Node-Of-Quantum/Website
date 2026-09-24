import type { LucideIcon } from "lucide-react";

export interface HomeSolution {
  readonly number: string;
  readonly icon: LucideIcon;
  readonly title: string;
  readonly description: string;
  readonly tags: string;
  readonly message: string;
}
export interface HomeProcessStep {
  readonly number: string;
  readonly title: string;
  readonly text: string;
}
export interface HomeFaqItem {
  readonly question: string;
  readonly answer: string;
}
export interface ProjectService {
  readonly icon: LucideIcon;
  readonly title: string;
  readonly description: string;
}
export interface HomeMotionState {
  readonly paused: boolean;
  readonly reducedMotion: boolean;
  readonly toggle: () => void;
}
