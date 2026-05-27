import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { X } from "lucide-react"

export const metadata: Metadata = { title: "Sheet" }

export default function SheetPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Feedback
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Sheet</h1>
        <p className="text-lg text-muted-foreground">
          Extends the Dialog component to display content that complements the main content of the
          screen, sliding in from any edge.
        </p>
      </div>

      <div className="flex items-center justify-center gap-4 rounded-xl border border-border bg-muted/20 p-10">
        <div className="relative h-48 w-full max-w-sm overflow-hidden rounded-lg border border-border bg-background">
          <div className="absolute inset-0 bg-muted/30" />
          <div className="absolute bottom-0 right-0 top-0 w-48 space-y-4 border-l border-border bg-background p-5 shadow-xl">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Edit Profile</p>
              <X className="h-4 w-4 text-muted-foreground" />
            </div>
            <p className="text-xs text-muted-foreground">Make changes to your profile here.</p>
            <div className="space-y-2">
              <div className="h-7 w-full rounded border border-input bg-transparent" />
              <div className="h-7 w-full rounded border border-input bg-transparent" />
            </div>
            <button className="inline-flex h-7 w-full items-center justify-center rounded-md bg-primary text-xs font-medium text-primary-foreground">
              Save
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add sheet" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Sheet</Button>
  </SheetTrigger>
  <SheetContent side="right">
    <SheetHeader>
      <SheetTitle>Edit Profile</SheetTitle>
      <SheetDescription>
        Make changes to your profile. Click save when done.
      </SheetDescription>
    </SheetHeader>
    <div className="py-6">
      {/* Form fields */}
    </div>
    <SheetFooter>
      <Button>Save changes</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>`}
        />
      </div>
    </div>
  )
}
