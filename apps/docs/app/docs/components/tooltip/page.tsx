import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"

export const metadata: Metadata = { title: "Tooltip" }

export default function TooltipPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Feedback
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Tooltip</h1>
        <p className="text-lg text-muted-foreground">
          A popup that displays information related to an element when it receives keyboard focus or
          the mouse hovers over it.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-8 rounded-xl border border-border bg-muted/20 p-10">
        {["Top", "Right", "Bottom", "Left"].map((side) => (
          <div key={side} className="flex flex-col items-center gap-2">
            <div className="rounded-md border border-border bg-popover px-3 py-1.5 text-xs shadow-md">
              {side} tooltip
            </div>
            <button className="inline-flex h-8 items-center justify-center rounded-md border border-border bg-background px-3 text-sm">
              Hover ({side.toLowerCase()})
            </button>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add tooltip" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button variant="outline">Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Add to library</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}
        />
      </div>
    </div>
  )
}
