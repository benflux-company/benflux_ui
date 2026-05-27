import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

import { Badge } from "@benflux-ui/react"

export const metadata: Metadata = { title: "Badge" }

export default function BadgePage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Primitive
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Badge</h1>
        <p className="text-lg text-muted-foreground">
          Displays a small status label, tag, or count indicator.
        </p>
      </div>

      <ComponentPreview
        code={`import { Badge } from "@benflux-ui/react"

<Badge>Default</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="gradient">Gradient</Badge>`}
      >
        <Badge>Default</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="gradient">Gradient</Badge>
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add badge" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { Badge } from "@benflux-ui/react"

export default function Example() {
  return <Badge variant="success">Active</Badge>
}`}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Sizes</h2>
        <ComponentPreview
          code={`<Badge size="sm">Small</Badge>
<Badge size="default">Default</Badge>
<Badge size="lg">Large</Badge>`}
        >
          <Badge size="sm">Small</Badge>
          <Badge size="default">Default</Badge>
          <Badge size="lg">Large</Badge>
        </ComponentPreview>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable
          props={[
            {
              name: "variant",
              type: '"default" | "success" | "warning" | "destructive" | "outline" | "secondary" | "gradient" | "glow"',
              default: '"default"',
              description: "Visual style of the badge",
            },
            {
              name: "size",
              type: '"sm" | "default" | "lg"',
              default: '"default"',
              description: "Size of the badge",
            },
          ]}
        />
      </div>
    </div>
  )
}
