import Image from "next/image";
import { headline, intro, ledger } from "@/content/profile";
import { portrait, site } from "@/content/site";
import { Container, Ledger } from "./primitives";

/**
 * Hero.
 *
 * Abre com a frase que define o trabalho, não com nome e cargo — nome está no
 * cabeçalho e cargo o recrutador já leu no anúncio. Abaixo da manchete vêm
 * três fatos verificáveis em formato de razão; nenhum número aparece sozinho
 * em caixa com gradiente, porque número sem rótulo não argumenta nada.
 */
export function Hero() {
  return (
    <div className="pt-36 pb-20 sm:pt-40 sm:pb-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-16">
          <div>
            <h1 className="text-[clamp(2.5rem,7vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.035em]">
              {/* A quebra é visual, então cada linha é um bloco. O espaço ao
                  final existe para o leitor de tela: sem ele o nome acessível
                  sai colado ("interfacee respondo"). Em bloco, ele não desloca
                  nada na tela. */}
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
              className="rise order-first w-40 shrink-0 sm:w-52 lg:order-none lg:w-[21rem]"
              style={{ animationDelay: "160ms" }}
            >
              <Image
                src={portrait.src}
                alt={portrait.alt}
                width={portrait.width}
                height={portrait.height}
                priority
                sizes="(min-width: 1024px) 21rem, (min-width: 640px) 13rem, 10rem"
                className="aspect-square w-full rounded-sm object-cover ring-1 ring-rule-strong"
              />
              <p className="mt-3 text-sm leading-relaxed text-ink-faint">{site.location}</p>
            </div>
          )}
        </div>

        {/* Ocupa a medida inteira de propósito: fecha a composição no mesmo
            eixo direito do retrato, em vez de criar uma segunda borda. */}
        <div className="rise mt-16" style={{ animationDelay: "500ms" }}>
          <Ledger lines={ledger} />
        </div>
      </Container>
    </div>
  );
}
