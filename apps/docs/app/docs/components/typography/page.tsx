import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"

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

      <div className="space-y-6 rounded-xl border border-border bg-card p-8">
        <div className="space-y-2">
          {([1, 2, 3, 4, 5, 6] as const).map((l) => (
            <Heading key={l} level={l}>
              Heading {l}
            </Heading>
          ))}
        </div>
        <div className="space-y-2">
          <Text variant="default">Default text</Text> <Text variant="secondary">Secondary</Text>{" "}
          <Text variant="success">Success</Text> <Text variant="warning">Warning</Text>{" "}
          <Text variant="danger">Danger</Text>
        </div>
        <div className="space-y-1">
          <Text italic>Italic text</Text> <Text underline>Underline text</Text>{" "}
          <Text strikethrough>Strikethrough</Text> <Text code>inline code</Text>{" "}
          <Text copyable>Click to copy this text</Text>
        </div>
        <Paragraph>
          This is a paragraph with comfortable line-height. It wraps naturally and uses{" "}
          <TypographyLink href="#">typography link</TypographyLink> styled with the primary color.
        </Paragraph>
      </div>

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
    </div>
  )
}
