export type HomeSection =
  | "inicio"
  | "solucoes"
  | "processo"
  | "projetos"
  | "contato";
export interface NavigationLink {
  readonly href: `#${HomeSection}`;
  readonly label: string;
}
