import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { PropsTable } from "@/components/docs/props-table"

export const metadata: Metadata = { title: "Dialog" }

export default function DialogPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Primitive
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Dialog</h1>
        <p className="text-lg text-muted-foreground">
          A modal dialog that interrupts the user with important content and expects a response.
        </p>
      </div>

      <div className="flex items-center justify-center rounded-xl border border-border bg-muted/20 p-10">
        <div className="w-full max-w-sm space-y-5 rounded-xl border border-border bg-background p-6 shadow-xl">
          <div className="space-y-1.5">
            <h3 className="text-lg font-semibold leading-none tracking-tight">Delete account</h3>
            <p className="text-sm text-muted-foreground">
              This action cannot be undone. This will permanently delete your account and remove
              your data from our servers.
            </p>
          </div>
          <div className="flex justify-end gap-2">
            <button className="inline-flex h-9 items-center justify-center rounded-md border border-border bg-background px-4 text-sm font-medium transition-colors hover:bg-accent">
              Cancel
            </button>
            <button className="inline-flex h-9 items-center justify-center rounded-md bg-destructive px-4 text-sm font-medium text-destructive-foreground">
              Delete account
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add dialog" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export default function Example() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props — Dialog</h2>
        <PropsTable
          props={[
            { name: "open", type: "boolean", default: "—", description: "Controlled open state" },
            {
              name: "onOpenChange",
              type: "(open: boolean) => void",
              default: "—",
              description: "Callback when open state changes",
            },
            {
              name: "defaultOpen",
              type: "boolean",
              default: "false",
              description: "Initial open state (uncontrolled)",
            },
          ]}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props — DialogContent</h2>
        <PropsTable
          props={[
            {
              name: "size",
              type: '"sm" | "default" | "lg" | "xl" | "full"',
              default: '"default"',
              description: "Width of the dialog panel",
            },
            {
              name: "onInteractOutside",
              type: "(e: Event) => void",
              default: "—",
              description: "Callback when clicking outside the dialog",
            },
          ]}
        />
      </div>
    </div>
  )
}
