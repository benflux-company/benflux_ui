"use client"

import { Anchor } from "@benflux-ui/react"

export function AnchorDemo() {
  return (
    <Anchor
      affix={false}
      items={[
        { href: "#introduction", title: "Introduction" },
        {
          href: "#components",
          title: "Components",
          children: [
            { href: "#button", title: "Button" },
            { href: "#input", title: "Input" },
          ],
        },
        { href: "#api", title: "API Reference" },
        { href: "#changelog", title: "Changelog" },
      ]}
    />
  )
}
