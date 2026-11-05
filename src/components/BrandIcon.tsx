import * as simpleIcons from "simple-icons";

/**
 * Marcas de tecnologia, desenhadas por quem é dono delas.
 *
 * Os traçados vêm do `simple-icons`, que distribui os logos oficiais. Eu não
 * redesenho marca de terceiro: além de não ser meu, logo redesenhado "parecido"
 * fica visivelmente torto para quem conhece a marca.
 *
 * O pacote tem mais de três mil ícones, mas isso não pesa no navegador: esta
 * página é estática, então o traçado é resolvido no build e sai como SVG no
 * HTML. Nada do pacote chega ao cliente.
 *
 * Uso nominativo — identificar a tecnologia. Não sugere patrocínio nem
 * vínculo com as empresas.
 *
 * LinkedIn não está aqui de propósito: a própria empresa pediu a remoção do
 * pacote por questão de marca, então o contato usa ícone genérico com o nome
 * escrito, que é identificação e não reprodução.
 */

/** Rótulo do conteúdo para a chave do pacote. Sem entrada, não há ícone. */
const brandKeyByLabel: Record<string, string> = {
  React: "siReact",
  "React Native": "siReact",
  "Next.js": "siNextdotjs",
  TypeScript: "siTypescript",
  Tailwind: "siTailwindcss",
  "TanStack Query": "siReactquery",
  Jest: "siJest",
  "React Testing Library": "siTestinglibrary",
  Vercel: "siVercel",
  "Git e GitHub": "siGithub",
  "GTM e dataLayer": "siGoogletagmanager",
  Python: "siPython",
  ffmpeg: "siFfmpeg",
  "Java (legado)": "siOpenjdk",
  NestJS: "siNestjs",
  Prisma: "siPrisma",
  "Node.js": "siNodedotjs",
  GitHub: "siGithub",
  WhatsApp: "siWhatsapp",
};

type SimpleIcon = { path: string; title: string; hex: string };
const icons = simpleIcons as unknown as Record<string, SimpleIcon | undefined>;

export function hasBrand(label: string): boolean {
  const key = brandKeyByLabel[label];
  return Boolean(key && icons[key]);
}

/**
 * Luminância relativa, pela fórmula da WCAG. Serve para descobrir que a marca
 * oficial do GitHub, da Vercel e do Next.js é preta: sobre o fundo escuro do
 * site elas somem. Nesses casos o ícone segue a cor do texto — a forma é a da
 * marca, o que é o que identifica; a cor cede para o logo continuar visível.
 */
function luminance(hex: string): number {
  const channel = (v: number) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  const r = parseInt(hex.slice(0, 2), 16);
  const g = parseInt(hex.slice(2, 4), 16);
  const b = parseInt(hex.slice(4, 6), 16);
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

export function BrandIcon({
  label,
  size = 18,
  /** Em cor de marca o bloco vira arco-íris; o padrão segue a cor do texto. */
  useBrandColor = false,
  className = "",
}: {
  label: string;
  size?: number;
  useBrandColor?: boolean;
  className?: string;
}) {
  const key = brandKeyByLabel[label];
  const icon = key ? icons[key] : undefined;
  if (!icon) return null;

  const tooDark = luminance(icon.hex) < 0.12;
  const fill = useBrandColor && !tooDark ? `#${icon.hex}` : "currentColor";

  return (
    <svg
      role="img"
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={fill}
      className={`shrink-0 ${className}`}
    >
      <path d={icon.path} />
    </svg>
  );
}
