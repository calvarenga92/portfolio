import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/sections";
import { Container } from "@/components/primitives";
import { StatesStrip, UxCaseBlock, UxCollage, UxJumpNav } from "@/components/ux";
import { uxCases, uxHome, uxPage, uxPractices, uxProcess, uxStates } from "@/content/ux";

export const metadata: Metadata = {
  title: uxPage.eyebrow,
  description: uxPage.intro,
  alternates: { canonical: "/ux" },
};

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
      {children}
    </h2>
  );
}

export default function UxPage() {
  return (
    <>
      <SiteHeader />

      <main id="conteudo" className="overflow-x-clip pt-48 pb-24 md:pt-40">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-10">
            <div>
              <Button href="/" variant="ghost" icon="arrow-left">
                {uxPage.back}
              </Button>

              <p className="mt-8 text-sm font-medium tracking-[0.14em] text-signal uppercase">
                {uxPage.eyebrow}
              </p>
              <h1 className="rise mt-4 text-balance text-[clamp(2.5rem,5.5vw,4.25rem)] font-semibold leading-[0.98] tracking-[-0.04em]">
                {uxPage.title}
              </h1>
              <p className="rise mt-6 max-w-[46ch] text-lg leading-[1.6] text-ink-soft" style={{ animationDelay: "120ms" }}>
                {uxPage.intro}
              </p>

              <dl className="rise mt-10 grid grid-cols-3 gap-6 border-t border-rule pt-6" style={{ animationDelay: "220ms" }}>
                {uxPage.stats.map((stat) => (
                  <div key={stat.label}>
                    <dd className="tnum whitespace-nowrap text-xl font-semibold sm:text-2xl text-signal">{stat.value}</dd>
                    <dt className="mt-1.5 text-sm leading-snug text-ink-faint">{stat.label}</dt>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rise" style={{ animationDelay: "160ms" }}>
              <UxCollage />
            </div>
          </div>

          <div className="mt-20">
            <UxJumpNav />
          </div>

          <section className="mt-28">
            <Heading>{uxPage.processTitle}</Heading>
            <ol className="relative mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              <span aria-hidden="true" className="absolute top-5 right-0 left-0 hidden h-px bg-rule-strong lg:block" />
              {uxProcess.map((step, i) => (
                <li key={step.title} className="relative">
                  <span className="tnum relative flex size-10 items-center justify-center rounded-full bg-signal text-base font-semibold text-base ring-8 ring-base">
                    {i + 1}
                  </span>
                  <h3 className="mt-6 text-lg font-semibold leading-snug">{step.title}</h3>
                  <p className="mt-2 text-base leading-[1.6] text-ink-soft">{step.body}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-28">
            <Heading>{uxPage.casesTitle}</Heading>
            <div className="mt-10 space-y-10">
              {uxCases.map((item, i) => (
                <UxCaseBlock key={item.slug} item={item} index={i} />
              ))}
            </div>
          </section>

          <section className="mt-28">
            <Heading>{uxHome.statesTitle}</Heading>
            <p className="mt-4 max-w-[60ch] text-lg leading-[1.6] text-ink-soft">{uxHome.statesLead}</p>
            <div className="mt-12">
              <StatesStrip states={uxStates} />
            </div>
          </section>

          <section className="mt-36 rounded-3xl border border-rule bg-surface p-8 sm:p-12">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
              <div>
                <Heading>{uxPage.practicesTitle}</Heading>
                <ul className="mt-8 flex flex-wrap gap-2">
                  {uxPractices.map((practice) => (
                    <li
                      key={practice}
                      className="rounded-sm border border-rule-strong bg-base px-3 py-1.5 text-sm text-ink-soft"
                    >
                      {practice}
                    </li>
                  ))}
                </ul>
              </div>
              <Button href="/#contato" variant="solid">
                {uxPage.contact}
              </Button>
            </div>
          </section>
        </Container>
      </main>

      <SiteFooter />
    </>
  );
}
