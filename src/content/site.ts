/** Identidade do site e dados de contato. Fonte única — nada hardcoded na UI. */

export const site = {
  name: "Claudio Alvarenga",
  shortName: "Claudio Alvarenga",
  role: "Desenvolvedor Front-end Sênior",
  /**
   * Domínio de produção. Alimenta canonical, Open Graph, sitemap e JSON-LD —
   * se estiver errado, a prévia do link e o SEO saem furados. Ao registrar um
   * domínio próprio, troque aqui e na Vercel no mesmo dia.
   */
  url: "https://claudio-alvarenga.vercel.app",
  locale: "pt-BR",
  description:
    "Desenvolvedor front-end sênior com 12 anos de mercado e origem em UX. React, Next.js e TypeScript em produtos de alta carga — XP e Raia Drogasil.",
  location: "São Paulo, SP",
} as const;

export const contact = {
  email: "calvarenga92@gmail.com",
  phoneLabel: "(11) 98949-0162",
  phoneHref: "+5511989490162",
  github: "https://github.com/calvarenga92",
  githubLabel: "github.com/calvarenga92",
  linkedin: "https://linkedin.com/in/cralvarenga",
  linkedinLabel: "linkedin.com/in/cralvarenga",
} as const;

export const nav = [
  { href: "#trabalho", label: "Trabalho" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#metodo", label: "Método" },
  { href: "#stack", label: "Stack" },
  { href: "#contato", label: "Contato" },
] as const;

/**
 * Foto de perfil em /public/claudio.jpg. O arquivo atual tem 400×400, o que
 * basta para o tamanho em que ele aparece; se trocar por um maior, só
 * substitua o arquivo — as dimensões abaixo acompanham.
 */
export const portrait = {
  src: "/claudio.jpg",
  alt: "Claudio Alvarenga",
  width: 400,
  height: 400,
  enabled: true,
} as const;
