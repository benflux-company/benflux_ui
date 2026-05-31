import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { CollapseDemo } from "@/components/previews/collapse-demo"

export const metadata: Metadata = { title: "Collapse" }

export default function CollapsePage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Data Display
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Collapse</h1>
        <p className="text-lg text-muted-foreground">
          A set of collapsible panels that can all be open simultaneously — unlike{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-sm">Accordion</code> which limits to
          one. Supports accordion mode, ghost style, animated transitions, and extra content per
          panel.
        </p>
      </div>

      <ComponentPreview
        code={`import { Collapse } from "@benflux-ui/react"

<Collapse
  defaultActiveKey={["1"]}
  items={[
    {
      key: "1",
      label: "What is Benflux UI?",
      children: <p>A modern React component library…</p>,
    },
    {
      key: "2",
      label: "Is it accessible?",
      extra: <Badge variant="secondary">Popular</Badge>,
      children: <p>Yes, built on Radix UI primitives.</p>,
    },
    {
      key: "3",
      label: "Disabled panel",
      collapsible: "disabled",
      children: <p>Cannot be opened.</p>,
    },
  ]}
/>`}
      >
        <CollapseDemo />
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add collapse" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Controlled</h2>
        <CodeBlock
          code={`"use client"
const [active, setActive] = useState<string[]>(["1"])

<Collapse
  activeKey={active}
  onChange={setActive}
  items={items}
/>`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Custom expand icon</h2>
        <CodeBlock
          code={`import { Plus, Minus } from "lucide-react"

<Collapse
  expandIcon={({ isActive }) =>
    isActive ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />
  }
  expandIconPosition="end"
  items={items}
/>`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props — Collapse</h2>
        <PropsTable
          props={[
            {
              name: "items",
              type: "CollapseItem[]",
              required: true,
              description: "Array of panel definitions",
            },
            {
              name: "activeKey",
              type: "string | string[]",
              default: "—",
              description: "Controlled open panels",
            },
            {
              name: "defaultActiveKey",
              type: "string | string[]",
              default: "[]",
              description: "Initially open panels (uncontrolled)",
            },
            {
              name: "onChange",
              type: "(keys: string[]) => void",
              default: "—",
              description: "Called when panels are opened or closed",
            },
            {
              name: "accordion",
              type: "boolean",
              default: "false",
              description: "Only one panel can be open at a time",
            },
            {
              name: "bordered",
              type: "boolean",
              default: "true",
              description: "Show outer border",
            },
            {
              name: "ghost",
              type: "boolean",
              default: "false",
              description: "Transparent background, individual panel borders",
            },
            {
              name: "size",
              type: '"small" | "middle" | "large"',
              default: '"middle"',
              description: "Padding size of headers and content",
            },
            {
              name: "expandIcon",
              type: "({ isActive }: { isActive: boolean }) => ReactNode",
              default: "—",
              description: "Custom expand icon",
            },
            {
              name: "expandIconPosition",
              type: '"start" | "end"',
              default: '"start"',
              description: "Position of the expand icon",
            },
          ]}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">CollapseItem</h2>
        <CodeBlock
          language="tsx"
          code={`interface CollapseItem {
  key: string
  label: ReactNode
  children: ReactNode
  extra?: ReactNode           // Extra content rendered in the header (right side)
  showArrow?: boolean         // Show/hide the expand arrow (default: true)
  collapsible?: "header" | "icon" | "disabled"
  forceRender?: boolean       // Keep content mounted even when collapsed
}`}
        />
      </div>
    </div>
  )
}
