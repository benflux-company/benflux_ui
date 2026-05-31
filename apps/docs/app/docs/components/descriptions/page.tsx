import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

import { Descriptions, DescriptionsItem } from "@benflux-ui/react"

export const metadata: Metadata = { title: "Descriptions" }

export default function DescriptionsPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Layout
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Descriptions</h1>
        <p className="text-lg text-muted-foreground">
          Display read-only key-value data in a structured grid — useful for detail pages and record
          summaries.
        </p>
      </div>

      <ComponentPreview
        className="flex-col items-start gap-6"
        code={`import { Descriptions, DescriptionsItem } from "@benflux-ui/react"

<Descriptions title="User Info" bordered column={2}>
  <DescriptionsItem label="Full Name">Alice Martin</DescriptionsItem>
  <DescriptionsItem label="Email">alice@example.com</DescriptionsItem>
  <DescriptionsItem label="Role">Product Designer</DescriptionsItem>
  <DescriptionsItem label="Status">Active</DescriptionsItem>
  <DescriptionsItem label="Joined" span={2}>January 12, 2023</DescriptionsItem>
</Descriptions>`}
      >
        <div className="w-full space-y-6">
          <Descriptions title="User Info" bordered column={2}>
            <DescriptionsItem label="Full Name">Alice Martin</DescriptionsItem>
            <DescriptionsItem label="Email">alice@example.com</DescriptionsItem>
            <DescriptionsItem label="Role">Product Designer</DescriptionsItem>
            <DescriptionsItem label="Status">Active</DescriptionsItem>
            <DescriptionsItem label="Joined" span={2}>
              January 12, 2023
            </DescriptionsItem>
          </Descriptions>

          <Descriptions title="Library Info" column={3}>
            <DescriptionsItem label="Product">Benflux UI</DescriptionsItem>
            <DescriptionsItem label="Version">0.2.0</DescriptionsItem>
            <DescriptionsItem label="License">MIT</DescriptionsItem>
          </Descriptions>
        </div>
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add descriptions" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { Descriptions, DescriptionsItem } from "@benflux-ui/react"

<Descriptions title="Order Details" bordered column={2}>
  <DescriptionsItem label="Order ID">#2024-001</DescriptionsItem>
  <DescriptionsItem label="Status">Shipped</DescriptionsItem>
  <DescriptionsItem label="Customer">Alice Martin</DescriptionsItem>
  <DescriptionsItem label="Total">$129.00</DescriptionsItem>
  <DescriptionsItem label="Note" span={2}>
    Handle with care
  </DescriptionsItem>
</Descriptions>`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props — Descriptions</h2>
        <PropsTable
          props={[
            {
              name: "title",
              type: "ReactNode",
              default: "—",
              description: "Title shown above the descriptions grid",
            },
            {
              name: "column",
              type: "number",
              default: "3",
              description: "Number of columns in the grid",
            },
            {
              name: "bordered",
              type: "boolean",
              default: "false",
              description: "Adds borders between cells",
            },
            {
              name: "size",
              type: '"default" | "sm" | "lg"',
              default: '"default"',
              description: "Cell padding size",
            },
            {
              name: "layout",
              type: '"horizontal" | "vertical"',
              default: '"horizontal"',
              description: "Label placement relative to value",
            },
          ]}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props — DescriptionsItem</h2>
        <PropsTable
          props={[
            {
              name: "label",
              type: "ReactNode",
              required: true,
              description: "The key label",
            },
            {
              name: "span",
              type: "number",
              default: "1",
              description: "Number of columns this item spans",
            },
          ]}
        />
      </div>
    </div>
  )
}
