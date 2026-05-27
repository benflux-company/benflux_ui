import type { Config } from "tailwindcss"
import animate from "tailwindcss-animate"

export default {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        nebula: {
          50: "#f0f4ff",
          100: "#e0e9ff",
          200: "#c7d7fe",
          300: "#a5bcfd",
          400: "#8199fb",
          500: "#6675f6",
          600: "#5755ea",
          700: "#4a46cf",
          800: "#3d3ba7",
          900: "#363784",
          950: "#21204d",
        },
        glow: {
          purple: "#8b5cf6",
          blue: "#3b82f6",
          cyan: "#06b6d4",
          green: "#10b981",
          pink: "#ec4899",
          orange: "#f97316",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 20px hsl(var(--primary) / 0.3)",
        "glow-sm": "0 0 10px hsl(var(--primary) / 0.2)",
        "glow-lg": "0 0 40px hsl(var(--primary) / 0.4)",
        neon: "0 0 5px hsl(var(--primary)), 0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--primary))",
      },
      keyframes: {
        "aurora-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "border-beam": {
          "100%": { "offset-distance": "100%" },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": { transform: "rotate(215deg) translateX(-500px)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "aurora-shift": "aurora-shift 8s ease infinite",
        shimmer: "shimmer 2s linear infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        meteor: "meteor var(--duration) var(--delay) ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate],
} satisfies Config
