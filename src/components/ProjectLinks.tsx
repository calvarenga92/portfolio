import type { ProjectLink } from "@/content/types";
import { BrandIcon } from "./BrandIcon";

const brandByKind: Partial<Record<ProjectLink["kind"], string>> = {
  code: "GitHub",
  figma: "Figma",
};

function ArrowUpRight() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    >
      <path d="M4.5 11.5 11.5 4.5" />
      <path d="M5.5 4.5h6v6" />
    </svg>
  );
}

const base =
  "group inline-flex items-center rounded-sm font-medium transition-[background-color,border-color,color,transform] duration-150 hover:-translate-y-0.5";

const primary =
  "bg-signal font-semibold text-base hover:bg-ink";
const secondary = "border border-rule-strong text-ink hover:border-ink";

// Padding por tamanho; o secundário desconta 1px de cada lado por causa da borda.
const sizing = {
  md: { primary: "gap-2 px-4 py-2.5 text-sm", secondary: "gap-2 px-3.5 py-2 text-sm" },
  lg: { primary: "gap-2.5 px-5 py-3 text-[15px]", secondary: "gap-2.5 px-5 py-[11px] text-[15px]" },
};

/**
 * Links de um projeto com hierarquia visual: "no ar" é a ação principal;
 * código e Figma vêm em seguida, com o ícone da marca.
 */
export function ProjectLinks({
  links,
  align = "start",
  size = "md",
  quiet = false,
}: {
  links: ProjectLink[];
  align?: "start" | "center";
  size?: "md" | "lg";
  /** Quando a página já tem outra ação principal, todos os links ficam secundários. */
  quiet?: boolean;
}) {
  const ordered = [...links].sort((a, b) => Number(b.kind === "prod") - Number(a.kind === "prod"));
  const justify =
    align === "center" ? "justify-center" : "";

  return (
    <ul className={`flex flex-wrap items-center gap-2.5 ${justify}`}>
      {ordered.map((link, index) => {
        const brand = brandByKind[link.kind];
        // Só o primeiro link "no ar" é a ação principal; os outros ficam secundários.
        const isPrimary = !quiet && link.kind === "prod" && index === 0;
        const dot = isPrimary ? "bg-base" : "bg-live";
        return (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              className={`${base} ${isPrimary ? `${primary} ${sizing[size].primary}` : `${secondary} ${sizing[size].secondary}`}`}
            >
              {link.kind === "prod" && (
                <span aria-hidden="true" className="relative flex size-2">
                  <span className={`beacon absolute inline-flex size-full rounded-full ${dot} opacity-60`} />
                  <span className={`relative inline-flex size-2 rounded-full ${dot}`} />
                </span>
              )}
              {brand && <BrandIcon label={brand} size={15} />}
              <span>{link.label}</span>
              <ArrowUpRight />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
