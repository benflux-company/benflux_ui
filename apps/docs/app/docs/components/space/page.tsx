import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { SpaceDemo } from "@/components/previews/space-demo"

export const metadata: Metadata = { title: "Space" }

export default function SpacePage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Layout
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Space</h1>
        <p className="text-lg text-muted-foreground">
          A flex-based spacing utility that adds consistent gaps between inline elements. Includes{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-sm">Space.Compact</code> for grouping
          elements without gaps — perfect for button groups and input addons.
        </p>
      </div>

      <ComponentPreview
        code={`import { Space, Button, Badge } from "@benflux-ui/react"

// Horizontal spacing
<Space size="middle">
  <Button>Button 1</Button>
  <Button variant="outline">Button 2</Button>
  <Button variant="secondary">Button 3</Button>
</Space>

// With a custom split divider
<Space split={<span>|</span>} size="middle">
  <a href="#">Link 1</a>
  <a href="#">Link 2</a>
  <a href="#">Link 3</a>
</Space>

// Grouped (no gap, shared border)
<Space.Compact>
  <Button variant="outline">Copy</Button>
  <Button variant="outline">Paste</Button>
  <Button variant="outline">Delete</Button>
</Space.Compact>`}
      >
        <SpaceDemo />
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add space" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Vertical layout</h2>
        <CodeBlock
          code={`<Space direction="vertical" size="large">
  <Input placeholder="Username" />
  <Input placeholder="Password" type="password" />
  <Button className="w-full">Sign In</Button>
</Space>`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Wrapping</h2>
        <CodeBlock
          code={`<Space wrap size={[8, 12]}>
  {tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
</Space>`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props — Space</h2>
        <PropsTable
          props={[
            {
              name: "size",
              type: '"small" | "middle" | "large" | number | [x, y]',
              default: '"small"',
              description: "Gap between items. Pass a tuple for separate horizontal/vertical gaps.",
            },
            {
              name: "direction",
              type: '"horizontal" | "vertical"',
              default: '"horizontal"',
              description: "Flex direction",
            },
            {
              name: "align",
              type: '"start" | "end" | "center" | "baseline"',
              default: "—",
              description: "Cross-axis alignment",
            },
            {
              name: "wrap",
              type: "boolean",
              default: "false",
              description: "Allow items to wrap to the next line",
            },
            {
              name: "split",
              type: "ReactNode",
              default: "—",
              description: "Separator element between each item",
            },
          ]}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props — Space.Compact</h2>
        <PropsTable
          props={[
            {
              name: "direction",
              type: '"horizontal" | "vertical"',
              default: '"horizontal"',
              description: "Group direction",
            },
            {
              name: "block",
              type: "boolean",
              default: "false",
              description: "Stretch to full width",
            },
          ]}
        />
      </div>
    </div>
  )
}
