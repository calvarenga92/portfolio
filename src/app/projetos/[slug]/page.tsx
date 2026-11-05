import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/sections";
import { Container, Ledger } from "@/components/primitives";
import { projects, projectBySlug } from "@/content/projects";

type Params = { slug: string };

/** Gera as rotas em build: duas páginas estáticas, zero servidor. */
export function generateStaticParams(): Params[] {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.tagline,
    alternates: { canonical: `/projetos/${project.slug}` },
    openGraph: {
      title: `${project.name} — ${project.tagline}`,
      description: project.tagline,
      type: "article",
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = projectBySlug(slug);

  if (!project?.caseStudy) notFound();

  return (
    <>
      <SiteHeader />

      <main id="conteudo" className="pt-32 pb-20 sm:pt-40">
        <Container>
          <Link
            href="/#trabalho"
            className="text-sm text-ink-soft transition-colors hover:text-signal"
          >
            Voltar para o trabalho
          </Link>

          <h1 className="mt-8 max-w-[18ch] text-[clamp(2.25rem,6vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
            {project.name}
          </h1>

          <p className="mt-6 max-w-[58ch] text-lg leading-[1.6] text-ink-soft">
            {project.tagline}
          </p>

          <dl className="mt-10 grid max-w-[44rem] gap-x-10 gap-y-5 sm:grid-cols-3">
            <div>
              <dt className="text-xs text-ink-faint">Ano</dt>
              <dd className="tnum mt-1 text-sm text-ink">{project.year}</dd>
            </div>
            <div>
              <dt className="text-xs text-ink-faint">Papel</dt>
              <dd className="mt-1 text-sm text-ink">{project.role}</dd>
            </div>
            <div>
              <dt className="text-xs text-ink-faint">Stack</dt>
              <dd className="mt-1 text-sm leading-relaxed text-ink">
                {project.stack.join(", ")}
              </dd>
            </div>
          </dl>

          {project.links && project.links.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="border-b border-signal pb-0.5 text-sm font-medium text-signal transition-colors hover:border-ink hover:text-ink"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </Container>

        <div className="mt-20 space-y-16 sm:mt-24 sm:space-y-20">
          {project.caseStudy.map((block) => (
            <Container key={block.title}>
              <div className="border-t border-rule pt-8">
                <h2 className="text-xl font-semibold tracking-[-0.02em]">{block.title}</h2>

                {block.kind === "prose" && (
                  <div className="mt-6 max-w-[62ch] space-y-5 text-base leading-[1.7] text-ink-soft">
                    {block.body.map((paragraph) => (
                      <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                    ))}
                  </div>
                )}

                {block.kind === "ledger" && (
                  <div className="mt-6 max-w-[44rem]">
                    <Ledger lines={block.lines} />
                  </div>
                )}

                {block.kind === "images" && (
                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    {block.images.map((image) => (
                      <figure
                        key={image.src}
                        className="overflow-hidden rounded-sm border border-rule bg-surface"
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={image.width}
                          height={image.height}
                          sizes="(min-width: 640px) 32rem, 100vw"
                          className="w-full object-cover object-top"
                        />
                      </figure>
                    ))}
                  </div>
                )}
              </div>
            </Container>
          ))}
        </div>

        <Container>
          <div className="mt-20 border-t border-rule pt-10">
            <Link
              href="/#contato"
              className="border-b border-signal pb-0.5 text-base font-medium text-signal transition-colors hover:border-ink hover:text-ink"
            >
              Falar sobre um projeto
            </Link>
          </div>
        </Container>
      </main>

      <SiteFooter />
    </>
  );
}
