"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

import { useTheme } from "@benflux-ui/themes"
import type { ThemeName } from "@benflux-ui/themes"

const themes: { name: ThemeName; label: string; colors: string[] }[] = [
  { name: "dark", label: "Dark", colors: ["#0f172a", "#6366f1", "#1e293b"] },
  { name: "light", label: "Light", colors: ["#ffffff", "#6366f1", "#f1f5f9"] },
  { name: "amoled", label: "AMOLED", colors: ["#000000", "#a855f7", "#111111"] },
  { name: "glass", label: "Glass", colors: ["#0f1729", "#60a5fa", "#1e3a5f"] },
  { name: "neon", label: "Neon", colors: ["#000000", "#00ff9f", "#0a0a0a"] },
  { name: "cyberpunk", label: "Cyberpunk", colors: ["#09090b", "#ff2d78", "#1a0010"] },
  { name: "luxury", label: "Luxury", colors: ["#18181b", "#d4a843", "#27272a"] },
  { name: "minimal", label: "Minimal", colors: ["#fafafa", "#18181b", "#e4e4e7"] },
]

function ThemeSwatch({
  theme: t,
  active,
  onClick,
}: {
  theme: (typeof themes)[0]
  active: boolean
  onClick: () => void
}) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative flex h-full w-full flex-col items-start gap-3 rounded-xl border p-4 text-left transition-all hover:border-foreground/30 ${
        active ? "border-foreground" : "border-border"
      }`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Color preview */}
      <div
        className="flex h-12 w-full overflow-hidden rounded-lg"
        style={{ background: t.colors[0] }}
      >
        <div className="w-1/3" style={{ background: t.colors[2] }} />
        <div className="flex flex-1 items-center justify-center">
          <div className="h-5 w-5 rounded-full" style={{ background: t.colors[1] }} />
        </div>
      </div>

      {/* Label */}
      <div className="flex w-full items-center justify-between">
        <span className="text-sm font-medium">{t.label}</span>
        {active && (
          <div className="flex h-4 w-4 items-center justify-center rounded-full bg-foreground">
            <Check className="h-2.5 w-2.5 text-background" />
          </div>
        )}
      </div>
    </motion.button>
  )
}

export function ThemesSection() {
  const { theme, setTheme } = useTheme()

  return (
    <section className="border-t border-border px-4 py-24">
      <div className="container mx-auto max-w-screen-xl">
        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="space-y-3">
            <motion.p
              className="text-sm font-medium text-primary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Themes
            </motion.p>
            <motion.h2
              className="text-3xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              8 themes. Switch in one click.
            </motion.h2>
            <motion.p
              className="max-w-lg text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Click any theme below to preview it live. Applied globally via{" "}
              <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">
                BenfluxProvider
              </code>
              .
            </motion.p>
          </div>

          <p className="shrink-0 text-xs text-muted-foreground">
            Active:{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-foreground">
              {theme}
            </code>
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {themes.map((t, i) => (
            <motion.div
              key={t.name}
              className="h-full"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <ThemeSwatch theme={t} active={theme === t.name} onClick={() => setTheme(t.name)} />
            </motion.div>
          ))}
        </div>

        {/* Usage snippet */}
        <motion.div
          className="mt-8 rounded-xl border border-border bg-muted/30 p-4 font-mono text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="text-muted-foreground">{"// "}</span>
          <span className="text-muted-foreground">Apply theme globally</span>
          <br />
          <span className="text-purple-400">{"<BenfluxProvider "}</span>
          <span className="text-cyan-400">theme</span>
          <span className="text-foreground">{"="}</span>
          <span className="text-green-400">{`"${theme}"`}</span>
          <span className="text-purple-400">{">"}</span>
          <span className="text-muted-foreground">{" {children} "}</span>
          <span className="text-purple-400">{"</BenfluxProvider>"}</span>
        </motion.div>
      </div>
    </section>
  )
}
