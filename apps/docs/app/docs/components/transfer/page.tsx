"use client"

import * as React from "react"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

import { Transfer, type TransferItem } from "@benflux-ui/react"

const mockItems: TransferItem[] = Array.from({ length: 10 }, (_, i) => ({
  key: `item-${i + 1}`,
  title: `Component ${i + 1}`,
  description: `UI component #${i + 1}`,
  disabled: i === 4,
}))

function TransferDemo() {
  const [targetKeys, setTargetKeys] = React.useState<string[]>(["item-2", "item-4"])

  return (
    <Transfer
      dataSource={mockItems}
      targetKeys={targetKeys}
      onChange={setTargetKeys}
      titles={["Available", "Selected"]}
      showSearch
    />
  )
}

export default function TransferPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Data Display
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Transfer</h1>
        <p className="text-lg text-muted-foreground">
          Dual-list picker to move items between a source and target list, with search, select-all,
          and disabled item support.
        </p>
      </div>

      <ComponentPreview
        className="block w-full overflow-x-auto"
        code={`import { Transfer, type TransferItem } from "@benflux-ui/react"

const items: TransferItem[] = [
  { key: "1", title: "Button", description: "Action trigger" },
  { key: "2", title: "Input", description: "Text entry" },
  { key: "3", title: "Select", description: "Option picker", disabled: true },
]

const [targetKeys, setTargetKeys] = useState<string[]>([])

<Transfer
  dataSource={items}
  targetKeys={targetKeys}
  onChange={setTargetKeys}
  titles={["Available", "Selected"]}
  showSearch
/>`}
      >
        <TransferDemo />
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add transfer" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { Transfer, type TransferItem } from "@benflux-ui/react"

const items: TransferItem[] = [
  { key: "1", title: "Item 1", description: "First item" },
  { key: "2", title: "Item 2", disabled: true },
]

const [targetKeys, setTargetKeys] = useState<string[]>([])

<Transfer
  dataSource={items}
  targetKeys={targetKeys}
  onChange={setTargetKeys}
  titles={["Source", "Target"]}
  showSearch
  render={(item) => item.title}
/>`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable
          props={[
            {
              name: "dataSource",
              type: "TransferItem[]",
              required: true,
              description: "Full list of items (source + target)",
            },
            {
              name: "targetKeys",
              type: "string[]",
              required: true,
              description: "Keys of items in the right (target) panel",
            },
            {
              name: "onChange",
              type: "(targetKeys: string[]) => void",
              required: true,
              description: "Called when items are moved between panels",
            },
            {
              name: "titles",
              type: "[string, string]",
              default: '["", ""]',
              description: "Labels for the source and target panels",
            },
            {
              name: "showSearch",
              type: "boolean",
              default: "false",
              description: "Show search box in each panel",
            },
            {
              name: "render",
              type: "(item: TransferItem) => ReactNode",
              default: "—",
              description: "Custom render function for each item",
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Disable the entire transfer component",
            },
          ]}
        />
      </div>
    </div>
  )
}
