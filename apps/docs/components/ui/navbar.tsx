"use client"

import { useEffect, useState } from "react"

import Link from "next/link"

import { AnimatePresence, motion } from "framer-motion"
import { Command, Github, Menu, Moon, Search, Sun, X, Zap } from "lucide-react"

import { useTheme } from "@benflux-ui/themes"
import { cn } from "@benflux-ui/utils"

import { SearchDialog } from "./search-dialog"

const navLinks = [
  { href: "/docs", label: "Docs" },
  { href: "/docs/components", label: "Components" },
  { href: "/blocks", label: "Blocks" },
  { href: "/templates", label: "Templates" },
  { href: "/themes", label: "Themes" },
  { href: "/showcase", label: "Showcase" },
]

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const isDark = ["dark", "amoled", "glass", "neon", "cyberpunk", "luxury"].includes(theme)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setSearchOpen((v) => !v)
      }
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [])

  return (
    <>
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />

      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-200",
          scrolled
            ? "border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
            : "bg-transparent",
        )}
      >
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="flex h-14 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-6">
              <Link href="/" className="flex items-center gap-2 font-bold">
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary">
                  <Zap className="h-3.5 w-3.5 text-primary-foreground" />
                </div>
                <span className="font-semibold">benflux/ui</span>
              </Link>

              {/* Desktop nav */}
              <nav className="hidden items-center gap-0.5 lg:flex">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-md px-2.5 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-1">
              {/* Search button — desktop */}
              <button
                onClick={() => setSearchOpen(true)}
                className="mr-2 hidden h-8 items-center gap-2 rounded-md border border-border bg-muted/50 px-3 text-sm text-muted-foreground transition-colors hover:bg-muted md:flex"
              >
                <Command className="h-3 w-3" />
                <span className="text-xs">Search docs…</span>
                <kbd className="pointer-events-none ml-2 inline-flex h-4 select-none items-center gap-1 rounded border border-border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                  K
                </kbd>
              </button>

              {/* Search button — mobile */}
              <button
                onClick={() => setSearchOpen(true)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground md:hidden"
                aria-label="Search"
              >
                <Search className="h-4 w-4" />
              </button>

              <a
                href="https://github.com/benflux-company/benflux_ui"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                <Github className="h-4 w-4" />
              </a>

              <button
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </button>

              <button
                className="inline-flex h-8 w-8 items-center justify-center rounded-md transition-colors hover:bg-accent md:hidden"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden border-t border-border bg-background md:hidden"
            >
              <nav className="container flex flex-col gap-1 px-4 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
