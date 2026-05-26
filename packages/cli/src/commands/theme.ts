import path from "path"
import * as clack from "@clack/prompts"
import pc from "picocolors"
import fs from "fs-extra"

const THEMES = {
  light: "Default light theme",
  dark: "Default dark theme",
  amoled: "Pure black AMOLED dark theme",
  glass: "Glassmorphism theme",
  neon: "Neon glow theme",
  cyberpunk: "Cyberpunk futuristic theme",
  luxury: "Gold & dark luxury theme",
  minimal: "Clean minimal theme",
} as const

export async function themeCommand(action: string, name?: string) {
  clack.intro(pc.bgCyan(pc.black(" Benflux UI — Themes ")))

  switch (action) {
    case "list": {
      clack.note(
        Object.entries(THEMES)
          .map(([key, desc]) => `  ${pc.cyan(key.padEnd(12))} ${pc.dim(desc)}`)
          .join("\n"),
        "Available themes",
      )
      break
    }

    case "install": {
      const themeName = name ?? (await clack.select({
        message: "Select a theme to install:",
        options: Object.entries(THEMES).map(([key, desc]) => ({
          label: `${key} — ${desc}`,
          value: key,
        })),
      })) as string

      if (clack.isCancel(themeName)) {
        clack.cancel("Cancelled.")
        return
      }

      if (!(themeName in THEMES)) {
        clack.log.error(`Theme ${pc.yellow(themeName)} not found.`)
        return
      }

      const cwd = process.cwd()
      const configPath = path.join(cwd, "benflux-ui.json")

      if (await fs.pathExists(configPath)) {
        const config = await fs.readJson(configPath) as Record<string, unknown>
        config.activeTheme = themeName
        await fs.writeJson(configPath, config, { spaces: 2 })
      }

      clack.outro(
        [
          pc.green("✓") + ` Theme ${pc.cyan(themeName)} installed!`,
          "",
          "Usage:",
          `  ${pc.cyan(`<BenfluxProvider theme="${themeName}">`)}`,
        ].join("\n"),
      )
      break
    }

    default: {
      clack.log.error(`Unknown action: ${action}. Use: install, list, remove`)
    }
  }
}
