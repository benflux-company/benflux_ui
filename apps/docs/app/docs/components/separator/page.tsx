import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

import { Separator } from "@benflux-ui/react"

export const metadata: Metadata = { title: "Separator" }

export default function SeparatorPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Primitive
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Separator</h1>
        <p className="text-lg text-muted-foreground">Visually or semantically separates content.</p>
      </div>

      <ComponentPreview
        code={`import { Separator } from "@benflux-ui/react"

<div className="space-y-4">
  <p>Section one</p>
  <Separator />
  <p>Section two</p>
</div>`}
        className="w-full max-w-sm flex-col"
      >
        <div className="flex w-full max-w-sm flex-col space-y-4">
          <div>
            <h4 className="text-sm font-medium">Radix Primitives</h4>
            <p className="text-sm text-muted-foreground">An open-source UI component library.</p>
          </div>
          <Separator />
          <div className="flex h-5 items-center space-x-4 text-sm">
            <span>Blog</span>
            <Separator orientation="vertical" />
            <span>Docs</span>
            <Separator orientation="vertical" />
            <span>Source</span>
          </div>
        </div>
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add separator" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { Separator } from "@benflux-ui/react"

<Separator />
<Separator orientation="vertical" />`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable
          props={[
            {
              name: "orientation",
              type: '"horizontal" | "vertical"',
              default: '"horizontal"',
              description: "Direction of the separator",
            },
            {
              name: "decorative",
              type: "boolean",
              default: "true",
              description: "When true, the separator is purely visual with no semantic meaning",
            },
          ]}
        />
      </div>
    </div>
  )
}
