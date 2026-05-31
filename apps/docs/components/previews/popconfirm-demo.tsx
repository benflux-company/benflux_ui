"use client"

import * as React from "react"

import { Button, Popconfirm } from "@benflux-ui/react"

export function PopconfirmDemo() {
  const [confirmed, setConfirmed] = React.useState<string | null>(null)

  return (
    <div className="flex flex-wrap items-center gap-4">
      <Popconfirm
        title="Delete this item?"
        description="This action cannot be undone."
        onConfirm={() => setConfirmed("Deleted!")}
        onCancel={() => setConfirmed("Cancelled")}
        okText="Delete"
        okType="danger"
      >
        <Button variant="destructive" size="sm">
          Delete
        </Button>
      </Popconfirm>

      <Popconfirm
        title="Submit this form?"
        description="Make sure all fields are filled correctly."
        onConfirm={() => setConfirmed("Submitted!")}
        okText="Submit"
      >
        <Button variant="outline" size="sm">
          Submit
        </Button>
      </Popconfirm>

      <Popconfirm
        title="Reset settings?"
        onConfirm={async () => {
          await new Promise((r) => setTimeout(r, 1500))
          setConfirmed("Reset done!")
        }}
        placement="bottom"
        okText="Yes, reset"
      >
        <Button variant="ghost" size="sm">
          Reset (async)
        </Button>
      </Popconfirm>

      {confirmed && <span className="text-sm font-medium text-foreground">{confirmed}</span>}
    </div>
  )
}
