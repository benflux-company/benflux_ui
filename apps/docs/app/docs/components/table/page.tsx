import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"

export const metadata: Metadata = { title: "Table" }

const invoices = [
  { id: "INV-001", status: "Paid", method: "Credit Card", amount: "$250.00" },
  { id: "INV-002", status: "Pending", method: "PayPal", amount: "$150.00" },
  { id: "INV-003", status: "Paid", method: "Bank transfer", amount: "$350.00" },
  { id: "INV-004", status: "Failed", method: "Credit Card", amount: "$450.00" },
]

const statusColors: Record<string, string> = {
  Paid: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
  Pending: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20",
  Failed: "bg-destructive/10 text-destructive border-destructive/20",
}

export default function TablePage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Data Display
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Table</h1>
        <p className="text-lg text-muted-foreground">
          A responsive table component for displaying structured data.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/40">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Invoice</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
              <th className="hidden px-4 py-3 text-left font-medium text-muted-foreground sm:table-cell">
                Method
              </th>
              <th className="px-4 py-3 text-right font-medium text-muted-foreground">Amount</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((inv, i) => (
              <tr
                key={inv.id}
                className={`border-b border-border last:border-0 ${i % 2 === 0 ? "bg-background" : "bg-muted/20"}`}
              >
                <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{inv.id}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] font-semibold ${statusColors[inv.status]}`}
                  >
                    {inv.status}
                  </span>
                </td>
                <td className="hidden px-4 py-3 text-muted-foreground sm:table-cell">
                  {inv.method}
                </td>
                <td className="px-4 py-3 text-right font-medium">{inv.amount}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t border-border bg-muted/40">
              <td colSpan={3} className="px-4 py-3 text-sm font-medium">
                Total
              </td>
              <td className="px-4 py-3 text-right font-bold">$1,200.00</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add table" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import {
  Table, TableBody, TableCaption, TableCell,
  TableFooter, TableHead, TableHeader, TableRow,
} from "@/components/ui/table"

<Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead>Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {invoices.map((invoice) => (
      <TableRow key={invoice.id}>
        <TableCell className="font-medium">{invoice.id}</TableCell>
        <TableCell>{invoice.status}</TableCell>
        <TableCell className="text-right">{invoice.amount}</TableCell>
      </TableRow>
    ))}
  </TableBody>
  <TableFooter>
    <TableRow>
      <TableCell colSpan={2}>Total</TableCell>
      <TableCell className="text-right">$1,200.00</TableCell>
    </TableRow>
  </TableFooter>
</Table>`}
        />
      </div>
    </div>
  )
}
