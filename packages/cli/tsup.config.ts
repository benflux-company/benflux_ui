import { defineConfig } from "tsup"

export default defineConfig([
  {
    entry: { index: "src/index.ts" },
    format: ["cjs", "esm"],
    dts: true,
    clean: true,
  },
  {
    entry: { "bin/benflux-ui": "src/bin/benflux-ui.ts" },
    format: ["cjs"],
    clean: false,
  },
])
