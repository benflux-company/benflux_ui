"use client"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

import { Avatar, AvatarFallback, List, ListItem } from "@benflux-ui/react"

const data = [
  { name: "Alice Martin", role: "Product Designer", initials: "AM" },
  { name: "Bob Chen", role: "Frontend Engineer", initials: "BC" },
  { name: "Clara Dupont", role: "Backend Engineer", initials: "CD" },
]

export default function ListPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Layout
        </div>
        <h1 className="text-4xl font-bold tracking-tight">List</h1>
        <p className="text-lg text-muted-foreground">
          Flexible list component supporting data-driven rendering, avatars, actions, headers,
          footers, and grid layout.
        </p>
      </div>

      <ComponentPreview
        className="block w-full"
        code={`import { List, ListItem, Avatar, AvatarFallback } from "@benflux-ui/react"

const data = [
  { name: "Alice Martin", role: "Product Designer", initials: "AM" },
  { name: "Bob Chen", role: "Frontend Engineer", initials: "BC" },
  { name: "Clara Dupont", role: "Backend Engineer", initials: "CD" },
]

<List
  bordered
  header="Team Members"
  dataSource={data}
  renderItem={(item) => (
    <ListItem
      avatar={<Avatar><AvatarFallback>{item.initials}</AvatarFallback></Avatar>}
      title={item.name}
      description={item.role}
      actions={[<a key="view" href="#" className="text-sm text-primary">View</a>]}
    />
  )}
/>`}
      >
        <div className="w-full">
          <List
            bordered
            header="Team Members"
            dataSource={data}
            renderItem={(item) => (
              <ListItem
                avatar={
                  <Avatar>
                    <AvatarFallback>{item.initials}</AvatarFallback>
                  </Avatar>
                }
                title={item.name}
                description={item.role}
                actions={[
                  <a key="view" href="#" className="text-sm text-primary hover:underline">
                    View
                  </a>,
                ]}
              />
            )}
          />
        </div>
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add list" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { List, ListItem } from "@benflux-ui/react"

// Data-driven
<List
  bordered
  header="Members"
  dataSource={users}
  renderItem={(user) => (
    <ListItem
      avatar={<Avatar><AvatarFallback>{user.initials}</AvatarFallback></Avatar>}
      title={user.name}
      description={user.role}
      actions={[<a href="#">Edit</a>]}
    />
  )}
/>

// Grid layout
<List
  grid={{ columns: 3, gap: 16 }}
  dataSource={items}
  renderItem={(item) => <Card>{item.title}</Card>}
/>

// Static children
<List bordered split>
  <ListItem title="Item 1" description="Description" />
  <ListItem title="Item 2" description="Description" />
</List>`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props — List</h2>
        <PropsTable
          props={[
            {
              name: "dataSource",
              type: "T[]",
              default: "—",
              description: "Array of items to render",
            },
            {
              name: "renderItem",
              type: "(item: T, index: number) => ReactNode",
              default: "—",
              description: "Render function for each item",
            },
            {
              name: "bordered",
              type: "boolean",
              default: "false",
              description: "Adds outer border and dividers",
            },
            {
              name: "split",
              type: "boolean",
              default: "true",
              description: "Show divider between items",
            },
            {
              name: "header",
              type: "ReactNode",
              default: "—",
              description: "Content rendered above the list",
            },
            {
              name: "footer",
              type: "ReactNode",
              default: "—",
              description: "Content rendered below the list",
            },
            {
              name: "grid",
              type: "{ columns: number; gap: number }",
              default: "—",
              description: "Render items in a CSS grid",
            },
          ]}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props — ListItem</h2>
        <PropsTable
          props={[
            {
              name: "title",
              type: "ReactNode",
              default: "—",
              description: "Primary text",
            },
            {
              name: "description",
              type: "ReactNode",
              default: "—",
              description: "Secondary text below the title",
            },
            {
              name: "avatar",
              type: "ReactNode",
              default: "—",
              description: "Avatar or icon displayed on the left",
            },
            {
              name: "actions",
              type: "ReactNode[]",
              default: "—",
              description: "Action links displayed on the right",
            },
          ]}
        />
      </div>
    </div>
  )
}
