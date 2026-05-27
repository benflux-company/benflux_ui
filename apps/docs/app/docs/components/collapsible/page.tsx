import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { ChevronDown } from "lucide-react"

export const metadata: Metadata = { title: "Collapsible" }

export default function CollapsiblePage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Layout
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Collapsible</h1>
        <p className="text-lg text-muted-foreground">
          An interactive component which expands/collapses a panel.
        </p>
      </div>

      <div className="flex items-center justify-center rounded-xl border border-border bg-muted/20 p-10">
        <div className="w-full max-w-sm space-y-2">
          <div className="flex items-center justify-between rounded-lg border border-border bg-card p-4">
            <span className="text-sm font-medium">Can I use this in my project?</span>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <p className="text-sm text-muted-foreground">
              Yes. Free to use for personal and commercial projects. License is MIT.
            </p>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-border bg-card p-4">
            <span className="text-sm font-medium">Does it support dark mode?</span>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add collapsible" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronDown } from "lucide-react"

export default function Example() {
  return (
    <Collapsible>
      <CollapsibleTrigger className="flex items-center justify-between w-full">
        <span>Can I use this in my project?</span>
        <ChevronDown className="h-4 w-4" />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <p>Yes. MIT license — free for personal and commercial use.</p>
      </CollapsibleContent>
    </Collapsible>
  )
}`}
        />
      </div>
    </div>
  )
}
