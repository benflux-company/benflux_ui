"use client"

import * as React from "react"

import { TreeSelect } from "@benflux-ui/react"

const TREE_DATA = [
  {
    value: "design",
    label: "Design",
    children: [
      { value: "figma", label: "Figma" },
      { value: "sketch", label: "Sketch" },
      {
        value: "adobe",
        label: "Adobe Suite",
        children: [
          { value: "ps", label: "Photoshop" },
          { value: "ai", label: "Illustrator" },
          { value: "xd", label: "XD" },
        ],
      },
    ],
  },
  {
    value: "dev",
    label: "Development",
    children: [
      { value: "vscode", label: "VS Code" },
      { value: "vim", label: "Vim" },
      { value: "cursor", label: "Cursor" },
    ],
  },
  { value: "pm", label: "Project Management" },
]

export function TreeSelectDemo() {
  const [single, setSingle] = React.useState<string>("")
  const [multi, setMulti] = React.useState<string[]>([])

  return (
    <div className="w-72 space-y-6">
      <div className="space-y-2">
        <p className="text-xs font-medium text-muted-foreground">Single select</p>
        <TreeSelect
          treeData={TREE_DATA}
          value={single}
          onChange={(v) => setSingle(v as string)}
          placeholder="Select a tool..."
          showSearch
          allowClear
        />
      </div>
      <div className="space-y-2">
        <p className="text-xs font-medium text-muted-foreground">Multiple select</p>
        <TreeSelect
          treeData={TREE_DATA}
          value={multi}
          onChange={(v) => setMulti(v as string[])}
          multiple
          placeholder="Select multiple tools..."
          treeDefaultExpandAll
          maxTagCount={2}
        />
      </div>
    </div>
  )
}
