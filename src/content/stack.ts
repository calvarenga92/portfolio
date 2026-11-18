import type { StackGroup } from "./types";

/*
 * O texto de abertura mora aqui, e nao no componente: conteudo nao conhece
 * layout. A ordem dos grupos tambem e conteudo — ela diz o que vem primeiro.
 */
export const stackLead =
  "Entrego dos dois lados. No front-end é onde eu sou mais profundo: arquitetura, interface e qualidade do que chega ao usuário. No back-end eu modelo, construo e publico — no Rango, a API em Java com Spring Boot é minha do desenho ao deploy, com as transições de status validadas no servidor e 27 testes entre unitários e de integração. Antes disso, Java e Spring no e-commerce da Raia Drogasil, Java e Python em projeto para a AlmaViva, e Python em automação própria.";

export const stack: StackGroup[] = [
  {
    title: "Front-end",
    accent: "signal",
    icon: "interface",
    items: ["React", "Next.js", "TypeScript", "Tailwind", "React Native", "Design Systems", "Figma"],
  },
  {
    title: "Back-end",
    accent: "signal",
    icon: "codigo",
    items: ["Java", "Spring", "JPA e Hibernate", "SQL", "JWT e autenticação", "Docker", "Python", "Node.js"],
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
    items: ["Vercel", "Render", "Git e GitHub", "Feature flags", "Micro-frontends"],
  },
  {
    title: "Aprendendo agora",
    items: ["PostgreSQL", "NestJS", "Prisma", "Inglês falado"],
    muted: true,
  },
];
