"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { cn } from "@benflux-ui/utils"

interface AnimatedTextProps {
  text: string
  className?: string
  once?: boolean
  delay?: number
  animationType?: "fade" | "slide-up" | "slide-down" | "typing" | "word-by-word" | "char-by-char"
}

export function AnimatedText({
  text,
  className,
  once = true,
  delay = 0,
  animationType = "word-by-word",
}: AnimatedTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once })

  if (animationType === "word-by-word") {
    const words = text.split(" ")
    return (
      <div ref={ref} className={cn("flex flex-wrap gap-1.5", className)}>
        {words.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
            transition={{
              delay: delay + i * 0.05,
              duration: 0.4,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
          >
            {word}
          </motion.span>
        ))}
      </div>
    )
  }

  if (animationType === "char-by-char") {
    return (
      <div ref={ref} className={cn("inline-flex flex-wrap", className)}>
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: delay + i * 0.03,
              duration: 0.3,
            }}
          >
            {char === " " ? " " : char}
          </motion.span>
        ))}
      </div>
    )
  }

  if (animationType === "typing") {
    return (
      <div ref={ref} className={cn("inline-flex items-center", className)}>
        <motion.span
          initial={{ width: 0 }}
          animate={isInView ? { width: "100%" } : {}}
          transition={{ delay, duration: text.length * 0.05, ease: "linear" }}
          style={{ overflow: "hidden", whiteSpace: "nowrap" }}
        >
          {text}
        </motion.span>
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
          className="ml-0.5 inline-block w-0.5 h-[1.2em] bg-current"
        />
      </div>
    )
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: animationType === "slide-up" ? 20 : -20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
    >
      {text}
    </motion.div>
  )
}

interface NumberCounterProps {
  from?: number
  to: number
  duration?: number
  className?: string
  format?: (value: number) => string
}

export function NumberCounter({
  from = 0,
  to,
  duration = 2,
  className,
  format = (v) => v.toFixed(0),
}: NumberCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
    >
      {isInView && (
        <motion.span
          initial={{ textContent: `${from}` }}
          animate={{ textContent: `${to}` }}
          transition={{
            duration,
            ease: "easeOut",
          }}
          onUpdate={(latest) => {
            if (ref.current) {
              const value = parseFloat(latest.textContent ?? `${from}`)
              ref.current.textContent = format(value)
            }
          }}
        />
      )}
    </motion.span>
  )
}
