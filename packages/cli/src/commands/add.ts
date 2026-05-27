import * as clack from "@clack/prompts"
import checkbox, { Separator } from "@inquirer/checkbox"
import { execa } from "execa"
import fs from "fs-extra"
import path from "path"
import pc from "picocolors"

import { detectPackageManager, getComponentsPath } from "../utils/detect-framework.js"
import { REGISTRY, getComponent } from "../utils/registry.js"

interface AddOptions {
  yes?: boolean
  overwrite?: boolean
  path?: string
}

const CATEGORY_ORDER = ["layout", "inputs", "navigation", "feedback", "data-display", "ai", "wow"]
const CATEGORY_LABEL: Record<string, string> = {
  layout: "Layout",
  inputs: "Inputs",
  navigation: "Navigation",
  feedback: "Feedback",
  "data-display": "Data Display",
  ai: "AI",
  wow: "WOW Effects",
}

export async function addCommand(components: string[], options: AddOptions) {
  const cwd = process.cwd()

  clack.intro(pc.bgCyan(pc.black(" Benflux UI — Add Components ")))

  // Load config if exists
  const configPath = path.join(cwd, "benflux-ui.json")
  let config: { aliases?: { components?: string } } = {}
  if (await fs.pathExists(configPath)) {
    config = (await fs.readJson(configPath)) as typeof config
  }

  const defaultDir = options.path ?? (await getComponentsPath(cwd))

  let selectedComponents = components

  // Interactive selection if no components specified
  if (selectedComponents.length === 0) {
    const byCategory = new Map<string, typeof REGISTRY>()
    for (const c of REGISTRY) {
      const list = byCategory.get(c.category) ?? []
      list.push(c)
      byCategory.set(c.category, list)
    }

    const choices: (Separator | { name: string; value: string; description: string })[] = []
    for (const cat of CATEGORY_ORDER) {
      const items = byCategory.get(cat)
      if (!items?.length) continue
      choices.push(new Separator(`── ${CATEGORY_LABEL[cat] ?? cat} ──`))
      for (const c of items.sort((a, b) => a.name.localeCompare(b.name))) {
        choices.push({ name: c.name, value: c.name, description: c.description })
      }
    }

    const selected = await checkbox({
      message: "Which components would you like to add?",
      choices,
      pageSize: 16,
      loop: false,
    })

    if (!selected.length) {
      clack.cancel("No components selected.")
      process.exit(0)
    }

    selectedComponents = selected
  }

  // Validate components
  const validComponents = selectedComponents
    .map((name) => {
      const component = getComponent(name)
      if (!component) {
        clack.log.warn(
          `Component ${pc.yellow(name)} not found. Use ${pc.cyan("benflux-ui list")} to see available components.`,
        )
        return null
      }
      return component
    })
    .filter(Boolean)

  if (validComponents.length === 0) {
    clack.outro(pc.red("No valid components to add."))
    return
  }

  // Confirm
  if (!options.yes) {
    const confirm = await clack.confirm({
      message: `Add ${validComponents.map((c) => pc.cyan(c!.name)).join(", ")} to ${pc.cyan(defaultDir)}?`,
    })

    if (clack.isCancel(confirm) || !confirm) {
      clack.cancel("Cancelled.")
      process.exit(0)
    }
  }

  const pm = await detectPackageManager(cwd)
  const spinner = clack.spinner()

  // Collect all unique dependencies
  const allDeps = new Set<string>()
  const allRadixDeps = new Set<string>()

  validComponents.forEach((c) => {
    c!.dependencies.forEach((d) => allDeps.add(d))
    c!.radixDeps.forEach((d) => allRadixDeps.add(d))
  })

  const allDepsArray = [...allDeps, ...allRadixDeps]

  // Install dependencies
  if (allDepsArray.length > 0) {
    spinner.start(`Installing ${allDepsArray.length} dependencies...`)
    try {
      const installCmds: Record<string, string[]> = {
        pnpm: ["pnpm", "add", ...allDepsArray],
        yarn: ["yarn", "add", ...allDepsArray],
        npm: ["npm", "install", ...allDepsArray],
        bun: ["bun", "add", ...allDepsArray],
      }

      await execa(installCmds[pm]![0]!, installCmds[pm]!.slice(1), { cwd })
      spinner.stop(`Installed: ${allDepsArray.join(", ")}`)
    } catch {
      spinner.stop(pc.yellow("Dependency installation failed. Install manually:"))
      clack.log.warn(`${pm} add ${allDepsArray.join(" ")}`)
    }
  }

  // Add component files
  for (const component of validComponents) {
    if (!component) continue

    spinner.start(`Adding ${pc.cyan(component.name)}...`)

    let skipped = true
    for (const file of component.files) {
      const targetPath = path.join(cwd, defaultDir, path.basename(file))

      if (await fs.pathExists(targetPath)) {
        if (!options.overwrite) continue
      }

      skipped = false
      await fs.ensureDir(path.dirname(targetPath))

      // Try local node_modules first, then fall back to unpkg CDN
      const localSrc = path.join(cwd, "node_modules/@benflux-ui/react/src", file)
      if (await fs.pathExists(localSrc)) {
        await fs.copy(localSrc, targetPath)
      } else {
        const url = `https://unpkg.com/@benflux-ui/react@latest/src/${file}`
        try {
          const res = await fetch(url)
          if (!res.ok) throw new Error(`HTTP ${res.status}`)
          const source = await res.text()
          await fs.writeFile(targetPath, source, "utf-8")
        } catch (err) {
          spinner.stop(pc.red(`Failed to fetch ${file}: ${(err as Error).message}`))
          clack.log.warn(`Download manually from: ${url}`)
          continue
        }
      }
    }

    if (skipped) {
      spinner.stop(
        `${pc.yellow("skipped")} ${component.name} — already exists (use --overwrite to replace)`,
      )
    } else {
      spinner.stop(`${pc.green("✓")} Added ${component.name}`)
    }
  }

  clack.outro(
    [
      pc.green("✓") + " Components added successfully!",
      "",
      pc.bold("Usage:"),
      `  ${pc.cyan(
        `import { ${validComponents
          .map((c) =>
            c?.name
              .split("-")
              .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
              .join(""),
          )
          .join(", ")} } from "@benflux-ui/react"`,
      )}`,
    ].join("\n"),
  )
}
