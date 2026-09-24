# Organização do projeto

O código de aplicação fica em `src/app`, `src/shared` e `src/features`. `src/proxy.ts` permanece na posição exigida pelo Next.js.

## Camadas

- `app`: rotas, layout raiz, metadados e composição dos estilos globais. As páginas delegam para a feature; a API delega para o handler de leads.
- `shared`: navegação e rodapé do site, logo, componentes de UI, estilos base, utilitários e configuração comum de contato. Não importa `features` nem `app`.
- `features`: conteúdo e comportamento por área: `home`, `leads`, `maintenance`, `about`, `cases`, `contact`, `diagnostico`, `services` e `team`. Não importa `app`.

## Estrutura de uma feature

- `pages`: composição da página, sem blocos extensos de apresentação.
- `components`: seções e unidades com responsabilidade própria (cards, perguntas, formulário).
- `data` / `constants`: conteúdo e configuração tipados.
- `types`: contratos e modelos do domínio.
- `hooks`: comportamento e estado do cliente.
- `styles`: estilos da feature, inclusive responsividade.
- `schemas`, `services`, `server`: quando necessários, validação, chamadas HTTP e implementação exclusiva do servidor.

Diretórios são criados conforme a necessidade, sem pastas vazias. Componentes simples mantêm os tipos de props ao lado da implementação; contratos compartilhados dentro de uma feature ficam em `types`.

## Home

`HomePage` compõe `HomeHero`, `FeaturedProject`, `HomeSolutions`, `HomeProcess`, `HomeProjects`, `HomeFaq` e `HomeContact`. `HeroVisual`, `SolutionCard`, `ProcessStepCard`, `FaqItem` e `LiderProjectCard` isolam os blocos internos. A navegação e o rodapé ficam em `shared`.

O controle visual `HomeMotion` usa `useHomeMotion`; efeitos, observers e limpeza ficam no hook. Conteúdo estático permanece renderizado no servidor.

## Leads e tipagem

`features/leads/index.ts` expõe o formulário e seu contrato para outras features. O código de envio de e-mail fica em `server` e não é exportado nesse ponto de entrada do cliente.

Entradas JSON são validadas pelo Zod antes do uso. Os contratos `Lead` e `LeadResponse` são derivados dos schemas, sem coerções de JSON para modelos nem tipos genéricos irrestritos. Capturas de exceções fazem narrowing com `instanceof Error`. A configuração TypeScript permanece estrita.

## Verificação

- `npm run typecheck`: TypeScript.
- `npm run check:architecture`: bloqueia declarações explícitas de tipos irrestritos e dependências entre camadas proibidas.
- `npm test`: valida schemas e escape de HTML do e-mail; requer Node 22.6+ com suporte a strip-types.
- `npm run build`: build de produção do Next.js.

As páginas antigas foram preservadas e componentizadas. O proxy continua restringindo as rotas antigas e a API durante a reformulação. A produção permanece na manutenção publicada; o desenvolvimento da nova home continua na branch separada.
