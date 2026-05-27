import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

import { Avatar, AvatarFallback, AvatarGroup, AvatarImage } from "@benflux-ui/react"

export const metadata: Metadata = { title: "Avatar" }

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

      <ComponentPreview
        code={`import { Avatar, AvatarFallback, AvatarImage } from "@benflux-ui/react"

<Avatar size="xl">
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>BF</AvatarFallback>
</Avatar>`}
      >
        <Avatar size="xl">
          <AvatarImage src="https://github.com/shadcn.png" alt="User" />
          <AvatarFallback>BF</AvatarFallback>
        </Avatar>
        <Avatar size="lg">
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/vercel.png" alt="Vercel" />
          <AvatarFallback>VC</AvatarFallback>
        </Avatar>
        <Avatar size="sm">
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add avatar" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { Avatar, AvatarFallback, AvatarImage } from "@benflux-ui/react"

<Avatar>
  <AvatarImage src="/avatar.png" alt="John Doe" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Sizes</h2>
        <ComponentPreview
          code={`<Avatar size="xs"><AvatarFallback>XS</AvatarFallback></Avatar>
<Avatar size="sm"><AvatarFallback>SM</AvatarFallback></Avatar>
<Avatar><AvatarFallback>MD</AvatarFallback></Avatar>
<Avatar size="lg"><AvatarFallback>LG</AvatarFallback></Avatar>
<Avatar size="xl"><AvatarFallback>XL</AvatarFallback></Avatar>
<Avatar size="2xl"><AvatarFallback>2X</AvatarFallback></Avatar>`}
        >
          <Avatar size="xs">
            <AvatarFallback>XS</AvatarFallback>
          </Avatar>
          <Avatar size="sm">
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarFallback>LG</AvatarFallback>
          </Avatar>
          <Avatar size="xl">
            <AvatarFallback>XL</AvatarFallback>
          </Avatar>
          <Avatar size="2xl">
            <AvatarFallback>2X</AvatarFallback>
          </Avatar>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">With Ring</h2>
        <ComponentPreview
          code={`<Avatar ring="default"><AvatarFallback>D</AvatarFallback></Avatar>
<Avatar ring="primary"><AvatarFallback>P</AvatarFallback></Avatar>
<Avatar ring="glow"><AvatarFallback>G</AvatarFallback></Avatar>`}
        >
          <Avatar ring="default">
            <AvatarFallback>D</AvatarFallback>
          </Avatar>
          <Avatar ring="primary">
            <AvatarFallback>P</AvatarFallback>
          </Avatar>
          <Avatar ring="glow">
            <AvatarFallback>G</AvatarFallback>
          </Avatar>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Group</h2>
        <ComponentPreview
          code={`<AvatarGroup max={3}>
  <Avatar><AvatarFallback>A</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>B</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>C</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>D</AvatarFallback></Avatar>
  <Avatar><AvatarFallback>E</AvatarFallback></Avatar>
</AvatarGroup>`}
        >
          <AvatarGroup max={3}>
            <Avatar>
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>B</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>C</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>D</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>E</AvatarFallback>
            </Avatar>
          </AvatarGroup>
        </ComponentPreview>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable
          props={[
            {
              name: "size",
              type: '"xs" | "sm" | "default" | "lg" | "xl" | "2xl"',
              default: '"default"',
              description: "Size of the avatar",
            },
            {
              name: "ring",
              type: '"none" | "default" | "primary" | "glow"',
              default: '"none"',
              description: "Ring style around the avatar",
            },
          ]}
        />
      </div>
    </div>
  )
}
