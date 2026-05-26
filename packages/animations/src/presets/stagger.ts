import type { Variants } from "framer-motion"

export function staggerContainer(staggerChildren = 0.1, delayChildren = 0): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren, delayChildren },
    },
  }
}

export function staggerItem(direction: "up" | "down" | "left" | "right" = "up"): Variants {
  const directions = {
    up: { y: 20 },
    down: { y: -20 },
    left: { x: 20 },
    right: { x: -20 },
  }

  return {
    hidden: { opacity: 0, ...directions[direction] },
    visible: {
      opacity: 1,
      ...Object.fromEntries(
        Object.keys(directions[direction]).map((k) => [k, 0]),
      ),
      transition: { duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] },
    },
  }
}

export const staggerFadeUp = {
  container: staggerContainer(0.08),
  item: staggerItem("up"),
}
