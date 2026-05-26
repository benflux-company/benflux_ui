# Contributing to Benflux UI

We love your input! We want to make contributing as easy and transparent as possible.

## Quick Start

```bash
# Fork and clone
git clone https://github.com/YOUR_USERNAME/benflux-ui.git
cd benflux-ui

# Install dependencies (requires pnpm)
pnpm install

# Start development
pnpm dev

# Start docs
pnpm dev:docs
```

## Project Structure

```
benflux-ui/
├── apps/
│   ├── docs/          # Documentation site (Next.js 15)
│   └── playground/    # Component playground
├── packages/
│   ├── ui/            # @benflux-ui/react — core components
│   ├── animations/    # @benflux-ui/animations
│   ├── themes/        # @benflux-ui/themes
│   ├── hooks/         # @benflux-ui/hooks
│   ├── utils/         # @benflux-ui/utils
│   └── cli/           # benflux-ui CLI
└── tooling/           # ESLint, TypeScript, Tailwind configs
```

## Adding a New Component

1. **Create the component** in `packages/ui/src/components/{category}/{name}.tsx`
2. **Export it** from `packages/ui/src/index.ts`
3. **Add to registry** in `packages/cli/src/utils/registry.ts`
4. **Write a story** in `packages/ui/src/components/{category}/{name}.stories.tsx`
5. **Add docs** in `apps/docs/content/docs/components/{name}.mdx`

### Component Guidelines

```tsx
// ✅ Good: forwardRef, proper TypeScript, CVA variants
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
```

### Style Guidelines

- Use `cn()` from `@benflux-ui/utils` for class merging
- Use `cva()` for variant-based styling
- CSS variables for theme tokens (never hardcode colors)
- Framer Motion for animations — respect `prefers-reduced-motion`
- All interactive components must be keyboard accessible

## Commit Convention

We use Conventional Commits:

```
feat: add MagneticButton component
fix: correct focus ring in dark mode
docs: add Bento Grid examples
chore: upgrade framer-motion to 11.3
```

## Pull Request Process

1. Open an issue first for large changes
2. Create a branch: `feat/my-component` or `fix/issue-123`
3. Write/update tests if needed
4. Run `pnpm typecheck && pnpm lint && pnpm test`
5. Add a changeset: `pnpm changeset`
6. Submit PR with description of changes

## Changesets

We use [Changesets](https://github.com/changesets/changesets) for versioning.

```bash
# Create a changeset
pnpm changeset

# Select affected packages and describe changes
```

## Code of Conduct

Be kind, inclusive, and respectful. See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).

---

Thank you for contributing to Benflux UI! 🌌
