"use client"

import * as React from "react"

import { ChevronLeft, ChevronRight, Download, X, ZoomIn, ZoomOut } from "lucide-react"

import { cn } from "@benflux-ui/utils"

// ─── Single Image ────────────────────────────────────────────────────────────

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  preview?: boolean
  fallback?: string
  placeholder?: React.ReactNode
  wrapperClassName?: string
}

function Image({
  preview = true,
  fallback,
  placeholder,
  wrapperClassName,
  className,
  src,
  alt,
  onClick,
  ...props
}: ImageProps) {
  const [loaded, setLoaded] = React.useState(false)
  const [error, setError] = React.useState(false)
  const [lightboxOpen, setLightboxOpen] = React.useState(false)

  const imgSrc = error && fallback ? fallback : src

  return (
    <>
      <div className={cn("relative inline-block overflow-hidden", wrapperClassName)}>
        {!loaded && placeholder && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted">
            {placeholder}
          </div>
        )}
        <img
          src={imgSrc}
          alt={alt}
          onLoad={() => setLoaded(true)}
          onError={() => setError(true)}
          onClick={(e) => {
            if (preview) setLightboxOpen(true)
            onClick?.(e)
          }}
          className={cn(
            "max-w-full transition-opacity duration-200",
            loaded ? "opacity-100" : "opacity-0",
            preview && "cursor-zoom-in",
            className,
          )}
          {...props}
        />
        {preview && loaded && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all hover:bg-black/20 hover:opacity-100">
            <ZoomIn className="h-8 w-8 text-white drop-shadow-lg" />
          </div>
        )}
      </div>

      {lightboxOpen && (
        <ImageLightbox
          images={[{ src: src as string, alt }]}
          initialIndex={0}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  )
}

// ─── Image Grid ─────────────────────────────────────────────────────────────

interface ImageGridItem {
  src: string
  alt?: string
  caption?: string
}

interface ImageGridProps {
  images: ImageGridItem[]
  columns?: number
  gap?: number
  preview?: boolean
  masonry?: boolean
  className?: string
}

function ImageGrid({
  images,
  columns = 3,
  gap = 8,
  preview = true,
  masonry = false,
  className,
}: ImageGridProps) {
  const [lightboxIndex, setLightboxIndex] = React.useState<number | null>(null)

  return (
    <>
      <div
        className={cn("w-full", className)}
        style={
          masonry
            ? { columnCount: columns, columnGap: gap }
            : { display: "grid", gridTemplateColumns: `repeat(${columns}, 1fr)`, gap }
        }
      >
        {images.map((img, i) => (
          <div
            key={i}
            className={cn(
              "group relative overflow-hidden rounded-lg",
              masonry && "mb-2 break-inside-avoid",
            )}
            onClick={() => preview && setLightboxIndex(i)}
          >
            <img
              src={img.src}
              alt={img.alt ?? `Image ${i + 1}`}
              className={cn(
                "w-full object-cover transition-transform duration-300",
                preview && "cursor-zoom-in group-hover:scale-105",
              )}
            />
            {preview && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all group-hover:bg-black/25 group-hover:opacity-100">
                <ZoomIn className="h-8 w-8 text-white drop-shadow-lg" />
              </div>
            )}
            {img.caption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
                {img.caption}
              </div>
            )}
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <ImageLightbox
          images={images.map((img) => ({ src: img.src, alt: img.alt }))}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  )
}

// ─── Lightbox ────────────────────────────────────────────────────────────────

interface LightboxImage {
  src: string
  alt?: string
}

interface ImageLightboxProps {
  images: LightboxImage[]
  initialIndex?: number
  onClose: () => void
}

function ImageLightbox({ images, initialIndex = 0, onClose }: ImageLightboxProps) {
  const [index, setIndex] = React.useState(initialIndex)
  const [zoom, setZoom] = React.useState(1)
  const [dragging, setDragging] = React.useState(false)
  const [offset, setOffset] = React.useState({ x: 0, y: 0 })
  const [dragStart, setDragStart] = React.useState({ x: 0, y: 0 })

  const current = images[index]

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [index])

  const prev = () => {
    setIndex((i) => (i - 1 + images.length) % images.length)
    resetZoom()
  }
  const next = () => {
    setIndex((i) => (i + 1) % images.length)
    resetZoom()
  }
  const resetZoom = () => {
    setZoom(1)
    setOffset({ x: 0, y: 0 })
  }

  const download = () => {
    const a = document.createElement("a")
    a.href = current.src
    a.download = current.alt ?? "image"
    a.click()
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm">
      {/* Controls */}
      <div className="absolute right-4 top-4 z-10 flex items-center gap-2">
        <button
          onClick={() => setZoom((z) => Math.min(z + 0.5, 4))}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
        >
          <ZoomIn className="h-4 w-4" />
        </button>
        <button
          onClick={() => setZoom((z) => Math.max(z - 0.5, 0.5))}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
        >
          <ZoomOut className="h-4 w-4" />
        </button>
        <button
          onClick={download}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
        >
          <Download className="h-4 w-4" />
        </button>
        <button
          onClick={onClose}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Counter */}
      {images.length > 1 && (
        <div className="absolute left-1/2 top-4 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-sm text-white">
          {index + 1} / {images.length}
        </div>
      )}

      {/* Prev / Next */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      {/* Image */}
      <div
        className="relative max-h-[85vh] max-w-[85vw] overflow-hidden"
        onMouseDown={(e) => {
          setDragging(true)
          setDragStart({ x: e.clientX - offset.x, y: e.clientY - offset.y })
        }}
        onMouseMove={(e) => {
          if (dragging && zoom > 1)
            setOffset({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y })
        }}
        onMouseUp={() => setDragging(false)}
        onMouseLeave={() => setDragging(false)}
        onDoubleClick={() => (zoom === 1 ? setZoom(2) : resetZoom())}
      >
        <img
          src={current.src}
          alt={current.alt ?? ""}
          className="max-h-[85vh] max-w-[85vw] select-none object-contain transition-transform duration-200"
          style={{
            transform: `scale(${zoom}) translate(${offset.x / zoom}px, ${offset.y / zoom}px)`,
            cursor: zoom > 1 ? "grab" : "zoom-in",
          }}
          draggable={false}
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => {
                setIndex(i)
                resetZoom()
              }}
              className={cn(
                "h-12 w-12 overflow-hidden rounded border-2 transition-all",
                i === index
                  ? "border-white opacity-100"
                  : "border-transparent opacity-50 hover:opacity-80",
              )}
            >
              <img src={img.src} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export { Image, ImageGrid, ImageLightbox }
export type { ImageProps, ImageGridProps, ImageGridItem, ImageLightboxProps }
