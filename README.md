# Yash Sakre — Portfolio

A minimal, fast portfolio plus a small shadcn-compatible component registry,
built with a modern TypeScript-first stack.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **Tailwind CSS v4** with OKLCH design tokens (red primary accent)
- **next-themes** — dark / light theme switcher (defaults to dark)
- **Motion** (`motion/react`) — subtle scroll reveals
- **lucide-react** — icons (brand icons are inline SVG in `src/components/icons.tsx`)
- shadcn-style UI primitives (`cva` + `tailwind-merge`)

## Getting started

Requires Node 20.9+ (see `.nvmrc`) and pnpm (version pinned in `package.json`;
run `corepack enable` to use it automatically).

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

Other scripts:

```bash
pnpm build      # build the registry, then a production build
pnpm start      # serve the production build
pnpm lint       # eslint
pnpm typecheck  # tsc --noEmit
pnpm registry   # regenerate public/r/*.json only
```

## Editing content

**All copy lives in one file: [`src/lib/data.ts`](src/lib/data.ts).**
Update your profile, experience, tech stack, projects, and links there — every
section reads from it. Nothing else needs to change for a content update.

- `profile` — name, role, tagline, summary, email, phone, location
- `socials` — GitHub / LinkedIn / email
- `experiences` — work history (Intozi) with per-role highlights
- `skillGroups` — tech stack, grouped
- `projects` — set `featured: true` on one to give it the large hero card
- `education` / `achievements`

## Component registry

Reusable UI pieces are published as a [shadcn](https://ui.shadcn.com) registry
and showcased at `/components`.

- The manifest lives in [`scripts/registry.mjs`](scripts/registry.mjs) (`REGISTRY`).
- The script writes `public/r/<name>.json` plus `public/r/registry.json`.
  These files are generated and git-ignored; `pnpm dev` and `pnpm build`
  regenerate them.
- Install a component elsewhere with:

  ```bash
  npx shadcn@latest add https://<your-domain>/r/<name>.json
  ```

To add a component, add an entry to `REGISTRY` pointing at its source file.

## Structure

```
src/
├─ app/
│  ├─ layout.tsx        # fonts, metadata, ThemeProvider, Navbar + Footer shell
│  ├─ page.tsx          # assembles the sections
│  ├─ globals.css       # Tailwind v4 + design tokens (light/dark)
│  ├─ icon.svg          # favicon
│  └─ components/       # registry catalog + per-component pages
├─ components/
│  ├─ registry/         # catalog, preview panel, code block, install tabs
│  ├─ sections/         # hero, experience, tech-stack, projects, contact
│  ├─ ui/               # button, badge, hover-preview primitives
│  ├─ navbar.tsx · footer.tsx · theme-toggle.tsx · reveal.tsx · …
└─ lib/
   ├─ data.ts           # ← single source of truth for content
   ├─ highlight.ts      # shiki code highlighting
   └─ utils.ts          # cn() helper
scripts/
└─ registry.mjs         # builds public/r/ registry JSON
```

## Customization notes

- **Primary color:** change `--primary` (and `--ring`) in `src/app/globals.css`.
- **Theme default:** `defaultTheme` in `src/app/layout.tsx`.
- **Domain:** set your real domain in both `metadataBase`
  (`src/app/layout.tsx`) and `BASE_URL` (`scripts/registry.mjs`).
- **Resume download:** drop `resume.pdf` into `public/` and wire a link in the
  hero or nav if you want a download button.

## Deploy

Deploys as static output anywhere; easiest on [Vercel](https://vercel.com/new).
