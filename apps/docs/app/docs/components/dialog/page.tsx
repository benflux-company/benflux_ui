import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { DialogDemo } from "@/components/previews/dialog-demo"

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
          A modal window that interrupts the user with important content and expects a response.
        </p>
      </div>

      <ComponentPreview
        code={`import {
  Dialog, DialogContent, DialogDescription,
  DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
  Button,
} from "@benflux-ui/react"

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete
        your account and remove your data from our servers.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="outline">Cancel</Button>
      <Button variant="destructive">Delete Account</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}
      >
        <DialogDemo />
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add dialog" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import {
  Dialog, DialogContent, DialogHeader,
  DialogTitle, DialogTrigger,
} from "@benflux-ui/react"

<Dialog>
  <DialogTrigger asChild>
    <Button>Open</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Title</DialogTitle>
    </DialogHeader>
    Content here
  </DialogContent>
</Dialog>`}
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
              description: "Maximum width of the dialog",
            },
            {
              name: "showClose",
              type: "boolean",
              default: "true",
              description: "Shows the close button in the top-right corner",
            },
          ]}
        />
      </div>
    </div>
  )
}
