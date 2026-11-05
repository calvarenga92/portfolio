export const site = {
  name: "Claudio Alvarenga",
  shortName: "Claudio Alvarenga",
  role: "Desenvolvedor Full Stack",

  url: "https://claudio-alvarenga.vercel.app",
  locale: "pt-BR",
  description:
    "Desenvolvedor full stack com 12 anos de mercado, profundo em front-end e com origem em design. React, Next.js e TypeScript em produtos de alta carga — XP e Raia Drogasil.",
  location: "São Paulo, SP",
} as const;

export const contact = {
  email: "calvarenga92@gmail.com",
  phoneLabel: "(11) 98949-0162",
  phoneHref: "+5511989490162",

  whatsapp: "https://wa.me/5511989490162",
  github: "https://github.com/calvarenga92",
  githubLabel: "github.com/calvarenga92",
  linkedin: "https://linkedin.com/in/cralvarenga",
  linkedinLabel: "linkedin.com/in/cralvarenga",
} as const;

export const logo = {
  src: "/logo.png" as string | null,
  width: 512,
  height: 512,
} as const;

export const nav = [
  { href: "#trabalho", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#metodo", label: "Método" },
  { href: "#stack", label: "Stack" },
  { href: "#contato", label: "Contato" },
] as const;

export const portrait = {
  src: "/claudio.jpg",
  alt: "Claudio Alvarenga",
  width: 399,
  height: 399,
  enabled: true,
} as const;
