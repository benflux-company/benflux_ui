"use client"

import * as React from "react"

import { Content, Footer, Header, Layout, Sider } from "@benflux-ui/react"

export function LayoutDemo() {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-border" style={{ height: 280 }}>
      <Layout className="h-full" hasSider>
        <Sider width={140} className="bg-muted/60">
          <div className="p-3 text-sm font-medium text-muted-foreground">Sidebar</div>
          <nav className="space-y-0.5 px-2">
            {["Dashboard", "Analytics", "Settings", "Profile"].map((item) => (
              <div
                key={item}
                className="cursor-pointer rounded-md px-3 py-1.5 text-sm first:bg-accent first:font-medium hover:bg-accent"
              >
                {item}
              </div>
            ))}
          </nav>
        </Sider>
        <Layout className="flex-col">
          <Header
            height={48}
            className="flex shrink-0 items-center border-b border-border px-4 text-sm font-semibold"
          >
            Dashboard
          </Header>
          <Content className="p-4">
            <p className="text-sm text-muted-foreground">Main content area</p>
          </Content>
          <Footer
            height={36}
            className="flex shrink-0 items-center justify-center border-t border-border text-xs"
          >
            © 2026 Benflux UI
          </Footer>
        </Layout>
      </Layout>
    </div>
  )
}

export function CollapsibleSiderDemo() {
  const [collapsed, setCollapsed] = React.useState(false)
  return (
    <div className="w-full overflow-hidden rounded-xl border border-border" style={{ height: 220 }}>
      <Layout className="h-full" hasSider>
        <Sider
          width={160}
          collapsedWidth={48}
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
          className="bg-muted/60"
        >
          <div className="space-y-1 p-3">
            {["Home", "Stats", "Users"].map((item) => (
              <div
                key={item}
                className={`flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-accent ${collapsed ? "justify-center" : ""}`}
              >
                <div className="h-4 w-4 shrink-0 rounded-sm bg-muted-foreground/40" />
                {!collapsed && <span>{item}</span>}
              </div>
            ))}
          </div>
        </Sider>
        <Content className="p-4 text-sm text-muted-foreground">
          Click the arrow to collapse the sidebar.
        </Content>
      </Layout>
    </div>
  )
}
