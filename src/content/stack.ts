import type { StackGroup } from "./types";

/*
 * O texto de abertura mora aqui, e nao no componente: conteudo nao conhece
 * layout. A ordem dos grupos tambem e conteudo — ela diz o que vem primeiro.
 */
export const stackLead =
  "Entrego dos dois lados. No front-end é onde eu sou mais profundo: arquitetura, interface e qualidade do que chega ao usuário. No back-end eu modelo, construo e publico — no Rango, a API em Java com Spring Boot é minha do desenho ao deploy, com as transições de status validadas no servidor e 27 testes entre unitários e de integração. No Kudo, a API em NestJS com PostgreSQL também é minha e está no ar, com 86 testes que incluem compras simultâneas num banco real. Antes disso, Java e Spring no e-commerce da Raia Drogasil, Java e Python em projeto para a AlmaViva, e Python em automação própria.";

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
    items: ["Java", "Spring", "NestJS", "Node.js", "PostgreSQL", "SQL", "JPA e Hibernate", "JWT e autenticação", "Socket.IO", "Docker", "Python"],
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
    items: ["Prisma", "AWS", "Inglês falado"],
    muted: true,
  },
];
