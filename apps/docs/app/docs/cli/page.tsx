import type { Metadata } from "next"

import { CodeBlock, InlineCode } from "@/components/docs/code-block"

export const metadata: Metadata = { title: "CLI" }

const commands = [
  {
    cmd: "npx benflux-ui init",
    description:
      "Initialize Benflux UI in your project. Auto-detects framework (Next.js, Vite, Remix, Astro), creates benflux-ui.json config, installs @benflux-ui/react, and writes lib/utils.ts.",
    options: [
      { flag: "--yes, -y", desc: "Skip all confirmation prompts" },
      { flag: "--typescript", desc: "Force TypeScript setup" },
      { flag: "--tailwind-v4", desc: "Use Tailwind CSS v4 syntax" },
    ],
  },
  {
    cmd: "npx benflux-ui add [components...]",
    description:
      "Add one or more components to your project. When called without arguments, opens an interactive multi-select list of all 80+ components — use Space to toggle, Enter to confirm. Automatically installs required dependencies.",
    options: [
      { flag: "--yes, -y", desc: "Skip confirmation prompts" },
      { flag: "--overwrite", desc: "Overwrite existing component files" },
      { flag: "--path <dir>", desc: "Custom output directory" },
    ],
  },
  {
    cmd: "npx benflux-ui list",
    description: "List all available components grouped by category, with installed status.",
    options: [{ flag: "--json", desc: "Output as JSON" }],
  },
  {
    cmd: "npx benflux-ui theme <action> [name]",
    description:
      "Manage themes. Actions: install, list, remove. Theme names: default, ocean, aurora, sunset, forest, rose, midnight, slate.",
    options: [],
  },
]

export default function CLIPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">CLI</h1>
        <p className="text-lg text-muted-foreground">
          The Benflux UI CLI lets you add components to any React or Next.js project without
          manually copying files. It handles dependency installation and file placement
          automatically.
        </p>
      </div>

      {/* Installation */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <p className="text-sm text-muted-foreground">
          No global install needed — run with <InlineCode>npx</InlineCode>:
        </p>
        <CodeBlock code="npx benflux-ui@latest init" language="bash" />
      </div>

      {/* Interactive add */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Interactive component picker</h2>
        <p className="text-sm text-muted-foreground">
          Run <InlineCode>npx benflux-ui add</InlineCode> without arguments to open the interactive
          picker — exactly like shadcn/ui. Use{" "}
          <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-xs">
            ↑↓
          </kbd>{" "}
          to navigate,{" "}
          <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-xs">
            Space
          </kbd>{" "}
          to select,{" "}
          <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-xs">
            Enter
          </kbd>{" "}
          to confirm.
        </p>
        <CodeBlock
          language="bash"
          code={`npx benflux-ui add

# ◆  Which components would you like to add?
# │  ○ accordion        Feedback — Collapsible content sections
# │  ○ alert           Feedback — Contextual feedback messages
# │  ● button          Inputs — A flexible button component
# │  ○ card            Layout — Versatile content container
# │  ● dialog          Feedback — Modal overlay for actions
# │  ...`}
        />
      </div>

      {/* Config file */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Configuration file</h2>
        <p className="text-sm text-muted-foreground">
          Running <InlineCode>init</InlineCode> creates <InlineCode>benflux-ui.json</InlineCode> at
          the root of your project:
        </p>
        <CodeBlock
          filename="benflux-ui.json"
          code={`{
  "$schema": "https://benflux-ui.vercel.app/schema.json",
  "style": "default",
  "typescript": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "default"
  },
  "aliases": {
    "components": "@/components/ui",
    "utils": "@/lib/utils"
  }
}`}
        />
      </div>

      {/* Commands */}
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

      {/* Examples */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Examples</h2>
        <CodeBlock
          language="bash"
          code={`# Initialize without prompts
npx benflux-ui init --yes

# Interactive picker — select from all 80+ components
npx benflux-ui add

# Add specific components directly
npx benflux-ui add button card input badge dialog

# Add multiple at once, overwrite existing
npx benflux-ui add button input --overwrite

# List all available components
npx benflux-ui list

# List as JSON (useful for scripting)
npx benflux-ui list --json

# Install a theme
npx benflux-ui theme install ocean`}
        />
      </div>
    </div>
  )
}
