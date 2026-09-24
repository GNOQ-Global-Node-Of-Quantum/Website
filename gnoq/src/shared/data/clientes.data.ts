export interface Cliente {
  nome: string;
  /**
   * Caminho do logo em /public (ex: "/logos/lider.svg").
   * Deixe undefined para exibir apenas o nome como texto até ter o arquivo.
   */
  logo?: string;
}

/**
 * Empresas atendidas — usado na faixa de prova social da home.
 * Para adicionar um logo: coloque o arquivo em /public/logos/ e
 * preencha o campo `logo`. Enquanto não houver arquivo, o nome
 * aparece como texto, o que já funciona como prova.
 */
export const clientes: Cliente[] = [
  { nome: "Lider Field Marketing" },
  // Adicione os demais clientes aqui:
  // { nome: "Cliente 2", logo: "/logos/cliente-2.svg" },
];
