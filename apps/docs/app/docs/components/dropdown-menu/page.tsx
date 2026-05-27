import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { ChevronDown, CreditCard, LogOut, Settings, User } from "lucide-react"

export const metadata: Metadata = { title: "Dropdown Menu" }

export default function DropdownMenuPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Navigation
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Dropdown Menu</h1>
        <p className="text-lg text-muted-foreground">
          Displays a menu to the user — such as a set of actions or functions — triggered by a
          button.
        </p>
      </div>

      <div className="flex items-center justify-center rounded-xl border border-border bg-muted/20 p-10">
        <div className="space-y-2">
          <button className="inline-flex h-9 items-center gap-2 rounded-md border border-input bg-background px-4 text-sm font-medium">
            My Account
            <ChevronDown className="h-4 w-4 opacity-50" />
          </button>
          <div className="w-48 overflow-hidden rounded-md border border-border bg-popover shadow-md">
            <div className="p-1">
              <div className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
                My Account
              </div>
              <div className="my-1 h-px bg-border" />
              {[
                { icon: User, label: "Profile" },
                { icon: CreditCard, label: "Billing" },
                { icon: Settings, label: "Settings" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent"
                >
                  <Icon className="h-4 w-4 text-muted-foreground" />
                  {label}
                </div>
              ))}
              <div className="my-1 h-px bg-border" />
              <div className="flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm text-destructive hover:bg-destructive/10">
                <LogOut className="h-4 w-4" />
                Log out
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add dropdown-menu" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="outline">Open</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>My Account</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Profile</DropdownMenuItem>
    <DropdownMenuItem>Billing</DropdownMenuItem>
    <DropdownMenuItem>Settings</DropdownMenuItem>
    <DropdownMenuSeparator />
    <DropdownMenuItem className="text-destructive">Log out</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>`}
        />
      </div>
    </div>
  )
}
