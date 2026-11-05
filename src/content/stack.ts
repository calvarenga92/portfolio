import type { StackGroup } from "./types";

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
