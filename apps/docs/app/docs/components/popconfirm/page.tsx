import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { PopconfirmDemo } from "@/components/previews/popconfirm-demo"

export const metadata: Metadata = { title: "Popconfirm" }

export default function PopconfirmPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Feedback
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Popconfirm</h1>
        <p className="text-lg text-muted-foreground">
          A lightweight confirmation popover that appears before a destructive action — a simpler
          alternative to a full{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-sm">AlertDialog</code> when the context
          is already clear. Supports async confirm handlers with loading state.
        </p>
      </div>

      <ComponentPreview
        code={`"use client"
import { Popconfirm, Button } from "@benflux-ui/react"

<Popconfirm
  title="Delete this item?"
  description="This action cannot be undone."
  onConfirm={() => deleteItem()}
  okText="Delete"
  okType="danger"
>
  <Button variant="destructive">Delete</Button>
</Popconfirm>

// Async confirm with loading state
<Popconfirm
  title="Reset all settings?"
  onConfirm={async () => {
    await resetSettings()  // Popconfirm shows loading while awaiting
  }}
>
  <Button variant="outline">Reset</Button>
</Popconfirm>`}
      >
        <PopconfirmDemo />
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add popconfirm" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Controlled open state</h2>
        <CodeBlock
          code={`const [open, setOpen] = useState(false)

<Popconfirm
  title="Are you sure?"
  open={open}
  onOpenChange={setOpen}
  onConfirm={handleConfirm}
>
  <Button onClick={() => setOpen(true)}>Delete</Button>
</Popconfirm>`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Custom icon</h2>
        <CodeBlock
          code={`import { Trash2 } from "lucide-react"

<Popconfirm
  title="Move to trash?"
  icon={<Trash2 className="h-4 w-4 text-destructive" />}
  okType="danger"
  onConfirm={handleDelete}
>
  <Button>Delete</Button>
</Popconfirm>`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable
          props={[
            {
              name: "title",
              type: "ReactNode",
              required: true,
              description: "Confirmation question shown as the popover heading",
            },
            {
              name: "description",
              type: "ReactNode",
              default: "—",
              description: "Additional context shown below the title",
            },
            {
              name: "onConfirm",
              type: "(e?) => void | Promise<void>",
              default: "—",
              description:
                "Called when the user clicks OK. Async functions show a loading spinner.",
            },
            {
              name: "onCancel",
              type: "(e?) => void",
              default: "—",
              description: "Called when the user clicks Cancel",
            },
            {
              name: "okText",
              type: "ReactNode",
              default: '"OK"',
              description: "Confirm button label",
            },
            {
              name: "cancelText",
              type: "ReactNode",
              default: '"Cancel"',
              description: "Cancel button label",
            },
            {
              name: "okType",
              type: '"default" | "primary" | "danger" | "ghost"',
              default: '"primary"',
              description: "Visual style of the OK button",
            },
            {
              name: "showCancel",
              type: "boolean",
              default: "true",
              description: "Show or hide the cancel button",
            },
            {
              name: "icon",
              type: "ReactNode",
              default: "<AlertCircle />",
              description: "Icon displayed next to the title",
            },
            {
              name: "placement",
              type: '"top" | "bottom" | "left" | "right" | "topLeft" | "topRight" | "bottomLeft" | "bottomRight"',
              default: '"top"',
              description: "Preferred placement of the popover",
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Prevents the popover from opening",
            },
            { name: "open", type: "boolean", default: "—", description: "Controlled open state" },
            {
              name: "defaultOpen",
              type: "boolean",
              default: "false",
              description: "Initial open state (uncontrolled)",
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
