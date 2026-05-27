import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { ChevronRight, Home } from "lucide-react"

export const metadata: Metadata = { title: "Breadcrumb" }

export default function BreadcrumbPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Navigation
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Breadcrumb</h1>
        <p className="text-lg text-muted-foreground">
          Displays the path to the current resource using a hierarchy of links.
        </p>
      </div>

      <div className="flex flex-col items-center gap-6 rounded-xl border border-border bg-muted/20 p-10">
        <nav className="flex items-center gap-1.5 text-sm">
          <Home className="h-4 w-4 text-muted-foreground" />
          <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="cursor-pointer text-muted-foreground hover:text-foreground">Docs</span>
          <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="cursor-pointer text-muted-foreground hover:text-foreground">
            Components
          </span>
          <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="font-medium text-foreground">Breadcrumb</span>
        </nav>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add breadcrumb" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/docs">Docs</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>`}
        />
      </div>
    </div>
  )
}
