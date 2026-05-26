import { nebulaPreset } from "@benflux-ui/tailwind-config"
import type { Config } from "tailwindcss"

export default {
  presets: [nebulaPreset],
  content: ["./src/**/*.{ts,tsx}"],
} satisfies Config
