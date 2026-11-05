import { experiences } from "@/content/experience";
import { learning, method } from "@/content/profile";
import { projects } from "@/content/projects";
import { contact, site } from "@/content/site";
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
 * Tempo decorrido entre as duas pontas de um período, em anos e meses.
 * Calculado a partir das datas ISO para não virar número escrito à mão que
 * envelhece sozinho no arquivo de conteúdo.
 */
function durationLabel(startISO: string, endISO?: string): string {
  const start = new Date(`${startISO}-01T00:00:00`);
  const end = endISO ? new Date(`${endISO}-01T00:00:00`) : new Date();

  const months =
    (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  const years = Math.floor(months / 12);
  const rest = months % 12;

  const parts: string[] = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? "ano" : "anos"}`);
  if (rest > 0) parts.push(`${rest} ${rest === 1 ? "mês" : "meses"}`);
  return parts.join(" e ") || "menos de um mês";
}

/**
 * Experiência como trilho de tempo.
 *
 * O período é o dado que organiza a seção, então ganhou peso tipográfico e
 * uma coluna própria: antes competia em tamanho com a legenda de cidade e
 * sumia. O marcador do cargo atual é o mesmo ponto âmbar do cabeçalho — o
 * movimento ali diz "é agora", e nos anteriores ele fica apagado.
 */
export function ExperienceTimeline() {
  return (
    <Section id="experiencia" title="Experiência">
      <ol>
        {experiences.map((job, index) => {
          const current = !job.endISO;
          const isFirst = index === 0;
          const isLast = index === experiences.length - 1;

          return (
            <li
              key={job.company}
              className="relative grid gap-6 border-t border-rule py-10 lg:grid-cols-[minmax(0,19rem)_minmax(0,1fr)] lg:gap-14"
            >
              {/* Trilho: um segmento por item, encostando no de cima e no de
                  baixo, o que dá uma linha contínua sem precisar medir a
                  altura da lista. O primeiro começa no marcador e o último
                  termina nele — 3.125rem é onde o centro do ponto cai, somando
                  o respiro de cima e metade da linha do período. */}
              <span
                aria-hidden="true"
                className="absolute left-[3.5px] hidden w-px bg-rule-strong lg:block"
                style={{
                  top: isFirst ? "3.125rem" : 0,
                  bottom: isLast ? "calc(100% - 3.125rem)" : 0,
                }}
              />

              <div>
                <div className="flex items-center gap-3">
                  {/* O anel na cor do fundo abre um vão no trilho para o
                      marcador ficar sobre a linha, não atravessado por ela. */}
                  <span
                    aria-hidden="true"
                    className={`relative z-10 size-2 shrink-0 rounded-full ring-4 ring-base ${
                      current ? "beacon bg-signal" : "bg-rule-strong"
                    }`}
                  />
                  <time
                    dateTime={job.startISO}
                    className={`tnum whitespace-nowrap text-lg leading-none sm:text-xl ${
                      current ? "text-signal" : "text-ink"
                    }`}
                  >
                    {job.period}
                  </time>
                </div>

                <p className="mt-3 pl-5 text-sm leading-relaxed text-ink-faint">
                  {durationLabel(job.startISO, job.endISO)}
                </p>
                <p className="pl-5 text-sm leading-relaxed text-ink-faint">{job.location}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold tracking-[-0.015em]">{job.company}</h3>
                <p className="mt-1.5 text-base text-ink-soft">{job.role}</p>

                {/* Sem medida máxima: a coluna do período já estreita o texto
                    o bastante para a linha ficar em torno de 75 caracteres. */}
                <p className="mt-5 text-lg leading-[1.6] text-ink">{job.summary}</p>

                {job.figures && job.figures.length > 0 && (
                  <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-4">
                    {job.figures.map((figure) => (
                      <div key={figure.label}>
                        <dd
                          className={
                            figure.numeric
                              ? "tnum text-3xl font-medium leading-none text-signal"
                              : "text-xl font-medium leading-tight text-ink"
                          }
                        >
                          {figure.value}
                        </dd>
                        <dt className="mt-2 max-w-[26ch] text-sm leading-snug text-ink-faint">
                          {figure.label}
                        </dt>
                      </div>
                    ))}
                  </dl>
                )}

                <ul className="mt-6 space-y-3">
                  {job.highlights.map((item) => (
                    <li
                      key={item}
                      className="border-l border-rule-strong pl-5 text-base leading-[1.6] text-ink-soft"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Etiquetas no lugar da lista separada por vírgula: dá para
                    varrer a stack de uma olhada em vez de ler uma frase. */}
                <ul className="mt-7 flex flex-wrap gap-2">
                  {job.stack.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-sm border border-rule bg-surface px-2.5 py-1 text-sm text-ink-soft"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
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
        <p className="text-base text-ink-faint">
          Desenvolvido por {site.name}. São Paulo, Brasil.
        </p>
      </Container>
    </footer>
  );
}
