"use client"

import * as React from "react"

import { cn } from "@benflux-ui/utils"

export interface AnchorLinkItem {
  href: string
  title: React.ReactNode
  children?: AnchorLinkItem[]
}

export interface AnchorProps {
  items: AnchorLinkItem[]
  affix?: boolean
  offsetTop?: number
  targetOffset?: number
  onChange?: (currentLink: string) => void
  className?: string
  direction?: "vertical" | "horizontal"
}

function AnchorLink({
  item,
  active,
  onClickLink,
  depth = 0,
}: {
  item: AnchorLinkItem
  active: string
  onClickLink: (href: string) => void
  depth?: number
}) {
  const isActive = active === item.href

  return (
    <li>
      <a
        href={item.href}
        onClick={(e) => {
          e.preventDefault()
          onClickLink(item.href)
        }}
        className={cn(
          "block truncate rounded py-1 text-sm transition-colors duration-150",
          depth > 0 ? "pl-3" : "pl-0",
          isActive ? "font-medium text-primary" : "text-muted-foreground hover:text-foreground",
        )}
      >
        {item.title}
      </a>
      {item.children && item.children.length > 0 && (
        <ul className="ml-2 space-y-0.5 border-l border-border pl-2">
          {item.children.map((child) => (
            <AnchorLink
              key={child.href}
              item={child}
              active={active}
              onClickLink={onClickLink}
              depth={depth + 1}
            />
          ))}
        </ul>
      )}
    </li>
  )
}

export function Anchor({
  items,
  affix = true,
  offsetTop = 80,
  targetOffset,
  onChange,
  className,
  direction = "vertical",
}: AnchorProps) {
  const [activeLink, setActiveLink] = React.useState("")

  React.useEffect(() => {
    const getAllHrefs = (links: AnchorLinkItem[]): string[] =>
      links.flatMap((l) => [l.href, ...(l.children ? getAllHrefs(l.children) : [])])

    const allHrefs = getAllHrefs(items)

    const handleScroll = () => {
      const scrollOffset = targetOffset ?? offsetTop + 20
      let current = ""

      for (const href of allHrefs) {
        const id = href.startsWith("#") ? href.slice(1) : href
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= scrollOffset) {
          current = href
        }
      }

      if (current !== activeLink) {
        setActiveLink(current)
        onChange?.(current)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [items, offsetTop, targetOffset, onChange, activeLink])

  const handleClickLink = (href: string) => {
    const id = href.startsWith("#") ? href.slice(1) : href
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - offsetTop
      window.scrollTo({ top, behavior: "smooth" })
    }
    setActiveLink(href)
    onChange?.(href)
  }

  const wrapperClass = cn(
    direction === "horizontal"
      ? "flex items-center gap-4 border-b border-border pb-2"
      : "border-l-2 border-border pl-3 space-y-0.5",
    className,
  )

  if (direction === "horizontal") {
    const allFlat = items.flatMap((i) => [i, ...(i.children ?? [])])
    return (
      <nav className={wrapperClass}>
        {allFlat.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => {
              e.preventDefault()
              handleClickLink(item.href)
            }}
            className={cn(
              "text-sm transition-colors",
              activeLink === item.href
                ? "font-medium text-primary"
                : "text-muted-foreground hover:text-foreground",
            )}
          >
            {item.title}
          </a>
        ))}
      </nav>
    )
  }

  return (
    <nav className={cn("relative", affix ? "sticky top-20" : "")}>
      <ul className={wrapperClass}>
        {items.map((item) => (
          <AnchorLink
            key={item.href}
            item={item}
            active={activeLink}
            onClickLink={handleClickLink}
          />
        ))}
      </ul>
      {/* Active indicator bar */}
      {activeLink && (
        <span
          className="absolute left-0 top-0 h-6 w-0.5 bg-primary transition-transform duration-200"
          style={{
            transform: `translateY(${items.findIndex((i) => i.href === activeLink) * 28}px)`,
          }}
        />
      )}
    </nav>
  )
}
