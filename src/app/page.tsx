import { Hero } from "@/components/Hero";
import { SiteHeader } from "@/components/SiteHeader";
import {
  Contact,
  ExperienceTimeline,
  Method,
  SiteFooter,
  StackSection,
  Work,
} from "@/components/sections";

/**
 * Página única com âncoras. A ordem segue o que o leitor pergunta:
 * quem é, o que entregou, onde esteve, como pensa, com o quê, como falar.
 */
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo">
        <Hero />
        <Work />
        <ExperienceTimeline />
        <Method />
        <StackSection />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
