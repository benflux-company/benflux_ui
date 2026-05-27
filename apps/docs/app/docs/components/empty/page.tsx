import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { FileX, Inbox, Search, Users } from "lucide-react"

export const metadata: Metadata = { title: "Empty State" }

export default function EmptyPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Data Display
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Empty State</h1>
        <p className="text-lg text-muted-foreground">
          A placeholder component to display when there is no content to show.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-border bg-muted/20 p-10 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
            <Inbox className="h-6 w-6 text-muted-foreground" />
          </div>
          <div>
            <p className="text-sm font-semibold">No messages</p>
            <p className="mt-0.5 text-xs text-muted-foreground">Your inbox is empty.</p>
          </div>
          <button className="inline-flex h-8 items-center gap-1.5 rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground">
            Compose
          </button>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 rounded-xl border border-border bg-muted/20 p-10 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted">
            <Search className="h-6 w-6 text-muted-foreground" />
          </div>
          <div>
            <p className="text-sm font-semibold">No results found</p>
            <p className="mt-0.5 text-xs text-muted-foreground">Try adjusting your search query.</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add empty" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { Empty } from "@/components/ui/empty"
import { Inbox } from "lucide-react"
import { Button } from "@/components/ui/button"

<Empty
  icon={<Inbox />}
  title="No messages"
  description="Your inbox is empty. Start a conversation."
  action={<Button size="sm">Compose</Button>}
/>

// Sizes
<Empty size="sm" icon={<Search />} title="No results" />
<Empty size="lg" icon={<Users />} title="No team members" />`}
        />
      </div>
    </div>
  )
}
