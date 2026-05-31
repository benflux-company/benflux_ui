import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

import { Button, Result } from "@benflux-ui/react"

export const metadata: Metadata = { title: "Result" }

export default function ResultPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Feedback
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Result</h1>
        <p className="text-lg text-muted-foreground">
          Feedback page for operation results — success, error, warning, info, and HTTP error
          states.
        </p>
      </div>

      <ComponentPreview
        className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        code={`import { Result } from "@benflux-ui/react"

<Result
  status="success"
  title="Payment Successful"
  subTitle="Your order #2024-001 has been placed."
  extra={<Button size="sm">View Order</Button>}
/>

<Result
  status="error"
  title="Submission Failed"
  subTitle="Please check your connection and try again."
  extra={<Button size="sm" variant="destructive">Retry</Button>}
/>

<Result status="warning" title="Low Balance" subTitle="Top up to continue." />

<Result
  status="404"
  title="Page Not Found"
  subTitle="The page you visited does not exist."
  extra={<Button size="sm" variant="outline">Back Home</Button>}
/>`}
      >
        <div className="rounded-xl border border-border bg-card p-6">
          <Result
            status="success"
            title="Payment Successful"
            subTitle="Your order #2024-001 has been placed."
            extra={<Button size="sm">View Order</Button>}
          />
        </div>
        <div className="rounded-xl border border-border bg-card p-6">
          <Result
            status="error"
            title="Submission Failed"
            subTitle="Please check your connection and try again."
            extra={
              <Button size="sm" variant="destructive">
                Retry
              </Button>
            }
          />
        </div>
        <div className="rounded-xl border border-border bg-card p-6">
          <Result status="warning" title="Low Balance" subTitle="Top up to continue." />
        </div>
        <div className="rounded-xl border border-border bg-card p-6">
          <Result
            status="404"
            title="Page Not Found"
            subTitle="The page you visited does not exist."
            extra={
              <Button size="sm" variant="outline">
                Back Home
              </Button>
            }
          />
        </div>
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add result" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { Result } from "@benflux-ui/react"

<Result
  status="success"
  title="Payment Successful"
  subTitle="Order #1234 has been confirmed."
  extra={<Button>View Order</Button>}
/>

// Status options: "success" | "error" | "warning" | "info" | "404" | "403" | "500"`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable
          props={[
            {
              name: "status",
              type: '"success" | "error" | "warning" | "info" | "404" | "403" | "500"',
              required: true,
              description: "Result state which determines the icon and color",
            },
            {
              name: "title",
              type: "ReactNode",
              default: "—",
              description: "Main heading text",
            },
            {
              name: "subTitle",
              type: "ReactNode",
              default: "—",
              description: "Secondary description below the title",
            },
            {
              name: "extra",
              type: "ReactNode",
              default: "—",
              description: "Action buttons or extra content rendered below",
            },
            {
              name: "icon",
              type: "ReactNode",
              default: "—",
              description: "Custom icon to replace the default status icon",
            },
          ]}
        />
      </div>
    </div>
  )
}
