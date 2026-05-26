export type ThemeName = "light" | "dark" | "amoled" | "glass" | "neon" | "cyberpunk" | "luxury" | "minimal"

export interface NebulaTheme {
  name: ThemeName | string
  cssVars: Record<string, string>
}

export interface ThemeContextValue {
  theme: ThemeName
  setTheme: (theme: ThemeName) => void
  resolvedTheme: "light" | "dark"
  systemTheme: "light" | "dark"
}
