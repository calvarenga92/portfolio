import type { StackGroup } from "./types";

export const stack: StackGroup[] = [
  {
    title: "Interface",
    accent: "signal",
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
    accent: "signal",
    icon: "qualidade",
    items: ["Playwright", "Jest", "React Testing Library", "Acessibilidade (WCAG)", "Code review"],
  },
  {
    title: "Entrega",
    accent: "signal",
    icon: "entrega",
    items: ["Vercel", "Git e GitHub", "Feature flags", "Micro-frontends"],
  },
  {
    title: "No back-end",
    accent: "signal",
    icon: "codigo",
    items: ["Java", "Spring", "Python", "Node.js", "APIs e integrações", "ffmpeg"],
  },
  {
    title: "Aprendendo agora",
    items: ["NestJS", "Prisma", "Inglês falado"],
    muted: true,
  },
];
