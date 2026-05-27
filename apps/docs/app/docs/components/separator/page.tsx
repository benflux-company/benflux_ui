import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"

export const metadata: Metadata = { title: "Separator" }

export default function SeparatorPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Layout
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Separator</h1>
        <p className="text-lg text-muted-foreground">
          Visually or semantically separates content. Supports horizontal and vertical orientation,
          and an optional center label.
        </p>
      </div>

      <div className="space-y-8 rounded-xl border border-border bg-muted/20 p-10">
        <div className="h-px w-full bg-border" />
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="shrink-0 text-xs font-medium text-muted-foreground">OR</span>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="flex h-10 items-center gap-4">
          <span className="text-sm text-muted-foreground">Left</span>
          <div className="h-full w-px bg-border" />
          <span className="text-sm text-muted-foreground">Right</span>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add separator" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { Separator } from "@/components/ui/separator"

// Horizontal (default)
<Separator />

// With label
<Separator label="OR" />

// Vertical
<div className="flex h-10 items-center gap-4">
  <span>Left</span>
  <Separator orientation="vertical" />
  <span>Right</span>
</div>`}
        />
      </div>
    </div>
  )
}
