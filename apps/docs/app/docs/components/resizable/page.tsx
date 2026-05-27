import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"

export const metadata: Metadata = { title: "Resizable" }

export default function ResizablePage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Layout
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Resizable</h1>
        <p className="text-lg text-muted-foreground">
          Accessible resizable panel groups and layouts with keyboard support. Powered by
          react-resizable-panels.
        </p>
      </div>

      <div className="flex items-center justify-center rounded-xl border border-border bg-muted/20 p-6">
        <div className="flex h-40 w-full overflow-hidden rounded-lg border border-border">
          <div className="flex w-1/3 items-center justify-center border-r border-border bg-muted/40 p-4">
            <span className="text-sm text-muted-foreground">Panel 1</span>
          </div>
          <div className="flex w-1 cursor-col-resize items-center justify-center bg-border transition-colors hover:bg-primary/50">
            <div className="h-6 w-0.5 rounded-full bg-muted-foreground/30" />
          </div>
          <div className="flex flex-1 items-center justify-center bg-background p-4">
            <span className="text-sm text-muted-foreground">Panel 2</span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add resizable" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable"

// Horizontal split
<ResizablePanelGroup direction="horizontal" className="h-40 rounded-lg border">
  <ResizablePanel defaultSize={33}>
    <div className="p-4">Panel 1</div>
  </ResizablePanel>
  <ResizableHandle />
  <ResizablePanel>
    <div className="p-4">Panel 2</div>
  </ResizablePanel>
</ResizablePanelGroup>

// Vertical split
<ResizablePanelGroup direction="vertical" className="h-80 rounded-lg border">
  <ResizablePanel defaultSize={50}>Top</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel>Bottom</ResizablePanel>
</ResizablePanelGroup>`}
        />
      </div>
    </div>
  )
}
