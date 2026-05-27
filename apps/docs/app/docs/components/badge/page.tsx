import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { PropsTable } from "@/components/docs/props-table"

export const metadata: Metadata = { title: "Badge" }

const badges = [
  { label: "Default", cls: "bg-primary/10 text-primary border-primary/20" },
  {
    label: "Success",
    cls: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
  },
  {
    label: "Warning",
    cls: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20",
  },
  { label: "Error", cls: "bg-destructive/10 text-destructive border-destructive/20" },
  { label: "Outline", cls: "border-border text-foreground" },
  { label: "Secondary", cls: "bg-secondary text-secondary-foreground border-secondary" },
  {
    label: "Gradient",
    cls: "bg-gradient-to-r from-primary/20 to-purple-500/20 text-primary border-primary/20",
  },
]

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

      <div className="flex flex-wrap items-center justify-center gap-3 rounded-xl border border-border bg-muted/20 p-10">
        {badges.map((b) => (
          <span
            key={b.label}
            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${b.cls}`}
          >
            {b.label}
          </span>
        ))}
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add badge" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { Badge } from "@/components/ui/badge"

<Badge>Default</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="outline">Outline</Badge>`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable
          props={[
            {
              name: "variant",
              type: '"default" | "success" | "warning" | "error" | "outline" | "secondary" | "gradient"',
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
