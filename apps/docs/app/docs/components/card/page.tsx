import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { PropsTable } from "@/components/docs/props-table"

export const metadata: Metadata = { title: "Card" }

export default function CardPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Primitive
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Card</h1>
        <p className="text-lg text-muted-foreground">
          A versatile container with header, content, and footer sections.
        </p>
      </div>

      <div className="flex items-center justify-center rounded-xl border border-border bg-muted/20 p-10">
        <div className="w-full max-w-sm overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <div className="p-6 pb-4">
            <h3 className="font-semibold leading-none tracking-tight">Card Title</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">Card description goes here.</p>
          </div>
          <div className="px-6 pb-4">
            <p className="text-sm text-muted-foreground">
              This is the card content area. You can put any content here — text, images, forms,
              charts, etc.
            </p>
          </div>
          <div className="flex items-center justify-between border-t border-border bg-muted/20 px-6 py-4">
            <span className="text-xs text-muted-foreground">Card footer</span>
            <button className="inline-flex h-7 items-center justify-center rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground">
              Action
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add card" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

export default function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  )
}`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable
          props={[
            {
              name: "variant",
              type: '"default" | "bordered" | "ghost" | "gradient"',
              default: '"default"',
              description: "Visual style of the card",
            },
            {
              name: "padding",
              type: '"none" | "sm" | "default" | "lg"',
              default: '"default"',
              description: "Internal padding amount",
            },
            {
              name: "className",
              type: "string",
              default: "—",
              description: "Additional CSS classes",
            },
          ]}
        />
      </div>
    </div>
  )
}
