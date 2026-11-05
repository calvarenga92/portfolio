/**
 * Monograma CA.
 *
 * O C é um arco aberto à direita e o A nasce dentro dessa abertura, dividindo
 * o espaço com ele — é ligatura, não duas letras encostadas. A haste do A sai
 * em âmbar porque é a cor de estado do site; o resto segue a cor do texto, o
 * que faz a marca funcionar sobre qualquer fundo sem variante extra.
 *
 * Desenhado em SVG em vez de fonte ou imagem: escala sem borrar, pesa quase
 * nada e acompanha o hover do link que o envolve.
 */
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
        {/* C: arco aberto à direita, varrendo pela esquerda. */}
        <path d="M23.4 13.6A9 9 0 1 0 23.4 26.4" stroke="currentColor" />
        {/* A: vértice acima, hastes descendo, travessão no terço inferior. */}
        <path d="M23.2 28.4 28.4 12.6l5.2 15.8" stroke="var(--color-signal)" />
        <path d="M25.1 23.2h6.6" stroke="var(--color-signal)" />
      </g>
    </svg>
  );
}
