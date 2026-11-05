import { experiences } from "@/content/experience";
import { method } from "@/content/profile";
import { projects } from "@/content/projects";
import { contact, site } from "@/content/site";
import { stack } from "@/content/stack";
import { ProjectList } from "./ProjectList";
import { Container, Section, accentText } from "./primitives";
import { Icon } from "./icons";
import { BrandIcon, hasBrand } from "./BrandIcon";

export function Work() {
  return (
    <Section id="trabalho" title="Projetos recentes" icon="trabalho" accent="signal">
      <ProjectList projects={projects} />
    </Section>
  );
}

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

export function ExperienceTimeline() {
  return (
    <Section id="experiencia" title="Experiência" icon="experiencia" accent="live">
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
    <Section id="metodo" title={method.title} icon="metodo" accent="probe">
      <div className="grid gap-px overflow-hidden rounded-sm border border-rule bg-rule lg:grid-cols-2">
        {method.principles.map((principle) => (
          <article key={principle.title} className="flex flex-col bg-surface p-7 sm:p-8">
            <Icon
              name={principle.icon}
              size={34}
              className={accentText[principle.accent]}
            />

            <h3
              className={`mt-5 text-balance text-xl font-semibold leading-snug tracking-[-0.015em] ${
                accentText[principle.accent]
              }`}
            >
              {principle.title}
            </h3>

            <p className="mt-4 flex-1 text-base leading-[1.7] text-ink-soft">
              {principle.body}
            </p>

            <p className="mt-6 flex items-start gap-3 border-t border-rule pt-5 text-base leading-[1.5] text-ink">
              <Icon name="resultado" size={20} className="mt-0.5 text-signal" />
              {principle.result}
            </p>
          </article>
        ))}
      </div>

    </Section>
  );
}

export function StackSection() {
  return (
    <Section id="stack" title="Stack" icon="stack" accent="craft">
      <p className="mb-12 max-w-[72ch] text-lg leading-[1.6] text-ink">
        Front-end é onde eu sou profundo: arquitetura, interface e qualidade do
        que vai para o usuário. No back-end eu entrego integração, automação e
        manutenção de legado — Java e Spring no e-commerce da Raia Drogasil,
        Python em automação própria, Node no nível de ferramenta. Arquitetura de
        serviço é terreno que eu acompanho, não que eu desenho sozinho.
      </p>

      <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {stack.map((group) => {
          const color = group.accent ? accentText[group.accent] : "text-ink-faint";

          return (
            <div key={group.title} className="border-t border-rule pt-6">
              <div className="flex items-center gap-2.5">
                {group.icon && <Icon name={group.icon} size={20} className={color} />}
                <h3
                  className={`text-base font-semibold ${
                    group.muted ? "text-ink-faint" : "text-ink"
                  }`}
                >
                  {group.title}
                </h3>
              </div>

              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className={`flex items-center gap-2 rounded-sm border px-2.5 py-1.5 text-sm ${
                      group.muted
                        ? "border-rule text-ink-faint"
                        : "border-rule-strong bg-surface text-ink-soft"
                    }`}
                  >
                    {hasBrand(item) && <BrandIcon label={item} size={16} useBrandColor />}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const praticasUX = [
  "Teste de usabilidade com usuário final",
  "Mapa de calor e leitura de funil",
  "Análise de abandono em produção",
  "Auditoria de acessibilidade",
  "Design system e biblioteca de componentes",
  "Protótipo navegável em código, não só em tela estática",
];

export function Contact() {

  const channels = [
    { label: "WhatsApp", detail: contact.phoneLabel, href: contact.whatsapp, brand: "WhatsApp", icon: null },
    { label: "E-mail", detail: contact.email, href: `mailto:${contact.email}`, brand: null, icon: "email" as const },
    { label: "LinkedIn", detail: contact.linkedinLabel, href: contact.linkedin, brand: null, icon: "perfil" as const },
    { label: "GitHub", detail: contact.githubLabel, href: contact.github, brand: "GitHub", icon: null },
  ];

  return (
    <Section id="contato" title="Vamos conversar" icon="contato" accent="signal">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
        <div>
          <p className="text-xl leading-[1.55] text-ink">
            Se o seu time precisa de alguém que desenha a interface, valida com
            usuário e responde por ela depois que entra no ar, me chame.
          </p>

          <p className="mt-4 text-base text-ink-faint">
            Vaga efetiva, PJ ou freelancer.
          </p>

          <ul className="mt-8 flex flex-wrap gap-2">
            {praticasUX.map((pratica) => (
              <li
                key={pratica}
                className="rounded-sm border border-rule-strong bg-surface px-3 py-1.5 text-sm text-ink-soft"
              >
                {pratica}
              </li>
            ))}
          </ul>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 lg:content-start">
          {channels.map((channel) => (
            <li key={channel.href}>
              <a
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noreferrer noopener" : undefined}
                className="group flex items-center gap-4 rounded-sm border border-rule bg-surface px-5 py-4 transition-colors hover:border-signal"
              >
                <span className="text-ink-faint transition-colors group-hover:text-signal">
                  {channel.brand ? (
                    <BrandIcon label={channel.brand} size={22} />
                  ) : (
                    channel.icon && <Icon name={channel.icon} size={22} />
                  )}
                </span>
                <span className="min-w-0">
                  <span className="block text-base font-medium text-ink transition-colors group-hover:text-signal">
                    {channel.label}
                  </span>
                  <span className="block truncate text-sm text-ink-faint">
                    {channel.detail}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-rule py-10">
      <Container>
        <p className="text-center text-base text-ink-faint">
          Desenvolvido por {site.name} — São Paulo, Brasil
        </p>
      </Container>
    </footer>
  );
}
