import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

import { Progress } from "@benflux-ui/react"

export const metadata: Metadata = { title: "Progress" }

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

      <ComponentPreview
        code={`import { Progress } from "@benflux-ui/react"

<Progress value={30} />
<Progress value={60} variant="gradient" />
<Progress value={80} variant="glow" showValue />`}
        className="w-full max-w-sm flex-col gap-4"
      >
        <div className="flex w-full max-w-sm flex-col gap-4">
          <Progress value={30} />
          <Progress value={60} variant="gradient" />
          <Progress value={80} variant="glow" showValue />
        </div>
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add progress" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { Progress } from "@benflux-ui/react"

<Progress value={60} />`}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">With Label & Value</h2>
        <ComponentPreview
          code={`<Progress value={45} label="Uploading..." showValue />
<Progress value={100} label="Complete" showValue variant="gradient" />`}
          className="w-full max-w-sm flex-col gap-4"
        >
          <div className="flex w-full max-w-sm flex-col gap-4">
            <Progress value={45} label="Uploading..." showValue />
            <Progress value={100} label="Complete" showValue variant="gradient" />
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Sizes</h2>
        <ComponentPreview
          code={`<Progress value={60} size="sm" />
<Progress value={60} size="default" />
<Progress value={60} size="lg" />`}
          className="w-full max-w-sm flex-col gap-3"
        >
          <div className="flex w-full max-w-sm flex-col gap-3">
            <Progress value={60} size="sm" />
            <Progress value={60} size="default" />
            <Progress value={60} size="lg" />
          </div>
        </ComponentPreview>
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
            {
              name: "variant",
              type: '"default" | "gradient" | "glow" | "striped"',
              default: '"default"',
              description: "Visual style of the progress bar",
            },
            {
              name: "size",
              type: '"sm" | "default" | "lg"',
              default: '"default"',
              description: "Height of the progress bar",
            },
            {
              name: "showValue",
              type: "boolean",
              default: "false",
              description: "Shows the percentage value",
            },
            {
              name: "label",
              type: "string",
              default: "—",
              description: "Label displayed above the progress bar",
            },
            {
              name: "animated",
              type: "boolean",
              default: "true",
              description: "Enables fill animation on mount",
            },
          ]}
        />
      </div>
    </div>
  )
}
