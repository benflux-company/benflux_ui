import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { CollapsibleDemo } from "@/components/previews/collapsible-demo"

export const metadata: Metadata = { title: "Collapsible" }

export default function CollapsiblePage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Primitive
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Collapsible</h1>
        <p className="text-lg text-muted-foreground">
          An interactive component which expands/collapses a panel.
        </p>
      </div>

      <ComponentPreview
        code={`import {
  Collapsible, CollapsibleContent, CollapsibleTrigger,
  Button,
} from "@benflux-ui/react"
import { ChevronsUpDown } from "lucide-react"

const [open, setOpen] = useState(false)

<Collapsible open={open} onOpenChange={setOpen} className="w-[300px] space-y-2">
  <div className="flex items-center justify-between px-4">
    <h4 className="text-sm font-semibold">Starred repos</h4>
    <CollapsibleTrigger asChild>
      <Button variant="ghost" size="icon-sm">
        <ChevronsUpDown className="h-4 w-4" />
      </Button>
    </CollapsibleTrigger>
  </div>
  <div className="rounded-md border px-4 py-2 font-mono text-sm">
    @benflux-ui/react
  </div>
  <CollapsibleContent className="space-y-2">
    <div className="rounded-md border px-4 py-2 font-mono text-sm">
      @benflux-ui/themes
    </div>
    <div className="rounded-md border px-4 py-2 font-mono text-sm">
      @benflux-ui/hooks
    </div>
  </CollapsibleContent>
</Collapsible>`}
      >
        <CollapsibleDemo />
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add collapsible" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import {
  Collapsible, CollapsibleContent, CollapsibleTrigger,
} from "@benflux-ui/react"

<Collapsible>
  <CollapsibleTrigger>Toggle</CollapsibleTrigger>
  <CollapsibleContent>
    Hidden content revealed on toggle.
  </CollapsibleContent>
</Collapsible>`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable
          props={[
            {
              name: "open",
              type: "boolean",
              default: "—",
              description: "Controlled open state",
            },
            {
              name: "defaultOpen",
              type: "boolean",
              default: "false",
              description: "Default open state (uncontrolled)",
            },
            {
              name: "onOpenChange",
              type: "(open: boolean) => void",
              default: "—",
              description: "Called when the open state changes",
            },
          ]}
        />
      </div>
    </div>
  )
}
