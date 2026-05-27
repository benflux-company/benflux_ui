import type { Metadata } from "next"

import { Footer } from "@/components/ui/footer"
import { Navbar } from "@/components/ui/navbar"

export const metadata: Metadata = { title: "Changelog" }

const releases = [
  {
    version: "1.0.0",
    date: "May 2025",
    badge: "Latest",
    changes: [
      { type: "feat", text: "Initial public release with 60+ components" },
      {
        type: "feat",
        text: "8 built-in themes: Dark, Light, AMOLED, Glass, Neon, Cyberpunk, Luxury, Minimal",
      },
      { type: "feat", text: "CLI tool — npx benflux-ui init / add" },
      { type: "feat", text: "TanStack Table integration (DataTable)" },
      { type: "feat", text: "Recharts integration — Line, Bar, Area, Pie, Radar charts" },
      { type: "feat", text: "WOW effects — Aurora, Animated Beam, Marquee, Spotlight, Particles" },
      { type: "feat", text: "Form integration with React Hook Form + Zod" },
      { type: "feat", text: "Date Picker and Calendar (react-day-picker)" },
      { type: "feat", text: "Combobox with single and multi-select" },
      { type: "feat", text: "Drawer (vaul), Resizable panels, Carousel (embla)" },
      { type: "feat", text: "Timeline, Statistic with animated counter, Empty state" },
      { type: "feat", text: "Tag / Chip component with TagInput" },
      { type: "feat", text: "Full TypeScript support" },
    ],
  },
  {
    version: "0.9.0-beta",
    date: "April 2025",
    badge: "Beta",
    changes: [
      { type: "feat", text: "Beta release for testing" },
      {
        type: "feat",
        text: "Core components: Button, Card, Input, Badge, Dialog, Select, Alert, Progress",
      },
      { type: "feat", text: "Theme system with CSS variables" },
      { type: "fix", text: "Fixed Slot error with asChild + icon props" },
      { type: "fix", text: "Fixed PostCSS config for Tailwind v3" },
      { type: "chore", text: "TurboRepo monorepo setup" },
    ],
  },
]

const typeColors: Record<string, string> = {
  feat: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
  fix: "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20",
  chore: "bg-muted text-muted-foreground border-border",
  breaking: "bg-destructive/10 text-destructive border-destructive/20",
}

export default function ChangelogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="container mx-auto max-w-screen-xl flex-1 px-4 py-16">
        <div className="mx-auto max-w-2xl space-y-16">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight">Changelog</h1>
            <p className="text-lg text-muted-foreground">
              All notable changes to Benflux UI are documented here.
            </p>
          </div>

          {releases.map((release) => (
            <div key={release.version} className="space-y-5">
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold tracking-tight">v{release.version}</h2>
                <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  {release.badge}
                </span>
                <span className="text-sm text-muted-foreground">{release.date}</span>
              </div>

              <ul className="space-y-2">
                {release.changes.map((change, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className={`mt-0.5 inline-flex shrink-0 items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold ${typeColors[change.type]}`}
                    >
                      {change.type}
                    </span>
                    <span className="text-sm text-muted-foreground">{change.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}
