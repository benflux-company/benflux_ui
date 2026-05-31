"use client"

import * as React from "react"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

import { ColorPicker } from "@benflux-ui/react"

function ColorPickerDemo() {
  const [color, setColor] = React.useState("#6366f1")

  return (
    <div className="flex flex-wrap items-start gap-8">
      <div className="space-y-1.5">
        <p className="text-xs text-muted-foreground">With presets + hex input</p>
        <ColorPicker value={color} onChange={setColor} showInput />
      </div>
      <div className="space-y-1.5">
        <p className="text-xs text-muted-foreground">
          Selected: <span className="font-mono">{color}</span>
        </p>
        <div
          className="h-10 w-24 rounded-md border border-border shadow-inner"
          style={{ background: color }}
        />
      </div>
    </div>
  )
}

export default function ColorPickerPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Inputs
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Color Picker</h1>
        <p className="text-lg text-muted-foreground">
          Select colors with a color wheel, preset swatches, and a hex input field.
        </p>
      </div>

      <ComponentPreview
        className="flex-wrap items-start justify-start gap-8"
        code={`import { ColorPicker } from "@benflux-ui/react"

const [color, setColor] = useState("#6366f1")

<ColorPicker
  value={color}
  onChange={setColor}
  showInput
  presets={["#ef4444","#f97316","#eab308","#22c55e","#3b82f6","#8b5cf6"]}
/>`}
      >
        <ColorPickerDemo />
      </ComponentPreview>

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

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable
          props={[
            {
              name: "value",
              type: "string",
              default: "—",
              description: "Controlled hex color value",
            },
            {
              name: "onChange",
              type: "(value: string) => void",
              default: "—",
              description: "Callback when color changes",
            },
            {
              name: "showInput",
              type: "boolean",
              default: "false",
              description: "Show a hex input field below the picker",
            },
            {
              name: "presets",
              type: "string[]",
              default: "—",
              description: "Array of preset hex colors to display as swatches",
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Disable the color picker",
            },
          ]}
        />
      </div>
    </div>
  )
}
