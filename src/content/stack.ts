import type { StackGroup } from "./types";

/**
 * Agrupado por função, não por "linguagens / frameworks / ferramentas".
 * O grupo final declara o que ainda não é meu — é o que separa stack honesta
 * de lista de palavra-chave.
 */
export const stack: StackGroup[] = [
  {
    title: "Interface",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "React Native", "Design Systems"],
  },
  {
    title: "Dados e estado",
    items: ["TanStack Query", "APIs REST", "Context e hooks", "GTM e dataLayer"],
  },
  {
    title: "Qualidade",
    items: ["Playwright", "Jest", "React Testing Library", "Acessibilidade (WCAG)", "Code review"],
  },
  {
    title: "Entrega",
    items: ["Vercel", "Git e GitHub", "Feature flags", "Micro-frontends"],
  },
  {
    title: "Fora do front",
    items: ["Python", "ffmpeg", "Java (legado)"],
  },
  {
    title: "Aprendendo agora",
    items: ["NestJS", "Prisma", "Inglês falado"],
    muted: true,
  },
];
