# GNOQ Website

Site institucional em Next.js, React e TypeScript, organizado em `src/app`, `src/shared` e `src/features`.

## Desenvolvimento

```bash
npm ci
npm run dev -- --port 3001
```

Abra [localhost:3001](http://localhost:3001). O projeto usa fontes do sistema e os arquivos oficiais da marca em `public/brand`.

## Estrutura

- `app`: rotas, metadados e layout raiz.
- `shared`: componentes reutilizáveis, navegação, logo, estilos base e utilitários.
- `features`: páginas, componentes, dados, tipos e comportamento por área de negócio.

As convenções e dependências permitidas estão em [docs/arquitetura.md](docs/arquitetura.md).

## Validação

```bash
npm run typecheck
npm run check:architecture
npm test
npm run build
```

Os testes usam o runner nativo do Node e exigem Node 22.6 ou superior. Dados externos são validados com Zod; o verificador de arquitetura bloqueia tipos explícitos irrestritos e dependências invertidas entre camadas.

## Estado da reformulação

A manutenção foi publicada na `main`. A nova home é desenvolvida separadamente em `codex/nova-home-gnoq`. O proxy mantém as páginas antigas e a API de leads indisponíveis enquanto a revisão continua. A prévia da manutenção fica em `/manutencao`.

A implementação de leads usa variáveis locais de ambiente para o Resend. Credenciais não devem ser versionadas.
