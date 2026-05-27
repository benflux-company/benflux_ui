import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { DrawerDemo } from "@/components/previews/drawer-demo"

export const metadata: Metadata = { title: "Drawer" }

export default function DrawerPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Primitive
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Drawer</h1>
        <p className="text-lg text-muted-foreground">
          A drawer component for mobile devices. Built on top of Vaul.
        </p>
      </div>

      <ComponentPreview
        code={`import {
  Drawer, DrawerClose, DrawerContent, DrawerDescription,
  DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger,
  Button,
} from "@benflux-ui/react"

<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <div className="mx-auto w-full max-w-sm">
      <DrawerHeader>
        <DrawerTitle>Move Goal</DrawerTitle>
        <DrawerDescription>Set your daily activity goal.</DrawerDescription>
      </DrawerHeader>
      <DrawerFooter>
        <Button>Submit</Button>
        <DrawerClose asChild>
          <Button variant="outline">Cancel</Button>
        </DrawerClose>
      </DrawerFooter>
    </div>
  </DrawerContent>
</Drawer>`}
      >
        <DrawerDemo />
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add drawer" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import {
  Drawer, DrawerContent, DrawerHeader,
  DrawerTitle, DrawerTrigger,
} from "@benflux-ui/react"

<Drawer>
  <DrawerTrigger asChild>
    <Button>Open</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Title</DrawerTitle>
    </DrawerHeader>
    Content here
  </DrawerContent>
</Drawer>`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props — Drawer</h2>
        <PropsTable
          props={[
            {
              name: "shouldScaleBackground",
              type: "boolean",
              default: "false",
              description: "Scales the background when the drawer is open",
            },
            {
              name: "open",
              type: "boolean",
              default: "—",
              description: "Controlled open state",
            },
            {
              name: "onOpenChange",
              type: "(open: boolean) => void",
              default: "—",
              description: "Called when the open state changes",
            },
          ]}
        />
      </div>
    </div>
  )
}
