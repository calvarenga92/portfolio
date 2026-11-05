import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/types";

export function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <ul className="space-y-16 sm:space-y-20">
      {projects.map((project) => (
        <li key={project.slug}>
          <article className="grid gap-8 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-12">
            {project.cover ? (
              <Link
                href={`/projetos/${project.slug}`}
                tabIndex={-1}
                aria-hidden="true"
                className="block overflow-hidden rounded-xl border border-rule-strong bg-surface"
              >
                <Image
                  src={project.cover.src}
                  alt=""
                  width={project.cover.width}
                  height={project.cover.height}
                  sizes="(min-width: 1024px) 22rem, 100vw"
                  className="h-full w-full object-cover object-top"
                />
              </Link>
            ) : (
              <dl className="rounded-sm border border-rule bg-surface p-6">
                {project.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="border-b border-rule py-4 first:pt-0 last:border-0 last:pb-0"
                  >
                    <dd
                      className={
                        metric.numeric
                          ? "tnum text-3xl font-medium leading-none text-signal"
                          : "text-xl font-medium leading-tight text-ink"
                      }
                    >
                      {metric.value}
                    </dd>
                    <dt className="mt-2 text-xs leading-snug text-ink-faint">
                      {metric.label}
                    </dt>
                  </div>
                ))}
              </dl>
            )}

            <div>
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3 className="text-xl font-semibold tracking-[-0.02em]">
                  {project.caseStudy ? (
                    <Link
                      href={`/projetos/${project.slug}`}
                      className="transition-colors hover:text-signal"
                    >
                      {project.name}
                    </Link>
                  ) : (
                    project.name
                  )}
                </h3>
                <span className="tnum text-sm text-ink-faint">{project.year}</span>
                {project.status && (
                  <span className="inline-flex items-center gap-2 rounded-sm border border-live/40 px-2.5 py-1 text-xs text-live">
                    <span aria-hidden="true" className="beacon size-1.5 rounded-full bg-live" />
                    {project.status}
                  </span>
                )}
              </div>

              <p className="mt-3 max-w-[56ch] text-base leading-[1.65] text-ink-soft">
                {project.tagline}
              </p>

              {project.cover && (
                <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="min-w-0">
                      <dd
                        className={
                          metric.numeric
                            ? "tnum text-2xl font-medium leading-none text-signal"
                            : "text-lg font-medium leading-tight text-ink"
                        }
                      >
                        {metric.value}
                      </dd>
                      <dt className="mt-1.5 max-w-[22ch] text-xs leading-snug text-ink-faint">
                        {metric.label}
                      </dt>
                    </div>
                  ))}
                </dl>
              )}

              <p className="mt-6 text-sm leading-relaxed text-ink-faint">
                {project.stack.join(", ")}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
                {project.caseStudy && (
                  <Link
                    href={`/projetos/${project.slug}`}
                    className="border-b border-signal pb-0.5 text-sm font-medium text-signal transition-colors hover:border-ink hover:text-ink"
                  >
                    Ler o case
                  </Link>
                )}
                {project.links?.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="border-b border-rule-strong pb-0.5 text-sm text-ink-soft transition-colors hover:border-ink hover:text-ink"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
}
