import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@benflux-ui/react"

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
          Displays a card with header, content, and footer sections.
        </p>
      </div>

      <ComponentPreview
        code={`import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button } from "@benflux-ui/react"

<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>Create project</CardTitle>
    <CardDescription>Deploy your new project in one-click.</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-sm text-muted-foreground">Project settings and configuration.</p>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="outline">Cancel</Button>
    <Button>Deploy</Button>
  </CardFooter>
</Card>`}
      >
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>Deploy your new project in one-click.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Project settings and configuration.</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add card" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { Card, CardHeader, CardTitle, CardContent } from "@benflux-ui/react"

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content goes here.</CardContent>
</Card>`}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Variants</h2>
        <ComponentPreview
          code={`<Card variant="default"><CardContent className="pt-6">Default</CardContent></Card>
<Card variant="ghost"><CardContent className="pt-6">Ghost</CardContent></Card>
<Card variant="outline"><CardContent className="pt-6">Outline</CardContent></Card>
<Card variant="glow"><CardContent className="pt-6">Glow</CardContent></Card>`}
        >
          <Card variant="default" className="w-32 text-center">
            <CardContent className="pt-6">Default</CardContent>
          </Card>
          <Card variant="outlined" className="w-32 text-center">
            <CardContent className="pt-6">Outlined</CardContent>
          </Card>
          <Card variant="elevated" className="w-32 text-center">
            <CardContent className="pt-6">Elevated</CardContent>
          </Card>
          <Card variant="glow" className="w-32 text-center">
            <CardContent className="pt-6">Glow</CardContent>
          </Card>
        </ComponentPreview>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable
          props={[
            {
              name: "variant",
              type: '"default" | "outlined" | "elevated" | "glow" | "glass" | "gradient"',
              default: '"default"',
              description: "Visual style of the card",
            },
            {
              name: "padding",
              type: '"none" | "sm" | "default" | "lg"',
              default: '"default"',
              description: "Internal padding of the card",
            },
          ]}
        />
      </div>
    </div>
  )
}
