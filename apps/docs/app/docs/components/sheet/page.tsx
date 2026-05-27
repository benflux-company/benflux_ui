import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { SheetDemo } from "@/components/previews/sheet-demo"

export const metadata: Metadata = { title: "Sheet" }

export default function SheetPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Primitive
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Sheet</h1>
        <p className="text-lg text-muted-foreground">
          Extends the Dialog component to display content that complements the main content of the
          screen, sliding in from the side.
        </p>
      </div>

      <ComponentPreview
        code={`import {
  Sheet, SheetContent, SheetDescription, SheetFooter,
  SheetHeader, SheetTitle, SheetTrigger, Button,
} from "@benflux-ui/react"

<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">Open Right</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Edit Profile</SheetTitle>
      <SheetDescription>Make changes to your profile here.</SheetDescription>
    </SheetHeader>
    <SheetFooter>
      <Button>Save Changes</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>`}
      >
        <SheetDemo />
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add sheet" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import {
  Sheet, SheetContent, SheetHeader,
  SheetTitle, SheetTrigger,
} from "@benflux-ui/react"

<Sheet>
  <SheetTrigger asChild>
    <Button>Open</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Title</SheetTitle>
    </SheetHeader>
    Content here
  </SheetContent>
</Sheet>`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props — SheetContent</h2>
        <PropsTable
          props={[
            {
              name: "side",
              type: '"top" | "right" | "bottom" | "left"',
              default: '"right"',
              description: "Side from which the sheet slides in",
            },
          ]}
        />
      </div>
    </div>
  )
}
