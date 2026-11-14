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

const prod = (href: string, label = "Ver no ar"): ProjectLink => ({ kind: "prod", label, href });
const code = (href: string, label = "Código no GitHub"): ProjectLink => ({ kind: "code", label, href });
const design = (href: string, label = "Telas no Figma"): ProjectLink => ({ kind: "figma", label, href });
// Fluxos de UX: página "Fluxos de UX" do arquivo Cases de Product Design, uma seção por projeto.
const flow = (nodeId: string): ProjectLink => design(figma("cases", nodeId), "Fluxo de UX no Figma");

export const projectLinks = {
  kurio: [
    prod("https://calvarenga-jungle-nft.vercel.app"),
    prod("https://kurio-mobile.vercel.app", "Versão mobile no ar"),
    code(github("calvarenga92/calvarenga-jungle-nft")),
    code(github("calvarenga92/kurio-mobile"), "Mobile no GitHub"),
    design(figma("cases", "0-1")),
    flow("25-155"),
  ],

  financeWorkspace: [
    prod("https://finance-workspace-shell.vercel.app"),
    code(github("calvarenga92/finance-workspace-shell"), "Container no GitHub"),
    code(github("calvarenga92/finance-workspace-portfolio-mfe"), "Módulo no GitHub"),
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

  // Sem produção ainda. Quando o deploy subir, entra um prod() aqui.
  // Atenção: foody-delivery.onrender.com responde, mas NÃO é este projeto (outro título e outro app).
  foody: [
    code(github("calvarenga92/foody-delivery-desafio")),
    design(figma("evolucao", "2-3253")),
    flow("26-402"),
  ],

  rectArchitectureLab: [
    prod("https://rect-architecture-lab.vercel.app"),
    code(github("calvarenga92/RectArchitectureLab")),
    design(figma("frontEnd", "2-945")),
  ],
} satisfies Record<string, ProjectLink[]>;
