import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { FlexDemo } from "@/components/previews/flex-demo"

export const metadata: Metadata = { title: "Flex" }

export default function FlexPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Layout
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Flex</h1>
        <p className="text-lg text-muted-foreground">
          A thin wrapper around CSS flexbox that exposes the most common props —{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-sm">gap</code>,{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-sm">justify</code>,{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-sm">align</code>,{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-sm">vertical</code> — so you don't have
          to reach for Tailwind classes for simple layouts.
        </p>
      </div>

      <ComponentPreview
        code={`import { Flex, Button } from "@benflux-ui/react"

// Space between header and actions
<Flex justify="space-between" align="center">
  <span className="font-medium">Title</span>
  <Flex gap="small">
    <Button variant="ghost">Cancel</Button>
    <Button>Submit</Button>
  </Flex>
</Flex>

// Vertical column
<Flex vertical gap="middle">
  <div>Row 1</div>
  <div>Row 2</div>
  <div>Row 3</div>
</Flex>`}
      >
        <FlexDemo />
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add flex" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Custom HTML tag</h2>
        <CodeBlock
          code={`// Renders as <section> instead of <div>
<Flex component="section" justify="center" gap={24}>
  <Card />
  <Card />
</Flex>`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable
          props={[
            {
              name: "vertical",
              type: "boolean",
              default: "false",
              description: "Use column flex direction",
            },
            {
              name: "wrap",
              type: 'boolean | "wrap" | "nowrap" | "wrap-reverse"',
              default: "false",
              description: "Flex-wrap value",
            },
            {
              name: "justify",
              type: '"flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly"',
              default: "—",
              description: "justify-content value",
            },
            {
              name: "align",
              type: '"flex-start" | "flex-end" | "center" | "baseline" | "stretch"',
              default: "—",
              description: "align-items value",
            },
            {
              name: "gap",
              type: 'number | "small" | "middle" | "large"',
              default: "—",
              description: "Gap between children (small=8, middle=16, large=24)",
            },
            {
              name: "flex",
              type: "string | number",
              default: "—",
              description: "CSS flex shorthand applied to the container",
            },
            {
              name: "component",
              type: "keyof JSX.IntrinsicElements",
              default: '"div"',
              description: "HTML tag to render",
            },
          ]}
        />
      </div>
    </div>
  )
}
