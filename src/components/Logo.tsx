export function Logo({ size = 34, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      width={size}
      height={size}
      role="img"
      aria-label="Claudio Alvarenga"
      className={`shrink-0 ${className}`}
    >
      <rect
        x="1"
        y="1"
        width="38"
        height="38"
        rx="9"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.28"
        strokeWidth="1.5"
      />

      <g fill="none" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23.4 13.6A9 9 0 1 0 23.4 26.4" stroke="currentColor" />
        <path d="M23.2 28.4 28.4 12.6l5.2 15.8" stroke="var(--color-signal)" />
        <path d="M25.1 23.2h6.6" stroke="var(--color-signal)" />
      </g>
    </svg>
  );
}
