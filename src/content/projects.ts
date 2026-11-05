import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "kurio",
    name: "Kurio",
    tagline:
      "Marketplace de NFT onde o valor é inteiro de 18 casas e o checkout não cobra duas vezes.",
    year: "2026",
    role: "Front-end e arquitetura de interface",
    stack: ["React 19", "TypeScript", "TanStack Query", "Tailwind", "Playwright", "Vite"],
    metrics: [
      { label: "Testes end-to-end em Playwright", value: "78", numeric: true },
      { label: "Defeitos reais pegos antes da produção", value: "5", numeric: true },
      { label: "Casas decimais no valor, sem float", value: "18", numeric: true },
    ],
    links: [
      { label: "Ver no ar", href: "https://calvarenga-jungle-nft.vercel.app" },
      { label: "Código no GitHub", href: "https://github.com/calvarenga92/calvarenga-jungle-nft" },
    ],
    cover: {
      src: "/projetos/kurio-home.jpg",
      alt: "Página inicial do Kurio, com a chamada principal e a peça em destaque",
      width: 942,
      height: 896,
    },
    caseStudy: [
      {
        kind: "images",
        title: "As telas",
        images: [
          {
            src: "/projetos/kurio-mercado.jpg",
            alt: "Tela de mercado do Kurio: filtros por coleção, faixa de preço e disponibilidade",
            width: 942,
            height: 896,
          },
          {
            src: "/projetos/kurio-grid.jpg",
            alt: "Grade de peças do Kurio, cada uma com nome, preço em ETH e criador",
            width: 942,
            height: 896,
          },
        ],
      },
      {
        kind: "prose",
        title: "O problema",
        body: [
          "Marketplace tem dois pontos onde errar é caro: o número e o pagamento. O número porque valor em ponto flutuante acumula resto de centavo e, em escala, a soma deixa de fechar. O pagamento porque a rede do usuário cai no meio da transação e ele aperta de novo — e, se o back-end não souber que é a mesma tentativa, ele paga duas vezes.",
          "Os dois são invisíveis na tela. Nenhum teste de clique encontra, e o usuário só descobre quando já virou prejuízo.",
        ],
      },
      {
        kind: "prose",
        title: "As decisões",
        body: [
          "Valor monetário trafega como inteiro de 18 casas, nunca como float, e a formatação para exibição acontece só na borda da interface. O trade-off é código mais verboso na conversão; em troca, a soma fecha sempre.",
          "O checkout é idempotente: cada tentativa carrega uma chave própria, e repetir a mesma chave devolve o mesmo resultado em vez de criar uma cobrança nova. Isso move o custo para o desenho do fluxo e tira o risco do usuário.",
          "Estado de servidor fica no TanStack Query, não em estado global improvisado. Cache, revalidação e estado de carregamento passam a ser uma decisão explícita em vez de efeito colateral.",
        ],
      },
      {
        kind: "prose",
        title: "O que os testes acharam",
        body: [
          "A suíte de 78 testes end-to-end pegou cinco defeitos reais antes da produção. O mais interessante não foi funcional: um estouro de layout em que a tela se comportava exatamente como o esperado e, ainda assim, ficava ilegível. Teste de comportamento dava verde.",
          "É o argumento prático para E2E rodar na tela de verdade e não só na lógica: correto e utilizável não são a mesma propriedade.",
        ],
      },
      {
        kind: "ledger",
        title: "Resumo",
        lines: [
          { label: "Testes end-to-end", value: "78", numeric: true },
          { label: "Defeitos encontrados antes da produção", value: "5", numeric: true },
          { label: "Representação de valor", value: "inteiro, 18 casas" },
          { label: "Retry de pagamento", value: "idempotente por tentativa" },
        ],
      },
    ],
  },
  {

    slug: "edit-ia",
    name: "Esteira de edição de vídeo automatizada",
    tagline:
      "Transcreve o áudio, marca o que sobra e devolve a timeline pronta. Só passou a ser usada quando aprendeu a mostrar menos.",

    year: "desde 2025",
    status: "Em evolução",
    role: "Autoria e manutenção",
    stack: ["Python", "ffmpeg", "faster-whisper", "FCPXML", "pytest"],
    metrics: [
      { label: "Pontos de revisão por vídeo, antes", value: "93", numeric: true },
      { label: "Pontos de revisão por vídeo, depois", value: "6", numeric: true },
      { label: "Testes, sendo 4 de integração", value: "26", numeric: true },
    ],
    links: [{ label: "Código no GitHub", href: "https://github.com/vic-clau/edit-IA" }],

    cover: {
      src: "/projetos/esteira-video.webp",
      alt: "Esteira industrial levando quadros de filme, com braços robóticos cortando e iluminando as cenas e um monitor mostrando a timeline montada",
      width: 1000,
      height: 1000,
    },
    caseStudy: [
      {
        kind: "prose",
        title: "O problema",
        body: [
          "A esteira transcreve o áudio com modelo local, detecta hesitação, repetição e silêncio, e devolve uma timeline FCPXML pronta para abrir no editor. Tecnicamente ela funcionava na primeira versão. Na prática ninguém usava.",
          "O motivo era simples e não era técnico: ela marcava 93 pontos de revisão por vídeo. Revisar 93 marcações custa mais do que cortar o vídeo na mão, então a ferramenta era ignorada.",
        ],
      },
      {
        kind: "prose",
        title: "A decisão",
        body: [
          "O erro de projeto foi tratar recall como qualidade. Calibrei os limiares para privilegiar precisão em vez de cobertura — limite de duração de silêncio, confiança mínima da transcrição, agrupamento de marcações vizinhas — e aceitei perder marcação verdadeira para não gerar ruído.",
          "Chegou em 6 pontos por vídeo. A esteira passou a ser usada todo dia.",
          "A lição vale para interface inteira: o valor não está em mostrar tudo que o sistema sabe, está em mostrar o que a pessoa consegue agir.",
        ],
      },
      {
        kind: "prose",
        title: "Estrutura e testes",
        body: [
          "A lógica compartilhada entre as etapas foi extraída para uma camada única, o que tirou duplicação entre scripts que haviam crescido em paralelo.",
          "São 26 testes, e quatro deles são de integração que geram mídia sintética com ffmpeg na hora de rodar. Isso evita o teste que passa porque o mock mente, sem depender de arquivo grande versionado no repositório.",
        ],
      },
      {
        kind: "ledger",
        title: "Resumo",
        lines: [
          { label: "Pontos de revisão, antes", value: "93", numeric: true },
          { label: "Pontos de revisão, depois", value: "6", numeric: true },
          { label: "Testes automatizados", value: "26", numeric: true },
          { label: "Transcrição", value: "modelo aberto, local" },
        ],
      },
    ],
  },
];

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
