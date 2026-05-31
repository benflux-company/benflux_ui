"use client"

import * as React from "react"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

import { InputNumber } from "@benflux-ui/react"

function InputNumberDemo() {
  const [val, setVal] = React.useState(42)

  return (
    <div className="flex flex-wrap items-start gap-6">
      <div className="space-y-1.5">
        <p className="text-xs text-muted-foreground">Basic (0–100)</p>
        <InputNumber value={val} onChange={setVal} min={0} max={100} />
      </div>
      <div className="space-y-1.5">
        <p className="text-xs text-muted-foreground">Prefix / suffix</p>
        <InputNumber value={val} onChange={setVal} prefix="$" suffix="USD" precision={2} />
      </div>
      <div className="space-y-1.5">
        <p className="text-xs text-muted-foreground">No controls</p>
        <InputNumber value={val} onChange={setVal} controls={false} />
      </div>
      <div className="space-y-1.5">
        <p className="text-xs text-muted-foreground">Disabled</p>
        <InputNumber value={val} onChange={setVal} disabled />
      </div>
    </div>
  )
}

export default function InputNumberPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Inputs
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Input Number</h1>
        <p className="text-lg text-muted-foreground">
          Numeric input with increment / decrement controls, min/max bounds, precision, and custom
          formatting.
        </p>
      </div>

      <ComponentPreview
        className="flex-wrap items-start justify-start gap-6"
        code={`import { InputNumber } from "@benflux-ui/react"

const [value, setValue] = useState(42)

// Basic with bounds
<InputNumber value={value} onChange={setValue} min={0} max={100} />

// Prefix, suffix, precision
<InputNumber value={value} onChange={setValue} prefix="$" suffix="USD" precision={2} />

// No controls
<InputNumber value={value} onChange={setValue} controls={false} />

// Disabled
<InputNumber value={value} onChange={setValue} disabled />`}
      >
        <InputNumberDemo />
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add input-number" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { InputNumber } from "@benflux-ui/react"

const [value, setValue] = useState(0)

<InputNumber
  value={value}
  onChange={setValue}
  min={0}
  max={1000}
  step={10}
  precision={2}
  prefix="$"
  suffix="USD"
/>`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable
          props={[
            {
              name: "value",
              type: "number",
              default: "—",
              description: "Controlled value",
            },
            {
              name: "onChange",
              type: "(value: number) => void",
              default: "—",
              description: "Callback when value changes",
            },
            {
              name: "min",
              type: "number",
              default: "-Infinity",
              description: "Minimum allowed value",
            },
            {
              name: "max",
              type: "number",
              default: "Infinity",
              description: "Maximum allowed value",
            },
            {
              name: "step",
              type: "number",
              default: "1",
              description: "Increment / decrement amount",
            },
            {
              name: "precision",
              type: "number",
              default: "—",
              description: "Number of decimal places",
            },
            {
              name: "prefix",
              type: "ReactNode",
              default: "—",
              description: "Content rendered before the number",
            },
            {
              name: "suffix",
              type: "ReactNode",
              default: "—",
              description: "Content rendered after the number",
            },
            {
              name: "controls",
              type: "boolean",
              default: "true",
              description: "Show +/− increment buttons",
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Disable the input",
            },
          ]}
        />
      </div>
    </div>
  )
}
