import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { TooltipDemo } from "@/components/previews/tooltip-demo"

export const metadata: Metadata = { title: "Tooltip" }

export default function TooltipPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Primitive
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Tooltip</h1>
        <p className="text-lg text-muted-foreground">
          A popup that displays information related to an element when the element receives keyboard
          focus or the mouse hovers over it.
        </p>
      </div>

      <ComponentPreview
        code={`import { Button, SimpleTooltip, TooltipProvider } from "@benflux-ui/react"

<TooltipProvider>
  <SimpleTooltip content="Top tooltip" side="top">
    <Button variant="outline">Top</Button>
  </SimpleTooltip>
  <SimpleTooltip content="Right tooltip" side="right">
    <Button variant="outline">Right</Button>
  </SimpleTooltip>
  <SimpleTooltip content="Bottom tooltip" side="bottom">
    <Button variant="outline">Bottom</Button>
  </SimpleTooltip>
  <SimpleTooltip content="Left tooltip" side="left">
    <Button variant="outline">Left</Button>
  </SimpleTooltip>
</TooltipProvider>`}
      >
        <TooltipDemo />
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add tooltip" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import {
  TooltipProvider, Tooltip,
  TooltipTrigger, TooltipContent,
} from "@benflux-ui/react"

<TooltipProvider>
  <Tooltip>
    <TooltipTrigger asChild>
      <Button>Hover me</Button>
    </TooltipTrigger>
    <TooltipContent>
      <p>Helpful tooltip</p>
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props — SimpleTooltip</h2>
        <PropsTable
          props={[
            {
              name: "content",
              type: "ReactNode",
              default: "—",
              description: "Content shown inside the tooltip",
            },
            {
              name: "side",
              type: '"top" | "right" | "bottom" | "left"',
              default: '"top"',
              description: "Preferred side to display the tooltip",
            },
            {
              name: "delayDuration",
              type: "number",
              default: "400",
              description: "Delay in ms before the tooltip appears",
            },
          ]}
        />
      </div>
    </div>
  )
}
