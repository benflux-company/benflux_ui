"use client"

import { Badge, Button, Flex } from "@benflux-ui/react"

export function FlexDemo() {
  return (
    <div className="w-full space-y-6">
      <div className="space-y-1">
        <p className="text-xs font-medium text-muted-foreground">
          justify=space-between · align=center
        </p>
        <Flex
          justify="space-between"
          align="center"
          className="rounded-lg border border-border p-4"
        >
          <span className="text-sm font-medium">Title</span>
          <Flex gap="small">
            <Button size="sm" variant="ghost">
              Cancel
            </Button>
            <Button size="sm">Submit</Button>
          </Flex>
        </Flex>
      </div>

      <div className="space-y-1">
        <p className="text-xs font-medium text-muted-foreground">vertical · gap=middle</p>
        <Flex vertical gap="middle">
          <div className="rounded-md bg-muted/60 px-4 py-2 text-sm">Row 1</div>
          <div className="rounded-md bg-muted/60 px-4 py-2 text-sm">Row 2</div>
          <div className="rounded-md bg-muted/60 px-4 py-2 text-sm">Row 3</div>
        </Flex>
      </div>

      <div className="space-y-1">
        <p className="text-xs font-medium text-muted-foreground">wrap · gap=8</p>
        <Flex wrap gap={8}>
          {["alpha", "beta", "gamma", "delta", "epsilon", "zeta"].map((t) => (
            <Badge key={t} variant="secondary" className="capitalize">
              {t}
            </Badge>
          ))}
        </Flex>
      </div>
    </div>
  )
}
