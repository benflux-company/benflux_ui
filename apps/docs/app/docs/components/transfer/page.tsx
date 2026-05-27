"use client"

import * as React from "react"

import { CodeBlock } from "@/components/docs/code-block"

import { Transfer, type TransferItem } from "@benflux-ui/react"

const mockItems: TransferItem[] = Array.from({ length: 12 }, (_, i) => ({
  key: `item-${i + 1}`,
  title: `Component ${i + 1}`,
  description: `Description for item ${i + 1}`,
  disabled: i === 5,
}))

export default function TransferPage() {
  const [targetKeys, setTargetKeys] = React.useState<string[]>(["item-2", "item-4"])

  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Data Display
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Transfer</h1>
        <p className="text-lg text-muted-foreground">
          Dual-list picker to move items between a source and target list, with search, select-all,
          and disabled support.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-card p-6">
        <Transfer
          dataSource={mockItems}
          targetKeys={targetKeys}
          onChange={setTargetKeys}
          titles={["Available", "Selected"]}
          showSearch
        />
      </div>

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
    </div>
  )
}
