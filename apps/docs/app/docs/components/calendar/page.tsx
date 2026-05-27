import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { ChevronLeft, ChevronRight } from "lucide-react"

export const metadata: Metadata = { title: "Calendar" }

export default function CalendarPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Forms
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Calendar</h1>
        <p className="text-lg text-muted-foreground">
          A date field component that allows users to enter and edit date. Built with
          react-day-picker.
        </p>
      </div>

      <div className="flex items-center justify-center rounded-xl border border-border bg-muted/20 p-10">
        <div className="w-64 rounded-xl border border-border bg-card p-4 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <button className="flex h-7 w-7 items-center justify-center rounded-md hover:bg-accent">
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="text-sm font-semibold">May 2025</span>
            <button className="flex h-7 w-7 items-center justify-center rounded-md hover:bg-accent">
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
          <div className="mb-2 grid grid-cols-7 gap-1">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
              <div
                key={d}
                className="py-1 text-center text-[10px] font-medium text-muted-foreground"
              >
                {d}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {[...Array(4)].map((_, i) => (
              <div key={`e${i}`} />
            ))}
            {Array.from({ length: 31 }, (_, i) => i + 1).map((d) => (
              <button
                key={d}
                className={`flex h-7 w-7 items-center justify-center rounded-md text-xs transition-colors ${d === 26 ? "bg-primary text-primary-foreground" : d === 14 ? "bg-accent font-semibold" : "text-muted-foreground hover:bg-accent hover:text-foreground"}`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add calendar" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`"use client"
import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"

export default function Example() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-xl border"
    />
  )
}`}
        />
      </div>
    </div>
  )
}
