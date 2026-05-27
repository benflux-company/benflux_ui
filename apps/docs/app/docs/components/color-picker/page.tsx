"use client"

import * as React from "react"

import { CodeBlock } from "@/components/docs/code-block"

import { ColorPicker } from "@benflux-ui/react"

export default function ColorPickerPage() {
  const [color, setColor] = React.useState("#6366f1")

  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Inputs
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Color Picker</h1>
        <p className="text-lg text-muted-foreground">
          Select colors with a native color wheel, preset swatches, and a hex input field.
        </p>
      </div>

      <div className="flex flex-wrap items-start gap-8 rounded-xl border border-border bg-card p-8">
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground">With presets + hex input</p>
          <ColorPicker value={color} onChange={setColor} showInput />
        </div>
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground">
            Selected: <span className="font-mono">{color}</span>
          </p>
          <div
            className="h-10 w-24 rounded-md border border-border shadow-inner"
            style={{ background: color }}
          />
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add color-picker" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { ColorPicker } from "@benflux-ui/react"

const [color, setColor] = useState("#6366f1")

<ColorPicker
  value={color}
  onChange={setColor}
  showInput
  presets={["#ef4444", "#f97316", "#eab308", "#22c55e", "#3b82f6", "#8b5cf6"]}
/>`}
        />
      </div>
    </div>
  )
}
