import { DocsSidebar } from "@/components/docs/sidebar"
import { Footer } from "@/components/ui/footer"
import { Navbar } from "@/components/ui/navbar"

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="container mx-auto max-w-screen-2xl flex-1 px-4 py-10">
        <div className="flex gap-10">
          <DocsSidebar />
          <main className="min-w-0 max-w-3xl flex-1">{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  )
}
