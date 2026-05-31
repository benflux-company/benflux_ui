import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { CascaderDemo } from "@/components/previews/cascader-demo"

export const metadata: Metadata = { title: "Cascader" }

export default function CascaderPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Data Entry
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Cascader</h1>
        <p className="text-lg text-muted-foreground">
          A multi-level select component that unfolds hierarchically — category → subcategory →
          value. Ideal for location pickers, category trees, and nested classifications.
        </p>
      </div>

      <ComponentPreview
        code={`"use client"
import { useState } from "react"
import { Cascader } from "@benflux-ui/react"

const OPTIONS = [
  {
    value: "frontend",
    label: "Frontend",
    children: [
      {
        value: "react",
        label: "React",
        children: [
          { value: "nextjs", label: "Next.js" },
          { value: "remix", label: "Remix" },
        ],
      },
    ],
  },
  { value: "backend", label: "Backend", children: [
    { value: "nodejs", label: "Node.js" },
    { value: "python", label: "Python" },
  ]},
]

export function Demo() {
  const [value, setValue] = useState<string[]>([])

  return (
    <Cascader
      options={OPTIONS}
      value={value}
      onChange={setValue}
      placeholder="Select tech stack..."
      allowClear
    />
  )
}`}
      >
        <CascaderDemo />
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add cascader" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Hover to expand</h2>
        <CodeBlock
          code={`<Cascader
  options={options}
  expandTrigger="hover"
  separator=" > "
  placeholder="Hover to expand..."
/>`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable
          props={[
            {
              name: "options",
              type: "CascaderOption[]",
              required: true,
              description: "Hierarchical option tree",
            },
            {
              name: "value",
              type: "string[]",
              default: "—",
              description: "Controlled value — array of keys from root to selected leaf",
            },
            {
              name: "defaultValue",
              type: "string[]",
              default: "[]",
              description: "Initial value (uncontrolled)",
            },
            {
              name: "onChange",
              type: "(value: string[], selectedOptions: CascaderOption[]) => void",
              default: "—",
              description: "Called when a leaf option is selected",
            },
            {
              name: "placeholder",
              type: "string",
              default: '"Select..."',
              description: "Trigger placeholder",
            },
            {
              name: "allowClear",
              type: "boolean",
              default: "false",
              description: "Show a clear button",
            },
            {
              name: "separator",
              type: "string",
              default: '" / "',
              description: "Character used to join label segments in the trigger",
            },
            {
              name: "expandTrigger",
              type: '"click" | "hover"',
              default: '"click"',
              description: "How child menus are opened",
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Disable the trigger",
            },
            {
              name: "notFoundContent",
              type: "string",
              default: '"No options"',
              description: "Shown when a menu is empty",
            },
          ]}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">CascaderOption</h2>
        <CodeBlock
          language="tsx"
          code={`interface CascaderOption {
  value: string
  label: string
  disabled?: boolean
  children?: CascaderOption[]
}`}
        />
      </div>
    </div>
  )
}
