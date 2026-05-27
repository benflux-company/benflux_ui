import type { Metadata } from "next"
import Link from "next/link"

import { CodeBlock } from "@/components/docs/code-block"
import { ArrowRight, Package, Palette, Terminal, Zap } from "lucide-react"

export const metadata: Metadata = { title: "Introduction" }

const features = [
  {
    icon: Zap,
    title: "60+ Components",
    description: "Buttons, cards, dialogs, tables, charts, and much more — all in one library.",
  },
  {
    icon: Palette,
    title: "8 Built-in Themes",
    description:
      "Dark, Light, AMOLED, Glass, Neon, Cyberpunk, Luxury, Minimal. Switch in one click.",
  },
  {
    icon: Terminal,
    title: "CLI Installer",
    description: "Add components directly to your codebase. You own the code, no vendor lock-in.",
  },
  {
    icon: Package,
    title: "TypeScript First",
    description: "Every component is fully typed. Autocomplete and type safety out of the box.",
  },
]

export default function IntroductionPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">
          v1.0.0 — Stable
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Introduction</h1>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Benflux UI is a collection of beautifully designed, accessible, and customizable React
          components. Built with Tailwind CSS and Radix UI primitives — copy and paste into your
          project, own the code.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {features.map((f) => (
          <div key={f.title} className="space-y-2 rounded-xl border border-border p-5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-muted">
              <f.icon className="h-4 w-4 text-foreground" />
            </div>
            <p className="text-sm font-semibold">{f.title}</p>
            <p className="text-sm text-muted-foreground">{f.description}</p>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Quick Start</h2>
        <p className="text-muted-foreground">
          Initialize Benflux UI in your project with a single command:
        </p>
        <CodeBlock code="npx benflux-ui init" language="bash" />
        <p className="text-muted-foreground">Then add components:</p>
        <CodeBlock code="npx benflux-ui add button card input badge" language="bash" />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          filename="app/page.tsx"
          code={`import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Page() {
  return (
    <Card className="p-6">
      <Button variant="default">Get started</Button>
    </Card>
  )
}`}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">How it works</h2>
        <div className="space-y-3 text-muted-foreground">
          <p>
            Benflux UI is <strong className="text-foreground">not a component library</strong> in
            the traditional sense. The CLI copies component source code directly into your project,
            giving you full ownership and control.
          </p>
          <p>
            Each component is a standalone file with no runtime dependency. You can modify it,
            extend it, or delete it without worrying about breaking updates from an upstream
            package.
          </p>
        </div>
      </div>

      <div className="flex gap-3 border-t border-border pt-4">
        <Link
          href="/docs/installation"
          className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
        >
          Installation
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        <Link
          href="/docs/components"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          Browse components
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  )
}
