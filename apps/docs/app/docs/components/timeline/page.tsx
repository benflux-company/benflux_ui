import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { Check, Circle, Clock } from "lucide-react"

export const metadata: Metadata = { title: "Timeline" }

const events = [
  { label: "Order placed", time: "10:00 AM", status: "completed" as const },
  { label: "Payment confirmed", time: "10:05 AM", status: "completed" as const },
  { label: "Preparing shipment", time: "11:30 AM", status: "active" as const },
  { label: "Out for delivery", time: "—", status: "pending" as const },
  { label: "Delivered", time: "—", status: "pending" as const },
]

const iconMap = {
  completed: <Check className="h-3 w-3" />,
  active: <Clock className="h-3 w-3" />,
  pending: <Circle className="h-3 w-3" />,
}

const colorMap = {
  completed: "bg-green-500 text-white border-green-500",
  active: "bg-primary text-primary-foreground border-primary",
  pending: "bg-background text-muted-foreground border-border",
}

export default function TimelinePage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Data Display
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Timeline</h1>
        <p className="text-lg text-muted-foreground">
          Displays a vertical sequence of events with status indicators.
        </p>
      </div>

      <div className="flex items-center justify-center rounded-xl border border-border bg-muted/20 p-10">
        <div className="w-full max-w-sm space-y-0">
          {events.map((event, i) => (
            <div key={event.label} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 ${colorMap[event.status]}`}
                >
                  {iconMap[event.status]}
                </div>
                {i < events.length - 1 && (
                  <div
                    className={`min-h-6 w-0.5 flex-1 ${event.status === "completed" ? "bg-green-500" : "bg-border"}`}
                  />
                )}
              </div>
              <div className="pb-6 pt-0.5">
                <p className="text-sm font-medium">{event.label}</p>
                <p className="text-xs text-muted-foreground">{event.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add timeline" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { Timeline } from "@/components/ui/timeline"

const events = [
  { label: "Order placed", description: "10:00 AM", status: "completed" },
  { label: "Processing", description: "10:05 AM", status: "active" },
  { label: "Shipped", description: "—", status: "pending" },
]

<Timeline items={events} />`}
        />
      </div>
    </div>
  )
}
