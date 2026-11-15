import { projectLinks } from "./links";
import type { UxCase, UxImage, UxStep } from "./types";

const img = (name: string, alt: string, width: number, height: number, caption?: string): UxImage => ({
  src: `/estudos-ux/img/${name}.jpg`,
  alt,
  width,
  height,
  caption,
});

export const uxCta = {
  primary: { href: "/ux", label: "Portfólio UX" },
  secondary: { href: "/#trabalho", label: "Ver projetos" },
};

export const uxHome = {
  title: "UX na prática",
  lead: "Arraste para comparar. À esquerda, a tela como estava. À direita, o que eu proponho, com cada mudança justificada.",
  statesTitle: "Os estados que quase ninguém desenha",
  statesLead:
    "A tela de sucesso é a minoria. Em produto que cobra, o que define a confiança é o que aparece quando a internet cai, o preço muda ou o pagamento é recusado.",
  more: "Ver o portfólio UX completo",
};

export const uxPage = {
  eyebrow: "Portfólio UX",
  title: "Antes de mexer na tela, entendo por que ela falha.",
  intro:
    "Cada estudo parte da tela real, aponta o que atrapalha quem usa e propõe a versão nova no mesmo sistema visual do produto.",
  stats: [
    { value: "6 anos", label: "atuando direto com UX" },
    { value: "4", label: "estudos com antes e depois" },
    { value: "12 anos", label: "levando a tela até produção" },
  ],
  jump: "Ir para o estudo",
  findingsTitle: "O que encontrei",
  processTitle: "Como eu conduzo",
  casesTitle: "Estudos",
  practicesTitle: "Também faço parte do dia a dia",
  study: "Abrir o estudo completo",
  before: "Antes",
  after: "Depois",
  compareLabel: "Comparar antes e depois",
  back: "Início",
  contact: "Vamos conversar",
};

export const uxProcess: UxStep[] = [
  {
    title: "Medir onde a pessoa desiste",
    body: "Funil, eventos e mapa de calor antes de opinião. Na XP, os eventos da jornada de fundos alimentavam um painel em tempo real.",
  },
  {
    title: "Auditar a tela que existe",
    body: "Todo estudo começa pelo estado atual, com os problemas anotados. Redesenho sem diagnóstico é gosto pessoal.",
  },
  {
    title: "Desenhar todos os estados",
    body: "Vazio, carregando, erro, sessão expirada, sem conexão. É ali que o usuário decide se confia no produto.",
  },
  {
    title: "Validar no ar",
    body: "A versão nova vai para uma parte dos usuários primeiro. Se o número piorar, volta na hora.",
  },
];

export const uxCases: UxCase[] = [
  {
    slug: "finance-workspace",
    name: "Finance Workspace",
    tagline: "Portal financeiro: quando um módulo cai, o cliente não pode ver uma mensagem de desenvolvedor.",
    before: img("finance-antes", "Antes (v1): erro em inglês citando localhost, já corrigido no ar", 1440, 560),
    after: img("finance-depois", "Proposta v2: aviso em português com ações para tentar de novo e status dos módulos que seguem no ar", 1440, 560),
    extras: [img("finance-mobile", "Proposta mobile v2: rentabilidade em destaque, filtros por status e a tabela de seis colunas vira lista de cartões", 390, 1237, "Mobile: tabela vira cartões")],
    findings: [
      "Erro em inglês citando localhost em produção",
      "Chips de status sem cor",
      "Números fora do padrão brasileiro",
      "Tabela de 6 colunas quebrando no celular",
    ],
    studyHref: "/estudos-ux/finance-workspace.html",
    links: projectLinks.financeWorkspace,
  },
  {
    slug: "foody",
    name: "Rango",
    tagline: "Rastreador de pedidos: de uma lista única para um quadro que mostra a operação inteira de relance.",
    before: img("foody-antes", "Tela atual: lista de pedidos com formulário ao lado", 1440, 1000),
    after: img("foody-depois", "Proposta: quadro por etapa, de Recebido a Finalizados", 1440, 1000),
    extras: [
      img("foody-mobile", "Proposta mobile: fila com filtros por status", 390, 844, "Fila no celular"),
      img("foody-estados", "Proposta de estados: vazio, sem conexão, sessão expirada", 1440, 781, "Estados de erro e vazio"),
    ],
    findings: [
      "Lista única, sem visão por etapa do pedido",
      "Ações guiadas pelas transições que o sistema permite",
      "Novo pedido em 3 passos, com erro apontado por campo",
    ],
    studyHref: "/estudos-ux/foody.html",
    links: projectLinks.foody,
  },
  {
    slug: "rectarchitecturelab",
    name: "Architecture Lab",
    tagline: "Hub técnico: de uma lista de módulos “planejados” para uma vitrine que diz o que é em cinco segundos.",
    before: img("rect-antes", "Tela atual: dez módulos listados, quase todos planejados", 1440, 1000),
    after: img("rect-depois", "Proposta: página com promessa clara e demonstração ao vivo", 1440, 1000),
    findings: [
      "Botões “Publicar site” e “Preview” sem função",
      "10 módulos listados, 1 funcionando",
      "Curtida que se desfazia sozinha",
    ],
    studyHref: "/estudos-ux/rectarchitecturelab.html",
    links: projectLinks.rectArchitectureLab,
  },
  {
    slug: "flutter-comparativo",
    name: "comparativo.",
    tagline: "Guia de tecnologia: um teste que recomendava sem explicar por quê.",
    before: img("flutter-antes", "Tela atual: aspecto de SEO sem endereço próprio", 1440, 1000),
    after: img("flutter-depois", "Proposta: resultado do teste com a pontuação de cada opção à vista", 1440, 1000),
    findings: [
      "Recomendação com pesos escondidos",
      "Botão Voltar do navegador não funcionava",
      "Pergunta do teste com viés para uma das respostas",
    ],
    studyHref: "/estudos-ux/flutter-comparativo.html",
    links: projectLinks.flutterComparativo,
  },
];

export const uxStates: UxImage[] = [
  img("kudo-falha", "Internet caiu depois do pagamento: explica que tentar de novo é seguro", 390, 844, "Internet caiu no pagamento"),
  img("kudo-preco", "Preço mudou entre carrinho e pagamento", 390, 844, "Preço mudou no caminho"),
  img("kudo-recusado", "Pagamento recusado pela carteira", 390, 844, "Pagamento recusado"),
  img("kudo-vazio", "Carrinho vazio com caminho de volta ao mercado", 390, 844, "Carrinho vazio"),
];

export const uxPractices = [
  "Acompanhamento de teste com usuário real",
  "Mapa de calor (Hotjar e Clarity) e leitura de funil",
  "Análise de abandono em produção",
  "Auditoria de acessibilidade",
  "Design system e biblioteca de componentes",
  "Protótipo navegável em código, não só em tela estática",
];
