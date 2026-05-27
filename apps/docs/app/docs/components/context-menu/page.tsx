import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"

export const metadata: Metadata = { title: "Context Menu" }

export default function ContextMenuPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Navigation
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Context Menu</h1>
        <p className="text-lg text-muted-foreground">
          Displays a menu to the user — triggered by a right-click or long-press.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-muted/20 p-10">
        <div className="w-full max-w-sm rounded-lg border border-dashed border-border bg-background p-8 text-center text-sm text-muted-foreground">
          Right-click here to open context menu
        </div>
        <div className="w-48 rounded-md border border-border bg-popover p-1 shadow-md">
          {["Open", "Open in new tab", "—", "Copy link", "Save as…", "—", "Delete"].map(
            (item, i) =>
              item === "—" ? (
                <div key={i} className="my-1 h-px bg-border" />
              ) : (
                <div
                  key={item}
                  className={`cursor-pointer rounded-sm px-2 py-1.5 text-sm ${item === "Delete" ? "text-destructive hover:bg-destructive/10" : "hover:bg-accent"}`}
                >
                  {item}
                </div>
              ),
          )}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add context-menu" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
  ContextMenuShortcut,
} from "@/components/ui/context-menu"

<ContextMenu>
  <ContextMenuTrigger className="border border-dashed rounded-lg p-8 text-center">
    Right-click here
  </ContextMenuTrigger>
  <ContextMenuContent>
    <ContextMenuItem>
      Open <ContextMenuShortcut>↵</ContextMenuShortcut>
    </ContextMenuItem>
    <ContextMenuItem>Copy link</ContextMenuItem>
    <ContextMenuSeparator />
    <ContextMenuItem className="text-destructive">Delete</ContextMenuItem>
  </ContextMenuContent>
</ContextMenu>`}
        />
      </div>
    </div>
  )
}
