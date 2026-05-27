import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"

export const metadata: Metadata = { title: "Drawer" }

export default function DrawerPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Feedback
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Drawer</h1>
        <p className="text-lg text-muted-foreground">
          A bottom sheet drawer that slides up from the bottom of the screen. Built with Vaul.
        </p>
      </div>

      <div className="flex items-center justify-center rounded-xl border border-border bg-muted/20 p-10">
        <div className="relative h-56 w-full max-w-sm overflow-hidden rounded-lg border border-border bg-background">
          <div className="absolute inset-0 flex items-center justify-center bg-muted/30">
            <button className="inline-flex h-9 items-center gap-2 rounded-md border border-border bg-background px-4 text-sm">
              Open Drawer ↓
            </button>
          </div>
          <div className="absolute bottom-0 left-0 right-0 space-y-3 rounded-t-xl border-t border-border bg-background p-5 shadow-2xl">
            <div className="mb-1 flex justify-center">
              <div className="h-1 w-10 rounded-full bg-muted-foreground/30" />
            </div>
            <p className="text-sm font-semibold">Are you sure?</p>
            <p className="text-xs text-muted-foreground">
              This will permanently delete your account.
            </p>
            <div className="flex gap-2">
              <button className="h-9 flex-1 rounded-md border border-border text-sm">Cancel</button>
              <button className="h-9 flex-1 rounded-md bg-destructive text-sm text-destructive-foreground">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add drawer" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"

<Drawer>
  <DrawerTrigger asChild>
    <Button>Open Drawer</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Are you sure?</DrawerTitle>
      <DrawerDescription>This action cannot be undone.</DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button variant="destructive">Delete</Button>
      <Button variant="outline">Cancel</Button>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`}
        />
      </div>
    </div>
  )
}
