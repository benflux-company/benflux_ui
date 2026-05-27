import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"

export const metadata: Metadata = { title: "Popover" }

export default function PopoverPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Feedback
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Popover</h1>
        <p className="text-lg text-muted-foreground">
          Displays rich content in a portal, triggered by a button.
        </p>
      </div>

      <div className="flex items-center justify-center gap-8 rounded-xl border border-border bg-muted/20 p-10">
        <div className="space-y-2 text-center">
          <div className="w-64 space-y-3 rounded-xl border border-border bg-popover p-4 shadow-lg">
            <p className="text-sm font-semibold">Dimensions</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <label className="text-xs text-muted-foreground">Width</label>
                <input
                  className="flex h-7 w-full rounded-md border border-input bg-transparent px-2 text-xs"
                  defaultValue="100%"
                  readOnly
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs text-muted-foreground">Height</label>
                <input
                  className="flex h-7 w-full rounded-md border border-input bg-transparent px-2 text-xs"
                  defaultValue="auto"
                  readOnly
                />
              </div>
            </div>
            <button className="inline-flex h-7 w-full items-center justify-center rounded-md bg-primary text-xs font-medium text-primary-foreground">
              Apply
            </button>
          </div>
          <button className="inline-flex h-9 items-center gap-2 rounded-md border border-border bg-background px-4 text-sm">
            Open popover ↑
          </button>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add popover" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"

<Popover>
  <PopoverTrigger asChild>
    <Button variant="outline">Open</Button>
  </PopoverTrigger>
  <PopoverContent className="w-64">
    <p className="font-semibold">Dimensions</p>
    <div className="grid grid-cols-2 gap-2 mt-3">
      <Input placeholder="Width" />
      <Input placeholder="Height" />
    </div>
  </PopoverContent>
</Popover>`}
        />
      </div>
    </div>
  )
}
