import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { SplitterDemo } from "@/components/previews/splitter-demo"

export const metadata: Metadata = { title: "Splitter" }

export default function SplitterPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Layout
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Splitter</h1>
        <p className="text-lg text-muted-foreground">
          Resizable panels with a draggable divider. Supports horizontal and vertical layouts,
          minimum and maximum panel sizes, and resize callbacks.
        </p>
      </div>

      <ComponentPreview
        code={`import { Splitter, SplitterPanel } from "@benflux-ui/react"

<Splitter className="h-48 rounded-xl border border-border">
  <SplitterPanel defaultSize={40} min={20}>
    <div className="p-4">Left Panel</div>
  </SplitterPanel>
  <SplitterPanel defaultSize={60} min={20}>
    <div className="p-4">Right Panel</div>
  </SplitterPanel>
</Splitter>

// Vertical layout
<Splitter layout="vertical" className="h-64 rounded-xl border border-border">
  <SplitterPanel defaultSize={50}>Top</SplitterPanel>
  <SplitterPanel defaultSize={50}>Bottom</SplitterPanel>
</Splitter>`}
      >
        <SplitterDemo />
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add splitter" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Three panels</h2>
        <CodeBlock
          code={`<Splitter>
  <SplitterPanel defaultSize={25} min={15}>
    Sidebar
  </SplitterPanel>
  <SplitterPanel defaultSize={50} min={30}>
    Editor
  </SplitterPanel>
  <SplitterPanel defaultSize={25} min={15}>
    Preview
  </SplitterPanel>
</Splitter>`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">With resize callback</h2>
        <CodeBlock
          code={`<Splitter
  onResize={(sizes) => console.log("Resizing:", sizes)}
  onResizeEnd={(sizes) => console.log("Done:", sizes)}
>
  <SplitterPanel defaultSize={60}>Main</SplitterPanel>
  <SplitterPanel defaultSize={40}>Detail</SplitterPanel>
</Splitter>`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props — Splitter</h2>
        <PropsTable
          props={[
            {
              name: "layout",
              type: '"horizontal" | "vertical"',
              default: '"horizontal"',
              description: "Direction of the split",
            },
            {
              name: "onResize",
              type: "(sizes: number[]) => void",
              default: "—",
              description: "Called continuously while dragging",
            },
            {
              name: "onResizeEnd",
              type: "(sizes: number[]) => void",
              default: "—",
              description: "Called when the drag is released",
            },
          ]}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props — SplitterPanel</h2>
        <PropsTable
          props={[
            {
              name: "defaultSize",
              type: "number",
              default: "equal split",
              description: "Initial panel size as a percentage",
            },
            {
              name: "min",
              type: "number",
              default: "10",
              description: "Minimum panel size as a percentage",
            },
            {
              name: "max",
              type: "number",
              default: "90",
              description: "Maximum panel size as a percentage",
            },
          ]}
        />
      </div>
    </div>
  )
}
