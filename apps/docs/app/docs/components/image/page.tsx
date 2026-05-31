"use client"

import * as React from "react"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

import { Image, ImageGrid, ImageLightbox } from "@benflux-ui/react"

const images = [
  {
    src: "https://picsum.photos/seed/a/800/600",
    alt: "Mountain landscape",
    width: 800,
    height: 600,
  },
  { src: "https://picsum.photos/seed/b/800/500", alt: "Ocean view", width: 800, height: 500 },
  { src: "https://picsum.photos/seed/c/800/700", alt: "Forest path", width: 800, height: 700 },
  { src: "https://picsum.photos/seed/d/800/600", alt: "City skyline", width: 800, height: 600 },
  { src: "https://picsum.photos/seed/e/800/550", alt: "Desert dunes", width: 800, height: 550 },
  { src: "https://picsum.photos/seed/f/800/600", alt: "Snowy peaks", width: 800, height: 600 },
]

function ImageDemo() {
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null)

  return (
    <div className="w-full space-y-6">
      <div>
        <p className="mb-3 text-sm font-medium text-muted-foreground">
          Single image with zoom preview
        </p>
        <div className="flex flex-wrap gap-4">
          <Image src={images[0]!.src} alt={images[0]!.alt} width={200} height={150} preview />
          <Image src={images[1]!.src} alt={images[1]!.alt} width={200} height={150} preview />
        </div>
      </div>
      <div>
        <p className="mb-3 text-sm font-medium text-muted-foreground">
          Grid — click to open lightbox
        </p>
        <ImageGrid
          images={images}
          columns={3}
          gap={8}
          onImageClick={(_, i) => setLightboxIndex(i)}
        />
      </div>
      {lightboxIndex !== null && (
        <ImageLightbox
          images={images}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  )
}

export default function ImagePage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Data Display
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Image</h1>
        <p className="text-lg text-muted-foreground">
          Image viewer with zoom-on-hover preview, fallback, a responsive grid layout, and a
          fullscreen lightbox with keyboard navigation.
        </p>
      </div>

      <ComponentPreview
        className="block w-full"
        code={`import { Image, ImageGrid, ImageLightbox } from "@benflux-ui/react"

const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

// Single image with zoom preview on hover
<Image src="/photo.jpg" alt="Photo" width={300} height={200} preview />

// Responsive grid (click opens lightbox)
<ImageGrid
  images={photos}
  columns={3}
  gap={8}
  onImageClick={(img, index) => setLightboxIndex(index)}
/>

// Fullscreen lightbox (keyboard: ← → Esc)
{lightboxIndex !== null && (
  <ImageLightbox
    images={photos}
    initialIndex={lightboxIndex}
    onClose={() => setLightboxIndex(null)}
  />
)}`}
      >
        <ImageDemo />
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add image" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { Image, ImageGrid, ImageLightbox } from "@benflux-ui/react"

// Single image with zoom preview on hover
<Image src="/photo.jpg" alt="Photo" width={300} height={200} preview />

// Responsive grid
<ImageGrid
  images={photos}
  columns={3}
  gap={8}
  onImageClick={(img, index) => setLightboxIndex(index)}
/>

// Fullscreen lightbox (keyboard: arrows + Esc)
{open && (
  <ImageLightbox
    images={photos}
    initialIndex={lightboxIndex}
    onClose={() => setOpen(false)}
  />
)}`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props — Image</h2>
        <PropsTable
          props={[
            {
              name: "src",
              type: "string",
              required: true,
              description: "Image source URL",
            },
            {
              name: "alt",
              type: "string",
              required: true,
              description: "Accessible alt text",
            },
            {
              name: "width",
              type: "number",
              default: "—",
              description: "Display width in pixels",
            },
            {
              name: "height",
              type: "number",
              default: "—",
              description: "Display height in pixels",
            },
            {
              name: "preview",
              type: "boolean",
              default: "false",
              description: "Show zoom icon on hover and open lightbox on click",
            },
            {
              name: "fallback",
              type: "string",
              default: "—",
              description: "Fallback URL if the image fails to load",
            },
          ]}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props — ImageGrid</h2>
        <PropsTable
          props={[
            {
              name: "images",
              type: "{ src: string; alt: string; width?: number; height?: number }[]",
              required: true,
              description: "Array of image objects",
            },
            {
              name: "columns",
              type: "number",
              default: "3",
              description: "Number of grid columns",
            },
            {
              name: "gap",
              type: "number",
              default: "8",
              description: "Gap between images in pixels",
            },
            {
              name: "onImageClick",
              type: "(image: object, index: number) => void",
              default: "—",
              description: "Called when an image is clicked",
            },
          ]}
        />
      </div>
    </div>
  )
}
