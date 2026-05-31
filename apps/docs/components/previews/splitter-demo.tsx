"use client"

import { Splitter, SplitterPanel } from "@benflux-ui/react"

export function SplitterDemo() {
  return (
    <div className="w-full space-y-6">
      <div>
        <p className="mb-2 text-xs font-medium text-muted-foreground">Horizontal (drag the bar)</p>
        <Splitter className="h-40 overflow-hidden rounded-xl border border-border">
          <SplitterPanel defaultSize={40} min={20} className="p-4">
            <p className="text-sm font-medium">Left Panel</p>
            <p className="mt-1 text-xs text-muted-foreground">Drag the divider to resize.</p>
          </SplitterPanel>
          <SplitterPanel defaultSize={60} min={20} className="p-4">
            <p className="text-sm font-medium">Right Panel</p>
            <p className="mt-1 text-xs text-muted-foreground">Both panels have a 20% minimum.</p>
          </SplitterPanel>
        </Splitter>
      </div>

      <div>
        <p className="mb-2 text-xs font-medium text-muted-foreground">Vertical</p>
        <Splitter
          layout="vertical"
          className="h-48 overflow-hidden rounded-xl border border-border"
        >
          <SplitterPanel defaultSize={50} min={20} className="bg-muted/20 p-4">
            <p className="text-sm font-medium">Top Panel</p>
          </SplitterPanel>
          <SplitterPanel defaultSize={50} min={20} className="p-4">
            <p className="text-sm font-medium">Bottom Panel</p>
          </SplitterPanel>
        </Splitter>
      </div>
    </div>
  )
}
