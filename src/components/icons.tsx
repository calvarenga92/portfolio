/**
 * Ícones desenhados à mão em SVG, sem biblioteca.
 *
 * Três motivos para não instalar um pacote: são nove formas, o traço fica
 * consistente com a tipografia porque eu escolho a espessura, e não entra
 * nada no bundle além do que é usado. `currentColor` faz o ícone herdar a cor
 * do texto, então ele acompanha estado e hover sem código extra.
 */

export type IconName =
  | "trabalho"
  | "experiencia"
  | "metodo"
  | "stack"
  | "contato"
  | "interface"
  | "dados"
  | "qualidade"
  | "entrega"
  | "codigo"
  | "email"
  | "telefone"
  | "perfil"
  | "github"
  | "linkedin";

const paths: Record<IconName, React.ReactNode> = {
  // Janela de navegador: o que foi construído.
  trabalho: (
    <>
      <rect x="2.5" y="3.5" width="15" height="13" rx="1.5" />
      <path d="M2.5 7.5h15" />
      <path d="M5.5 5.5h.01M8 5.5h.01" />
    </>
  ),
  // Trilho do tempo, o mesmo desenho da seção de experiência.
  experiencia: (
    <>
      <path d="M5 3v14" />
      <circle cx="5" cy="6" r="1.6" />
      <circle cx="5" cy="14" r="1.6" />
      <path d="M9 6h8M9 14h6" />
    </>
  ),
  // Mira: decisão apontada, não tentativa.
  metodo: (
    <>
      <circle cx="10" cy="10" r="6.5" />
      <circle cx="10" cy="10" r="2.5" />
      <path d="M10 1.5v3M10 15.5v3M1.5 10h3M15.5 10h3" />
    </>
  ),
  // Camadas empilhadas.
  stack: (
    <>
      <path d="M10 2.5 17.5 6.5 10 10.5 2.5 6.5z" />
      <path d="M2.5 10 10 14l7.5-4" />
      <path d="M2.5 13.5 10 17.5l7.5-4" />
    </>
  ),
  contato: (
    <>
      <rect x="2.5" y="4.5" width="15" height="11" rx="1.5" />
      <path d="m2.5 6 7.5 5 7.5-5" />
    </>
  ),
  // Cursor sobre superfície: interface.
  interface: (
    <>
      <rect x="2.5" y="3.5" width="15" height="13" rx="1.5" />
      <path d="m8 8 5 5-2 .5-.8 2z" />
    </>
  ),
  // Banco de dados.
  dados: (
    <>
      <ellipse cx="10" cy="5" rx="6.5" ry="2.5" />
      <path d="M3.5 5v10c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5V5" />
      <path d="M3.5 10c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5" />
    </>
  ),
  // Marca de verificação dentro de um escudo: qualidade.
  qualidade: (
    <>
      <path d="M10 2.5 16 5v5c0 3.5-2.4 6.3-6 7.5-3.6-1.2-6-4-6-7.5V5z" />
      <path d="m7.5 9.8 1.8 1.9 3.4-3.7" />
    </>
  ),
  // Seta subindo de uma base: entrega.
  entrega: (
    <>
      <path d="M10 13V3.5" />
      <path d="m6.5 7 3.5-3.5L13.5 7" />
      <path d="M3.5 13v2.5a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1V13" />
    </>
  ),
  codigo: (
    <>
      <path d="m6.5 7-4 3 4 3" />
      <path d="m13.5 7 4 3-4 3" />
      <path d="m11.5 4-3 12" />
    </>
  ),
  email: (
    <>
      <rect x="2.5" y="4.5" width="15" height="11" rx="1.5" />
      <path d="m2.5 6 7.5 5 7.5-5" />
    </>
  ),
  // Silhueta de pessoa: perfil profissional, sem marca de nenhuma rede.
  perfil: (
    <>
      <circle cx="10" cy="7" r="3.2" />
      <path d="M3.8 17c0-3.1 2.8-5.3 6.2-5.3s6.2 2.2 6.2 5.3" />
    </>
  ),
  telefone: (
    <path d="M6.2 3.5 7.8 7 6.3 8.6a9.5 9.5 0 0 0 5.1 5.1L13 12.2l3.5 1.6v2.2c0 .6-.5 1.1-1.1 1C8 16.4 3.6 12 3.2 4.6c0-.6.4-1.1 1-1.1z" />
  ),
  github: (
    <path d="M10 1.8a8.2 8.2 0 0 0-2.6 16c.4.1.6-.2.6-.5v-1.6c-2.3.5-2.8-1.1-2.8-1.1-.4-1-.9-1.2-.9-1.2-.8-.5 0-.5 0-.5.8.1 1.3.9 1.3.9.7 1.3 2 .9 2.5.7 0-.6.3-.9.5-1.2-1.8-.2-3.8-.9-3.8-4.1 0-.9.3-1.6.9-2.2-.1-.2-.4-1 .1-2.2 0 0 .7-.2 2.2.8a7.5 7.5 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.5 1.2.2 2 .1 2.2.6.6.9 1.3.9 2.2 0 3.2-2 3.9-3.8 4.1.3.3.6.8.6 1.6v2.4c0 .3.1.6.6.5A8.2 8.2 0 0 0 10 1.8z" />
  ),
  linkedin: (
    <>
      <rect x="2.5" y="2.5" width="15" height="15" rx="2" />
      <path d="M6 8.5v5M6 5.9v.01" />
      <path d="M9.5 13.5v-5M9.5 10.3c0-1 .8-1.8 1.8-1.8s1.7.8 1.7 1.8v3.2" />
    </>
  ),
};

/** Ícones de marca vêm preenchidos; os desenhados a traço, contornados. */
const filled: IconName[] = ["github", "telefone"];

export function Icon({
  name,
  className = "",
  size = 20,
}: {
  name: IconName;
  className?: string;
  size?: number;
}) {
  const isFilled = filled.includes(name);

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill={isFilled ? "currentColor" : "none"}
      stroke={isFilled ? "none" : "currentColor"}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 ${className}`}
    >
      {paths[name]}
    </svg>
  );
}
