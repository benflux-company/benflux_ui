import { readFileSync, writeFileSync, readdirSync } from "fs"
import { join } from "path"

const distDir = new URL("../dist", import.meta.url).pathname
const directive = '"use client";\n'

for (const file of readdirSync(distDir)) {
  if (!file.endsWith(".js") && !file.endsWith(".mjs")) continue
  const filePath = join(distDir, file)
  const content = readFileSync(filePath, "utf-8")
  if (!content.startsWith('"use client"') && !content.startsWith("'use client'")) {
    writeFileSync(filePath, directive + content)
  }
}

console.log('✓ "use client" prepended to all dist files')
