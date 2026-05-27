import * as clack from "@clack/prompts"
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

  // Interactive selection if no components specified — flat multiselect like shadcn/ui
  if (selectedComponents.length === 0) {
    const categoryLabel: Record<string, string> = {
      layout: "Layout",
      inputs: "Inputs",
      navigation: "Navigation",
      feedback: "Feedback",
      "data-display": "Data Display",
      ai: "AI",
      wow: "WOW Effects",
    }

    const sorted = [...REGISTRY].sort((a, b) =>
      a.category === b.category
        ? a.name.localeCompare(b.name)
        : a.category.localeCompare(b.category),
    )

    const selected = await clack.multiselect({
      message: "Which components would you like to add?",
      options: sorted.map((c) => ({
        label: c.name,
        hint: `${categoryLabel[c.category] ?? c.category} — ${c.description}`,
        value: c.name,
      })),
    })

    if (clack.isCancel(selected)) {
      clack.cancel("Cancelled.")
      process.exit(0)
    }

    selectedComponents = selected as string[]
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

    for (const file of component.files) {
      const targetPath = path.join(cwd, defaultDir, path.basename(file))

      if ((await fs.pathExists(targetPath)) && !options.overwrite) {
        spinner.stop(
          `${pc.yellow("skipped")} ${component.name} (already exists — use --overwrite to replace)`,
        )
        continue
      }

      // In a real implementation, this would fetch from the registry API
      // For local usage, it copies from node_modules/@benflux-ui/react
      const sourcePath = path.join(cwd, "node_modules/@benflux-ui/react/src", file)

      if (await fs.pathExists(sourcePath)) {
        await fs.ensureDir(path.dirname(targetPath))
        await fs.copy(sourcePath, targetPath)
      } else {
        // Write a stub if source not found (happens during dev)
        await fs.ensureDir(path.dirname(targetPath))
        await fs.writeFile(
          targetPath,
          `// ${component.name} — Install @benflux-ui/react to get the full component\nexport {} from "@benflux-ui/react"\n`,
        )
      }
    }

    spinner.stop(`${pc.green("✓")} Added ${component.name}`)
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
