import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { PropsTable } from "@/components/docs/props-table"

export const metadata: Metadata = { title: "Avatar" }

const avatars = [
  { initials: "JD", bg: "hsl(220 70% 50%)" },
  { initials: "AS", bg: "hsl(280 70% 50%)" },
  { initials: "BK", bg: "hsl(150 70% 40%)" },
  { initials: "MR", bg: "hsl(0 70% 50%)" },
]

export default function AvatarPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Primitive
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Avatar</h1>
        <p className="text-lg text-muted-foreground">
          An image element with a fallback for representing the user.
        </p>
      </div>

      <div className="flex flex-col items-center gap-8 rounded-xl border border-border bg-muted/20 p-10">
        {/* Single sizes */}
        <div className="flex items-end gap-4">
          {[8, 10, 12, 16].map((size, i) => (
            <div
              key={size}
              className="flex items-center justify-center rounded-full font-semibold text-white"
              style={{
                width: size * 4,
                height: size * 4,
                background: "hsl(220 70% 50%)",
                fontSize: Math.max(10, size * 1.5),
              }}
            >
              JD
            </div>
          ))}
        </div>
        {/* Group */}
        <div className="flex items-center gap-3">
          <div className="flex -space-x-3">
            {avatars.map(({ initials, bg }) => (
              <div
                key={initials}
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-background text-xs font-semibold text-white"
                style={{ background: bg }}
              >
                {initials}
              </div>
            ))}
            <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-semibold text-muted-foreground">
              +5
            </div>
          </div>
          <span className="text-sm text-muted-foreground">9 members</span>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add avatar" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

// With image
<Avatar>
  <AvatarImage src="https://github.com/user.png" alt="User" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>

// Initials only
<Avatar>
  <AvatarFallback>AB</AvatarFallback>
</Avatar>

// Group
<div className="flex -space-x-3">
  <Avatar className="border-2 border-background">
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarFallback>AS</AvatarFallback>
  </Avatar>
</div>`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props — Avatar</h2>
        <PropsTable
          props={[
            {
              name: "size",
              type: '"xs" | "sm" | "default" | "lg" | "xl"',
              default: '"default"',
              description: "Size of the avatar",
            },
            {
              name: "shape",
              type: '"circle" | "square"',
              default: '"circle"',
              description: "Border radius shape",
            },
            {
              name: "status",
              type: '"online" | "offline" | "busy" | "away"',
              default: "—",
              description: "Shows a status indicator dot",
            },
          ]}
        />
      </div>
    </div>
  )
}
