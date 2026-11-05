import type { Experience } from "./types";

export const experiences: Experience[] = [
  {
    company: "Gengi Soluções",
    role: "Desenvolvedor Front-end Sênior — PJ",
    period: "mar 2024 — hoje",
    startISO: "2024-03",
    location: "São Paulo, remoto",
    summary:
      "Atendimento direto a produto, do desenho da interface à entrega em produção.",
    highlights: [
      "Produtos em React, Next.js e TypeScript entregues ponta a ponta, do protótipo navegável ao deploy.",
      "QA de jornada ponta a ponta em produto de terceiros, com massa de dados própria e roteiro reaproveitável.",
      "Automação em Python para processos repetitivos de produção de conteúdo.",
    ],
    stack: ["React", "Next.js", "TypeScript", "Tailwind", "Playwright", "Python"],
  },
  {
    company: "XP Inc.",
    role: "Desenvolvedor Front-end Sênior",
    period: "mar 2018 — fev 2024",
    startISO: "2018-03",
    endISO: "2024-02",
    location: "São Paulo, híbrido",
    summary:
      "Seis anos em plataforma de investimentos, onde erro de interface tem custo financeiro direto.",
    figures: [
      { label: "Anos de React Native no aplicativo", value: "3", numeric: true },
    ],
    highlights: [
      "Substituição de monolito Angular por micro-frontends, migrando jornada a jornada com legado e novo em produção ao mesmo tempo.",
      "Feature flags por jornada depois de um incidente de big-bang, permitindo desligar uma jornada sem deploy.",
      "Design Systems usados por várias squads — componentes, estados, acessibilidade e consistência entre jornadas.",
      "Instrumentação de jornadas com GTM e dataLayer para ler funil real e sustentar decisão de interface com dado.",
      "React Native por cerca de três anos no aplicativo, além do front web.",
      "Testes com Jest e React Testing Library como parte do fluxo, não como etapa final.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Micro-frontends",
      "React Native",
      "Design Systems",
      "Jest",
      "RTL",
      "GTM",
    ],
  },
  {
    company: "Raia Drogasil",
    role: "Desenvolvedor — e-commerce",
    period: "fev 2014 — mar 2018",
    startISO: "2014-02",
    endISO: "2018-03",
    location: "São Paulo, presencial",
    summary:
      "Onde a transição de web design para desenvolvimento aconteceu, dentro do e-commerce DrogaRaia e Drogasil.",
    figures: [
      { label: "Bandeiras de e-commerce atendidas", value: "2", numeric: true },
    ],
    highlights: [
      "Front-end e integrações no e-commerce das duas bandeiras, com tráfego de varejo nacional.",
      "Java com PrimeFaces e Spring Faces no lado servidor das telas.",
      "Transição gradual de web design para desenvolvimento — a origem em UX que ainda orienta como eu desenho.",
    ],
    stack: ["JavaScript", "HTML", "CSS", "Java", "PrimeFaces", "WordPress"],
  },
];
