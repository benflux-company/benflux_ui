export const colorTokens = {
  nebula: {
    50: "240 100% 97%",
    100: "234 100% 94%",
    200: "232 96% 88%",
    300: "231 94% 80%",
    400: "232 90% 72%",
    500: "234 84% 66%",
    600: "236 74% 60%",
    700: "237 65% 52%",
    800: "238 62% 43%",
    900: "238 62% 36%",
    950: "241 60% 20%",
  },
  // Semantic colors per theme are in each theme file
} as const

export type ColorScale = typeof colorTokens.nebula
