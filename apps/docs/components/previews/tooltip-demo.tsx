"use client"

import { Button, SimpleTooltip, TooltipProvider } from "@benflux-ui/react"

export function TooltipDemo() {
  return (
    <TooltipProvider>
      <div className="flex items-center gap-4">
        <SimpleTooltip content="This is a tooltip on top" side="top">
          <Button variant="outline">Top</Button>
        </SimpleTooltip>
        <SimpleTooltip content="This is a tooltip on right" side="right">
          <Button variant="outline">Right</Button>
        </SimpleTooltip>
        <SimpleTooltip content="This is a tooltip on bottom" side="bottom">
          <Button variant="outline">Bottom</Button>
        </SimpleTooltip>
        <SimpleTooltip content="This is a tooltip on left" side="left">
          <Button variant="outline">Left</Button>
        </SimpleTooltip>
      </div>
    </TooltipProvider>
  )
}
