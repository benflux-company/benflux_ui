import * as clack from "@clack/prompts"
import pc from "picocolors"
import { REGISTRY, type ComponentCategory } from "../utils/registry.js"

interface ListOptions {
  json?: boolean
}

const CATEGORY_LABELS: Record<ComponentCategory, string> = {
  layout: "Layout",
  inputs: "Inputs",
  navigation: "Navigation",
  feedback: "Feedback",
  "data-display": "Data Display",
  ai: "AI",
  wow: "WOW Effects",
}

export async function listCommand(options: ListOptions) {
  if (options.json) {
    console.log(JSON.stringify(REGISTRY, null, 2))
    return
  }

  clack.intro(pc.bgCyan(pc.black(" Benflux UI — Available Components ")))

  const categories = [...new Set(REGISTRY.map((c) => c.category))] as ComponentCategory[]

  for (const category of categories) {
    const components = REGISTRY.filter((c) => c.category === category)
    clack.note(
      components
        .map((c) => `  ${pc.cyan(c.name.padEnd(24))} ${pc.dim(c.description)}`)
        .join("\n"),
      pc.bold(CATEGORY_LABELS[category] ?? category),
    )
  }

  clack.outro(
    [
      pc.dim(`Total: ${REGISTRY.length} components`),
      "",
      `Add a component: ${pc.cyan("npx benflux-ui add <name>")}`,
    ].join("\n"),
  )
}
