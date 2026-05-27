"use client"

import { Footer } from "@/components/ui/footer"
import { Navbar } from "@/components/ui/navbar"
import { Check } from "lucide-react"

import { useTheme } from "@benflux-ui/themes"
import type { ThemeName } from "@benflux-ui/themes"

const themes: { name: ThemeName; label: string; description: string; colors: string[] }[] = [
  {
    name: "dark",
    label: "Dark",
    description: "Classic dark mode with indigo accent",
    colors: ["#0f172a", "#6366f1", "#1e293b"],
  },
  {
    name: "light",
    label: "Light",
    description: "Clean light mode with indigo accent",
    colors: ["#ffffff", "#6366f1", "#f1f5f9"],
  },
  {
    name: "amoled",
    label: "AMOLED",
    description: "Pure black for OLED displays",
    colors: ["#000000", "#a855f7", "#111111"],
  },
  {
    name: "glass",
    label: "Glass",
    description: "Glassmorphism with blue accent",
    colors: ["#0f1729", "#60a5fa", "#1e3a5f"],
  },
  {
    name: "neon",
    label: "Neon",
    description: "Dark with neon green highlights",
    colors: ["#000000", "#00ff9f", "#0a0a0a"],
  },
  {
    name: "cyberpunk",
    label: "Cyberpunk",
    description: "High contrast pink neon",
    colors: ["#09090b", "#ff2d78", "#1a0010"],
  },
  {
    name: "luxury",
    label: "Luxury",
    description: "Dark with gold accent",
    colors: ["#18181b", "#d4a843", "#27272a"],
  },
  {
    name: "minimal",
    label: "Minimal",
    description: "Light and minimal monochrome",
    colors: ["#fafafa", "#18181b", "#e4e4e7"],
  },
]

export default function ThemesPage() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="container mx-auto max-w-screen-xl flex-1 px-4 py-16">
        <div className="mx-auto max-w-4xl space-y-12">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight">Themes</h1>
            <p className="text-lg text-muted-foreground">
              Choose from 8 built-in themes. Applied globally via{" "}
              <code className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-xs">
                BenfluxProvider
              </code>
              .
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {themes.map((t) => (
              <button
                key={t.name}
                onClick={() => setTheme(t.name)}
                className={`group space-y-3 rounded-xl border p-5 text-left transition-all hover:border-foreground/30 ${theme === t.name ? "border-foreground" : "border-border"}`}
              >
                <div
                  className="flex h-14 w-full overflow-hidden rounded-lg"
                  style={{ background: t.colors[0] }}
                >
                  <div className="h-full w-1/3" style={{ background: t.colors[2] }} />
                  <div className="flex flex-1 items-center justify-center">
                    <div className="h-5 w-5 rounded-full" style={{ background: t.colors[1] }} />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold">{t.label}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{t.description}</p>
                  </div>
                  {theme === t.name && (
                    <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground">
                      <Check className="h-3 w-3 text-background" />
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          <div className="space-y-3 rounded-xl border border-border bg-muted/20 p-6">
            <p className="text-sm font-semibold">
              Currently active: <code className="font-mono text-primary">{theme}</code>
            </p>
            <div className="rounded-lg border border-border bg-zinc-950 p-4 font-mono text-sm text-zinc-300">
              <span className="text-purple-400">{"<BenfluxProvider "}</span>
              <span className="text-cyan-400">defaultTheme</span>
              <span className="text-zinc-300">{"="}</span>
              <span className="text-green-400">{`"${theme}"`}</span>
              <span className="text-purple-400">{">"}</span>
              <span className="text-zinc-500">{" {children} "}</span>
              <span className="text-purple-400">{"</BenfluxProvider>"}</span>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
