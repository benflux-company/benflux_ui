import path from "path"
import * as clack from "@clack/prompts"
import pc from "picocolors"
import fs from "fs-extra"
import { execa } from "execa"
import {
  detectFramework,
  detectPackageManager,
  getComponentsPath,
  hasTailwind,
} from "../utils/detect-framework.js"

interface InitOptions {
  yes?: boolean
  typescript?: boolean
  tailwindV4?: boolean
}

export async function initCommand(options: InitOptions) {
  const cwd = process.cwd()

  clack.intro(pc.bgCyan(pc.black(" Benflux UI — Initialize ")))

  const framework = await detectFramework(cwd)
  const pm = await detectPackageManager(cwd)
  const hasTw = await hasTailwind(cwd)
  const defaultPath = await getComponentsPath(cwd)

  clack.note(
    [
      `Framework: ${pc.cyan(framework)}`,
      `Package manager: ${pc.cyan(pm)}`,
      `Tailwind: ${hasTw ? pc.green("detected") : pc.yellow("not found")}`,
    ].join("\n"),
    "Project detection",
  )

  let settings: {
    typescript: boolean
    componentsDir: string
    installDeps: boolean
    tailwindConfig: boolean
  }

  if (options.yes) {
    settings = {
      typescript: true,
      componentsDir: defaultPath,
      installDeps: true,
      tailwindConfig: !hasTw,
    }
  } else {
    const responses = await clack.group(
      {
        typescript: () =>
          clack.confirm({
            message: "Use TypeScript?",
            initialValue: true,
          }),
        componentsDir: () =>
          clack.text({
            message: "Where should components be added?",
            placeholder: defaultPath,
            defaultValue: defaultPath,
          }),
        installDeps: () =>
          clack.confirm({
            message: "Install dependencies automatically?",
            initialValue: true,
          }),
        tailwindConfig: () =>
          clack.confirm({
            message: hasTw
              ? "Update tailwind.config to include Benflux UI preset?"
              : "Set up Tailwind CSS?",
            initialValue: true,
          }),
      },
      {
        onCancel: () => {
          clack.cancel("Initialization cancelled.")
          process.exit(0)
        },
      },
    )

    settings = responses as typeof settings
  }

  const spinner = clack.spinner()

  // Create components directory
  spinner.start("Creating components directory...")
  const componentsPath = path.join(cwd, settings.componentsDir)
  await fs.ensureDir(componentsPath)
  spinner.stop(`Components directory: ${pc.cyan(settings.componentsDir)}`)

  // Write benflux-ui.json config
  spinner.start("Creating benflux-ui.json config...")
  const config = {
    $schema: "https://benflux-ui.dev/schema.json",
    style: "default",
    typescript: settings.typescript,
    tailwind: {
      config: hasTw ? "tailwind.config.ts" : "tailwind.config.ts",
      css: "src/app/globals.css",
      baseColor: "nebula",
    },
    aliases: {
      components: `@/${settings.componentsDir.replace("src/", "")}`,
      utils: "@/lib/utils",
    },
  }
  await fs.writeJson(path.join(cwd, "benflux-ui.json"), config, { spaces: 2 })
  spinner.stop("benflux-ui.json created")

  // Write utils file
  spinner.start("Creating utility functions...")
  const utilsDir = path.join(cwd, "src/lib")
  await fs.ensureDir(utilsDir)
  await fs.writeFile(
    path.join(utilsDir, "utils.ts"),
    `import { clsx, type ClassValue } from "clsx"\nimport { twMerge } from "tailwind-merge"\n\nexport function cn(...inputs: ClassValue[]) {\n  return twMerge(clsx(inputs))\n}\n`,
  )
  spinner.stop("lib/utils.ts created")

  // Install dependencies
  if (settings.installDeps) {
    spinner.start(`Installing core dependencies with ${pm}...`)
    try {
      const installCmd = {
        pnpm: ["pnpm", "add", "@benflux-ui/react"],
        yarn: ["yarn", "add", "@benflux-ui/react"],
        npm: ["npm", "install", "@benflux-ui/react"],
        bun: ["bun", "add", "@benflux-ui/react"],
      }[pm]

      await execa(installCmd[0]!, installCmd.slice(1), { cwd })
      spinner.stop("Dependencies installed")
    } catch {
      spinner.stop(pc.yellow("Failed to install dependencies. Please install manually."))
    }
  }

  clack.outro(
    [
      pc.green("✓") + " Benflux UI initialized!",
      "",
      pc.bold("Next steps:"),
      `  ${pc.cyan("npx benflux-ui add button")}     Add a component`,
      `  ${pc.cyan("npx benflux-ui add dashboard")}  Add a full dashboard`,
      `  ${pc.cyan("npx benflux-ui list")}           See all components`,
      "",
      pc.dim("Documentation: https://benflux-ui.dev"),
    ].join("\n"),
  )
}
