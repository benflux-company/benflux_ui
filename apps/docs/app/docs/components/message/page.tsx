import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { MessageDemo } from "@/components/previews/message-demo"

export const metadata: Metadata = { title: "Message" }

export default function MessagePage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Feedback
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Message</h1>
        <p className="text-lg text-muted-foreground">
          Lightweight flash notifications that appear at the top center of the page — no layout
          disruption. Useful for brief confirmations, errors, and loading states. Works via an
          imperative <code className="rounded bg-muted px-1 py-0.5 text-sm">message</code> API or
          the <code className="rounded bg-muted px-1 py-0.5 text-sm">MessageProvider</code>{" "}
          component.
        </p>
      </div>

      <ComponentPreview
        code={`"use client"
import { message, MessageProvider, Button } from "@benflux-ui/react"

export function Demo() {
  return (
    <MessageProvider>
      <Button onClick={() => message.success("Saved!")}>Success</Button>
      <Button onClick={() => message.error("Something failed.")}>Error</Button>
      <Button onClick={() => message.warning("Check your input.")}>Warning</Button>
      <Button onClick={() => message.info("Here is some info.")}>Info</Button>
      <Button
        onClick={() => {
          const hide = message.loading("Uploading...", 0)
          setTimeout(() => { hide(); message.success("Done!") }, 2000)
        }}
      >
        Loading → Done
      </Button>
    </MessageProvider>
  )
}`}
      >
        <MessageDemo />
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add message" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Setup — MessageProvider</h2>
        <p className="text-sm text-muted-foreground">
          Wrap your app (or layout) with{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">MessageProvider</code> so messages
          render inside your React tree (SSR-friendly). Without it, messages are appended to{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">document.body</code> via a portal.
        </p>
        <CodeBlock
          code={`// app/layout.tsx
import { MessageProvider } from "@benflux-ui/react"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <MessageProvider>{children}</MessageProvider>
      </body>
    </html>
  )
}`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Advanced config</h2>
        <CodeBlock
          code={`// Custom duration and key (prevents duplicates)
message.info({
  content: "Processing request...",
  duration: 6,       // seconds (0 = never auto-close)
  key: "upload",     // reuse the same slot
  onClose: () => console.log("dismissed"),
})

// Destroy all messages
message.destroy()`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">API — message</h2>
        <PropsTable
          props={[
            {
              name: "message.success(content, duration?)",
              type: "() => void",
              description: "Show a success message. Returns a function to close it early.",
            },
            {
              name: "message.error(content, duration?)",
              type: "() => void",
              description: "Show an error message",
            },
            {
              name: "message.warning(content, duration?)",
              type: "() => void",
              description: "Show a warning message",
            },
            {
              name: "message.info(content, duration?)",
              type: "() => void",
              description: "Show an info message",
            },
            {
              name: "message.loading(content, duration?)",
              type: "() => void",
              description: "Show a loading message with a spinner",
            },
            {
              name: "message.destroy()",
              type: "void",
              description: "Remove all currently visible messages",
            },
          ]}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">MessageConfig</h2>
        <CodeBlock
          language="tsx"
          code={`interface MessageConfig {
  content: ReactNode    // Message text or element
  duration?: number     // Auto-close delay in seconds (default: 3, 0 = sticky)
  key?: string          // Unique key to prevent duplicate messages
  icon?: ReactNode      // Override the default type icon
  onClose?: () => void  // Called when the message is dismissed
}`}
        />
      </div>
    </div>
  )
}
