import { projectLinks } from "./links";
import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "atende-ai",
    name: "Assistente com IA para o site de pequenas empresas",
    codename: "Atende AI",
    tagline:
      "A empresa cadastra o que sabe (horários, preços, regras) e cola uma linha no site. Dali em diante uma assistente responde os visitantes só com essas informações, recusa o que foge do assunto e, quando alguém quer comprar, pega nome e contato e entrega para a equipe num painel. O exemplo no ar é uma padaria fictícia: dá para conversar com a Lia e ver o lead chegar no painel.",
    year: "2026",
    status: { label: "No ar", tone: "ativo" },
    role: "Produto, design, front-end, API e IA",
    stack: ["NestJS", "PostgreSQL", "TypeORM", "React 19", "TypeScript", "Vite", "LLM (Groq)", "Vercel"],
    metrics: [
      { label: "Testes automatizados: API, widget e painel", value: "105", numeric: true },
      { label: "Linha de código para instalar no site do cliente", value: "1", numeric: true },
      { label: "Tamanho do widget, sem dependências", value: "14 KB" },
    ],
    links: projectLinks.atendeAi,
    summary:
      "Assistente com IA que responde os visitantes do site só com o que a empresa cadastrou, recusa o que foge do assunto e entrega os interessados num painel.",
    cover: { src: "/projetos/capa-atende-ai.webp", alt: "Site de exemplo de uma padaria com a assistente aberta respondendo um visitante", width: 1600, height: 1000 },
    caseStudy: [
      {
        kind: "images",
        title: "O produto no ar",
        images: [
          {
            src: "/projetos/atende-ai-site.jpg",
            alt: "Site da padaria fictícia com a janela da assistente Lia aberta, respondendo o horário de domingo e o preço do bolo de red velvet",
            width: 1440,
            height: 1000,
          },
          {
            src: "/projetos/atende-ai-leads.jpg",
            alt: "Painel com os contatos deixados no chat: números do dia, filtros por telefone ou e-mail e o interesse de cada pessoa",
            width: 1440,
            height: 1000,
          },
          {
            src: "/projetos/atende-ai-bot.jpg",
            alt: "Tela de configuração da assistente: nome, cor, tom de voz, sugestões e base de conhecimento, com prévia ao vivo do chat",
            width: 1440,
            height: 1000,
          },
        ],
      },
      {
        kind: "prose",
        title: "O problema",
        body: [
          "Negócio pequeno perde cliente em pergunta simples: que horas abre, quanto custa, entrega no meu bairro. Ninguém responde de madrugada, e quem queria encomendar desiste antes de alguém ver a mensagem.",
          "Um chatbot genérico resolve pela metade e cria outro risco: inventa preço, promete o que a loja não faz e fala de qualquer assunto. Para servir, a assistente precisa responder só com o que a empresa escreveu e saber a hora de passar a conversa para uma pessoa.",
        ],
      },
      {
        kind: "prose",
        title: "As decisões",
        body: [
          "A base de conhecimento vai inteira no prompt, e o texto que muda a cada pedido (a data de hoje) fica fora dele, para o cache do provedor continuar valendo. Busca vetorial só entra quando a base passar de uns cem mil caracteres; antes disso é complexidade sem ganho.",
          "O contato é salvo por uma ferramenta que a IA chama, mas empresa e conversa vêm do servidor, nunca do modelo, e a entrada é validada antes de gravar: telefone sem DDD volta para a IA pedir de novo. Ao salvar, a confirmação para o visitante sai pronta do servidor, sem outra rodada da IA. Nos testes, era justamente nessa resposta que o modelo às vezes degenerava.",
          "A IA fica atrás de uma interface: simulada nos testes, local na máquina de desenvolvimento e o Groq no ar, no plano gratuito. Quando o limite por minuto estoura, a API espera o que o provedor pede e cai para um modelo reserva, em vez de devolver erro para o visitante.",
          "O widget é TypeScript puro dentro de Shadow DOM, com 14 KB: o CSS do site do cliente não quebra o chat e o do chat não vaza para o site. Se a API estiver fora, ele simplesmente não aparece, em vez de mostrar um chat quebrado.",
        ],
      },
      {
        kind: "prose",
        title: "O que o teste com gente achou",
        body: [
          "No primeiro teste de verdade, a assistente acertou horário e recusou assunto fora, mas tropeçou no resto: tratou um \"isso\" como conversa nova, aceitou uma data que já tinha passado e respondeu \"seu bolo está na lista\", como se o pedido estivesse fechado. Nenhum teste automatizado pegaria isso.",
          "Cada falha virou regra: continuar de onde parou, comparar datas com o dia de hoje, nunca confirmar pedido nem calcular preço que não está escrito. A mesma conversa foi repetida contra a IA de produção até sair limpa.",
        ],
      },
      {
        kind: "ledger",
        title: "Resumo",
        lines: [
          { label: "API", value: "NestJS 12, TypeORM e PostgreSQL" },
          { label: "Widget", value: "TypeScript puro, Shadow DOM, 14 KB" },
          { label: "Painel", value: "React 19, Vite e React Router" },
          { label: "IA", value: "Groq (gpt-oss-120b) com modelo reserva" },
          { label: "Testes", value: "105", numeric: true },
          { label: "No ar", value: "Vercel e Neon, custo zero" },
        ],
      },
    ],
  },
  {
    slug: "kurio",
    name: "Marketplace de arte digital",
    codename: "Kudo",
    tagline:
      "Loja de arte digital de ponta a ponta, com pagamento simulado: a interface, a API em NestJS e o banco PostgreSQL, no ar e conversando em tempo real. Resolvi no alicerce os dois erros que custam caro nesse tipo de produto: a sobra de centavo, que some numa venda e aparece quando são milhares, e a cobrança dobrada de quem aperta pagar de novo porque a internet oscilou. A API entrou no lugar de uma simulação sem mudar uma linha da tela, e a prova é a mesma bateria de testes passando contra as duas.",
    year: "2026",
    status: { label: "Entregue", tone: "entregue" },
    role: "Redesenho, front-end e API",
    stack: ["React 19", "TypeScript", "TanStack Query", "NestJS", "PostgreSQL", "Socket.IO", "Docker", "Playwright"],
    metrics: [
      { label: "Testes de tela em Playwright, desktop e celular", value: "88", numeric: true },
      { label: "Testes da API, com compras simultâneas", value: "86", numeric: true },
      { label: "Casas decimais no valor, sem float", value: "18", numeric: true },
    ],
    links: projectLinks.kurio,
    summary:
      "Loja de arte digital de ponta a ponta, com interface, API em NestJS e PostgreSQL, sem cobrança dobrada nem centavo perdido no caminho.",
    cover: { src: "/projetos/capa-kudo.webp", alt: "Página inicial da loja Kudo com o destaque Seja dono do futuro da arte digital", width: 1600, height: 1000 },
    caseStudy: [
      {
        kind: "images",
        title: "As telas",
        images: [
          {
            src: "/projetos/kudo-home.jpg",
            alt: "Página inicial do Kudo, com a chamada principal em bloco colorido e a peça em destaque",
            width: 1440,
            height: 1000,
          },
          {
            src: "/projetos/kudo-mercado.jpg",
            alt: "Tela de mercado do Kudo: filtros por coleção, faixa de preço e cartões tingidos com a cor de cada arte",
            width: 1440,
            height: 1000,
          },
          {
            src: "/projetos/kudo-detalhe.jpg",
            alt: "Detalhe de uma peça do Kudo: arte, preço, escolha de edição e botão de compra",
            width: 1440,
            height: 1000,
          },
        ],
      },
      {
        kind: "prose",
        title: "O redesenho",
        body: [
          "A primeira versão nasceu sobre um layout pronto, escuro e todo em fonte mono. Redesenhei a interface inteira: Plus Jakarta Sans no texto e mono só nos preços, cantos arredondados, cartões tingidos com a cor de cada arte e o preço numa pílula fácil de achar.",
          "As cores viraram tokens por tema. São três temas trocados no cabeçalho, sem mexer em nenhum componente, e a escolha fica salva no navegador. A versão mobile segue os mesmos tokens.",
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
        kind: "images",
        title: "A arquitetura",
        images: [
          {
            src: "/projetos/kudo-arquitetura.webp",
            alt: "Diagrama do Kudo: o navegador baixa o front-end estático da Vercel e fala com a API em NestJS no Render por HTTPS e por websocket; a API guarda tudo num PostgreSQL 17 no Neon; um pacote npm com o contrato é usado pela web, pelo app e pela API",
            width: 2000,
            height: 1520,
          },
        ],
      },
      {
        kind: "prose",
        title: "O back-end",
        body: [
          "O front nasceu falando com uma simulação completa, que guarda estado e reproduz cenários de falha. Isso deixou o contrato pronto antes do servidor existir: vinte e cinco rotas, o formato de cada erro e os eventos em tempo real. A API em NestJS foi escrita para cumprir esse contrato à risca. Para falar com ela, o front troca uma variável de ambiente; nenhuma tela mudou, só a camada que conversa com o servidor ganhou dois ajustes: o carrinho de quem ainda não entrou e a identificação do socket.",
          "A disputa pela última unidade é resolvida no banco: as edições são travadas numa ordem fixa, o estoque é conferido de novo antes de cobrar, e uma conta compra enquanto a outra é avisada. Três cliques em pagar com a mesma chave viram um pedido só. Isso não fica na teoria: a suíte da API roda num PostgreSQL 17 de verdade, com dez conexões disputando ao mesmo tempo.",
          "A sessão é um token assinado que o servidor consegue derrubar na hora, coisa que um token puro não faz: sair desliga o token no mesmo instante. A senha é guardada com scrypt, e um freio por IP e por e-mail segura quem tenta adivinhar senha. Quando alguém compra, o estoque cai na tela de todo mundo; o aviso do pedido vai só para a conta dona, e quem decide isso é o servidor, pelo token.",
        ],
      },
      {
        kind: "prose",
        title: "O que os testes acharam",
        body: [
          "A suíte end-to-end pegou cinco defeitos reais antes da entrega. O mais interessante não foi funcional: um estouro de layout em que a tela se comportava exatamente como o esperado e, ainda assim, ficava ilegível. Teste de comportamento dava verde.",
          "É o argumento prático para E2E rodar na tela de verdade e não só na lógica: correto e utilizável não são a mesma propriedade.",
          "Na troca para a API, a mesma suíte voltou a servir de rede. Ao atualizar o pacote de regras compartilhado, o teste do resumo pegou a tela mostrando 0,0.042 ETH: a formatação brasileira passou a ser aplicada duas vezes. Nenhum teste de lógica teria visto.",
        ],
      },
      {
        kind: "ledger",
        title: "Resumo",
        lines: [
          { label: "Testes de tela (Playwright)", value: "88", numeric: true },
          { label: "Testes da API (Postgres real)", value: "86", numeric: true },
          { label: "Defeitos encontrados antes da entrega", value: "5", numeric: true },
          { label: "Representação de valor", value: "inteiro, 18 casas" },
          { label: "Retry de pagamento", value: "idempotente por tentativa" },
          { label: "No ar", value: "Vercel, Render e Neon" },
        ],
      },
    ],
  },
  {
    slug: "finance-workspace",
    name: "Portal financeiro montado em partes",
    codename: "Finance Workspace",
    tagline:
      "Duas aplicações construídas, testadas e publicadas de forma independente, que se encontram numa tela só e parecem um produto único para quem usa. Cada uma vai ao ar sozinha, sem esperar pela outra, e se uma sair do ar a tela não vem abaixo junto. É o arranjo que deixa um time grande entregar sem travar o vizinho — e a razão de ele existir é justamente mostrar isso funcionando, não em slide.",
    year: "2026",
    status: { label: "Entregue", tone: "entregue" },
    role: "Arquitetura e implementação das duas pontas",
    stack: ["React 18", "TypeScript", "Vite", "Module Federation", "Docker"],
    metrics: [
      {
        label: "Aplicações independentes compondo a mesma tela",
        value: "2",
        numeric: true,
      },
      {
        label: "Quando o módulo remoto não responde, o container mostra",
        value: "aviso, não tela branca",
      },
      {
        label: "O módulo remoto só é baixado",
        value: "quando a rota é aberta",
      },
    ],
    links: projectLinks.financeWorkspace,
    summary:
      "Duas aplicações publicadas de forma independente que aparecem como uma tela só. Se uma cair, a outra segue no ar.",
    cover: { src: "/projetos/capa-finance.webp", alt: "Carteira do cliente no portal financeiro, com rentabilidade, alocação por classe e lista de ativos", width: 1600, height: 1000 },
    caseStudy: [
      {
        kind: "images",
        title: "A aplicação no ar",
        images: [
          {
            src: "/projetos/finance-workspace.webp",
            alt: "Portal de produtos financeiros: menu de módulos à esquerda, carteira do cliente carregada como módulo remoto, com rentabilidade ponderada, alocação por classe e a tabela de ativos",
            width: 1600,
            height: 931,
          },
        ],
      },
      {
        kind: "prose",
        title: "O problema",
        body: [
          "Em produto grande, vários times mexem na mesma interface. Quando tudo vive num projeto só, uma equipe espera a outra para publicar, um erro em uma área derruba a tela inteira e qualquer mudança exige subir o sistema completo. É o cenário que eu vi de perto em plataforma de investimentos.",
          "A saída é quebrar a interface em partes independentes. Só que aí aparece o problema de verdade: elas precisam continuar parecendo uma aplicação só para quem usa, sem o usuário perceber a costura.",
        ],
      },
      {
        kind: "prose",
        title: "As decisões",
        body: [
          "Separei em duas aplicações com build e publicação próprios: um container, responsável pela estrutura, pelo menu e pelas rotas, e um módulo de carteira de investimentos, responsável apenas pela sua feature. Cada uma vive no seu repositório e vai ao ar sem depender da outra.",
          "O container carrega o módulo em tempo de execução, a partir de um endereço fixo na configuração, e não o embute no build. É isso que permite publicar uma versão nova da carteira sem republicar o portal, desde que o endereço continue o mesmo.",
          "React e ReactDOM são compartilhados entre as duas, em vez de cada uma carregar a sua cópia. Sem isso o usuário baixaria a mesma biblioteca duas vezes, e duas instâncias de React na mesma página quebram estado e contexto.",
          "O módulo só é baixado quando a rota dele é aberta. Quem entra e fica na visão geral nunca paga o custo da carteira.",
        ],
      },
      {
        kind: "prose",
        title: "O que acontece quando quebra",
        body: [
          "Essa é a parte que separa demonstração de arquitetura utilizável. Se o módulo remoto estiver fora do ar, o container não cai junto: ele captura a falha e mostra um aviso no lugar daquele pedaço da tela. O menu continua funcionando e as outras áreas seguem acessíveis.",
          "Em arquitetura distribuída a pergunta não é se uma parte vai cair — é o que o usuário vê quando ela cai.",
        ],
      },
      {
        kind: "ledger",
        title: "Resumo",
        lines: [
          { label: "Aplicações independentes", value: "2", numeric: true },
          { label: "Endereço do módulo", value: "fixo, resolvido em tempo de execução" },
          { label: "Bibliotecas compartilhadas", value: "React e ReactDOM" },
          { label: "Carregamento do módulo", value: "sob demanda, por rota" },
          { label: "Falha do remoto", value: "aviso no lugar do bloco" },
          { label: "Empacotamento", value: "Docker nas duas pontas" },
        ],
      },
    ],
  },
  {
    slug: "gengi",
    name: "Site de agência que vende criação digital",
    codename: "Gengi",
    tagline:
      "Site da Gengi, a agência: oito serviços (site, landing page, loja virtual, portfólio, catálogo, robô com IA, sistemas e redesign) apresentados para quem não é da área. Cada botão abre o WhatsApp com a mensagem do serviço já escrita, e a página inteira foi pensada para levar a pessoa até essa conversa. Identidade visual própria, do zero ao domínio no ar no mesmo dia.",
    year: "2026",
    status: { label: "No ar", tone: "ativo" },
    role: "Identidade visual, texto, design e front-end",
    stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS 4", "Vercel"],
    metrics: [
      { label: "Serviços no cardápio", value: "8", numeric: true },
      { label: "Chamadas para o WhatsApp com mensagem pronta", value: "12", numeric: true },
      { label: "JavaScript na primeira carga", value: "113 KB" },
    ],
    links: projectLinks.gengi,
    summary:
      "Site da agência: oito serviços explicados para quem não é da área, e cada botão abre o WhatsApp com a mensagem pronta.",
    cover: { src: "/projetos/capa-gengi.webp", alt: "Topo do site da Gengi com o título Seu negócio merece parecer tão bom quanto ele é", width: 1600, height: 1000 },
    caseStudy: [
      {
        kind: "images",
        title: "O site no ar",
        images: [
          {
            src: "/projetos/gengi-topo.jpg",
            alt: "Topo do site da Gengi: fundo preto, título com a expressão tão bom em marca-texto laranja, botão de orçamento e uma loja virtual com balão de atendimento ao lado",
            width: 1440,
            height: 1000,
          },
          {
            src: "/projetos/gengi-servicos.jpg",
            alt: "Cardápio de serviços: cards brancos com contorno preto e sombra sólida, cada um com ícone colorido, público, promessa e botão",
            width: 1440,
            height: 1000,
          },
          {
            src: "/projetos/gengi-trabalhos.jpg",
            alt: "Seção de trabalhos: cada projeto num card próprio com etiqueta Job, imagem, resultados e botão; no destaque, um robô de atendimento com IA",
            width: 1440,
            height: 1000,
          },
        ],
      },
      {
        kind: "prose",
        title: "O problema",
        body: [
          "Quem procura um site para o próprio negócio não compra tecnologia, compra resultado: aparecer no Google, responder cliente de madrugada, vender pelo celular. Uma página que fala de framework e arquitetura perde essa pessoa no primeiro parágrafo.",
          "A agência também oferece muita coisa diferente. Listar oito serviços sem virar um catálogo cansativo, e sem parecer que faz qualquer coisa, era o desafio de desenho.",
        ],
      },
      {
        kind: "prose",
        title: "As decisões",
        body: [
          "Cada serviço responde três perguntas em ordem: para quem é, que dor resolve e o que entrega. O botão de cada card abre o WhatsApp com a mensagem daquele serviço já escrita, para a pessoa não precisar pensar no que dizer.",
          "A primeira versão usava tons pastel e ficou sem vida. A identidade foi refeita com preto, laranja e amarelo, contorno preto e sombra sólida deslocada em cards e botões, e uma palavra de cada título em marca-texto. A faixa inclinada que corria na página parecia defeito para quem não é designer, então voltou a ficar reta.",
          "Nenhum número sobre a trajetória de quem faz entrou na página: o site fala da empresa e do que o cliente ganha. A oferta de entrada é um diagnóstico gratuito, que transforma quem ainda está em dúvida numa conversa.",
          "O antes e depois de um redesenho faz uma varredura sozinho quando aparece na tela, para mostrar que dá para arrastar, e fica parado para quem pediu menos movimento no sistema.",
        ],
      },
      {
        kind: "ledger",
        title: "Resumo",
        lines: [
          { label: "Front-end", value: "Next.js 15, React 19 e Tailwind CSS 4" },
          { label: "Conteúdo", value: "todo texto e link num arquivo só" },
          { label: "Serviços", value: "8", numeric: true },
          { label: "Contato", value: "WhatsApp com mensagem pronta" },
          { label: "No ar", value: "Vercel, domínio próprio" },
        ],
      },
    ],
  },
  {
    slug: "clara-rodrigues",
    name: "Site para personal trainer",
    codename: "Clara Rodrigues",
    tagline:
      "Uma personal que vendia só pelo Instagram ganhou um site que apresenta o método, mostra os planos com preço e fecha a contratação pelo WhatsApp. Oito planos entre online e presencial, escolhidos num seletor que funciona como botão no celular. É cliente real, e o projeto segue crescendo com ela.",
    year: "2026",
    status: { label: "Em evolução", tone: "ativo" },
    role: "Design, texto e front-end",
    stack: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS 4", "Vercel"],
    metrics: [
      { label: "Planos com preço, online e presencial", value: "8", numeric: true },
      { label: "Modalidades: online e presencial", value: "2", numeric: true },
      { label: "Do primeiro commit ao site no ar, em dias", value: "1", numeric: true },
    ],
    links: projectLinks.clara,
    summary:
      "Site de personal trainer para cliente real: método, oito planos com preço à vista e contratação pelo WhatsApp.",
    cover: { src: "/projetos/capa-clara.webp", alt: "Topo do site da personal Clara Rodrigues com o título Treino feito para o seu corpo", width: 1600, height: 1000 },
    caseStudy: [
      {
        kind: "images",
        title: "O site no ar",
        images: [
          {
            src: "/projetos/clara-topo.jpg",
            alt: "Topo do site da personal Clara Rodrigues: título Treino feito para o seu corpo, foto dela na praia e botão Falar com a Clara",
            width: 1440,
            height: 1000,
          },
          {
            src: "/projetos/clara-planos.jpg",
            alt: "Seção de planos: o que todos incluem, seletor entre online e presencial e os planos mensal, trimestral, semestral e anual",
            width: 1440,
            height: 1000,
          },
        ],
      },
      {
        kind: "prose",
        title: "O problema",
        body: [
          "No Instagram, a aluna interessada precisava mandar mensagem para descobrir o básico: como funciona, quanto custa, se tem presencial. Cada pergunta era uma conversa a mais, e parte das pessoas desistia antes da resposta.",
        ],
      },
      {
        kind: "prose",
        title: "As decisões",
        body: [
          "O preço fica à vista. Os oito planos aparecem com valor total, parcelado e por mês, e um seletor troca entre online e presencial. No celular, o seletor ganhou cara de botão depois que ficou claro que, como aba, ninguém percebia que dava para tocar.",
          "Toda chamada leva ao WhatsApp dela, porque é ali que ela já atende. O site não tenta substituir a conversa, só faz a pessoa chegar nela sabendo o que quer.",
          "Números de resultado, depoimentos e formação saíram da página pública até chegarem dados reais dela. Fotos só entraram depois da autorização. Um site de cliente não pode afirmar o que ela não confirmou.",
        ],
      },
      {
        kind: "ledger",
        title: "Resumo",
        lines: [
          { label: "Front-end", value: "Next.js 15 e Tailwind CSS 4" },
          { label: "Planos", value: "8", numeric: true },
          { label: "Contratação", value: "WhatsApp" },
          { label: "Publicação", value: "push na main vai para produção" },
        ],
      },
    ],
  },
  {
    slug: "rango",
    name: "Rastreador de pedidos de delivery",
    codename: "Rango",
    tagline:
      "Nasceu como desafio técnico e virou projeto próprio: API em Java com Spring Boot e interface em React acompanhando o pedido de Recebido a Entregue. Quem decide qual transição de status é válida é o servidor — a interface desenha só as ações que ele devolve, então estado impossível não chega a aparecer na tela.",
    year: "2026",
    status: { label: "Entregue", tone: "entregue" },
    role: "Design, front-end e API",
    stack: ["Java", "Spring", "SQLite", "JWT", "React", "TypeScript", "Vite", "Vercel"],
    metrics: [
      { label: "Testes automatizados, unitários e de integração", value: "27", numeric: true },
      { label: "Status no ciclo do pedido, validados no servidor", value: "5", numeric: true },
      { label: "Passos no novo pedido, com erro apontado por campo", value: "3", numeric: true },
    ],
    links: projectLinks.foody,
    summary:
      "Quadro de pedidos de delivery em que o servidor decide quais ações aparecem, então estado impossível não chega à tela.",
    cover: { src: "/projetos/capa-rango.webp", alt: "Quadro de pedidos do Rango dividido por etapa, de Recebido a Finalizados", width: 1600, height: 1000 },
    caseStudy: [
      {
        kind: "images",
        title: "O produto no ar",
        images: [
          {
            src: "/estudos-ux/img/foody-depois.jpg",
            alt: "Quadro de pedidos dividido por etapa, de Recebido a Finalizados, com as ações permitidas em cada cartão",
            width: 1440,
            height: 1000,
          },
          {
            src: "/estudos-ux/img/foody-estados.jpg",
            alt: "Telas de estado: fila vazia, sem conexão e sessão expirada",
            width: 1440,
            height: 781,
          },
        ],
      },
      {
        kind: "prose",
        title: "O problema",
        body: [
          "O desafio pedia um rastreador de pedidos, e a primeira versão resolvia com uma lista única e um formulário ao lado. Dava para criar e listar, mas quem opera não enxergava em que etapa cada pedido estava.",
          "Num fluxo de delivery a pergunta não é quais pedidos existem, é o que está parado e há quanto tempo. Lista não responde isso. Quadro por etapa responde, e foi para onde a segunda versão foi.",
        ],
      },
      {
        kind: "prose",
        title: "As decisões",
        body: [
          "Transição válida é regra do servidor. O enum de status conhece as transições possíveis e a API devolve, junto do pedido, quais ações cabem naquele momento. A interface desenha só essas. O cliente não precisa conhecer a regra e não tem como inventar uma.",
          "Atualização otimista, com volta. O status muda na tela assim que a pessoa clica e se desfaz sozinho quando a API recusa. Troca espera por correção: o caso comum fica instantâneo e o caso raro se conserta sozinho.",
          "Erro padronizado por código. A API devolve um código, não uma frase, e o front escolhe a mensagem. Mudar a redação não exige tocar no backend, e traduzir depois é só mais um mapa.",
          "Custo assumido: a API roda no plano gratuito do Render, que hiberna. A primeira chamada depois de um tempo ocioso demora. É o preço de manter o projeto no ar sem custo fixo, e foi escolha, não descuido.",
        ],
      },
      {
        kind: "ledger",
        title: "Resumo",
        lines: [
          { label: "API", value: "Java 21 e Spring Boot 3" },
          { label: "Interface", value: "React, TypeScript e Vite" },
          { label: "Banco", value: "SQLite com JPA" },
          { label: "Autenticação", value: "JWT, senha com BCrypt" },
          { label: "Testes", value: "27", numeric: true },
          { label: "Deploy", value: "Vercel e Render" },
        ],
      },
    ],
  },
  {

    slug: "edit-ia",
    name: "Esteira de edição de vídeo",
    codename: "edit-IA",
    tagline:
      "Programa que assiste ao vídeo bruto, transcreve a fala com modelo rodando na própria máquina, encontra hesitação, repetição e silêncio, e devolve uma linha do tempo já cortada, pronta para abrir no editor. A primeira versão funcionava e ninguém usava: ela marcava noventa e três pontos para revisar, o que dava mais trabalho que cortar na mão. Hoje marca seis, e roda todo dia.",

    year: "desde 2025",
    status: { label: "Em evolução", tone: "ativo" },
    role: "Autoria e manutenção",
    stack: ["Python", "ffmpeg", "faster-whisper", "FCPXML", "pytest"],
    metrics: [
      { label: "Pontos de revisão por vídeo, antes", value: "93", numeric: true },
      { label: "Pontos de revisão por vídeo, depois", value: "6", numeric: true },
      { label: "Testes, sendo 4 de integração", value: "26", numeric: true },
    ],
    links: projectLinks.editIa,
    summary:
      "Esteira que transcreve o vídeo bruto e devolve a linha do tempo já cortada. Caiu de 93 para 6 pontos de revisão e roda todo dia.",
    cover: { src: "/projetos/capa-edit-ia.webp", alt: "Terminal com o resultado da esteira: pontos de revisão caindo de 93 para 6 e a timeline pronta para o editor", width: 1600, height: 1000 },

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
  {
    slug: "flutter-comparativo",
    name: "Guia comparativo Web, React Native e Flutter",
    codename: "Trilema",
    tagline:
      "Guia interativo que compara, aspecto por aspecto, uma aplicação web com Flutter e o React Native com Flutter: quem desenha a tela, como o código roda, até onde se chega no aparelho e como o produto chega ao usuário. São trinta e quatro aspectos com código lado a lado e um veredito em cada, uma tabela com as três tecnologias e um teste que recomenda uma delas para o projeto. O próprio site é a demonstração: roda no navegador, mas cada pixel é desenhado pelo motor do Flutter, não pelo HTML.",
    year: "2026",
    status: { label: "Entregue", tone: "entregue" },
    role: "Conteúdo, design e implementação",
    stack: ["Flutter", "Dart", "Material 3", "flutter_test", "Vercel"],
    metrics: [
      { label: "Aspectos comparados, com código e veredito", value: "34", numeric: true },
      { label: "Critérios na tabela das três tecnologias", value: "16", numeric: true },
      { label: "Perguntas no teste de recomendação", value: "8", numeric: true },
    ],
    links: projectLinks.flutterComparativo,
    summary:
      "Guia que compara Web, React Native e Flutter em 34 aspectos, com código lado a lado e um teste que recomenda uma delas.",
    cover: { src: "/projetos/capa-trilema.webp", alt: "Página inicial do guia comparativo Web, React Native ou Flutter", width: 1600, height: 1000 },
    caseStudy: [
      {
        kind: "images",
        title: "O site no ar",
        images: [
          {
            src: "/projetos/flutter-comparativo.webp",
            alt: "Página inicial do guia, com o título Web, React Native ou Flutter? e os números de aspectos, tecnologias, critérios e perguntas",
            width: 1000,
            height: 442,
          },
        ],
      },
      {
        kind: "prose",
        title: "O problema",
        body: [
          "A pergunta \"web, React Native ou Flutter?\" costuma ser respondida com lista de prós e contras solta, sem explicar de onde vem cada diferença. Quem decide fica sem saber se a vantagem vale para o projeto dele.",
          "Quase tudo nasce de um ponto só: quem transforma o código em pixels. O navegador, o sistema operacional ou o motor do próprio Flutter. O guia parte daí e mostra como isso se desdobra em performance, visual, SEO, acesso ao aparelho e entrega.",
        ],
      },
      {
        kind: "prose",
        title: "As decisões",
        body: [
          "Conteúdo separado do layout. Cada aspecto é um dado tipado, com os dois lados, os pontos-chave, o código e o veredito. A interface só decide aparência, e incluir um aspecto novo é acrescentar um item à lista.",
          "Veredito honesto. Nem todo aspecto tem vencedor: o placar separa vantagem de cada lado, empate e \"depende do projeto\", e o Flutter perde onde perde, como SEO e deploy.",
          "Fontes empacotadas no app em vez de baixadas na hora, para o site abrir igual com ou sem acesso ao serviço de fontes. O deploy baixa a versão fixa do Flutter no build, então o que vai ao ar é o mesmo que foi testado.",
        ],
      },
      {
        kind: "ledger",
        title: "Resumo",
        lines: [
          { label: "Aspectos comparados", value: "34", numeric: true },
          { label: "Comparações", value: "Web × Flutter e RN × Flutter" },
          { label: "Renderização na web", value: "canvas, pelo motor do Flutter" },
          { label: "Testes", value: "navegação em desktop e celular" },
          { label: "Deploy", value: "Vercel, a cada push" },
        ],
      },
    ],
  },
];

export const projectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
