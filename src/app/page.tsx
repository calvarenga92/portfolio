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
