import type { ReactNode } from "react";
import type { Accent, LedgerLine } from "@/content/types";
import { Icon, type IconName } from "./icons";

export const accentText: Record<Accent, string> = {
  signal: "text-signal",
  probe: "text-probe",
  live: "text-live",
  craft: "text-craft",
};

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

export function Section({
  id,
  title,
  icon,
  accent = "signal",
  children,
  className = "",
}: {
  id: string;
  title: string;

  icon?: IconName;
  accent?: Accent;
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
        <div className="flex items-center gap-3.5">
          {icon && <Icon name={icon} size={26} className={accentText[accent]} />}
          <h2
            id={headingId}
            className="text-2xl font-semibold leading-[1.1] tracking-[-0.02em] sm:text-3xl"
          >
            {title}
          </h2>
        </div>
        <div className="mt-10 sm:mt-14">{children}</div>
      </Container>
    </section>
  );
}

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

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="max-w-[62ch] space-y-5 text-base leading-[1.7] text-ink-soft">
      {children}
    </div>
  );
}
