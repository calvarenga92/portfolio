import Image from "next/image";
import { headline, intro, services } from "@/content/profile";
import { portrait } from "@/content/site";
import { Container } from "./primitives";
import { Icon } from "./icons";

export function Hero() {
  return (
    <div className="pt-40 pb-20 sm:pt-44 sm:pb-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-16">
          <div>
            <h1 className="text-[clamp(2.5rem,7vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.035em]">
              {headline.map((line, i) => (
                <span
                  key={line}
                  className="rise block"
                  style={{ animationDelay: `${i * 110}ms` }}
                >
                  {i < headline.length - 1 ? `${line} ` : line}
                </span>
              ))}
            </h1>

            <p
              className="rise mt-8 max-w-[58ch] text-lg leading-[1.65] text-ink-soft"
              style={{ animationDelay: "380ms" }}
            >
              {intro}
            </p>
          </div>

          {portrait.enabled && (
            <div
              className="rise order-first w-36 shrink-0 sm:w-44 lg:order-none lg:w-[17rem]"
              style={{ animationDelay: "160ms" }}
            >
              <Image
                src={portrait.src}
                alt={portrait.alt}
                width={portrait.width}
                height={portrait.height}
                priority
                unoptimized
                className="aspect-square w-full rounded-2xl object-cover"
              />
            </div>
          )}
        </div>

        <div
          className="rise mt-16 grid gap-5 lg:grid-cols-3"
          style={{ animationDelay: "500ms" }}
        >
          {services.map((service) => (
            <article key={service.title} className="rounded-2xl bg-paper p-7 sm:p-8">
              <Icon name={service.icon} size={34} className="text-paper-signal" />
              <h2 className="mt-5 text-balance text-lg font-semibold leading-snug tracking-[-0.015em] text-paper-signal">
                {service.title}
              </h2>
              <p className="mt-3 text-base leading-[1.6] text-paper-soft">{service.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
