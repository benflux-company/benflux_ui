"use client"

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"

import { amoledTheme } from "./themes/amoled"
import { cyberpunkTheme } from "./themes/cyberpunk"
import { lightTheme, darkTheme } from "./themes/default"
import { glassTheme } from "./themes/glass"
import { luxuryTheme } from "./themes/luxury"
import { minimalTheme } from "./themes/minimal"
import { neonTheme } from "./themes/neon"
import type { NebulaTheme, ThemeContextValue, ThemeName } from "./types"

const THEMES: Record<string, NebulaTheme> = {
  light: lightTheme,
  dark: darkTheme,
  amoled: amoledTheme,
  glass: glassTheme,
  neon: neonTheme,
  cyberpunk: cyberpunkTheme,
  luxury: luxuryTheme,
  minimal: minimalTheme,
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

function applyTheme(theme: NebulaTheme) {
  const root = document.documentElement
  Object.entries(theme.cssVars).forEach(([key, value]) => {
    root.style.setProperty(key, value)
  })
}

interface BenfluxProviderProps {
  children: React.ReactNode
  theme?: ThemeName | "system"
  defaultTheme?: ThemeName | "system"
  storageKey?: string
  customThemes?: Record<string, NebulaTheme>
}

export function BenfluxProvider({
  children,
  theme: themeProp,
  defaultTheme = "system",
  storageKey = "benflux-ui-theme",
  customThemes = {},
}: BenfluxProviderProps) {
  const allThemes = useMemo(() => ({ ...THEMES, ...customThemes }), [customThemes])

  const [theme, setThemeState] = useState<ThemeName | "system">(() => {
    if (typeof window === "undefined") return defaultTheme
    return (localStorage.getItem(storageKey) as ThemeName) ?? defaultTheme
  })

  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("dark")

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)")
    setSystemTheme(media.matches ? "dark" : "light")
    const listener = (e: MediaQueryListEvent) => setSystemTheme(e.matches ? "dark" : "light")
    media.addEventListener("change", listener)
    return () => media.removeEventListener("change", listener)
  }, [])

  const resolvedTheme = (theme === "system" ? systemTheme : theme) as ThemeName

  useEffect(() => {
    const activeTheme = allThemes[resolvedTheme] ?? allThemes.dark!
    applyTheme(activeTheme)

    const root = document.documentElement
    root.classList.remove("light", "dark", ...Object.keys(allThemes))
    root.classList.add(resolvedTheme)
    root.setAttribute("data-theme", resolvedTheme)
    root.style.colorScheme = ["dark", "amoled", "neon", "cyberpunk", "glass"].includes(resolvedTheme)
      ? "dark"
      : "light"
  }, [resolvedTheme, allThemes])

  const setTheme = useCallback(
    (newTheme: ThemeName) => {
      if (!themeProp) {
        setThemeState(newTheme)
        localStorage.setItem(storageKey, newTheme)
      }
    },
    [themeProp, storageKey],
  )

  useEffect(() => {
    if (themeProp) setThemeState(themeProp)
  }, [themeProp])

  const value = useMemo(
    () => ({ theme: resolvedTheme, setTheme, resolvedTheme, systemTheme }),
    [resolvedTheme, setTheme, systemTheme],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext)
  if (!context) throw new Error("useTheme must be used within a BenfluxProvider")
  return context
}
