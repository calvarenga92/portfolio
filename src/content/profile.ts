import type { LedgerLine } from "./types";

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

export const method = {
  title: "Como eu trabalho",
  body: [
    "Migração grande se faz em fatia. Na XP a primeira tentativa de trocar o monolito Angular foi big-bang e virou incidente: jornada inteira fora do ar, sem forma de reverter sem deploy. Depois disso defendi feature flag por jornada, e passamos a migrar com legado e novo rodando lado a lado. O ganho não foi técnico, foi de experiência — o usuário parou de ser cobaia de release.",
    "Interface correta e interface legível são coisas diferentes. Uma suíte de 78 testes E2E em Playwright pegou cinco defeitos reais antes da produção, e um deles era estouro de layout: o comportamento passava, a tela estava ilegível. Teste funcional sozinho não vê isso.",
    "Dinheiro não é float. No Kurio o valor é inteiro de 18 casas e o checkout é idempotente por tentativa, então retry de rede não vira cobrança dobrada. É o tipo de decisão que ninguém elogia e que, quando falta, custa caro.",
    "Decisão de design se defende com dado. Instrumentei jornadas com dataLayer para enxergar onde o usuário abandonava, e usei flag para expor versão nova a uma fatia antes de abrir para todo mundo. Opinião é ponto de partida; número é o que encerra a discussão.",
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
