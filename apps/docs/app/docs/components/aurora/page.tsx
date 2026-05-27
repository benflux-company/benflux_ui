import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"

export const metadata: Metadata = { title: "Aurora Background" }

export default function AuroraPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          WOW Effects
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Aurora Background</h1>
        <p className="text-lg text-muted-foreground">
          An animated gradient aurora effect for hero sections and backgrounds.
        </p>
      </div>

      <div className="relative h-48 overflow-hidden rounded-xl border border-border bg-zinc-950">
        <div className="absolute inset-0">
          <div className="absolute left-1/4 top-0 h-96 w-96 animate-pulse rounded-full bg-primary/30 blur-3xl" />
          <div
            className="absolute right-1/4 top-0 h-80 w-80 animate-pulse rounded-full bg-purple-500/20 blur-3xl"
            style={{ animationDelay: "0.5s" }}
          />
          <div
            className="absolute bottom-0 left-1/2 h-72 w-72 animate-pulse rounded-full bg-blue-500/20 blur-3xl"
            style={{ animationDelay: "1s" }}
          />
        </div>
        <div className="relative z-10 flex h-full items-center justify-center">
          <p className="text-lg font-semibold text-white">Aurora Background</p>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add aurora" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { AuroraBackground } from "@/components/ui/aurora"

<AuroraBackground>
  <div className="relative z-10 text-white text-center">
    <h1 className="text-5xl font-bold">Welcome</h1>
    <p className="mt-4">Built with Benflux UI</p>
  </div>
</AuroraBackground>

// Custom colors
<AuroraBackground colors={["#6366f1", "#a855f7", "#3b82f6"]}>
  {children}
</AuroraBackground>`}
        />
      </div>
    </div>
  )
}
