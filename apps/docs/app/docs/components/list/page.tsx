"use client"

import { CodeBlock } from "@/components/docs/code-block"

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

      <div className="space-y-6">
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

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add list" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { List, ListItem, ListItemMeta } from "@benflux-ui/react"

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
    </div>
  )
}
