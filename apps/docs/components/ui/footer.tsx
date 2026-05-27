import Link from "next/link"

import { Github, Twitter, Zap } from "lucide-react"

const links = {
  Documentation: [
    { label: "Introduction", href: "/docs" },
    { label: "Installation", href: "/docs/installation" },
    { label: "Theming", href: "/docs/theming" },
    { label: "CLI", href: "/docs/cli" },
    { label: "Changelog", href: "/changelog" },
  ],
  Components: [
    { label: "Layout", href: "/docs/components/layout" },
    { label: "Inputs", href: "/docs/components/inputs" },
    { label: "Navigation", href: "/docs/components/navigation" },
    { label: "Feedback", href: "/docs/components/feedback" },
    { label: "Charts", href: "/docs/components/charts" },
  ],
  "WOW Effects": [
    { label: "Aurora Background", href: "/docs/components/aurora" },
    { label: "Animated Beam", href: "/docs/components/beam" },
    { label: "Marquee", href: "/docs/components/marquee" },
    { label: "Spotlight", href: "/docs/components/spotlight" },
    { label: "Particle System", href: "/docs/components/particles" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto max-w-screen-xl px-4 py-16">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 space-y-4 sm:col-span-3 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary">
                <Zap className="h-3.5 w-3.5 text-primary-foreground" />
              </div>
              benflux/ui
            </Link>
            <p className="max-w-[200px] text-sm leading-relaxed text-muted-foreground">
              Beautifully designed components for React & Next.js.
            </p>
            <div className="flex items-center gap-1">
              <a
                href="https://github.com/benflux-company/benflux_ui"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com/benflux_ui"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title} className="space-y-4">
              <p className="text-sm font-medium">{title}</p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Benflux UI. MIT License. A product of{" "}
            <a
              href="https://benflux-corp.com"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 transition-colors hover:text-foreground"
            >
              Benflux
            </a>
            .
          </p>
          <p className="text-xs text-muted-foreground">
            Built with{" "}
            <Link
              href="https://nextjs.org"
              className="underline underline-offset-2 transition-colors hover:text-foreground"
            >
              Next.js
            </Link>
            {" & "}
            <Link
              href="https://tailwindcss.com"
              className="underline underline-offset-2 transition-colors hover:text-foreground"
            >
              Tailwind CSS
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
