import Link from "next/link";
import type { ReactNode } from "react";

/**
 * Ação primária do site. Existe um componente só para que todo call to action
 * — "Código no GitHub", "Falar sobre um projeto", "Voltar para o trabalho" —
 * tenha a mesma forma, o mesmo alvo de toque e o mesmo estado de foco. Dois
 * botões parecidos mas diferentes é o tipo de inconsistência que o usuário não
 * sabe nomear e sente mesmo assim.
 */

type Variant = "solid" | "outline" | "ghost";

const base =
  "inline-flex items-center gap-2.5 rounded-sm px-5 py-3 text-base font-medium transition-colors";

const variants: Record<Variant, string> = {
  solid: "bg-signal text-base hover:bg-ink",
  outline: "border border-rule-strong text-ink hover:border-signal hover:text-signal",
  ghost: "px-0 py-2 text-ink-soft hover:text-signal",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  /** Links externos abrem em nova aba; os internos usam o Link do Next. */
  external?: boolean;
  icon?: "arrow-left" | "arrow-up-right";
  className?: string;
};

function Icon({ name }: { name: NonNullable<Props["icon"]> }) {
  // currentColor para o ícone acompanhar o estado do texto, inclusive no hover.
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 16 16"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      {name === "arrow-left" ? (
        <>
          <path d="M12.5 8H3.5" />
          <path d="M7 3.5 2.5 8 7 12.5" />
        </>
      ) : (
        <>
          <path d="M4.5 11.5 11.5 4.5" />
          <path d="M5.5 4.5h6v6" />
        </>
      )}
    </svg>
  );
}

export function Button({
  href,
  children,
  variant = "outline",
  external = false,
  icon,
  className = "",
}: Props) {
  const content = (
    <>
      {icon === "arrow-left" && <Icon name="arrow-left" />}
      <span>{children}</span>
      {icon === "arrow-up-right" && <Icon name="arrow-up-right" />}
    </>
  );

  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
