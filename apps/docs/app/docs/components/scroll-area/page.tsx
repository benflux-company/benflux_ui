import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"

export const metadata: Metadata = { title: "Scroll Area" }

export default function ScrollAreaPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Layout
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Scroll Area</h1>
        <p className="text-lg text-muted-foreground">
          Augments native scroll functionality for custom, cross-browser styled scrollbars.
        </p>
      </div>

      <div className="flex items-center justify-center rounded-xl border border-border bg-muted/20 p-10">
        <div className="relative h-48 w-64 overflow-hidden rounded-lg border border-border bg-background">
          <div className="absolute bottom-1 right-1 top-1 w-1.5 rounded-full bg-muted">
            <div className="h-12 w-full rounded-full bg-border" />
          </div>
          <div className="space-y-2 p-3 pr-5">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="h-6 w-6 shrink-0 rounded-full bg-muted" />
                <div className="flex-1 space-y-1">
                  <div className="h-2 w-24 rounded bg-muted" />
                  <div className="h-2 w-16 rounded bg-muted/60" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add scroll-area" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { ScrollArea } from "@/components/ui/scroll-area"

<ScrollArea className="h-48 w-64 rounded-md border p-4">
  {items.map((item) => (
    <div key={item}>{item}</div>
  ))}
</ScrollArea>

// Horizontal scroll
<ScrollArea orientation="horizontal">
  <div className="flex gap-4 w-max">
    {items.map((item) => (
      <div key={item} className="w-40 shrink-0">{item}</div>
    ))}
  </div>
</ScrollArea>`}
        />
      </div>
    </div>
  )
}
