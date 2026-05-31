"use client"

import * as React from "react"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
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

function MenuDemo() {
  const [selected, setSelected] = React.useState("home")

  return (
    <div className="grid w-full gap-6 md:grid-cols-2">
      <div className="rounded-xl border border-border bg-card p-4">
        <p className="mb-3 text-xs font-medium text-muted-foreground">Inline (vertical)</p>
        <Menu items={items} selectedKey={selected} onSelect={setSelected} />
      </div>
      <div className="rounded-xl border border-border bg-card p-4">
        <p className="mb-3 text-xs font-medium text-muted-foreground">Collapsed (icons only)</p>
        <Menu items={items} selectedKey={selected} onSelect={setSelected} collapsed />
      </div>
    </div>
  )
}

export default function MenuPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Navigation
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Menu</h1>
        <p className="text-lg text-muted-foreground">
          Vertical, horizontal, and collapsible navigation menu with nested sub-menus, icons, and
          disabled states.
        </p>
      </div>

      <ComponentPreview
        className="block"
        code={`import { Menu, type MenuItem } from "@benflux-ui/react"
import { Home, BarChart2, Users } from "lucide-react"

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
]

const [selected, setSelected] = useState("home")

<Menu items={items} selectedKey={selected} onSelect={setSelected} />

// Collapsed (icons only)
<Menu items={items} selectedKey={selected} onSelect={setSelected} collapsed />`}
      >
        <MenuDemo />
      </ComponentPreview>

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

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable
          props={[
            {
              name: "items",
              type: "MenuItem[]",
              required: true,
              description: "Array of menu item definitions",
            },
            {
              name: "selectedKey",
              type: "string",
              default: "—",
              description: "Key of the currently active item",
            },
            {
              name: "onSelect",
              type: "(key: string) => void",
              default: "—",
              description: "Callback when an item is clicked",
            },
            {
              name: "mode",
              type: '"inline" | "horizontal" | "vertical"',
              default: '"inline"',
              description: "Layout direction of the menu",
            },
            {
              name: "collapsed",
              type: "boolean",
              default: "false",
              description: "Collapse to icon-only mode (vertical inline only)",
            },
            {
              name: "defaultOpenKeys",
              type: "string[]",
              default: "[]",
              description: "Keys of sub-menus open by default",
            },
          ]}
        />
      </div>
    </div>
  )
}
