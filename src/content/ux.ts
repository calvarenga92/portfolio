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
  role: "desenvolvedor front-end, origem em UX",
  intro:
    "Quatro produtos reais, auditados e redesenhados. Cada estudo parte da tela que está no ar, aponta o que atrapalha quem usa e propõe a versão nova.",
  stats: [
    { value: "+12", unit: "anos", label: "construindo produto em time de tecnologia" },
    { value: "4", unit: "estudos", label: "com antes, depois e o que mudou" },
    { value: "3", unit: "no ar", label: "com link de produção aberto" },
  ],
  jumpTitle: "Os estudos",
  jumpLead:
    "Cada um tem o antes e o depois lado a lado, as telas no Figma, o código no GitHub e, quando existe, o produto no ar.",
  jump: "Ir para o estudo",
  findingsTitle: "O que encontrei",
  processTitle: "Como eu conduzo um estudo",
  casesTitle: "Os estudos em detalhe",
  practicesTitle: "Também faço parte do dia a dia",
  study: "Abrir o estudo de usabilidade",
  projectCase: "Ler o case do projeto",
  before: "Antes",
  after: "Depois",
  compareLabel: "Comparar antes e depois",
  back: "Início",
  contact: "Vamos conversar",
};

export const uxProcess: UxStep[] = [
  {
    title: "Medir onde a pessoa desiste",
    body: "Funil, eventos e mapa de calor antes de opinião. Num portal de investimentos, instrumentei os eventos da jornada de fundos com dataLayer e Google Tag Manager.",
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
    slug: "busca-fundos",
    name: "Portal de investimentos",
    subtitle: "Busca de fundos",
    tagline:
      "Catálogo de fundos de investimento: a lista piscava e mostrava o resultado de um termo que a pessoa já tinha passado.",
    before: img("xp-antes", "Antes: digitando “renda”, a lista mostra fundos de um termo anterior e linhas somem a cada tecla", 1440, 900),
    after: img("xp-depois", "Proposta: a lista anterior fica no lugar, esmaecida, e o campo avisa que está buscando", 1440, 900),
    extras: [
      img("xp-mobile", "Proposta mobile: mesma espera visível, com aviso de atualização para leitores de tela", 390, 844, "Espera no celular"),
      img("xp-vazio", "Proposta de estado vazio: nenhum fundo encontrado, com sugestão de grafia e categorias", 1440, 900, "Busca sem resultado"),
    ],
    findings: [
      "Uma requisição por tecla, com respostas fora de ordem",
      "Resultado de termo antigo sobrescrevendo o atual",
      "Debounce de ~300 ms atrás de feature flag: 5 buscas viraram 1",
    ],
    studyHref: "/estudos-ux/busca-fundos.html",
    links: projectLinks.xpFundos,
  },
  {
    slug: "finance-workspace",
    name: "Finance Workspace",
    tagline:
      "Portal financeiro em micro-frontends: um container React consome módulos com deploy independente — quando um módulo cai, o resto do portal segue no ar.",
    compareNote:
      "As duas telas são do mesmo momento de falha: à esquerda o erro de desenvolvedor que estava no ar, à direita o que o cliente deveria ver.",
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
    projectSlug: "finance-workspace",
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
    projectSlug: "rango",
    links: projectLinks.foody,
  },
  {
    slug: "flutter-comparativo",
    name: "Trilema",
    tagline:
      "Comparativo entre Web, React Native e Flutter: 34 aspectos com o código dos dois lados e um veredito em cada, mais um teste de 8 perguntas que recomenda uma das três para o seu projeto. O próprio site é a demonstração — roda em Flutter, com cada pixel desenhado pelo motor e nenhum DOM.",
    before: img("flutter-antes", "Tela atual: aspecto de SEO sem endereço próprio", 1440, 1000),
    after: img("flutter-depois", "Proposta: resultado do teste com a pontuação de cada opção à vista", 1440, 1000),
    findings: [
      "Recomendação com pesos escondidos",
      "Botão Voltar do navegador não funcionava",
      "Pergunta do teste com viés para uma das respostas",
    ],
    studyHref: "/estudos-ux/flutter-comparativo.html",
    projectSlug: "flutter-comparativo",
    links: projectLinks.flutterComparativo,
  },
];

// Telas empilhadas na colagem da home (a "depois" de cada estudo).
export const uxCollageSlugs = ["busca-fundos", "flutter-comparativo", "foody"];

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
