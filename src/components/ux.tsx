import Image from "next/image";
import type { UxCase, UxImage } from "@/content/types";
import { uxCases, uxCta, uxHome, uxPage, uxStates } from "@/content/ux";
import { BeforeAfter } from "./BeforeAfter";
import { Button } from "./Button";
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
  const layers = [uxCases[2].after, uxCases[3].after, uxCases[1].after];
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

export function UxJumpNav() {
  return (
    <nav aria-label={uxPage.jump} className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {uxCases.map((item, i) => (
        <a
          key={item.slug}
          href={`#${item.slug}`}
          className="group overflow-hidden rounded-xl border border-rule bg-surface transition-colors hover:border-signal"
        >
          <div className="overflow-hidden">
            <Image
              src={item.after.src}
              alt=""
              width={item.after.width}
              height={item.after.height}
              unoptimized
              className="block aspect-[16/9] h-auto w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </div>
          <p className="flex items-baseline gap-2 px-4 py-3 text-base font-medium">
            <span className="tnum text-sm text-signal">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-ink transition-colors group-hover:text-signal">{item.name}</span>
          </p>
        </a>
      ))}
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
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="tnum text-sm font-medium text-signal">
            {String(index + 1).padStart(2, "0")} / {String(uxCases.length).padStart(2, "0")}
          </p>
          <h3 className="mt-2 text-3xl font-semibold tracking-[-0.025em] sm:text-[2.5rem]">
            {item.name}
          </h3>
          <p className="mt-3 max-w-[56ch] text-lg leading-[1.55] text-ink-soft">{item.tagline}</p>
        </div>
        <Button href={item.studyHref} external icon="arrow-up-right" className="shrink-0">
          {uxPage.study}
        </Button>
      </div>

      <div className="mt-8">
        <BeforeAfter before={item.before} after={item.after} labels={compareLabels} />
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
