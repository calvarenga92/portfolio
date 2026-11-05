import type { ReactNode } from "react";
import type { LedgerLine } from "@/content/types";

/**
 * Três primitivos e nada além. Tudo no site é composto a partir daqui, para
 * que espaçamento, largura e ritmo tipográfico tenham um lugar só onde mudar.
 */

/** Largura máxima e respiro lateral. Nunca defina padding lateral nas seções. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[72rem] px-6 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
}

/**
 * Seção com título. O `id` serve à navegação por âncora e o `aria-labelledby`
 * amarra a região ao próprio título — é o que faz leitor de tela anunciar
 * "região Trabalho" em vez de "região".
 */
export function Section({
  id,
  title,
  children,
  className = "",
}: {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  const headingId = `${id}-titulo`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={`border-t border-rule py-20 sm:py-28 ${className}`}
    >
      <Container>
        <h2
          id={headingId}
          className="max-w-[20ch] text-2xl font-semibold leading-[1.1] tracking-[-0.02em] sm:text-3xl"
        >
          {title}
        </h2>
        <div className="mt-10 sm:mt-14">{children}</div>
      </Container>
    </section>
  );
}

/** Bloco de razão: rótulo à esquerda, valor à direita, conexão pontilhada. */
export function Ledger({ lines }: { lines: readonly LedgerLine[] }) {
  return (
    <dl className="border-t border-rule">
      {lines.map((line) => (
        <div key={line.label} className="ledger-row">
          <dt className="ledger-label">{line.label}</dt>
          <dd
            className={
              line.numeric
                ? "tnum text-lg font-medium text-signal"
                : "text-sm font-medium text-ink"
            }
          >
            {line.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

/** Parágrafo de leitura. Medida travada abaixo de 70 caracteres. */
export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-[62ch] space-y-5 text-base leading-[1.7] text-ink-soft">
      {children}
    </div>
  );
}
