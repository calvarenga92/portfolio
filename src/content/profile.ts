import type { LedgerLine, Principle } from "./types";

/**
 * Hero e seção de método.
 *
 * A manchete é quebrada em linhas à mão porque o ritmo da quebra faz parte
 * do desenho. Em telas estreitas o CSS deixa fluir naturalmente.
 */
export const headline = ["Desenho a interface", "e respondo por ela", "em produção."];

export const intro =
  "Front-end sênior, 12 anos de mercado, origem em UX. Trabalhei onde erro de interface vira incidente financeiro: investimentos na XP e e-commerce na Raia Drogasil. Hoje atendo como PJ pela Gengi, em São Paulo.";

/** Fatos do hero. Verificáveis, nenhum arredondado para parecer maior. */
export const ledger: LedgerLine[] = [
  { label: "Anos construindo interface em produção", value: "12", numeric: true },
  { label: "Monolito Angular substituído por micro-frontends", value: "jornada a jornada" },
  { label: "Tempo para desligar uma jornada sem deploy", value: "segundos" },
];

/**
 * Cada princípio era um parágrafo de um texto corrido, e cada um já começava
 * com a própria tese. Separá-los em blocos não mudou o conteúdo — só revelou
 * a estrutura que estava lá, e permite que a seção seja varrida pelos títulos
 * por quem não vai ler tudo.
 */
export const method: { title: string; principles: Principle[] } = {
  title: "Como eu trabalho",
  principles: [
    {
      title: "Migração grande se faz em fatia",
      body: "Na XP a primeira tentativa de trocar o monolito Angular foi big-bang e virou incidente: jornada inteira fora do ar, sem forma de reverter sem deploy. Depois disso defendi feature flag por jornada, e passamos a migrar com legado e novo rodando lado a lado. O ganho não foi técnico, foi de experiência — o usuário parou de ser cobaia de release.",
      accent: "live" as const,
      icon: "entrega" as const,
      figure: { label: "Para desligar uma jornada", value: "segundos" },
    },
    {
      title: "Correto e legível não são a mesma coisa",
      body: "Uma suíte de 78 testes end-to-end em Playwright pegou cinco defeitos reais antes da produção, e um deles era estouro de layout: o comportamento passava, a tela estava ilegível. Teste funcional sozinho não enxerga isso.",
      accent: "probe" as const,
      icon: "qualidade" as const,
      figure: { label: "Defeitos pegos antes da produção", value: "5", numeric: true },
    },
    {
      title: "Dinheiro não é float",
      body: "No Kurio o valor é inteiro de 18 casas e o checkout é idempotente por tentativa, então retry de rede não vira cobrança dobrada. É o tipo de decisão que ninguém elogia e que, quando falta, custa caro.",
      accent: "signal" as const,
      icon: "dados" as const,
      figure: { label: "Casas decimais no valor, sem float", value: "18", numeric: true },
    },
    {
      title: "Decisão de design se defende com dado",
      body: "Instrumentei jornadas com dataLayer para enxergar onde o usuário abandonava, e usei feature flag para expor a versão nova a uma fatia antes de abrir para todo mundo. Opinião é ponto de partida; número é o que encerra a discussão.",
      accent: "craft" as const,
      icon: "metodo" as const,
    },
  ],
};

/**
 * Honestidade declarada. Raro em portfólio e deliberado: separa quem entrega
 * de quem lista palavra-chave, e evita entrevista que morre na etapa 5.
 */
export const learning = {
  title: "Onde eu ainda não entrego sozinho",
  body: "Back-end de arquitetura — NestJS com DI, guards e pipes, ORM com migration em produção — eu leio e acompanho, mas não entreguei. Em inglês leio e escrevo bem; reunião falada com stakeholder estrangeiro ainda é limitação e está em evolução ativa. Prefiro dizer antes do que descobrirmos juntos depois.",
};
