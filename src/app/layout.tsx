import type { Metadata } from "next";
import localFont from "next/font/local";
import { site, contact } from "@/content/site";
import "./globals.css";

/**
 * Duas famílias com papéis separados: Archivo carrega a interface inteira,
 * Plex Mono fica restrita a número. Mono em rótulo de texto é decoração;
 * mono em cifra e contagem é alinhamento.
 *
 * Os arquivos são servidos pelo próprio domínio em vez de virem do Google.
 * Três motivos: tira uma conexão a terceiro do caminho crítico do LCP, não
 * manda IP de visitante para fora, e o build não depende de rede externa.
 * Archivo entra como fonte variável — um arquivo cobre 100 a 900.
 */
const archivo = localFont({
  src: [
    { path: "../fonts/archivo-latin-wght-normal.woff2", weight: "100 900", style: "normal" },
    { path: "../fonts/archivo-latin-ext-wght-normal.woff2", weight: "100 900", style: "normal" },
  ],
  variable: "--font-archivo",
  display: "swap",
});

const plexMono = localFont({
  src: [
    { path: "../fonts/ibm-plex-mono-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/ibm-plex-mono-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    "desenvolvedor front-end sênior",
    "React",
    "Next.js",
    "TypeScript",
    "São Paulo",
    "UX",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

/** Dados estruturados: ajuda o Google a entender que a página é uma pessoa. */
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  url: site.url,
  email: `mailto:${contact.email}`,
  address: { "@type": "PostalAddress", addressLocality: "São Paulo", addressRegion: "SP", addressCountry: "BR" },
  sameAs: [contact.github, contact.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${archivo.variable} ${plexMono.variable}`}>
      <body className="antialiased">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-signal focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-base"
        >
          Pular para o conteúdo
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
