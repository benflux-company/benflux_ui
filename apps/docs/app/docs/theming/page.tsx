import type { Metadata } from "next"

import { CodeBlock, InlineCode } from "@/components/docs/code-block"

export const metadata: Metadata = { title: "Theming" }

const themes = [
  {
    name: "dark",
    label: "Dark",
    colors: ["#0f172a", "#6366f1", "#1e293b"],
    description: "Classic dark mode with indigo accent",
  },
  {
    name: "light",
    label: "Light",
    colors: ["#ffffff", "#6366f1", "#f1f5f9"],
    description: "Clean light mode with indigo accent",
  },
  {
    name: "amoled",
    label: "AMOLED",
    colors: ["#000000", "#a855f7", "#111111"],
    description: "Pure black for OLED displays",
  },
  {
    name: "glass",
    label: "Glass",
    colors: ["#0f1729", "#60a5fa", "#1e3a5f"],
    description: "Glassmorphism aesthetic with blue",
  },
  {
    name: "neon",
    label: "Neon",
    colors: ["#000000", "#00ff9f", "#0a0a0a"],
    description: "Dark with neon green highlights",
  },
  {
    name: "cyberpunk",
    label: "Cyberpunk",
    colors: ["#09090b", "#ff2d78", "#1a0010"],
    description: "High contrast pink neon",
  },
  {
    name: "luxury",
    label: "Luxury",
    colors: ["#18181b", "#d4a843", "#27272a"],
    description: "Dark with gold accent",
  },
  {
    name: "minimal",
    label: "Minimal",
    colors: ["#fafafa", "#18181b", "#e4e4e7"],
    description: "Light and minimal monochrome",
  },
]

export default function ThemingPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Theming</h1>
        <p className="text-lg text-muted-foreground">
          Benflux UI ships with 8 built-in themes. Switch globally via{" "}
          <InlineCode>BenfluxProvider</InlineCode> or at runtime with{" "}
          <InlineCode>useTheme</InlineCode>.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Available themes</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {themes.map((t) => (
            <div
              key={t.name}
              className="flex items-center gap-3 rounded-xl border border-border p-3"
            >
              <div
                className="flex h-10 w-10 shrink-0 overflow-hidden rounded-lg"
                style={{ background: t.colors[0] }}
              >
                <div className="h-full w-1/3" style={{ background: t.colors[2] }} />
                <div className="flex flex-1 items-center justify-center">
                  <div className="h-3 w-3 rounded-full" style={{ background: t.colors[1] }} />
                </div>
              </div>
              <div>
                <p className="text-sm font-medium">{t.label}</p>
                <p className="text-xs text-muted-foreground">{t.description}</p>
              </div>
              <code className="ml-auto font-mono text-[11px] text-muted-foreground">{t.name}</code>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Setup</h2>
        <p className="text-sm text-muted-foreground">
          Wrap your app root with <InlineCode>BenfluxProvider</InlineCode>:
        </p>
        <CodeBlock
          filename="app/layout.tsx"
          code={`import { BenfluxProvider } from "@benflux-ui/themes"

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <BenfluxProvider defaultTheme="dark" storageKey="my-app-theme">
          {children}
        </BenfluxProvider>
      </body>
    </html>
  )
}`}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Switching themes at runtime</h2>
        <CodeBlock
          code={`"use client"
import { useTheme } from "@benflux-ui/themes"

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <select value={theme} onChange={(e) => setTheme(e.target.value)}>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
      <option value="neon">Neon</option>
      <option value="cyberpunk">Cyberpunk</option>
    </select>
  )
}`}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">CSS variables</h2>
        <p className="text-sm text-muted-foreground">
          All theme colors are exposed as CSS custom properties on <InlineCode>:root</InlineCode>.
          You can use them directly in your styles:
        </p>
        <CodeBlock
          language="css"
          code={`/* Available CSS variables */
--background
--foreground
--primary
--primary-foreground
--secondary
--secondary-foreground
--muted
--muted-foreground
--accent
--accent-foreground
--destructive
--destructive-foreground
--border
--input
--ring
--card
--card-foreground
--popover
--popover-foreground`}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Custom theme</h2>
        <p className="text-sm text-muted-foreground">
          Override any CSS variable to customize a theme for your brand:
        </p>
        <CodeBlock
          language="css"
          code={`/* globals.css */
.dark {
  --primary: 250 85% 60%;
  --primary-foreground: 0 0% 100%;
  /* Override any variable */
}`}
        />
      </div>
    </div>
  )
}
