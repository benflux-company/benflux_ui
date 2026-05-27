"use client"

import { useState } from "react"

import { ChevronsUpDown } from "lucide-react"

import { Button, Collapsible, CollapsibleContent, CollapsibleTrigger } from "@benflux-ui/react"

export function CollapsibleDemo() {
  const [open, setOpen] = useState(false)

  return (
    <Collapsible open={open} onOpenChange={setOpen} className="w-[300px] space-y-2">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">@benflux-ui starred repos</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="icon-sm">
            <ChevronsUpDown className="h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border border-border px-4 py-2 font-mono text-sm">
        @benflux-ui/react
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border border-border px-4 py-2 font-mono text-sm">
          @benflux-ui/themes
        </div>
        <div className="rounded-md border border-border px-4 py-2 font-mono text-sm">
          @benflux-ui/hooks
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
