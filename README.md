# Stupid Adventure

Mini-adventure game for finding event tickets to [The ៦th Stupid Hackathon Thailand](https://stupidhackth.github.io/6/)

## Requirements

- Node 16
- pnpm 7

## Related projects

- [Event ticket dispenser](https://github.com/SaltyAom/stupid-hack-dispenser)

## Vercel configuration

```
# Build command
npx pnpm build

# Output directory
dist

# Install command
npx pnpm install -r --store=node_modules/.pnpm-store

# Development command
pnpm vite-dev
```

## Development

```
# With backend API
pnpm vercel-dev

# Without backend API
pnpm vite-dev
```

## Build

```
pnpm build
```
