"use client"

import * as React from "react"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

import { TimePicker, type TimeValue } from "@benflux-ui/react"

function TimePickerDemo() {
  const [time, setTime] = React.useState<TimeValue | undefined>()

  return (
    <div className="flex flex-wrap items-start gap-6">
      <div className="space-y-1.5">
        <p className="text-xs text-muted-foreground">24h with seconds</p>
        <TimePicker value={time} onChange={setTime} showSecond placeholder="HH:MM:SS" />
      </div>
      <div className="space-y-1.5">
        <p className="text-xs text-muted-foreground">12h format</p>
        <TimePicker value={time} onChange={setTime} use12Hours placeholder="HH:MM AM/PM" />
      </div>
      <div className="space-y-1.5">
        <p className="text-xs text-muted-foreground">30 min steps</p>
        <TimePicker value={time} onChange={setTime} minuteStep={30} placeholder="HH:MM" />
      </div>
    </div>
  )
}

export default function TimePickerPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Inputs
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Time Picker</h1>
        <p className="text-lg text-muted-foreground">
          Scroll-based time picker with 12/24-hour modes, configurable step intervals, and optional
          seconds column.
        </p>
      </div>

      <ComponentPreview
        className="flex-wrap items-start justify-start gap-6"
        code={`import { TimePicker, type TimeValue } from "@benflux-ui/react"

const [time, setTime] = useState<TimeValue | undefined>()

// 24h with seconds
<TimePicker value={time} onChange={setTime} showSecond placeholder="HH:MM:SS" />

// 12h format
<TimePicker value={time} onChange={setTime} use12Hours placeholder="HH:MM AM/PM" />

// 30-minute steps
<TimePicker value={time} onChange={setTime} minuteStep={30} />`}
      >
        <TimePickerDemo />
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add time-picker" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { TimePicker, type TimeValue } from "@benflux-ui/react"

const [time, setTime] = useState<TimeValue | undefined>()

// 24h with seconds
<TimePicker value={time} onChange={setTime} showSecond />

// 12h format
<TimePicker value={time} onChange={setTime} use12Hours />

// Custom step intervals
<TimePicker value={time} onChange={setTime} minuteStep={15} secondStep={30} />`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable
          props={[
            {
              name: "value",
              type: "TimeValue",
              default: "—",
              description: "Controlled time value",
            },
            {
              name: "onChange",
              type: "(value: TimeValue | undefined) => void",
              default: "—",
              description: "Callback when time changes",
            },
            {
              name: "use12Hours",
              type: "boolean",
              default: "false",
              description: "Use 12-hour format with AM/PM selector",
            },
            {
              name: "showSecond",
              type: "boolean",
              default: "false",
              description: "Show the seconds column",
            },
            {
              name: "hourStep",
              type: "number",
              default: "1",
              description: "Step interval for hours",
            },
            {
              name: "minuteStep",
              type: "number",
              default: "1",
              description: "Step interval for minutes",
            },
            {
              name: "secondStep",
              type: "number",
              default: "1",
              description: "Step interval for seconds",
            },
            {
              name: "placeholder",
              type: "string",
              default: "—",
              description: "Placeholder text for the trigger button",
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Disable the picker",
            },
          ]}
        />
      </div>
    </div>
  )
}
