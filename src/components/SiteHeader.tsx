import Link from "next/link";
import Image from "next/image";
import { logo, nav, site } from "@/content/site";
import { Logo } from "./Logo";
import { Container } from "./primitives";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-rule bg-base/85 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link
          href="/"
          aria-label={`${site.shortName} — início`}
          className="flex items-center text-ink transition-colors hover:text-signal"
        >
          {logo.src ? (
            <Image
              src={logo.src}
              alt=""
              width={logo.width}
              height={logo.height}
              priority
              className="h-[52px] w-auto"
            />
          ) : (
            <Logo size={52} />
          )}
        </Link>

        <nav aria-label="Seções do site" className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={`/${item.href}`}
              className="text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <p className="flex items-center gap-2 text-sm text-ink-soft">
          <span
            aria-hidden="true"
            className="beacon inline-block size-1.5 shrink-0 rounded-full bg-signal"
          />
          <span className="hidden sm:inline">Disponível para projetos</span>
          <span className="sm:hidden">Disponível</span>
        </p>
      </Container>

      <nav
        aria-label="Seções do site"
        className="border-t border-rule md:hidden"
      >
        <ul className="flex gap-6 overflow-x-auto px-6 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {nav.map((item) => (
            <li key={item.href} className="shrink-0">
              <Link href={`/${item.href}`} className="text-sm text-ink-soft">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
