import * as simpleIcons from "simple-icons";

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
