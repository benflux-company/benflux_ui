export const motionTokens = {
  duration: {
    instant: 0,
    fast: 150,
    normal: 250,
    slow: 350,
    slower: 500,
    slowest: 800,
  },
  easing: {
    linear: [0, 0, 1, 1],
    ease: [0.25, 0.1, 0.25, 1],
    easeIn: [0.4, 0, 1, 1],
    easeOut: [0, 0, 0.2, 1],
    easeInOut: [0.4, 0, 0.2, 1],
    spring: [0.155, 1.105, 0.295, 1.12],
    bounce: [0.68, -0.55, 0.265, 1.55],
    smooth: [0.4, 0, 0.2, 1],
  },
  spring: {
    gentle: { stiffness: 120, damping: 14, mass: 1 },
    stiff: { stiffness: 400, damping: 30, mass: 1 },
    bouncy: { stiffness: 300, damping: 10, mass: 1 },
    slow: { stiffness: 80, damping: 16, mass: 1 },
  },
} as const
