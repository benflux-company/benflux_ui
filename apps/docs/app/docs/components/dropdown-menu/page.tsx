import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { DropdownDemo } from "@/components/previews/dropdown-demo"

export const metadata: Metadata = { title: "Dropdown Menu" }

export default function DropdownMenuPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Primitive
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Dropdown Menu</h1>
        <p className="text-lg text-muted-foreground">
          Displays a menu to the user — such as a set of actions or functions — triggered by a
          button.
        </p>
      </div>

      <ComponentPreview
        code={`import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger,
  Button,
} from "@benflux-ui/react"
import { ChevronDown, User, Settings, LogOut } from "lucide-react"

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline" rightIcon={<ChevronDown />}>My Account</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent className="w-48">
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem><User className="mr-2 h-4 w-4" />Profile</DropdownMenuItem>
    <DropdownMenuItem><Settings className="mr-2 h-4 w-4" />Settings</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem className="text-destructive">
      <LogOut className="mr-2 h-4 w-4" />Log out
    </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
      >
        <DropdownDemo />
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add dropdown-menu" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import {
  DropdownMenu, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuTrigger,
} from "@benflux-ui/react"

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>Open</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Item 1</DropdownMenuItem>
    <DropdownMenuItem>Item 2</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props — DropdownMenuContent</h2>
        <PropsTable
          props={[
            {
              name: "side",
              type: '"top" | "right" | "bottom" | "left"',
              default: '"bottom"',
              description: "Preferred side to open the menu",
            },
            {
              name: "align",
              type: '"start" | "center" | "end"',
              default: '"center"',
              description: "Alignment along the side",
            },
            {
              name: "sideOffset",
              type: "number",
              default: "4",
              description: "Distance in pixels from the trigger",
            },
          ]}
        />
      </div>
    </div>
  )
}
