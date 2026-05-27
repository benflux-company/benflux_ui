"use client"

import * as React from "react"

import { CodeBlock } from "@/components/docs/code-block"
import { BarChart2, FileText, Home, Settings, Users } from "lucide-react"

import { Menu, type MenuItem } from "@benflux-ui/react"

const items: MenuItem[] = [
  { key: "home", label: "Home", icon: <Home className="h-4 w-4" /> },
  {
    key: "analytics",
    label: "Analytics",
    icon: <BarChart2 className="h-4 w-4" />,
    children: [
      { key: "overview", label: "Overview" },
      { key: "reports", label: "Reports" },
    ],
  },
  { key: "users", label: "Users", icon: <Users className="h-4 w-4" /> },
  { key: "docs", label: "Documentation", icon: <FileText className="h-4 w-4" /> },
  { key: "settings", label: "Settings", icon: <Settings className="h-4 w-4" />, disabled: true },
]

export default function MenuPage() {
  const [selected, setSelected] = React.useState("home")

  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Navigation
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Menu</h1>
        <p className="text-lg text-muted-foreground">
          Vertical, horizontal, and collapsible navigation menu with nested sub-menus, icons, and
          disabled/danger states.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-4">
          <p className="mb-3 text-xs font-medium text-muted-foreground">Inline (vertical)</p>
          <Menu items={items} selectedKey={selected} onSelect={setSelected} />
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <p className="mb-3 text-xs font-medium text-muted-foreground">Collapsed</p>
          <Menu items={items} selectedKey={selected} onSelect={setSelected} collapsed />
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add menu" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { Menu, type MenuItem } from "@benflux-ui/react"

const items: MenuItem[] = [
  { key: "home", label: "Home", icon: <Home /> },
  {
    key: "analytics",
    label: "Analytics",
    icon: <BarChart2 />,
    children: [
      { key: "overview", label: "Overview" },
      { key: "reports", label: "Reports" },
    ],
  },
  { key: "settings", label: "Settings", disabled: true },
]

<Menu
  items={items}
  selectedKey={selected}
  onSelect={setSelected}
  mode="inline"       // "inline" | "horizontal" | "vertical"
  collapsed={false}   // collapse to icons only
/>`}
        />
      </div>
    </div>
  )
}
