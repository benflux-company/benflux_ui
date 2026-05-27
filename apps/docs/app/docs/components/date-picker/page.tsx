import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { CalendarIcon } from "lucide-react"

export const metadata: Metadata = { title: "Date Picker" }

export default function DatePickerPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Forms
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Date Picker</h1>
        <p className="text-lg text-muted-foreground">
          A date picker component built with a Popover and Calendar. Supports single date and date
          range selection.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-muted/20 p-10">
        <button className="flex h-9 w-64 items-center gap-2 rounded-md border border-input bg-background px-3 text-sm text-muted-foreground">
          <CalendarIcon className="h-4 w-4" />
          <span>May 26, 2025</span>
        </button>
        <button className="flex h-9 w-72 items-center gap-2 rounded-md border border-input bg-background px-3 text-sm text-muted-foreground">
          <CalendarIcon className="h-4 w-4" />
          <span>May 20 – May 26, 2025</span>
        </button>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add date-picker" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Single date</h2>
        <CodeBlock
          code={`"use client"
import { useState } from "react"
import { DatePicker } from "@/components/ui/date-picker"

export default function Example() {
  const [date, setDate] = useState<Date>()
  return <DatePicker date={date} onSelect={setDate} />
}`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Date range</h2>
        <CodeBlock
          code={`"use client"
import { useState } from "react"
import { DateRangePicker } from "@/components/ui/date-picker"
import type { DateRange } from "react-day-picker"

export default function Example() {
  const [range, setRange] = useState<DateRange>()
  return <DateRangePicker range={range} onSelect={setRange} />
}`}
        />
      </div>
    </div>
  )
}
