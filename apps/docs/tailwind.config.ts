import { nebulaPreset } from "@benflux-ui/tailwind-config"
import type { Config } from "tailwindcss"

export default {
  presets: [nebulaPreset],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
} satisfies Config
