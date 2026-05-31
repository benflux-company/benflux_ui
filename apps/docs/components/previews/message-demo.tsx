"use client"

import { Button, MessageProvider, message } from "@benflux-ui/react"

export function MessageDemo() {
  return (
    <MessageProvider>
      <div className="flex flex-wrap items-center gap-3">
        <Button
          variant="outline"
          size="sm"
          onClick={() => message.success("Operation successful!")}
        >
          Success
        </Button>
        <Button variant="outline" size="sm" onClick={() => message.error("Something went wrong.")}>
          Error
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => message.warning("Please check your input.")}
        >
          Warning
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => message.info("Here is some information.")}
        >
          Info
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            const hide = message.loading("Saving changes...", 0)
            setTimeout(() => {
              hide()
              message.success("Changes saved!")
            }, 2000)
          }}
        >
          Loading → Success
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={() =>
            message.info({ content: "Custom duration (6s)", duration: 6, key: "custom" })
          }
        >
          6s duration
        </Button>
      </div>
    </MessageProvider>
  )
}
