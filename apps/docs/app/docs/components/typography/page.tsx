import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

import { Heading, Paragraph, Text, TypographyLink } from "@benflux-ui/react"

export const metadata: Metadata = { title: "Typography" }

export default function TypographyPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Layout
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Typography</h1>
        <p className="text-lg text-muted-foreground">
          Semantic text components for headings, body text, paragraphs and links with rich
          formatting options.
        </p>
      </div>

      <ComponentPreview
        className="flex-col items-start gap-3"
        code={`import { Heading, Text, Paragraph, TypographyLink } from "@benflux-ui/react"

<Heading level={1}>Heading 1</Heading>
<Heading level={2}>Heading 2</Heading>
<Heading level={3}>Heading 3</Heading>

<Text variant="default">Default</Text>
<Text variant="secondary">Secondary</Text>
<Text variant="success">Success</Text>
<Text variant="warning">Warning</Text>
<Text variant="danger">Danger</Text>

<Text italic>Italic</Text>
<Text underline>Underline</Text>
<Text strikethrough>Strikethrough</Text>
<Text code>inline code</Text>
<Text copyable>Click to copy</Text>

<Paragraph>
  Body text with a <TypographyLink href="#">typography link</TypographyLink>.
</Paragraph>`}
      >
        <div className="w-full space-y-4">
          <div className="space-y-1">
            {([1, 2, 3, 4, 5, 6] as const).map((l) => (
              <Heading key={l} level={l}>
                Heading {l}
              </Heading>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <Text variant="default">Default</Text>
            <Text variant="secondary">Secondary</Text>
            <Text variant="success">Success</Text>
            <Text variant="warning">Warning</Text>
            <Text variant="danger">Danger</Text>
          </div>
          <div className="flex flex-wrap gap-3">
            <Text italic>Italic</Text>
            <Text underline>Underline</Text>
            <Text strikethrough>Strikethrough</Text>
            <Text code>inline code</Text>
            <Text copyable>Click to copy</Text>
          </div>
          <Paragraph>
            Body text with a <TypographyLink href="#">typography link</TypographyLink> styled with
            the primary color.
          </Paragraph>
        </div>
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add typography" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { Heading, Text, Paragraph, TypographyLink } from "@benflux-ui/react"

<Heading level={1}>Page Title</Heading>
<Heading level={2} as="h3">Semantic override</Heading>

<Text variant="secondary" size="sm" weight="medium">Label text</Text>
<Text italic underline>Styled text</Text>
<Text code>const x = 1</Text>
<Text copyable>Copy me</Text>

<Paragraph size="lg">
  Body paragraph with a <TypographyLink href="/docs">link</TypographyLink>.
</Paragraph>`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props — Heading</h2>
        <PropsTable
          props={[
            {
              name: "level",
              type: "1 | 2 | 3 | 4 | 5 | 6",
              default: "1",
              description: "Semantic heading level (h1–h6)",
            },
            {
              name: "as",
              type: '"h1" | "h2" | "h3" | "h4" | "h5" | "h6"',
              default: "—",
              description: "Override the rendered HTML element",
            },
          ]}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props — Text</h2>
        <PropsTable
          props={[
            {
              name: "variant",
              type: '"default" | "secondary" | "success" | "warning" | "danger"',
              default: '"default"',
              description: "Color variant",
            },
            {
              name: "size",
              type: '"xs" | "sm" | "base" | "lg" | "xl"',
              default: '"base"',
              description: "Font size",
            },
            {
              name: "weight",
              type: '"normal" | "medium" | "semibold" | "bold"',
              default: '"normal"',
              description: "Font weight",
            },
            {
              name: "italic",
              type: "boolean",
              default: "false",
              description: "Italic style",
            },
            {
              name: "underline",
              type: "boolean",
              default: "false",
              description: "Underline decoration",
            },
            {
              name: "strikethrough",
              type: "boolean",
              default: "false",
              description: "Strikethrough decoration",
            },
            {
              name: "code",
              type: "boolean",
              default: "false",
              description: "Inline code style with monospace font",
            },
            {
              name: "copyable",
              type: "boolean",
              default: "false",
              description: "Shows a copy icon on hover",
            },
          ]}
        />
      </div>
    </div>
  )
}
