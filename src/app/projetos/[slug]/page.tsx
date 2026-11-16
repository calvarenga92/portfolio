import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/Button";
import { BrandIcon, hasBrand } from "@/components/BrandIcon";
import { ProjectLinks } from "@/components/ProjectLinks";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/sections";
import { Container, Ledger } from "@/components/primitives";
import { projects, projectBySlug } from "@/content/projects";

type Params = { slug: string };

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

      <main id="conteudo" className="pt-48 pb-24 md:pt-40">
        <Container>
          <Button href="/#trabalho" variant="outline" icon="arrow-left">
            Voltar para o trabalho
          </Button>

          {project.codename && (
            <p className="mt-10 text-sm text-ink-faint">{project.codename}</p>
          )}

          <h1 className="mt-3 text-balance text-[clamp(2.25rem,6vw,4rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
            {project.name}
          </h1>

          <p className="mt-6 text-[clamp(1.125rem,2.2vw,1.5rem)] leading-[1.45] text-ink-soft">
            {project.tagline}
          </p>

          {/* Ano e papel sao curtos e cabem lado a lado; a stack precisa da linha
              inteira porque virou lista de selos, nao texto corrido. */}
          <dl className="mt-12 border-t border-rule pt-8">
            <div className="grid gap-x-10 gap-y-8 sm:grid-cols-[auto_minmax(0,1fr)]">
              <div>
                <dt className="text-sm text-ink-faint">Ano</dt>
                <dd className="tnum mt-2 text-lg text-ink">{project.year}</dd>
              </div>
              <div>
                <dt className="text-sm text-ink-faint">Papel</dt>
                <dd className="mt-2 text-lg leading-snug text-ink">{project.role}</dd>
              </div>
            </div>

            <div className="mt-8">
              <dt className="text-sm text-ink-faint">Stack</dt>
              <dd className="mt-3">
                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((tool) => (
                    <li
                      key={tool}
                      className="flex items-center gap-2 rounded-sm border border-rule-strong bg-surface px-3 py-1.5 text-sm text-ink-soft"
                    >
                      {hasBrand(tool) && <BrandIcon label={tool} size={16} useBrandColor />}
                      {tool}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>

          {project.links && project.links.length > 0 && (
            <div className="mt-10">
              <ProjectLinks links={project.links} size="lg" fill />
            </div>
          )}
        </Container>

        <div className="mt-20 space-y-16 sm:mt-24 sm:space-y-20">
          {project.caseStudy.map((block) => (
            <Container key={block.title}>
              <section className="grid gap-6 border-t border-rule pt-10 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] lg:gap-16">
                <h2 className="text-2xl font-semibold leading-tight tracking-[-0.02em] lg:text-[1.75rem]">
                  {block.title}
                </h2>

                <div>
                  {block.kind === "prose" && (
                    <div className="max-w-[72ch] space-y-6 text-lg leading-[1.65] text-ink-soft">
                      {block.body.map((paragraph) => (
                        <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                      ))}
                    </div>
                  )}

                  {block.kind === "ledger" && <Ledger lines={block.lines} />}

                  {/* Uma imagem sozinha ocupa a linha inteira: screenshot de pagina
                      espremido em meia coluna nao se le. Duas ou mais voltam ao par. */}
                  {block.kind === "images" && (
                    <div
                      className={`grid gap-6 ${block.images.length > 1 ? "sm:grid-cols-2" : ""}`}
                    >
                      {block.images.map((image) => (
                        <figure
                          key={image.src}
                          className="overflow-hidden rounded-xl border border-rule-strong bg-surface"
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={image.width}
                            height={image.height}
                            sizes="(min-width: 640px) 40rem, 100vw"
                            className="w-full object-cover object-top"
                          />
                        </figure>
                      ))}
                    </div>
                  )}
                </div>
              </section>
            </Container>
          ))}
        </div>

        <Container>
          <div className="mt-24 flex flex-col items-center gap-5 border-t border-rule pt-16 text-center">
            <p className="text-[clamp(1.25rem,2.4vw,1.75rem)] leading-snug text-ink">
              Tem um projeto onde a interface precisa aguentar produção?
            </p>
            <Button href="/#contato" variant="solid">
              Falar sobre um projeto
            </Button>
          </div>
        </Container>
      </main>

      <SiteFooter />
    </>
  );
}
