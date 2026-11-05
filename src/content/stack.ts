import type { StackGroup } from "./types";

/**
 * Agrupado por função, não por "linguagens / frameworks / ferramentas".
 *
 * Cada grupo carrega a cor de sinalização da sua natureza — medição em ciano,
 * entrega em verde, interface em violeta — para a seção ser varrida de olho
 * em vez de lida palavra por palavra. O grupo final declara o que ainda não é
 * meu: é o que separa stack honesta de lista de palavra-chave.
 */
export const stack: StackGroup[] = [
  {
    title: "Interface",
    accent: "craft",
    icon: "interface",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "React Native", "Design Systems"],
  },
  {
    title: "Dados e estado",
    accent: "signal",
    icon: "dados",
    items: ["TanStack Query", "APIs REST", "Context e hooks", "GTM e dataLayer"],
  },
  {
    title: "Qualidade",
    accent: "probe",
    icon: "qualidade",
    items: ["Playwright", "Jest", "React Testing Library", "Acessibilidade (WCAG)", "Code review"],
  },
  {
    title: "Entrega",
    accent: "live",
    icon: "entrega",
    items: ["Vercel", "Git e GitHub", "Feature flags", "Micro-frontends"],
  },
  {
    title: "Fora do front",
    icon: "codigo",
    items: ["Python", "ffmpeg", "Java (legado)"],
  },
  {
    title: "Aprendendo agora",
    items: ["NestJS", "Prisma", "Inglês falado"],
    muted: true,
  },
];
