"use client"

import * as React from "react"

import { CodeBlock } from "@/components/docs/code-block"

import { TimePicker, type TimeValue } from "@benflux-ui/react"

export default function TimePickerPage() {
  const [time, setTime] = React.useState<TimeValue | undefined>()

  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Inputs
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Time Picker</h1>
        <p className="text-lg text-muted-foreground">
          Scroll-based time picker with 12/24 hour modes, configurable step intervals, and optional
          seconds column.
        </p>
      </div>

      <div className="flex flex-wrap items-start gap-6 rounded-xl border border-border bg-card p-8">
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground">24h with seconds</p>
          <TimePicker value={time} onChange={setTime} showSecond placeholder="HH:MM:SS" />
        </div>
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground">12h format</p>
          <TimePicker value={time} onChange={setTime} use12Hours placeholder="HH:MM AM/PM" />
        </div>
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground">30 min steps</p>
          <TimePicker value={time} onChange={setTime} minuteStep={30} placeholder="HH:MM" />
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add time-picker" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { TimePicker } from "@benflux-ui/react"

const [time, setTime] = useState<TimeValue | undefined>()

// 24h with seconds
<TimePicker value={time} onChange={setTime} showSecond />

// 12h format
<TimePicker value={time} onChange={setTime} use12Hours />

// Custom step intervals
<TimePicker value={time} onChange={setTime} minuteStep={15} secondStep={30} />`}
        />
      </div>
    </div>
  )
}
