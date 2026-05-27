import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

import { Alert, AlertDescription, AlertTitle } from "@benflux-ui/react"

export const metadata: Metadata = { title: "Alert" }

export default function AlertPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Primitive
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Alert</h1>
        <p className="text-lg text-muted-foreground">
          Displays a callout for user attention with different severity levels.
        </p>
      </div>

      <ComponentPreview
        code={`import { Alert, AlertTitle, AlertDescription } from "@benflux-ui/react"

<Alert>
  <AlertTitle>Info</AlertTitle>
  <AlertDescription>This is a default informational alert.</AlertDescription>
</Alert>

<Alert variant="success">
  <AlertTitle>Success!</AlertTitle>
  <AlertDescription>Your changes have been saved.</AlertDescription>
</Alert>

<Alert variant="warning">
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription>Please review before continuing.</AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong.</AlertDescription>
</Alert>`}
        className="w-full flex-col gap-3"
      >
        <div className="flex w-full flex-col gap-3">
          <Alert>
            <AlertTitle>Info</AlertTitle>
            <AlertDescription>This is a default informational alert.</AlertDescription>
          </Alert>
          <Alert variant="success">
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>Your changes have been saved successfully.</AlertDescription>
          </Alert>
          <Alert variant="warning">
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>Please review your settings before continuing.</AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>Something went wrong. Please try again.</AlertDescription>
          </Alert>
        </div>
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add alert" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { Alert, AlertTitle, AlertDescription } from "@benflux-ui/react"

<Alert variant="success">
  <AlertTitle>Saved!</AlertTitle>
  <AlertDescription>Your profile has been updated.</AlertDescription>
</Alert>`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable
          props={[
            {
              name: "variant",
              type: '"default" | "info" | "success" | "warning" | "destructive"',
              default: '"default"',
              description: "Severity level of the alert",
            },
            {
              name: "dismissible",
              type: "boolean",
              default: "false",
              description: "Shows a close button to dismiss the alert",
            },
          ]}
        />
      </div>
    </div>
  )
}
