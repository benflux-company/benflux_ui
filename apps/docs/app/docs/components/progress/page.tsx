import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { PropsTable } from "@/components/docs/props-table"

export const metadata: Metadata = { title: "Progress" }

const bars = [
  { label: "Storage", value: 68, color: "bg-primary" },
  { label: "Bandwidth", value: 40, color: "bg-blue-500" },
  { label: "CPU", value: 85, color: "bg-orange-500" },
  { label: "Memory", value: 55, color: "bg-purple-500" },
]

export default function ProgressPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Primitive
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Progress</h1>
        <p className="text-lg text-muted-foreground">
          Displays an indicator showing the completion progress of a task.
        </p>
      </div>

      <div className="mx-auto w-full max-w-sm space-y-5 rounded-xl border border-border bg-muted/20 p-10">
        {bars.map((b) => (
          <div key={b.label} className="space-y-1.5">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{b.label}</span>
              <span>{b.value}%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
              <div
                className={`h-full rounded-full transition-all ${b.color}`}
                style={{ width: `${b.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add progress" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { Progress } from "@/components/ui/progress"

// Basic
<Progress value={68} />

// With label
<Progress value={40} label="Bandwidth" showValue />

// Colored variants
<Progress value={85} color="orange" />
<Progress value={55} color="purple" />

// Animated (indeterminate)
<Progress indeterminate />`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable
          props={[
            {
              name: "value",
              type: "number",
              default: "0",
              description: "Progress value from 0 to 100",
            },
            { name: "max", type: "number", default: "100", description: "Maximum value" },
            {
              name: "size",
              type: '"xs" | "sm" | "default" | "lg"',
              default: '"default"',
              description: "Height of the progress bar",
            },
            {
              name: "color",
              type: '"primary" | "blue" | "green" | "orange" | "purple" | "red"',
              default: '"primary"',
              description: "Color of the filled bar",
            },
            {
              name: "showValue",
              type: "boolean",
              default: "false",
              description: "Shows percentage label",
            },
            {
              name: "label",
              type: "string",
              default: "—",
              description: "Label shown above the bar",
            },
            {
              name: "indeterminate",
              type: "boolean",
              default: "false",
              description: "Animated loading state with no fixed value",
            },
          ]}
        />
      </div>
    </div>
  )
}
