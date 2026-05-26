import Link from "next/link"
import { Github, Twitter, Zap } from "lucide-react"

const footerLinks = {
  "Getting Started": [
    { label: "Introduction", href: "/docs" },
    { label: "Installation", href: "/docs/installation" },
    { label: "CLI Usage", href: "/docs/cli" },
    { label: "Theming", href: "/docs/theming" },
  ],
  Components: [
    { label: "Layout", href: "/components/layout" },
    { label: "Inputs", href: "/components/inputs" },
    { label: "Navigation", href: "/components/navigation" },
    { label: "WOW Effects", href: "/components/wow" },
    { label: "AI Components", href: "/components/ai" },
  ],
  Resources: [
    { label: "GitHub", href: "https://github.com/benflux20/benflux-ui" },
    { label: "Changelog", href: "/changelog" },
    { label: "Contributing", href: "/contributing" },
    { label: "License", href: "/license" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/10 mt-24">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center">
                <Zap className="h-3.5 w-3.5 text-white" />
              </div>
              <span>Benflux UI</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Revolutionary UI library for React & Next.js. Built for the future of the web.
            </p>
            <div className="flex gap-2">
              <a
                href="https://github.com/benflux20/benflux-ui"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com/benflux_ui"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2024 Benflux UI by Benflux. MIT License.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with{" "}
            <span className="text-primary">Next.js</span>,{" "}
            <span className="text-primary">Tailwind CSS</span> &{" "}
            <span className="text-primary">Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
