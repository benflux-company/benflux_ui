"use client"

import { Affix, Button } from "@benflux-ui/react"

export function AffixDemo() {
  return (
    <div className="flex items-center gap-4">
      <Affix offsetTop={80}>
        <Button variant="outline">Affix top (80px)</Button>
      </Affix>
      <Affix offsetBottom={24}>
        <Button variant="secondary">Affix bottom (24px)</Button>
      </Affix>
    </div>
  )
}
