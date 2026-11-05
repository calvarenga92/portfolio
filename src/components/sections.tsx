import { experiences } from "@/content/experience";
import { learning, method } from "@/content/profile";
import { projects } from "@/content/projects";
import { contact } from "@/content/site";
import { stack } from "@/content/stack";
import { ProjectList } from "./ProjectList";
import { Container, Prose, Section } from "./primitives";

export function Work() {
  return (
    <Section id="trabalho" title="Trabalho">
      <ProjectList projects={projects} />
    </Section>
  );
}

/**
 * Experiência como timeline de razão: período à esquerda em mono, empresa e
 * o que mudou à direita. O período alinha porque é dado tabular.
 */
export function ExperienceTimeline() {
  return (
    <Section id="experiencia" title="Experiência">
      <ol className="space-y-14">
        {experiences.map((job) => (
          <li
            key={job.company}
            className="grid gap-4 border-t border-rule pt-8 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-10"
          >
            <div>
              <time
                dateTime={job.startISO}
                className="tnum block text-sm leading-relaxed text-ink-faint"
              >
                {job.period}
              </time>
              <p className="mt-1 text-xs text-ink-faint">{job.location}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold tracking-[-0.015em]">{job.company}</h3>
              <p className="mt-1 text-sm text-ink-soft">{job.role}</p>
              <p className="mt-4 max-w-[58ch] text-base leading-[1.65] text-ink-soft">
                {job.summary}
              </p>

              <ul className="mt-5 space-y-2.5">
                {job.highlights.map((item) => (
                  <li
                    key={item}
                    className="max-w-[62ch] border-l border-rule-strong pl-4 text-sm leading-[1.65] text-ink-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>

              <p className="mt-5 text-sm text-ink-faint">{job.stack.join(", ")}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Method() {
  return (
    <Section id="metodo" title={method.title}>
      <Prose>
        {method.body.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </Prose>

      <div className="mt-12 max-w-[62ch] border-l-2 border-signal-dim pl-5">
        <h3 className="text-base font-semibold text-ink">{learning.title}</h3>
        <p className="mt-2 text-base leading-[1.7] text-ink-soft">{learning.body}</p>
      </div>
    </Section>
  );
}

export function StackSection() {
  return (
    <Section id="stack" title="Stack">
      <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((group) => (
          <div key={group.title} className="border-t border-rule pt-5">
            <h3
              className={`text-sm font-semibold ${
                group.muted ? "text-ink-faint" : "text-ink"
              }`}
            >
              {group.title}
            </h3>
            <ul className="mt-3 space-y-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className={`text-sm leading-relaxed ${
                    group.muted ? "text-ink-faint" : "text-ink-soft"
                  }`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Contact() {
  const channels = [
    { label: contact.email, href: `mailto:${contact.email}` },
    { label: contact.phoneLabel, href: `tel:${contact.phoneHref}` },
    { label: contact.linkedinLabel, href: contact.linkedin },
    { label: contact.githubLabel, href: contact.github },
  ];

  return (
    <Section id="contato" title="Vamos conversar">
      <p className="max-w-[52ch] text-lg leading-[1.6] text-ink-soft">
        Estou aberto a vaga efetiva e a projeto por PJ. Se o seu time precisa de
        alguém que desenha a interface e responde por ela depois do deploy, me
        chame.
      </p>

      <ul className="mt-10 grid gap-x-10 gap-y-4 sm:grid-cols-2">
        {channels.map((channel) => (
          <li key={channel.href}>
            <a
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={channel.href.startsWith("http") ? "noreferrer noopener" : undefined}
              className="inline-block border-b border-rule-strong pb-1 text-base text-ink transition-colors hover:border-signal hover:text-signal"
            >
              {channel.label}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-rule py-10">
      <Container>
        <p className="text-sm text-ink-faint">
          Feito em Next.js e TypeScript. São Paulo,{" "}
          <span className="tnum">{new Date().getFullYear()}</span>.
        </p>
      </Container>
    </footer>
  );
}
