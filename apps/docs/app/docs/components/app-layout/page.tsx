import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { CollapsibleSiderDemo, LayoutDemo } from "@/components/previews/layout-demo"

export const metadata: Metadata = { title: "Layout" }

export default function AppLayoutPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Layout
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Layout</h1>
        <p className="text-lg text-muted-foreground">
          A composable page shell with{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-sm">Layout</code>,{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-sm">Header</code>,{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-sm">Sider</code>,{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-sm">Content</code>, and{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-sm">Footer</code>. Supports collapsible
          sidebars with responsive breakpoints.
        </p>
      </div>

      <ComponentPreview
        code={`import { Layout, Header, Sider, Content, Footer } from "@benflux-ui/react"

<Layout hasSider>
  <Sider width={200}>
    {/* sidebar nav */}
  </Sider>
  <Layout>
    <Header>My App</Header>
    <Content>Main content</Content>
    <Footer>© 2026</Footer>
  </Layout>
</Layout>`}
      >
        <LayoutDemo />
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Collapsible Sider</h2>
      </div>

      <ComponentPreview
        code={`"use client"
import { useState } from "react"
import { Layout, Sider, Content } from "@benflux-ui/react"

export function AppShell() {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout hasSider>
      <Sider
        width={200}
        collapsedWidth={64}
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        breakpoint="lg"
      >
        {/* your nav items */}
      </Sider>
      <Content>Main area</Content>
    </Layout>
  )
}`}
      >
        <CollapsibleSiderDemo />
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add app-layout" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Import</h2>
        <CodeBlock
          language="tsx"
          code={`import { Layout, Header, Sider, Content, Footer } from "@benflux-ui/react"`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props — Layout</h2>
        <PropsTable
          props={[
            {
              name: "hasSider",
              type: "boolean",
              default: "false",
              description:
                "Set to true when the layout contains a Sider. Switches flex direction to row.",
            },
            {
              name: "children",
              type: "ReactNode",
              required: true,
              description: "Layout children: Header, Sider, Content, Footer",
            },
          ]}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props — Sider</h2>
        <PropsTable
          props={[
            {
              name: "width",
              type: "number | string",
              default: "200",
              description: "Width of the sidebar when expanded",
            },
            {
              name: "collapsedWidth",
              type: "number | string",
              default: "64",
              description: "Width when collapsed",
            },
            {
              name: "collapsible",
              type: "boolean",
              default: "false",
              description: "Show the collapse/expand trigger button",
            },
            {
              name: "collapsed",
              type: "boolean",
              default: "—",
              description: "Controlled collapsed state",
            },
            {
              name: "defaultCollapsed",
              type: "boolean",
              default: "false",
              description: "Initial collapsed state (uncontrolled)",
            },
            {
              name: "onCollapse",
              type: "(collapsed: boolean) => void",
              default: "—",
              description: "Called when the sidebar is toggled",
            },
            {
              name: "breakpoint",
              type: '"xs" | "sm" | "md" | "lg" | "xl" | "2xl"',
              default: "—",
              description: "Auto-collapse below this viewport width",
            },
            {
              name: "theme",
              type: '"light" | "dark"',
              default: '"light"',
              description: "Color theme of the sidebar",
            },
            {
              name: "trigger",
              type: "ReactNode | null",
              default: "—",
              description: "Custom collapse trigger. Pass null to hide it.",
            },
          ]}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props — Header / Footer</h2>
        <PropsTable
          props={[
            {
              name: "height",
              type: "number | string",
              default: "Header: 64",
              description: "Fixed height of the element",
            },
          ]}
        />
      </div>
    </div>
  )
}
