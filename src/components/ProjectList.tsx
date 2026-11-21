import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/types";

/*
 * Vitrine de projetos: o primeiro entra em destaque (largura toda) e os demais
 * em grade de duas colunas. Todo card tem o mesmo esqueleto: capa 16:10 com o
 * print real, selos, título, resumo curto, três números e dois botões.
 * Stack e links extras (código, Figma, fluxo) ficam na página do case.
 */
export function ProjectList({ projects }: { projects: Project[] }) {
  const [featured, ...rest] = projects;
  return (
    <div className="space-y-6">
      {featured && <ProjectCard project={featured} featured />}
      <ul className="grid gap-6 md:grid-cols-2">
        {rest.map((project) => (
          <li key={project.slug} className="flex">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const href = `/projetos/${project.slug}`;
  const live = project.links?.find((l) => l.kind === "prod");

  return (
    <article
      className={`group flex w-full flex-col overflow-hidden rounded-2xl border border-rule-strong bg-surface transition-colors hover:border-signal/60 ${
        featured ? "lg:grid lg:grid-cols-[1.25fr_1fr]" : ""
      }`}
    >
      {project.cover && (
        <Link href={href} tabIndex={-1} aria-hidden="true" className="relative block overflow-hidden border-b border-rule-strong lg:border-b-0">
          <Image
            src={project.cover.src}
            alt=""
            width={project.cover.width}
            height={project.cover.height}
            sizes={featured ? "(min-width: 1024px) 40rem, 100vw" : "(min-width: 768px) 36rem, 100vw"}
            className={`h-auto w-full transition-transform duration-500 group-hover:scale-[1.03] ${featured ? "lg:h-full lg:object-cover" : ""}`}
          />
        </Link>
      )}

      <div className={`flex flex-1 flex-col p-6 ${featured ? "sm:p-8 lg:border-l lg:border-rule-strong" : "sm:p-7"}`}>
        <div className="flex flex-wrap items-center gap-2">
          {project.status && (
            <span
              className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-xs ${
                project.status.tone === "ativo" ? "border-probe/40 text-probe" : "border-live/40 text-live"
              }`}
            >
              <span
                aria-hidden="true"
                className={project.status.tone === "ativo" ? "beacon size-1.5 rounded-full bg-probe" : "size-1.5 rounded-full bg-live"}
              />
              {project.status.label}
            </span>
          )}
          {project.codename && (
            <span className="rounded-full border border-rule-strong px-2.5 py-1 text-xs text-ink-soft">{project.codename}</span>
          )}
          <span className="tnum ml-auto text-xs text-ink-faint">{project.year}</span>
        </div>

        <h3
          className={`mt-4 text-balance font-semibold leading-tight tracking-[-0.02em] ${
            featured ? "text-2xl sm:text-3xl lg:text-[2.1rem]" : "text-2xl"
          }`}
        >
          <Link href={href} className="transition-colors hover:text-signal">
            {project.name}
          </Link>
        </h3>

        <p className="mt-3 text-[0.95rem] leading-[1.65] text-ink-soft">{project.summary}</p>

        <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-rule pt-5">
          {project.metrics.slice(0, 3).map((metric) => (
            <div key={metric.label} className="min-w-0">
              <dd
                className={
                  metric.numeric
                    ? "tnum text-2xl font-medium leading-none text-signal"
                    : "text-[0.95rem] font-semibold leading-tight text-ink"
                }
              >
                {metric.value}
              </dd>
              <dt className="mt-1.5 text-xs leading-snug text-ink-faint">{metric.label}</dt>
            </div>
          ))}
        </dl>

        <div className="mt-auto flex flex-wrap gap-3 pt-7">
          <Link
            href={href}
            className="inline-flex items-center gap-2 rounded-md bg-signal px-4 py-2.5 text-sm font-semibold text-[var(--color-base)] transition-colors hover:bg-ink"
          >
            Ler o case
            <span aria-hidden="true">→</span>
          </Link>
          {live && (
            <a
              href={live.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-rule-strong px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-signal hover:text-signal"
            >
              {live.label}
              <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
