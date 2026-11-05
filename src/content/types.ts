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

export type Project = {
  slug: string;
  name: string;

  tagline: string;
  year: string;

  status?: { label: string; tone: "ativo" | "entregue" };
  role: string;
  stack: string[];

  metrics: LedgerLine[];
  links?: { label: string; href: string }[];
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
