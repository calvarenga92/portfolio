export type LedgerLine = {
  label: string;

  value: string;
  numeric?: boolean;
};

export type Experience = {
  company: string;
  role: string;

  period: string;

  startISO: string;
  endISO?: string;
  location: string;

  summary: string;

  figures?: LedgerLine[];
  highlights: string[];
  stack: string[];
};

export type ProjectImage = {

  src: string;
  alt: string;
  width: number;
  height: number;
};

export type CaseBlock =
  | { kind: "prose"; title: string; body: string[] }
  | { kind: "ledger"; title: string; lines: LedgerLine[] }
  | { kind: "images"; title: string; images: ProjectImage[] };

export type ProjectLink = {
  kind: "prod" | "code" | "figma";
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  name: string;
  codename?: string;

  tagline: string;
  year: string;

  status?: { label: string; tone: "ativo" | "entregue" };
  role: string;
  stack: string[];

  metrics: LedgerLine[];
  links?: ProjectLink[];
  cover?: ProjectImage;

  caseStudy?: CaseBlock[];
};

export type Accent = "signal" | "probe" | "live" | "craft";

export type Service = {
  title: string;
  body: string;
  accent: Accent;
  icon: "interface" | "entrega" | "qualidade";
};

export type Principle = {
  title: string;
  body: string;
  accent: Accent;
  icon: "entrega" | "qualidade" | "dados" | "metodo";
  result: string;
};

export type StackGroup = {
  title: string;
  items: string[];

  accent?: Accent;
  icon?: "interface" | "dados" | "qualidade" | "entrega" | "codigo";

  muted?: boolean;
};

export type UxImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type UxCase = {
  slug: string;
  name: string;
  tagline: string;

  before: UxImage;
  after: UxImage;
  extras?: UxImage[];

  findings: string[];
  studyHref: string;
  links?: ProjectLink[];
};

export type UxStep = {
  title: string;
  body: string;
};
