import type { Metadata } from "next"

import { Footer } from "@/components/ui/footer"
import { Navbar } from "@/components/ui/navbar"
import { ExternalLink } from "lucide-react"

export const metadata: Metadata = { title: "Showcase" }

const projects = [
  {
    name: "Benflux DevArena",
    description:
      "Full SaaS platform with GitHub OAuth, BFC wallet, developer challenges, and project management.",
    tags: ["Next.js", "NestJS", "PostgreSQL"],
    url: "#",
  },
  {
    name: "Your project here",
    description:
      "Built something with Benflux UI? Submit your project to be featured in the showcase.",
    tags: ["Submit"],
    url: "#",
  },
]

export default function ShowcasePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="container mx-auto max-w-screen-xl flex-1 px-4 py-16">
        <div className="mx-auto max-w-4xl space-y-12">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight">Showcase</h1>
            <p className="text-lg text-muted-foreground">
              Projects built with Benflux UI. Submit yours to be featured.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group space-y-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold">{project.name}</h3>
                  <ExternalLink className="ml-2 h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
                </div>
                <p className="text-sm text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4 rounded-xl border border-dashed border-border bg-muted/10 p-8 text-center">
            <h3 className="font-semibold">Submit your project</h3>
            <p className="mx-auto max-w-md text-sm text-muted-foreground">
              Built something with Benflux UI? Open an issue or PR on GitHub to be featured here.
            </p>
            <a
              href="https://github.com/benflux-company/benflux_ui/issues/new"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 items-center gap-2 rounded-md border border-border bg-background px-4 text-sm font-medium transition-colors hover:bg-accent"
            >
              Submit on GitHub
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
