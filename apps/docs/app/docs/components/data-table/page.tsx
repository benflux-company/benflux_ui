import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"

export const metadata: Metadata = { title: "Data Table" }

export default function DataTablePage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Data Display
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Data Table</h1>
        <p className="text-lg text-muted-foreground">
          A full-featured data table with sorting, filtering, column visibility, pagination, and row
          selection. Built on TanStack Table v8.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-border">
        <div className="flex items-center justify-between border-b border-border bg-muted/20 p-4">
          <input
            className="flex h-8 w-64 rounded-md border border-input bg-transparent px-3 text-sm placeholder:text-muted-foreground"
            placeholder="Filter by name..."
            readOnly
          />
          <button className="inline-flex h-8 items-center gap-2 rounded-md border border-input bg-background px-3 text-sm">
            Columns
          </button>
        </div>
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/10">
              <th className="w-10 px-4 py-3">
                <div className="h-4 w-4 rounded border border-border" />
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Name</th>
              <th className="hidden px-4 py-3 text-left font-medium text-muted-foreground sm:table-cell">
                Email
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
              <th className="px-4 py-3 text-right font-medium text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "Alice Martin", email: "alice@example.com", status: "Active" },
              { name: "Bob Smith", email: "bob@example.com", status: "Inactive" },
              { name: "Carol White", email: "carol@example.com", status: "Active" },
            ].map((row, i) => (
              <tr
                key={row.name}
                className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-background" : "bg-muted/10"}`}
              >
                <td className="px-4 py-3">
                  <div className="h-4 w-4 rounded border border-border" />
                </td>
                <td className="px-4 py-3 font-medium">{row.name}</td>
                <td className="hidden px-4 py-3 text-muted-foreground sm:table-cell">
                  {row.email}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-semibold ${row.status === "Active" ? "border-green-500/20 bg-green-500/10 text-green-700 dark:text-green-400" : "border-border bg-muted text-muted-foreground"}`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <button className="text-xs text-muted-foreground hover:text-foreground">⋯</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-between border-t border-border bg-muted/10 p-4">
          <span className="text-xs text-muted-foreground">0 of 3 row(s) selected</span>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Page 1 of 1</span>
            <button
              className="h-7 w-7 rounded border border-border text-xs disabled:opacity-50"
              disabled
            >
              ‹
            </button>
            <button
              className="h-7 w-7 rounded border border-border text-xs disabled:opacity-50"
              disabled
            >
              ›
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add data-table" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { DataTable } from "@/components/ui/data-table"
import type { ColumnDef } from "@tanstack/react-table"

type User = { id: string; name: string; email: string; status: string }

const columns: ColumnDef<User>[] = [
  { accessorKey: "name", header: "Name" },
  { accessorKey: "email", header: "Email" },
  { accessorKey: "status", header: "Status" },
]

export default function Example({ data }: { data: User[] }) {
  return (
    <DataTable
      columns={columns}
      data={data}
      searchKey="name"
      searchPlaceholder="Filter by name..."
    />
  )
}`}
        />
      </div>
    </div>
  )
}
