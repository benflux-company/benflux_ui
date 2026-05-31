"use client"

import { Badge, Button, Space } from "@benflux-ui/react"

export function SpaceDemo() {
  return (
    <div className="flex w-full flex-col gap-6">
      {/* Horizontal */}
      <div className="space-y-1">
        <p className="text-xs font-medium text-muted-foreground">Horizontal · size=middle</p>
        <Space size="middle">
          <Button size="sm">Button 1</Button>
          <Button size="sm" variant="outline">
            Button 2
          </Button>
          <Button size="sm" variant="secondary">
            Button 3
          </Button>
        </Space>
      </div>

      {/* With split */}
      <div className="space-y-1">
        <p className="text-xs font-medium text-muted-foreground">With split separator</p>
        <Space split={<span className="text-border">|</span>} size="middle">
          <a href="#" className="text-sm text-primary hover:underline">
            Link 1
          </a>
          <a href="#" className="text-sm text-primary hover:underline">
            Link 2
          </a>
          <a href="#" className="text-sm text-primary hover:underline">
            Link 3
          </a>
        </Space>
      </div>

      {/* Compact */}
      <div className="space-y-1">
        <p className="text-xs font-medium text-muted-foreground">Space.Compact — grouped buttons</p>
        <Space.Compact>
          <Button variant="outline" size="sm">
            Copy
          </Button>
          <Button variant="outline" size="sm">
            Paste
          </Button>
          <Button variant="outline" size="sm">
            Delete
          </Button>
        </Space.Compact>
      </div>

      {/* Wrap */}
      <div className="space-y-1">
        <p className="text-xs font-medium text-muted-foreground">Wrap + large gap</p>
        <Space size="large" wrap>
          {["React", "Next.js", "Tailwind", "TypeScript", "Framer Motion"].map((t) => (
            <Badge key={t} variant="outline">
              {t}
            </Badge>
          ))}
        </Space>
      </div>
    </div>
  )
}
