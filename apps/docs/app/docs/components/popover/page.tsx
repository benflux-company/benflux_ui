import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { PopoverDemo } from "@/components/previews/popover-demo"

export const metadata: Metadata = { title: "Popover" }

export default function PopoverPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Primitive
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Popover</h1>
        <p className="text-lg text-muted-foreground">
          Displays rich content in a portal, triggered by a button.
        </p>
      </div>

      <ComponentPreview
        code={`import { Button, Popover, PopoverContent, PopoverTrigger, Input, Label } from "@benflux-ui/react"

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open Popover</Button>
  </PopoverTrigger>
  <PopoverContent className="w-72">
    <div className="space-y-3">
      <h4 className="font-medium">Dimensions</h4>
      <div className="grid gap-2">
        <div className="grid grid-cols-3 items-center gap-4">
          <Label>Width</Label>
          <Input defaultValue="100%" className="col-span-2 h-8" />
        </div>
        <div className="grid grid-cols-3 items-center gap-4">
          <Label>Height</Label>
          <Input defaultValue="auto" className="col-span-2 h-8" />
        </div>
      </div>
      <Button size="sm" className="w-full">Apply</Button>
    </div>
  </PopoverContent>
</Popover>`}
      >
        <PopoverDemo />
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add popover" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { Popover, PopoverContent, PopoverTrigger } from "@benflux-ui/react"

<Popover>
  <PopoverTrigger asChild>
    <Button>Open</Button>
  </PopoverTrigger>
  <PopoverContent>
    Place content for the popover here.
  </PopoverContent>
</Popover>`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props — PopoverContent</h2>
        <PropsTable
          props={[
            {
              name: "side",
              type: '"top" | "right" | "bottom" | "left"',
              default: '"bottom"',
              description: "Preferred side to open the popover",
            },
            {
              name: "align",
              type: '"start" | "center" | "end"',
              default: '"center"',
              description: "Alignment along the side",
            },
            {
              name: "sideOffset",
              type: "number",
              default: "4",
              description: "Distance in pixels from the trigger",
            },
          ]}
        />
      </div>
    </div>
  )
}
