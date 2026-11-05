/**
 * Contratos do conteúdo.
 *
 * Tudo que é texto, número ou imagem do portfólio passa por aqui antes de
 * chegar na UI. A regra é: componente não inventa conteúdo e conteúdo não
 * conhece layout. Se amanhã o site virar MDX ou CMS, só a origem muda —
 * os componentes continuam consumindo os mesmos tipos.
 */

/** Linha de razão: rótulo à esquerda, valor à direita. */
export type LedgerLine = {
  label: string;
  /** Renderizado em mono quando `numeric` — reservado a dado, nunca a texto. */
  value: string;
  numeric?: boolean;
};

export type Experience = {
  company: string;
  role: string;
  /** Rótulo humano do período, ex. "mar 2018 — fev 2024". */
  period: string;
  /** ISO para <time dateTime>; o fim ausente significa "até hoje". */
  startISO: string;
  endISO?: string;
  location: string;
  /** Uma frase sobre o que mudou por causa dele. Não é descrição de cargo. */
  summary: string;
  /**
   * Números que sustentam a passagem pela empresa. Opcional de propósito:
   * emprego sem métrica verificável fica sem a linha, e isso é melhor do que
   * preencher com número inventado — que é exatamente o que cai por terra na
   * primeira entrevista técnica. Não repetir aqui o tempo de casa, que já é
   * calculado a partir das datas.
   */
  figures?: LedgerLine[];
  highlights: string[];
  stack: string[];
};

export type ProjectImage = {
  /** Caminho a partir de /public, ex. "/projetos/kurio-checkout.png". */
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type CaseBlock =
  | { kind: "prose"; title: string; body: string[] }
  | { kind: "ledger"; title: string; lines: LedgerLine[] }
  | { kind: "images"; title: string; images: ProjectImage[] };

export type Project = {
  slug: string;
  name: string;
  /** Uma linha, lida em 2 segundos na listagem. */
  tagline: string;
  year: string;
  role: string;
  stack: string[];
  /** Números que sustentam o case. Até 3 — mais que isso vira ruído. */
  metrics: LedgerLine[];
  links?: { label: string; href: string }[];
  cover?: ProjectImage;
  /** Ausente = o projeto aparece só na listagem, sem página própria. */
  caseStudy?: CaseBlock[];
};

/** Cores de sinalização. O significado de cada uma está em globals.css. */
export type Accent = "signal" | "probe" | "live" | "craft";

/**
 * Um princípio de trabalho: a tese, o caso que a sustenta e, quando existe,
 * o número que a fecha. O título é a frase que a pessoa leva embora se ler
 * só os títulos — por isso ele é afirmação, não rótulo de categoria.
 */
export type Principle = {
  title: string;
  body: string;
  accent: Accent;
  icon: "entrega" | "qualidade" | "dados" | "metodo";
  figure?: LedgerLine;
};

export type StackGroup = {
  title: string;
  items: string[];
  /** Cor e ícone do grupo — é o que transforma a lista em legenda. */
  accent?: Accent;
  icon?: "interface" | "dados" | "qualidade" | "entrega" | "codigo";
  /** Usado no grupo "aprendendo agora" para baixar o peso visual. */
  muted?: boolean;
};
