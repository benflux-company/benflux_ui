"use client"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

import { Tree, type TreeDataNode } from "@benflux-ui/react"

const treeData: TreeDataNode[] = [
  {
    key: "src",
    title: "src",
    children: [
      {
        key: "components",
        title: "components",
        children: [
          { key: "button", title: "button.tsx" },
          { key: "input", title: "input.tsx" },
        ],
      },
      { key: "app", title: "app.tsx" },
      { key: "index", title: "index.ts" },
    ],
  },
  {
    key: "public",
    title: "public",
    children: [{ key: "logo", title: "logo.svg" }],
  },
  { key: "package", title: "package.json" },
]

export default function TreePage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Data Display
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Tree</h1>
        <p className="text-lg text-muted-foreground">
          Recursive tree view with expand/collapse, checkboxes, icons (Folder/File), and connecting
          lines.
        </p>
      </div>

      <ComponentPreview
        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        code={`import { Tree, type TreeDataNode } from "@benflux-ui/react"

const data: TreeDataNode[] = [
  {
    key: "src",
    title: "src",
    children: [
      { key: "app", title: "app.tsx" },
      { key: "index", title: "index.ts" },
    ],
  },
  { key: "package", title: "package.json" },
]

// With icons
<Tree treeData={data} showIcon defaultExpandedKeys={["src"]} />

// Checkable + connecting lines
<Tree treeData={data} checkable showLine defaultExpandedKeys={["src"]} />`}
      >
        <div className="rounded-xl border border-border bg-card p-6">
          <p className="mb-3 text-xs font-medium text-muted-foreground">With icons</p>
          <Tree treeData={treeData} showIcon defaultExpandedKeys={["src", "components"]} />
        </div>
        <div className="rounded-xl border border-border bg-card p-6">
          <p className="mb-3 text-xs font-medium text-muted-foreground">Checkable + lines</p>
          <Tree treeData={treeData} checkable showLine defaultExpandedKeys={["src"]} />
        </div>
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add tree" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { Tree, type TreeDataNode } from "@benflux-ui/react"

const data: TreeDataNode[] = [
  {
    key: "src",
    title: "src",
    children: [
      { key: "app", title: "app.tsx" },
      { key: "index", title: "index.ts" },
    ],
  },
]

<Tree
  treeData={data}
  showIcon
  showLine
  checkable
  defaultExpandedKeys={["src"]}
  onSelect={(keys) => console.log(keys)}
  onCheck={(keys) => console.log(keys)}
/>`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable
          props={[
            {
              name: "treeData",
              type: "TreeDataNode[]",
              required: true,
              description: "Hierarchical data for the tree",
            },
            {
              name: "showIcon",
              type: "boolean",
              default: "false",
              description: "Show Folder/File icons automatically",
            },
            {
              name: "showLine",
              type: "boolean",
              default: "false",
              description: "Draw connecting lines between nodes",
            },
            {
              name: "checkable",
              type: "boolean",
              default: "false",
              description: "Add checkboxes to each node",
            },
            {
              name: "defaultExpandedKeys",
              type: "string[]",
              default: "[]",
              description: "Keys expanded on initial render",
            },
            {
              name: "checkedKeys",
              type: "string[]",
              default: "—",
              description: "Controlled checked key set",
            },
            {
              name: "onSelect",
              type: "(keys: string[]) => void",
              default: "—",
              description: "Called when a node is selected",
            },
            {
              name: "onCheck",
              type: "(keys: string[]) => void",
              default: "—",
              description: "Called when a checkbox is toggled",
            },
          ]}
        />
      </div>
    </div>
  )
}
