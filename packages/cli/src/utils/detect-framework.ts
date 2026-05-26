import path from "path"
import fs from "fs-extra"

export type Framework = "next" | "vite-react" | "remix" | "astro" | "unknown"
export type PackageManager = "pnpm" | "yarn" | "npm" | "bun"

export async function detectFramework(cwd: string): Promise<Framework> {
  const pkgPath = path.join(cwd, "package.json")
  if (!(await fs.pathExists(pkgPath))) return "unknown"

  const pkg = await fs.readJson(pkgPath) as {
    dependencies?: Record<string, string>
    devDependencies?: Record<string, string>
  }
  const deps = {
    ...pkg.dependencies,
    ...pkg.devDependencies,
  }

  if (deps["next"]) return "next"
  if (deps["@remix-run/react"] || deps["@remix-run/node"]) return "remix"
  if (deps["astro"]) return "astro"
  if (deps["vite"] && deps["react"]) return "vite-react"

  return "unknown"
}

export async function detectPackageManager(cwd: string): Promise<PackageManager> {
  if (await fs.pathExists(path.join(cwd, "bun.lockb"))) return "bun"
  if (await fs.pathExists(path.join(cwd, "pnpm-lock.yaml"))) return "pnpm"
  if (await fs.pathExists(path.join(cwd, "yarn.lock"))) return "yarn"
  return "npm"
}

export async function detectTailwindVersion(cwd: string): Promise<3 | 4 | null> {
  const pkgPath = path.join(cwd, "package.json")
  if (!(await fs.pathExists(pkgPath))) return null

  const pkg = await fs.readJson(pkgPath) as {
    dependencies?: Record<string, string>
    devDependencies?: Record<string, string>
  }

  const tailwindVersion =
    pkg.dependencies?.["tailwindcss"] ?? pkg.devDependencies?.["tailwindcss"]

  if (!tailwindVersion) return null
  if (tailwindVersion.startsWith("4") || tailwindVersion.startsWith("^4")) return 4
  return 3
}

export async function hasTailwind(cwd: string): Promise<boolean> {
  const version = await detectTailwindVersion(cwd)
  return version !== null
}

export async function getComponentsPath(cwd: string): Promise<string> {
  // Try to detect from existing structure
  const candidates = [
    "src/components/ui",
    "components/ui",
    "app/components/ui",
    "src/components",
    "components",
  ]

  for (const candidate of candidates) {
    if (await fs.pathExists(path.join(cwd, candidate))) {
      return candidate
    }
  }

  // Default for Next.js App Router
  const framework = await detectFramework(cwd)
  if (framework === "next") {
    return "src/components/ui"
  }

  return "src/components/ui"
}
