import type { Transition } from "framer-motion"

export const springs = {
  gentle: { type: "spring", stiffness: 120, damping: 14, mass: 1 } satisfies Transition,
  stiff: { type: "spring", stiffness: 400, damping: 30, mass: 1 } satisfies Transition,
  bouncy: { type: "spring", stiffness: 300, damping: 10, mass: 1 } satisfies Transition,
  slow: { type: "spring", stiffness: 80, damping: 16, mass: 1 } satisfies Transition,
  snappy: { type: "spring", stiffness: 500, damping: 40, mass: 1 } satisfies Transition,
}

export const easings = {
  smooth: [0.4, 0, 0.2, 1] as const,
  spring: [0.155, 1.105, 0.295, 1.12] as const,
  bounce: [0.68, -0.55, 0.265, 1.55] as const,
  expo: [0.21, 0.47, 0.32, 0.98] as const,
}

export const pageTransition = {
  initial: { opacity: 0, y: 10, filter: "blur(4px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -10, filter: "blur(4px)" },
  transition: { duration: 0.3, ease: easings.smooth },
}

export const modalTransition = {
  initial: { opacity: 0, scale: 0.95, y: 10 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: 10 },
  transition: { duration: 0.2, ease: easings.expo },
}
