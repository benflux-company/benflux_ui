"use client"

import * as React from "react"

import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"

import { InputNumber } from "@benflux-ui/react"

export default function InputNumberPage() {
  const [val, setVal] = React.useState(42)

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

      <div className="flex flex-wrap items-start gap-6 rounded-xl border border-border bg-card p-8">
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground">Basic</p>
          <InputNumber value={val} onChange={setVal} min={0} max={100} />
        </div>
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground">With prefix/suffix</p>
          <InputNumber value={val} onChange={setVal} prefix="$" suffix="USD" precision={2} />
        </div>
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground">No controls</p>
          <InputNumber value={val} onChange={setVal} controls={false} />
        </div>
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground">Disabled</p>
          <InputNumber value={val} onChange={setVal} disabled />
        </div>
      </div>

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
/>

// No controls
<InputNumber value={value} onChange={setValue} controls={false} />`}
        />
      </div>
    </div>
  )
}
