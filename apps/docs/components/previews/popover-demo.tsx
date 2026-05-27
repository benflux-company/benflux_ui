"use client"

import { Button, Input, Label, Popover, PopoverContent, PopoverTrigger } from "@benflux-ui/react"

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-72">
        <div className="space-y-3">
          <div className="space-y-1">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label>Width</Label>
              <Input defaultValue="100%" className="col-span-2 h-8" />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label>Height</Label>
              <Input defaultValue="auto" className="col-span-2 h-8" />
            </div>
          </div>
          <Button size="sm" className="w-full">
            Apply
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
