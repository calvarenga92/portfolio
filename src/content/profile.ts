import type { LedgerLine, Principle } from "./types";

export const headline = ["Desenho a interface", "e respondo por ela", "em produção."];

export const intro =
  "Front-end sênior, 12 anos de mercado, origem em UX. Trabalhei onde erro de interface vira incidente financeiro: investimentos na XP e e-commerce na Raia Drogasil. Hoje atendo como PJ pela Gengi, em São Paulo.";

export const ledger: LedgerLine[] = [
  { label: "Anos construindo interface em produção", value: "12", numeric: true },
  { label: "Monolito Angular substituído por micro-frontends", value: "jornada a jornada" },
  { label: "Tempo para desligar uma jornada sem deploy", value: "segundos" },
];

export const method: { title: string; principles: Principle[] } = {
  title: "Como eu trabalho",
  principles: [
    {
      title: "Troca de sistema sem derrubar quem está usando",
      body: "Substituir uma plataforma inteira de uma vez é a forma mais cara de descobrir um erro: quando algo quebra, quebra para todo mundo ao mesmo tempo. Prefiro migrar uma área por vez, com o sistema antigo e o novo funcionando lado a lado, e liberar a versão nova primeiro para uma parte dos usuários. Se o resultado piorar, ela volta ao normal na hora.",
      accent: "live" as const,
      icon: "entrega" as const,
      figure: {
        label: "É o tempo para tirar do ar uma área com problema, sem esperar por uma nova publicação do sistema",
        value: "segundos",
      },
    },
    {
      title: "Tela certa e tela utilizável não são a mesma coisa",
      body: "Teste automatizado comum verifica se o botão responde, não se a pessoa consegue ler o que está na frente dela. Em um marketplace que construí, a bateria de testes barrou cinco problemas antes de chegarem ao usuário — e um deles era um texto vazando para fora da tela em telas menores: tudo funcionava, nada se lia.",
      accent: "probe" as const,
      icon: "qualidade" as const,
      figure: {
        label: "Problemas que chegariam ao usuário final e foram barrados antes do lançamento",
        value: "5",
        numeric: true,
      },
    },
    {
      title: "Em produto que cobra, a conta precisa fechar",
      body: "Dois erros clássicos custam dinheiro de verdade. O primeiro é a sobra de centavo, que some numa venda e aparece quando são milhares. O segundo é o usuário com internet instável que aperta o botão de pagar duas vezes — e paga duas vezes. Resolvo os dois na arquitetura, antes de existir tela: o sistema reconhece a segunda tentativa como a mesma e não cobra de novo.",
      accent: "signal" as const,
      icon: "dados" as const,
      figure: {
        label: "Cobranças duplicadas quando o usuário repete o pagamento",
        value: "zero",
      },
    },
    {
      title: "Decisão de interface se defende com dado, não com opinião",
      body: "Acho que a tela ficou melhor não é argumento. Eu meço onde a pessoa desiste no meio do caminho, coloco a versão nova no ar para uma parte dos usuários e comparo o comportamento real das duas antes de abrir para todos. Número encerra discussão que reunião não encerra.",
      accent: "craft" as const,
      icon: "metodo" as const,
      figure: {
        label: "Onde o usuário desiste, medido no uso real e não suposto em reunião",
        value: "funil medido",
      },
    },
  ],
};
