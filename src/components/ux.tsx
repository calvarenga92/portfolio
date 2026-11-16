import Image from "next/image";
import type { UxCase, UxImage } from "@/content/types";
import { projectBySlug } from "@/content/projects";
import { uxCases, uxCollageSlugs, uxCta, uxHome, uxPage, uxStates } from "@/content/ux";
import { BeforeAfter } from "./BeforeAfter";
import { BrandIcon } from "./BrandIcon";
import { Button } from "./Button";
import { ProjectLinks } from "./ProjectLinks";
import { Section } from "./primitives";

const compareLabels = {
  before: uxPage.before,
  after: uxPage.after,
  compare: uxPage.compareLabel,
};

function Phone({ image }: { image: UxImage }) {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border-[6px] border-surface-high bg-surface shadow-[0_24px_60px_-20px_rgb(0_0_0/0.7)] ring-1 ring-rule-strong">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        unoptimized
        className="block aspect-[390/800] h-auto w-full object-cover object-top"
      />
    </div>
  );
}

export function StatesStrip({ states }: { states: UxImage[] }) {
  return (
    <div className="grid grid-cols-2 gap-5 sm:gap-8 lg:grid-cols-4">
      {states.map((state, i) => (
        <figure key={state.src} className={i % 2 === 1 ? "lg:translate-y-10" : ""}>
          <Phone image={state} />
          {state.caption && (
            <figcaption className="mt-4 text-center text-sm font-medium text-ink-soft">
              {state.caption}
            </figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}

export function UxCollage() {
  const layers = uxCollageSlugs.map((slug) => uxCases.find((c) => c.slug === slug)!.after);
  const placement = [
    "left-0 top-0 w-[78%] -rotate-3",
    "right-0 top-[18%] w-[78%] rotate-2",
    "left-[10%] top-[40%] w-[80%] -rotate-1",
  ];

  return (
    <div aria-hidden="true" className="relative aspect-[5/4] w-full">
      {layers.map((layer, i) => (
        <div
          key={layer.src}
          className={`absolute overflow-hidden rounded-xl border border-rule-strong shadow-[0_30px_80px_-30px_rgb(0_0_0/0.85)] ${placement[i]}`}
        >
          <Image
            src={layer.src}
            alt=""
            width={layer.width}
            height={layer.height}
            unoptimized
            className="block aspect-[16/10] h-auto w-full object-cover object-top"
          />
        </div>
      ))}
    </div>
  );
}

/**
 * Marcas de recurso no card de navegacao. Sao so dois icones, na mesma
 * linha do numero, para nao custar altura: sinalizam que o estudo la
 * embaixo tem telas no Figma e codigo aberto. Nao sao links — o card
 * inteiro e um ancora so — e ficam aria-hidden porque a frase acima da
 * grade ja diz isso em palavras. Saem de item.links, nunca da mao.
 *
 * O selo esta DENTRO do <a> do card, entao o hover dele dispara o hover do
 * card tambem. Para os dois serem alvos visuais separados, o card so acende
 * quando nenhum selo esta sob o cursor: :hover:not(:has(.marca:hover)).
 * E por isso que a classe .marca existe — ela nao estiliza nada, serve de
 * ponto de ancoragem para esse seletor. Nao renomear sem olhar os dois usos.
 */
const brandByKind = {
  code: { brand: "GitHub", label: "código" },
  figma: { brand: "Figma", label: "Figma" },
} as const;

type MarkKind = keyof typeof brandByKind;

function caseMarks(links?: UxCase["links"]): MarkKind[] {
  if (!links) return [];
  const kinds = new Set(links.map((link) => link.kind));
  return (Object.keys(brandByKind) as MarkKind[]).filter((kind) => kinds.has(kind));
}

export function UxJumpNav() {
  return (
    <nav aria-label={uxPage.jump} className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {uxCases.map((item, i) => {
        const marks = caseMarks(item.links);

        return (
          <a
            key={item.slug}
            href={`#${item.slug}`}
            className="group relative block aspect-[16/9] overflow-hidden rounded-xl border border-rule bg-surface transition-colors [&:hover:not(:has(.marca:hover))]:border-ink/40"
          >
            <Image
              src={item.after.src}
              alt=""
              width={item.after.width}
              height={item.after.height}
              unoptimized
              className="absolute inset-0 size-full object-cover object-top opacity-50 transition-transform duration-500 [.group:hover:not(:has(.marca:hover))_&]:scale-[1.04]"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-b from-base/10 to-base/95"
            />
            <p className="absolute inset-x-4 bottom-3">
              <span className="tnum block text-sm text-signal">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="mt-0.5 block text-base leading-tight font-semibold text-ink">
                {item.name}
              </span>
              {item.subtitle && (
                <span className="block text-sm leading-tight font-medium text-ink-soft">
                  {item.subtitle}
                </span>
              )}
              {marks.length > 0 && (
                <span aria-hidden="true" className="mt-2.5 flex flex-wrap items-center gap-1.5">
                  {marks.map((kind) => (
                    <span
                      key={kind}
                      className="marca inline-flex items-center gap-1.5 rounded-sm border border-ink/15 bg-base/35 px-2 py-1 text-xs font-medium text-ink-soft backdrop-blur-sm transition-colors hover:border-ink/60 hover:text-ink"
                    >
                      <BrandIcon label={brandByKind[kind].brand} size={14} />
                      {brandByKind[kind].label}
                    </span>
                  ))}
                </span>
              )}
            </p>
          </a>
        );
      })}
    </nav>
  );
}

export function UxCaseBlock({ item, index }: { item: UxCase; index: number }) {
  const wide = item.extras?.filter((extra) => extra.width > 1000) ?? [];
  const phones = item.extras?.filter((extra) => extra.width <= 1000) ?? [];

  return (
    <article
      id={item.slug}
      className="scroll-mt-36 rounded-3xl border border-rule bg-surface/60 p-5 sm:p-8 lg:p-10"
    >
      {/* O numero fica fora do flex de proposito: assim a linha comeca no titulo
          e o items-center centraliza a acao com ele, e nao com o conjunto
          numero+titulo. Fora dessa linha, a tagline e os links do projeto ficam
          com a largura inteira do card. */}
      <p className="tnum text-sm font-medium text-signal">
        {String(index + 1).padStart(2, "0")} / {String(uxCases.length).padStart(2, "0")}
      </p>

      <div className="mt-2 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h3 className="text-3xl font-semibold tracking-[-0.025em] sm:text-[2.5rem]">
            {item.name}
          </h3>
          {item.subtitle && (
            <p className="mt-1 text-xl leading-tight font-medium text-ink-soft sm:text-2xl">
              {item.subtitle}
            </p>
          )}
        </div>
        {/* O case do projeto so aparece quando ele existe E tem caseStudy — a
            rota /projetos/[slug] da 404 sem isso. Confere no projects.ts em vez
            de confiar no projectSlug, entao slug errado nao vira link quebrado. */}
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Button href={item.studyHref} external icon="arrow-up-right" variant="solid">
            {uxPage.study}
          </Button>
          {item.projectSlug && projectBySlug(item.projectSlug)?.caseStudy && (
            <Button href={`/projetos/${item.projectSlug}`} variant="outline">
              {uxPage.projectCase}
            </Button>
          )}
        </div>
      </div>

      <p className="mt-4 text-lg leading-[1.55] text-ink-soft">{item.tagline}</p>

      {item.links && item.links.length > 0 && (
        <div className="mt-6">
          <ProjectLinks links={item.links} quiet />
        </div>
      )}

      <div className="mt-8">
        <BeforeAfter before={item.before} after={item.after} labels={compareLabels} />
        {item.compareNote && (
          <p className="mt-3 max-w-[80ch] text-sm leading-[1.5] text-ink-faint">
            {item.compareNote}
          </p>
        )}
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)]">
        <div>
          <h4 className="text-sm font-medium tracking-wide text-ink-faint uppercase">
            {uxPage.findingsTitle}
          </h4>
          <ol className="mt-5 space-y-4">
            {item.findings.map((finding, i) => (
              <li key={finding} className="flex gap-4">
                <span className="tnum flex size-7 shrink-0 items-center justify-center rounded-full border border-signal text-sm text-signal">
                  {i + 1}
                </span>
                <span className="pt-0.5 text-base leading-[1.5] text-ink">{finding}</span>
              </li>
            ))}
          </ol>
        </div>

        {(wide.length > 0 || phones.length > 0) && (
          <div className="flex items-start gap-6">
            {phones.map((extra) => (
              <figure key={extra.src} className="w-36 shrink-0 sm:w-44">
                <Phone image={extra} />
                {extra.caption && (
                  <figcaption className="mt-3 text-center text-sm text-ink-soft">{extra.caption}</figcaption>
                )}
              </figure>
            ))}
            {wide.map((extra) => (
              <figure key={extra.src} className="hidden min-w-0 flex-1 sm:block">
                <div className="overflow-hidden rounded-xl border border-rule-strong">
                  <Image
                    src={extra.src}
                    alt={extra.alt}
                    width={extra.width}
                    height={extra.height}
                    unoptimized
                    className="block h-auto w-full"
                  />
                </div>
                {extra.caption && (
                  <figcaption className="mt-3 text-sm text-ink-soft">{extra.caption}</figcaption>
                )}
              </figure>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export function UxHighlight() {
  const [featured] = uxCases;

  return (
    <Section id="ux" title={uxHome.title} icon="interface" accent="signal">
      <p className="max-w-[60ch] text-lg leading-[1.6] text-ink-soft">{uxHome.lead}</p>

      <div className="mt-10">
        <BeforeAfter before={featured.before} after={featured.after} labels={compareLabels} />
        <p className="mt-4 text-base text-ink-soft">
          <span className="font-medium text-ink">{featured.name}.</span> {featured.tagline}
        </p>
      </div>

      <div className="mt-20">
        <h3 className="text-2xl font-semibold tracking-[-0.02em]">{uxHome.statesTitle}</h3>
        <p className="mt-3 max-w-[60ch] text-base leading-[1.6] text-ink-soft">{uxHome.statesLead}</p>
        <div className="mt-10">
          <StatesStrip states={uxStates} />
        </div>
      </div>

      <div className="mt-24 flex justify-center">
        <Button href={uxCta.primary.href} variant="solid">
          {uxHome.more}
        </Button>
      </div>
    </Section>
  );
}
