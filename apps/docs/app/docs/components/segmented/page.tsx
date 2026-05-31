"use client"

import * as React from "react"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { LayoutGrid, List, Table } from "lucide-react"

import { Segmented } from "@benflux-ui/react"

function SegmentedDemo() {
  const [view, setView] = React.useState("grid")
  const [size, setSize] = React.useState("md")

  return (
    <div className="flex flex-col items-start gap-6">
      <Segmented
        value={view}
        onChange={setView}
        options={[
          { label: "Grid", value: "grid", icon: <LayoutGrid className="h-3.5 w-3.5" /> },
          { label: "List", value: "list", icon: <List className="h-3.5 w-3.5" /> },
          { label: "Table", value: "table", icon: <Table className="h-3.5 w-3.5" /> },
        ]}
      />
      <Segmented
        value={size}
        onChange={setSize}
        size="sm"
        options={["xs", "sm", "md", "lg", "xl"].map((s) => ({ label: s, value: s }))}
      />
      <Segmented
        value="a"
        onChange={() => {}}
        block
        options={["Option A", "Option B", "Option C"].map((l) => ({
          label: l,
          value: l.split(" ")[1]!.toLowerCase(),
        }))}
      />
    </div>
  )
}

export default function SegmentedPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Inputs
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Segmented</h1>
        <p className="text-lg text-muted-foreground">
          A segmented control for selecting one option from a small set — with smooth sliding
          indicator animation.
        </p>
      </div>

      <ComponentPreview
        className="flex-col items-start gap-6"
        code={`import { Segmented } from "@benflux-ui/react"
import { LayoutGrid, List, Table } from "lucide-react"

const [view, setView] = useState("grid")

// With icons
<Segmented
  value={view}
  onChange={setView}
  options={[
    { label: "Grid", value: "grid", icon: <LayoutGrid className="h-3.5 w-3.5" /> },
    { label: "List", value: "list", icon: <List className="h-3.5 w-3.5" /> },
    { label: "Table", value: "table", icon: <Table className="h-3.5 w-3.5" /> },
  ]}
/>

// Small size
<Segmented size="sm" value={val} onChange={setVal} options={["xs","sm","md","lg","xl"]} />

// Full-width (block)
<Segmented block value={val} onChange={setVal} options={options} />`}
      >
        <SegmentedDemo />
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add segmented" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { Segmented } from "@benflux-ui/react"

const [view, setView] = useState("list")

<Segmented
  value={view}
  onChange={setView}
  options={[
    { label: "List", value: "list", icon: <List className="h-3.5 w-3.5" /> },
    { label: "Grid", value: "grid", icon: <Grid className="h-3.5 w-3.5" /> },
  ]}
/>

// Full-width
<Segmented block options={options} value={val} onChange={setVal} />

// Sizes: "sm" | "md" | "lg"`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable
          props={[
            {
              name: "value",
              type: "string",
              required: true,
              description: "Controlled selected value",
            },
            {
              name: "onChange",
              type: "(value: string) => void",
              required: true,
              description: "Callback when selection changes",
            },
            {
              name: "options",
              type: "string[] | { label: string; value: string; icon?: ReactNode; disabled?: boolean }[]",
              required: true,
              description: "List of options to display",
            },
            {
              name: "size",
              type: '"sm" | "md" | "lg"',
              default: '"md"',
              description: "Control size",
            },
            {
              name: "block",
              type: "boolean",
              default: "false",
              description: "Expand to full container width",
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Disable the entire control",
            },
          ]}
        />
      </div>
    </div>
  )
}
