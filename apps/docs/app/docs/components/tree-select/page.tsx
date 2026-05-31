import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { TreeSelectDemo } from "@/components/previews/tree-select-demo"

export const metadata: Metadata = { title: "TreeSelect" }

export default function TreeSelectPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Data Entry
        </div>
        <h1 className="text-4xl font-bold tracking-tight">TreeSelect</h1>
        <p className="text-lg text-muted-foreground">
          A select dropdown that renders its options as an expandable tree. Supports single and
          multiple selection, search, and programmatic expansion.
        </p>
      </div>

      <ComponentPreview
        code={`"use client"
import { useState } from "react"
import { TreeSelect } from "@benflux-ui/react"

const TREE_DATA = [
  {
    value: "design",
    label: "Design",
    children: [
      { value: "figma", label: "Figma" },
      { value: "sketch", label: "Sketch" },
    ],
  },
  {
    value: "dev",
    label: "Development",
    children: [
      { value: "vscode", label: "VS Code" },
      { value: "vim", label: "Vim" },
    ],
  },
]

export function Demo() {
  const [value, setValue] = useState("")

  return (
    <TreeSelect
      treeData={TREE_DATA}
      value={value}
      onChange={(v) => setValue(v as string)}
      placeholder="Select a tool..."
      showSearch
      allowClear
    />
  )
}`}
      >
        <TreeSelectDemo />
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add tree-select" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Multiple selection</h2>
        <CodeBlock
          code={`const [selected, setSelected] = useState<string[]>([])

<TreeSelect
  treeData={treeData}
  value={selected}
  onChange={(v) => setSelected(v as string[])}
  multiple
  maxTagCount={3}
  treeDefaultExpandAll
/>`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable
          props={[
            {
              name: "treeData",
              type: "TreeSelectNode[]",
              required: true,
              description: "Hierarchical data",
            },
            {
              name: "value",
              type: "string | string[]",
              default: "—",
              description: "Controlled selection. String for single, string[] for multiple.",
            },
            {
              name: "defaultValue",
              type: "string | string[]",
              default: "—",
              description: "Initial selection (uncontrolled)",
            },
            {
              name: "onChange",
              type: "(value: string | string[]) => void",
              default: "—",
              description: "Called when selection changes",
            },
            {
              name: "multiple",
              type: "boolean",
              default: "false",
              description: "Enable multi-select",
            },
            {
              name: "placeholder",
              type: "string",
              default: '"Select..."',
              description: "Trigger placeholder",
            },
            {
              name: "showSearch",
              type: "boolean",
              default: "false",
              description: "Show a search field inside the dropdown",
            },
            {
              name: "allowClear",
              type: "boolean",
              default: "false",
              description: "Show a clear button",
            },
            {
              name: "treeDefaultExpandAll",
              type: "boolean",
              default: "false",
              description: "Expand all nodes by default",
            },
            {
              name: "treeDefaultExpandedKeys",
              type: "string[]",
              default: "[]",
              description: "Keys of nodes to expand initially",
            },
            {
              name: "maxTagCount",
              type: "number",
              default: "—",
              description: "Maximum number of tags shown (multiple mode)",
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Disable the select",
            },
            {
              name: "notFoundContent",
              type: "string",
              default: '"No data"',
              description: "Shown when search finds nothing",
            },
          ]}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">TreeSelectNode</h2>
        <CodeBlock
          language="tsx"
          code={`interface TreeSelectNode {
  value: string
  label: string
  disabled?: boolean
  children?: TreeSelectNode[]
}`}
        />
      </div>
    </div>
  )
}
