import type { Metadata } from "next"

import { CodeBlock, InlineCode } from "@/components/docs/code-block"

export const metadata: Metadata = { title: "Installation" }

export default function InstallationPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Installation</h1>
        <p className="text-lg text-muted-foreground">
          Get up and running with Benflux UI in under a minute.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Prerequisites</h2>
        <ul className="space-y-2 text-muted-foreground">
          {[
            "Node.js 18+",
            "React 18+",
            "Next.js 13+ (App Router recommended), Vite, Remix, or Astro",
            "Tailwind CSS v3",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm">
              <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Option 1 — CLI (recommended)</h2>
        <p className="text-sm text-muted-foreground">
          The CLI auto-detects your framework, sets up config, and installs dependencies.
        </p>

        <div className="space-y-3">
          <p className="text-sm font-medium">1. Initialize</p>
          <CodeBlock code="npx benflux-ui init" language="bash" />
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium">2. Add components</p>
          <CodeBlock code="npx benflux-ui add button card input" language="bash" />
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium">3. Import and use</p>
          <CodeBlock
            code={`import { Button } from "@/components/ui/button"

export default function Page() {
  return <Button>Click me</Button>
}`}
            language="tsx"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Option 2 — Manual</h2>
        <p className="text-sm text-muted-foreground">
          Install the package and configure your project manually.
        </p>

        <div className="space-y-3">
          <p className="text-sm font-medium">1. Install the package</p>
          <CodeBlock code="npm install @benflux-ui/react @benflux-ui/themes" language="bash" />
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium">2. Add Tailwind CSS</p>
          <CodeBlock code="npm install -D tailwindcss autoprefixer postcss" language="bash" />
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium">3. Wrap your app with BenfluxProvider</p>
          <CodeBlock
            filename="app/layout.tsx"
            code={`import { BenfluxProvider } from "@benflux-ui/themes"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BenfluxProvider defaultTheme="dark">
          {children}
        </BenfluxProvider>
      </body>
    </html>
  )
}`}
          />
        </div>
      </div>

      <div className="space-y-2 rounded-xl border border-border bg-muted/30 p-5">
        <p className="text-sm font-semibold">Next.js — transpilePackages</p>
        <p className="text-sm text-muted-foreground">
          If using <InlineCode>@benflux-ui/react</InlineCode> directly (without CLI), add it to{" "}
          <InlineCode>transpilePackages</InlineCode> in your <InlineCode>next.config.ts</InlineCode>
          .
        </p>
        <CodeBlock
          code={`// next.config.ts
const nextConfig = {
  transpilePackages: ["@benflux-ui/react", "@benflux-ui/themes"],
}`}
        />
      </div>
    </div>
  )
}
