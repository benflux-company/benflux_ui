import type { Metadata } from "next"

import { CodeBlock, InlineCode } from "@/components/docs/code-block"

export const metadata: Metadata = { title: "CLI" }

const commands = [
  {
    cmd: "npx benflux-ui init",
    description:
      "Initialize Benflux UI in your project. Auto-detects framework (Next.js, Vite, Remix, Astro), creates benflux-ui.json config, and installs required dependencies.",
    options: [
      { flag: "--yes, -y", desc: "Skip confirmation prompts" },
      { flag: "--cwd <dir>", desc: "Working directory (default: current)" },
    ],
  },
  {
    cmd: "npx benflux-ui add [components...]",
    description:
      "Add one or more components to your project. Copies source files into your configured components directory.",
    options: [
      { flag: "--all", desc: "Add all available components" },
      { flag: "--overwrite", desc: "Overwrite existing files" },
      { flag: "--path <dir>", desc: "Custom output directory" },
    ],
  },
  {
    cmd: "npx benflux-ui list",
    description: "List all available components with their status (installed / not installed).",
    options: [],
  },
  {
    cmd: "npx benflux-ui update [components...]",
    description: "Update installed components to the latest version.",
    options: [{ flag: "--all", desc: "Update all installed components" }],
  },
  {
    cmd: "npx benflux-ui diff [components...]",
    description: "Show a diff of changes between your installed version and the latest version.",
    options: [],
  },
]

export default function CLIPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">CLI</h1>
        <p className="text-lg text-muted-foreground">
          The Benflux UI CLI helps you add components to your project quickly without manually
          copying files.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Configuration</h2>
        <p className="text-sm text-muted-foreground">
          Running <InlineCode>init</InlineCode> creates a <InlineCode>benflux-ui.json</InlineCode>{" "}
          file at the root of your project:
        </p>
        <CodeBlock
          filename="benflux-ui.json"
          code={`{
  "style": "default",
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}`}
        />
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">Commands</h2>
        {commands.map((c) => (
          <div key={c.cmd} className="space-y-3">
            <CodeBlock code={c.cmd} language="bash" />
            <p className="text-sm text-muted-foreground">{c.description}</p>
            {c.options.length > 0 && (
              <div className="overflow-hidden rounded-xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/40">
                      <th className="px-4 py-2.5 text-left text-xs font-medium text-muted-foreground">
                        Option
                      </th>
                      <th className="px-4 py-2.5 text-left text-xs font-medium text-muted-foreground">
                        Description
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {c.options.map((o) => (
                      <tr key={o.flag} className="border-b border-border last:border-0">
                        <td className="px-4 py-2.5 font-mono text-xs text-blue-400">{o.flag}</td>
                        <td className="px-4 py-2.5 text-xs text-muted-foreground">{o.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Examples</h2>
        <CodeBlock
          language="bash"
          code={`# Initialize with defaults (no prompts)
npx benflux-ui init --yes

# Add multiple components at once
npx benflux-ui add button card input badge dialog select

# Add all components
npx benflux-ui add --all

# Update a specific component
npx benflux-ui update button

# Check what changed in button
npx benflux-ui diff button`}
        />
      </div>
    </div>
  )
}
