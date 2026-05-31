"use client"

import { Button, notification } from "@benflux-ui/react"

export function NotificationDemo() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button
        variant="outline"
        size="sm"
        onClick={() =>
          notification.success({
            message: "Success",
            description: "Your profile has been updated successfully.",
            placement: "topRight",
          })
        }
      >
        Success
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() =>
          notification.error({
            message: "Upload Failed",
            description: "The file could not be uploaded. Check your connection.",
            placement: "topRight",
          })
        }
      >
        Error
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() =>
          notification.warning({
            message: "Disk space low",
            description: "Your storage is almost full. Free up space to continue.",
            placement: "topRight",
          })
        }
      >
        Warning
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() =>
          notification.info({
            message: "Update available",
            description: "A new version of Benflux UI is available.",
            placement: "topLeft",
          })
        }
      >
        Top Left
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() =>
          notification.open({
            message: "With action",
            description: "Click the button below to undo the operation.",
            action: (
              <button
                className="rounded-md bg-primary px-3 py-1 text-xs font-medium text-primary-foreground hover:bg-primary/90"
                onClick={() => notification.destroy()}
              >
                Undo
              </button>
            ),
            duration: 0,
          })
        }
      >
        With action (sticky)
      </Button>
    </div>
  )
}
