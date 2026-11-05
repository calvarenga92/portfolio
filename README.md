# Portfólio — Claudio Alvarenga

Site pessoal. Next.js com App Router, TypeScript e Tailwind, sem back-end e sem CMS:
todo o conteúdo é TypeScript tipado, o build gera HTML estático e o deploy é a Vercel.

## Rodando

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
npm start       # serve o build
```

## Como o projeto está organizado

```
src/
  content/      conteúdo tipado — texto, números, imagens
    types.ts    contratos
    site.ts     identidade, contato, navegação, retrato
    profile.ts  manchete, apresentação, método
    experience.ts
    projects.ts projetos e cases
    stack.ts
  components/
    primitives.tsx   Container, Section, Ledger, Prose
    SiteHeader.tsx
    Hero.tsx
    ProjectList.tsx
    sections.tsx     seções da página inicial
  app/
    page.tsx              página única com âncoras
    projetos/[slug]/      uma página por case, gerada em build
    opengraph-image.tsx   imagem de pré-visualização do link
    sitemap.ts, robots.ts
  fonts/        Archivo e IBM Plex Mono em woff2, servidos pelo próprio domínio
```

A regra que sustenta a estrutura: **componente não inventa conteúdo e conteúdo não
conhece layout.** Para mudar um texto ou um número, mexa só em `src/content/`. Se um
dia a origem virar MDX ou CMS, os componentes continuam consumindo os mesmos tipos.

## Decisões

**Conteúdo em `.ts` e não em MDX.** Dois projetos e três empregos não justificam um
pipeline de markdown. TypeScript dá verificação em build: campo obrigatório que falta
quebra o `npm run build`, não a página em produção.

**Fontes self-hosted.** Tira uma conexão a terceiro do caminho crítico do LCP, não
manda IP de visitante para o Google e torna o build independente de rede externa.
Archivo entra como fonte variável — um arquivo cobre os pesos de 100 a 900.

**Mono só em número.** `IBM Plex Mono` fica restrita a cifra, contagem e data, com
`font-variant-numeric: tabular-nums` para a coluna de valor alinhar. Mono em rótulo
de texto é decoração.

**Sem alternância de tema.** Uma paleta só, escura, com contraste medido: `ink` 15.1:1,
`ink-soft` 7.0:1, `ink-faint` 4.8:1 e `signal` 9.7:1 sobre o fundo. Todos acima do piso
AA, incluindo o texto de 12px.

**Navegação no celular sem menu escondido.** A faixa rola na horizontal em vez de
colapsar atrás de um botão: sem estado para gerenciar, sem JavaScript, e os destinos
ficam visíveis.

**Movimento contínuo em um elemento só.** O ponto de disponibilidade no cabeçalho
pulsa porque é estado; o resto do movimento é uma única entrada no carregamento.
Tudo desligado em `prefers-reduced-motion`.

## Trocando o conteúdo

| O quê | Onde |
| --- | --- |
| Texto do topo, apresentação, método | `src/content/profile.ts` |
| Empregos | `src/content/experience.ts` |
| Projetos e cases | `src/content/projects.ts` |
| Stack | `src/content/stack.ts` |
| Contato, domínio, navegação | `src/content/site.ts` |
| Foto | substituir `public/claudio.jpg` |
| Imagens de projeto | `public/projetos/` e o bloco `images` do case |

Antes do deploy, troque `site.url` em `src/content/site.ts` para o domínio final —
ele alimenta canonical, Open Graph, sitemap e dados estruturados.

## Deploy

Push para o GitHub, importar o repositório na Vercel e aceitar os padrões. Não há
variável de ambiente para configurar.
