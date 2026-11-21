import type { ProjectLink } from "./types";

/*
 * Fonte única de todo link externo dos projetos: produção, código e Figma.
 * projects.ts e ux.ts só referenciam o que está aqui. Endereço novo entra
 * neste arquivo e aparece em todos os lugares que usam o projeto.
 */

const FIGMA_FILES = {
  cases: "uTnOgVhzcVUIGBXPrWHoCf", // Cases de Product Design
  frontEnd: "hJCeJcqbtxRG9aBBcd3yW8", // Projetos — Front-end
  evolucao: "1T4Btch5hCvofWmRGmQM6x", // Projetos — Evolução
} as const;

const figma = (file: keyof typeof FIGMA_FILES, nodeId: string) =>
  `https://www.figma.com/design/${FIGMA_FILES[file]}?node-id=${nodeId}`;

const github = (repo: string) => `https://github.com/${repo}`;

// Rotulos curtos de proposito: o ProjectLinks desenha o icone da marca ao lado,
// entao repetir o nome dela no texto diz a mesma coisa duas vezes e ainda faz o
// botao quebrar em duas linhas. "Ver no ar" fica por extenso porque e o unico
// sem icone de marca, e precisa dizer sozinho para onde leva.
const prod = (href: string, label = "Ver no ar"): ProjectLink => ({ kind: "prod", label, href });
const code = (href: string, label = "Código"): ProjectLink => ({ kind: "code", label, href });
const design = (href: string, label = "Telas"): ProjectLink => ({ kind: "figma", label, href });
// Fluxos de UX: página "Fluxos de UX" do arquivo Cases de Product Design, uma seção por projeto.
const flow = (nodeId: string): ProjectLink => design(figma("cases", nodeId), "Fluxo de UX");

export const projectLinks = {
  atendeAi: [
    prod("https://padaria-pao-de-ouro-demo.vercel.app"), // site fictício com a assistente
    prod("https://calvarenga-atende-ai.vercel.app", "Painel no ar"), // botão "Entrar na conta demo", só leitura
    code(github("calvarenga92/atende-ai")),
    flow("60-160"), // "Atende AI — fluxo da conversa e do lead · 17/11/2026"
  ],

  kurio: [
    prod("https://calvarenga-jungle-nft.vercel.app"),
    prod("https://kurio-mobile.vercel.app", "Mobile no ar"),
    // Health check da API: no plano gratuito do Render a primeira chamada acorda o servidor (~50 s).
    prod("https://kudo-api-2va3.onrender.com/api/saude", "API no ar"),
    code(github("calvarenga92/kudo")),
    code(github("calvarenga92/kudo-api"), "API"),
    code(github("calvarenga92/kudo-mobile"), "Mobile"),
    design(figma("cases", "22-3678")), // seção "v3 (3 temas)": o redesenho; a v1 fica em 0-1
    design(figma("cases", "62-112"), "Arquitetura"), // seção "Kudo — arquitetura full-stack · 18/11/2026"
    flow("25-155"),
  ],

  financeWorkspace: [
    prod("https://finance-workspace-shell.vercel.app"),
    code(github("calvarenga92/finance-workspace-shell"), "Container"),
    code(github("calvarenga92/finance-workspace-portfolio-mfe"), "Módulo"),
    design(figma("frontEnd", "3-2")), // página "v2 e v2.1"; a v1 está em 0-1
    flow("26-271"),
  ],

  // Repositório privado: github.com/vic-clau/edit-IA dá 404 para visitante.
  // Volta para a lista quando o repositório for público.
  editIa: [],

  flutterComparativo: [
    prod("https://flutter-comparativo.vercel.app"),
    code(github("calvarenga92/flutter-comparativo")),
    design(figma("evolucao", "2-1900")),
    flow("26-512"),
  ],

  // Atenção: foody-delivery.onrender.com responde, mas NÃO é este projeto (outro título e outro app).
  foody: [
    prod("https://rango-rastreador.vercel.app"),
    code(github("calvarenga92/rango")),
    design(figma("evolucao", "2-3253")),
    flow("26-402"),
  ],

  // Caso da XP: sem produção nem código (produto de instituição financeira).
  // Só as telas genéricas redesenhadas e o fluxo, no arquivo Cases.
  xpFundos: [
    design(figma("cases", "45-969"), "Telas"), // página "Busca de fundos — telas"
    flow("44-118"),
  ],
} satisfies Record<string, ProjectLink[]>;
