import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { PropsTable } from "@/components/docs/props-table"
import { AlertTriangle, Bell, CheckCircle, XCircle } from "lucide-react"

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
          Displays a callout for user attention with multiple severity levels.
        </p>
      </div>

      <div className="flex flex-col gap-3 rounded-xl border border-border bg-muted/20 p-8">
        <div className="flex gap-3 rounded-lg border border-blue-500/30 bg-blue-500/10 p-4 text-blue-700 dark:text-blue-300">
          <Bell className="mt-0.5 h-4 w-4 shrink-0" />
          <div>
            <p className="text-sm font-semibold">Heads up!</p>
            <p className="mt-0.5 text-sm opacity-80">
              You can add components to your app using the CLI.
            </p>
          </div>
        </div>
        <div className="flex gap-3 rounded-lg border border-green-500/30 bg-green-500/10 p-4 text-green-700 dark:text-green-400">
          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <div>
            <p className="text-sm font-semibold">Deployment successful!</p>
            <p className="mt-0.5 text-sm opacity-80">Your app has been deployed to production.</p>
          </div>
        </div>
        <div className="flex gap-3 rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-4 text-yellow-700 dark:text-yellow-400">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
          <div>
            <p className="text-sm font-semibold">Approaching rate limit</p>
            <p className="mt-0.5 text-sm opacity-80">
              You have used 90% of your API quota this month.
            </p>
          </div>
        </div>
        <div className="flex gap-3 rounded-lg border border-destructive/30 bg-destructive/10 p-4 text-destructive">
          <XCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <div>
            <p className="text-sm font-semibold">Build failed</p>
            <p className="mt-0.5 text-sm opacity-80">An error occurred during the build process.</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add alert" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Bell } from "lucide-react"

<Alert>
  <Bell className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components using the CLI.
  </AlertDescription>
</Alert>

<Alert variant="success">
  <AlertTitle>Success!</AlertTitle>
  <AlertDescription>Your changes have been saved.</AlertDescription>
</Alert>

<Alert variant="warning">
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription>Approaching rate limit.</AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong.</AlertDescription>
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
              description: "Visual severity level of the alert",
            },
            {
              name: "icon",
              type: "ReactNode",
              default: "—",
              description: "Icon displayed beside the content",
            },
            {
              name: "dismissible",
              type: "boolean",
              default: "false",
              description: "Shows a close button",
            },
            {
              name: "onDismiss",
              type: "() => void",
              default: "—",
              description: "Callback when the alert is dismissed",
            },
          ]}
        />
      </div>
    </div>
  )
}
