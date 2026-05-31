import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { NotificationDemo } from "@/components/previews/notification-demo"

export const metadata: Metadata = { title: "Notification" }

export default function NotificationPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Feedback
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Notification</h1>
        <p className="text-lg text-muted-foreground">
          Rich notifications that appear in a corner of the screen with a title, description, icon,
          and optional action button. Supports 6 placement positions and animated enter/exit
          transitions.
        </p>
      </div>

      <ComponentPreview
        code={`"use client"
import { notification, Button } from "@benflux-ui/react"

<Button
  onClick={() =>
    notification.success({
      message: "Profile updated",
      description: "Your changes have been saved.",
      placement: "topRight",
    })
  }
>
  Show notification
</Button>

// With action button (sticky)
<Button
  onClick={() =>
    notification.open({
      message: "File deleted",
      description: "report.pdf was moved to trash.",
      action: (
        <button onClick={() => notification.destroy()}>Undo</button>
      ),
      duration: 0,
    })
  }
>
  With undo
</Button>`}
      >
        <NotificationDemo />
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add notification" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Placements</h2>
        <CodeBlock
          code={`// 6 placement options
notification.info({ message: "Top Right",    placement: "topRight" })
notification.info({ message: "Top Left",     placement: "topLeft" })
notification.info({ message: "Bottom Right", placement: "bottomRight" })
notification.info({ message: "Bottom Left",  placement: "bottomLeft" })
notification.info({ message: "Top Center",   placement: "top" })
notification.info({ message: "Bottom Ctr",   placement: "bottom" })`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Destroy by key</h2>
        <CodeBlock
          code={`// Open a sticky notification with a key
notification.loading({ message: "Uploading…", key: "upload", duration: 0 })

// Replace it with success
notification.success({ message: "Upload complete!", key: "upload" })

// Destroy all
notification.destroy()`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">API — notification</h2>
        <PropsTable
          props={[
            {
              name: "notification.open(config)",
              type: "() => void",
              description:
                "Open a notification with a full config object. Returns a close function.",
            },
            {
              name: "notification.success(config)",
              type: "() => void",
              description: "Shorthand with success icon",
            },
            {
              name: "notification.error(config)",
              type: "() => void",
              description: "Shorthand with error icon",
            },
            {
              name: "notification.warning(config)",
              type: "() => void",
              description: "Shorthand with warning icon",
            },
            {
              name: "notification.info(config)",
              type: "() => void",
              description: "Shorthand with info icon",
            },
            {
              name: "notification.destroy(key?)",
              type: "void",
              description: "Destroy one notification by key, or all if key is omitted",
            },
          ]}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">NotificationConfig</h2>
        <CodeBlock
          language="tsx"
          code={`interface NotificationConfig {
  message: ReactNode              // Title (required)
  description?: ReactNode         // Subtitle text
  type?: "success" | "error" | "warning" | "info"
  icon?: ReactNode                // Override the default type icon
  key?: string                    // Unique ID — reuses the same slot
  duration?: number               // Auto-close delay in seconds (default: 4.5, 0 = sticky)
  placement?: NotificationPlacement  // Default: "topRight"
  onClose?: () => void
  onClick?: () => void            // Click handler on the notification card
  action?: ReactNode              // Action button rendered at the bottom
  closeIcon?: ReactNode           // Custom close button
}`}
        />
      </div>
    </div>
  )
}
