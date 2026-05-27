import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { AlertTriangle, CheckCircle, Info, X, XCircle } from "lucide-react"

export const metadata: Metadata = { title: "Toast" }

const toasts = [
  {
    icon: CheckCircle,
    label: "Saved!",
    desc: "Your changes have been saved.",
    color: "text-green-500",
    border: "border-green-500/30 bg-green-500/5",
  },
  {
    icon: XCircle,
    label: "Error",
    desc: "Something went wrong. Try again.",
    color: "text-destructive",
    border: "border-destructive/30 bg-destructive/5",
  },
  {
    icon: AlertTriangle,
    label: "Warning",
    desc: "Approaching storage limit.",
    color: "text-yellow-500",
    border: "border-yellow-500/30 bg-yellow-500/5",
  },
  {
    icon: Info,
    label: "Update available",
    desc: "A new version is ready.",
    color: "text-blue-500",
    border: "border-blue-500/30 bg-blue-500/5",
  },
]

export default function ToastPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Feedback
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Toast</h1>
        <p className="text-lg text-muted-foreground">
          A succinct message that is displayed temporarily. Built with Sonner.
        </p>
      </div>

      <div className="space-y-3 rounded-xl border border-border bg-muted/20 p-10">
        {toasts.map((t) => (
          <div key={t.label} className={`flex items-start gap-3 rounded-lg border p-4 ${t.border}`}>
            <t.icon className={`mt-0.5 h-4 w-4 shrink-0 ${t.color}`} />
            <div className="flex-1">
              <p className="text-sm font-semibold">{t.label}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{t.desc}</p>
            </div>
            <button className="text-muted-foreground hover:text-foreground">
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add toast" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Setup</h2>
        <CodeBlock
          code={`// app/layout.tsx — already included if you use BenfluxProvider
import { Toaster } from "@benflux-ui/react"

<Toaster position="bottom-right" />`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { toast } from "@benflux-ui/react"

// Variants
toast.success("Saved!", { description: "Your changes have been saved." })
toast.error("Something went wrong")
toast.warning("Approaching limit")
toast.info("Update available")

// Custom duration
toast("Hello!", { duration: 5000 })

// Promise toast
toast.promise(saveData(), {
  loading: "Saving...",
  success: "Saved!",
  error: "Failed to save",
})`}
        />
      </div>
    </div>
  )
}
