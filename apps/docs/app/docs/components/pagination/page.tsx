import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

export const metadata: Metadata = { title: "Pagination" }

export default function PaginationPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Navigation
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Pagination</h1>
        <p className="text-lg text-muted-foreground">
          Pagination with page navigation, next and previous links.
        </p>
      </div>

      <div className="flex items-center justify-center rounded-xl border border-border bg-muted/20 p-10">
        <nav className="flex items-center gap-1">
          <button className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-accent">
            <ChevronLeft className="h-4 w-4" />
          </button>
          {[1, 2, 3, null, 8, 9, 10].map((page, i) =>
            page === null ? (
              <button
                key={i}
                className="inline-flex h-9 w-9 items-center justify-center text-muted-foreground"
              >
                <MoreHorizontal className="h-4 w-4" />
              </button>
            ) : (
              <button
                key={page}
                className={`inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition-colors ${page === 2 ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground hover:bg-accent"}`}
              >
                {page}
              </button>
            ),
          )}
          <button className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-accent">
            <ChevronRight className="h-4 w-4" />
          </button>
        </nav>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add pagination" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination"

<Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#" isActive>2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>`}
        />
      </div>
    </div>
  )
}
