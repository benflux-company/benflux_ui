import type { Metadata } from "next"

import { IconsClient } from "@/components/icons/icons-client"
import { Footer } from "@/components/ui/footer"
import { Navbar } from "@/components/ui/navbar"

export const metadata: Metadata = {
  title: "Icons — Benflux UI",
  description:
    "1,400+ icons. Search, customise size, colour and stroke, then copy the React import or download the SVG.",
}

export default function IconsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <IconsClient />
      <Footer />
    </div>
  )
}
