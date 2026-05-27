"use client"

import { useEffect, useRef } from "react"

import { cn } from "@benflux-ui/utils"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
  life: number
  maxLife: number
}

interface ParticleSystemProps extends React.HTMLAttributes<HTMLDivElement> {
  count?: number
  speed?: number
  size?: [number, number]
  colors?: string[]
  connected?: boolean
  connectionDistance?: number
  interactive?: boolean
}

export function ParticleSystem({
  className,
  count = 80,
  speed = 0.5,
  size = [1, 3],
  colors = ["#6675f6", "#8b5cf6", "#3b82f6", "#06b6d4"],
  connected = true,
  connectionDistance = 120,
  interactive = true,
  ...props
}: ParticleSystemProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const animFrameRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resize()
    window.addEventListener("resize", resize)

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
      size: Math.random() * (size[1] - size[0]) + size[0],
      opacity: Math.random() * 0.5 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)] ?? "#6675f6",
      life: 0,
      maxLife: Math.random() * 200 + 100,
    })

    particlesRef.current = Array.from({ length: count }, createParticle)

    const animate = () => {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((p, i) => {
        // Interactive mouse repulsion
        if (interactive) {
          const dx = p.x - mouseRef.current.x
          const dy = p.y - mouseRef.current.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 80) {
            p.vx += (dx / dist) * 0.5
            p.vy += (dy / dist) * 0.5
          }
        }

        p.x += p.vx
        p.y += p.vy
        p.life++

        // Bounds
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle =
          p.color +
          Math.floor(p.opacity * 255)
            .toString(16)
            .padStart(2, "0")
        ctx.fill()

        // Draw connections
        if (connected) {
          particlesRef.current.slice(i + 1).forEach((p2) => {
            const dx = p.x - p2.x
            const dy = p.y - p2.y
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < connectionDistance) {
              ctx.beginPath()
              ctx.moveTo(p.x, p.y)
              ctx.lineTo(p2.x, p2.y)
              ctx.strokeStyle =
                p.color +
                Math.floor((1 - dist / connectionDistance) * 40)
                  .toString(16)
                  .padStart(2, "0")
              ctx.lineWidth = 0.5
              ctx.stroke()
            }
          })
        }
      })

      animFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }

    if (interactive) {
      canvas.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      window.removeEventListener("resize", resize)
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
      if (interactive) canvas.removeEventListener("mousemove", handleMouseMove)
    }
  }, [count, speed, size, colors, connected, connectionDistance, interactive])

  return (
    <div className={cn("relative h-full w-full", className)} {...props}>
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  )
}
