import type { Principle, Service } from "./types";

export const headline = ["Desenho a interface", "e respondo por ela", "em produção."];

export const intro =
  "Claudio Alvarenga, desenvolvedor full stack. 12 anos de mercado e origem em design. Trabalho em produto onde a tela não pode falhar: investimentos, e-commerce e pagamento.";

export const services: Service[] = [
  {
    title: "Interface do desenho ao ar",
    body: "Eu desenho a tela e implemento. Sem a ida e volta entre quem desenha e quem programa, e sem protótipo bonito que não se sustenta quando vira código.",
    accent: "signal",
    icon: "interface",
  },
  {
    title: "Evolução de produto existente",
    body: "Mexer no que já tem usuário sem parar o que funciona: entrega em partes, liberada aos poucos, com volta rápida se algo sair diferente do esperado.",
    accent: "signal",
    icon: "entrega",
  },
  {
    title: "Qualidade antes do usuário",
    body: "Teste automatizado, acessibilidade e velocidade tratados durante a construção, e não como última etapa antes de entregar.",
    accent: "signal",
    icon: "qualidade",
  },
];

export const method: { title: string; principles: Principle[] } = {
  title: "Como eu trabalho",
  principles: [
    {
      title: "Troca de sistema sem derrubar quem está usando",
      body: "Substituir uma plataforma inteira de uma vez é a forma mais cara de descobrir um erro: quando algo quebra, quebra para todo mundo ao mesmo tempo. Prefiro migrar uma área por vez, com o sistema antigo e o novo funcionando lado a lado, e liberar a versão nova primeiro para uma parte dos usuários. Se o resultado piorar, ela volta ao normal na hora.",
      accent: "signal" as const,
      icon: "entrega" as const,
      result: "Uma área com problema sai do ar em segundos, sem esperar por uma nova publicação.",
    },
    {
      title: "Tela certa e tela utilizável não são a mesma coisa",
      body: "Teste automatizado comum verifica se o botão responde, não se a pessoa consegue ler o que está na frente dela. Em um marketplace que construí, a bateria de testes barrou cinco problemas antes de chegarem ao usuário — e um deles era um texto vazando para fora da tela em telas menores: tudo funcionava, nada se lia.",
      accent: "signal" as const,
      icon: "qualidade" as const,
      result: "Cinco problemas que chegariam ao usuário foram barrados antes do lançamento.",
    },
    {
      title: "Em produto que cobra, a conta precisa fechar",
      body: "Dois erros clássicos custam dinheiro de verdade. O primeiro é a sobra de centavo, que some numa venda e aparece quando são milhares. O segundo é o usuário com internet instável que aperta o botão de pagar duas vezes — e paga duas vezes. Resolvo os dois na arquitetura, antes de existir tela: o sistema reconhece a segunda tentativa como a mesma e não cobra de novo.",
      accent: "signal" as const,
      icon: "dados" as const,
      result: "Nenhuma cobrança duplicada quando o usuário repete o pagamento.",
    },
    {
      title: "Decisão de interface se defende com dado, não com opinião",
      body: "Acho que a tela ficou melhor não é argumento. Eu meço onde a pessoa desiste no meio do caminho, coloco a versão nova no ar para uma parte dos usuários e comparo o comportamento real das duas antes de abrir para todos. Número encerra discussão que reunião não encerra.",
      accent: "signal" as const,
      icon: "metodo" as const,
      result: "Onde o usuário desiste deixa de ser suposição e vira medida do uso real.",
    },
  ],
};
