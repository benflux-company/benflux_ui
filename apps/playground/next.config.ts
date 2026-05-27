import type { NextConfig } from "next"

const config: NextConfig = {
  transpilePackages: [
    "@benflux-ui/react",
    "@benflux-ui/themes",
    "@benflux-ui/hooks",
    "@benflux-ui/utils",
  ],
  experimental: {
    optimizePackageImports: ["@benflux-ui/react", "lucide-react", "framer-motion"],
  },
}

export default config
