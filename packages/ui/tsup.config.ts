import { defineConfig } from "tsup"

export default defineConfig({
  entry: {
    index: "src/index.ts",
    "components/inputs/button": "src/components/inputs/button.tsx",
    "components/layout/card": "src/components/layout/card.tsx",
    "components/feedback/dialog": "src/components/feedback/dialog.tsx",
    "components/feedback/toast": "src/components/feedback/toast.tsx",
    "components/navigation/tabs": "src/components/navigation/tabs.tsx",
    "components/navigation/command": "src/components/navigation/command.tsx",
    "components/wow/aurora-background": "src/components/wow/aurora-background.tsx",
    "components/wow/animated-beam": "src/components/wow/animated-beam.tsx",
    "components/wow/magic-card": "src/components/wow/magic-card.tsx",
    "components/wow/meteors": "src/components/wow/meteors.tsx",
    "components/wow/spotlight": "src/components/wow/spotlight.tsx",
    "components/wow/marquee": "src/components/wow/marquee.tsx",
  },
  format: ["cjs", "esm"],
  dts: true,
  splitting: true,
  sourcemap: true,
  clean: true,
  treeshake: true,
  external: ["react", "react-dom", "tailwindcss"],
  banner: {
    js: '"use client"',
  },
})
