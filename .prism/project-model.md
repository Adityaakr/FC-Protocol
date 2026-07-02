# Project Model — FC-Protocol (Monaris marketing site)

*Updated 2026-07-03 by /prism-understand + landing redesign IMPLEMENTED on branch `monaris-landing-redesign` (verified end-to-end via Playwright; not yet committed/merged).*

## Current landing structure (post-redesign)
- `src/pages/Index.tsx` → 9 components in `src/components/landing/`: Hero (owns the nav), Statement (scroll parallax), CalculatorSection (interactive advance calculator), CreditLayer (coin bounce), Testimonials (CSS marquee, seam-fixed with per-card margins), Treasury + StormShield (static Healthy state), Advantage, Finale, Footer.
- Old `src/components/sections/*`, `Navbar.tsx`, `NavLink.tsx` deleted in the redesign.
- Brand assets: `src/assets/monaris/` (ESM-imported, hashed); Satoshi woff2 in `public/fonts/`; Inter via Google Fonts (index.html).

## Architecture
- Vite + React 18 (SWC) + TypeScript + Tailwind + shadcn/ui single-page marketing site. Brand is **Monaris** despite the repo name (index.html:7).
- Entry: `index.html:21` → `src/main.tsx:5` → `src/App.tsx` (React-Query → Tooltip → 2 Toasters → BrowserRouter).
- **2 routes only** (src/App.tsx:18-20): `/` → `src/pages/Index.tsx` (landing), `*` → `src/pages/NotFound.tsx`.
- Landing = 9 sections in `src/components/landing/` (see "Current landing structure" above); old `sections/` tree deleted 2026-07-03.
- Dev server port 8080 (vite.config.ts:10); alias `@` → `./src` (vite.config.ts:15); `lovable-tagger` dev plugin (top-level import in vite.config.ts:4 — uninstalling the package breaks `vite build`).
- Repo cleaned 2026-07-03 (docs/02): stray scaffold folders/apps, 47 unused shadcn ui files, ~40 unused deps, dual bun.lockb removed. Runtime deps = 13. Non-obvious keeps: `next-themes` (ui/sonner.tsx:1), `tailwindcss-animate` (kept toast/tooltip animations).

## Invariants
- All 50 shadcn components consume HSL semantic tokens `--primary/--muted/--border/--ring/...` via `hsl(var(--...))` (tailwind.config.ts:21-56, src/index.css:10-98). **Never delete/rename these token names** — re-point their values instead. `NotFound.tsx:14-17` uses `bg-muted`/`text-primary`.
- Fonts: Satoshi loaded via Fontshare CDN (index.html:11); Tailwind `display/body/brand` families all map to Satoshi (tailwind.config.ts:16-20).
- Dark mode is class-based (tailwind.config.ts:4) but **no toggle exists** — app is light-only in practice.
- Favicon `/mon.png` → `public/mon.png` exists. OG/Twitter meta live in index.html:8-19 (no analytics scripts).

## Conventions
- Section components live in `src/components/sections/`, each an anchored `<section id=...>`; nav anchors defined in `src/components/Navbar.tsx:6-11`.
- shadcn config: components.json (style default, baseColor slate, cssVariables true, lucide icons).
- Custom utilities in src/index.css:107-130 (`.text-gradient`, `.glow-primary`, `.animate-fade-up`).

## Monaris design handoff bundle (scratchpad, 2026-07-03)
Extracted at `/private/tmp/claude-501/-Users-adityakrx-FC-Protocol/fe4e1c80-166d-4249-8f0e-c7c43529f176/scratchpad/monaris/monaris-design-system/project/` (source zip: `~/Downloads/Monaris Design System-handoff (1).zip` — re-extract if scratchpad is gone).
- Primary design: `ui_kits/landing-main/index.html` (861 lines, self-contained; Tailwind Play CDN + inline config + one 147-line script). Siblings `landing-dark.html`/`landing-light-v1.html` are superseded variants.
- Palette: volt `#C8FF00`, volt-bright `#DDFC01`, volt-sky `#DBF227`, volt-dark `#7CB518`, volt-text `#67790A`, ink `#131720`, paper `#F7F8F2`, dark `#0B0D07`. `bg-lime-soft` used but undefined in the prototype (latent bug — define a pale lime).
- Fonts: Satoshi local woff2 (weights 300/400/500/700/900 only — no 600/800) + Inter (sans) + JetBrains Mono via Google Fonts.
- 9 sections: hero (V-clip, chartreuse gradient), statement (parallax coins), interactive calculator, credit layer (coin bounce), testimonial marquee, treasury bento (Storm Shield), advantage 3-cards, dark finale, chartreuse footer.
- Assets to ship (~7 MB): hero-visual-finance.png (1.8 MB), chip-mountains.png (1 MB), credit-card-visual.png (1.8 MB), coins-3d.png (1.5 MB), monaris-m-black.png, 5 Satoshi woff2. Crypto coin SVGs come from spothq CDN (not bundled; have onerror fallbacks).
- Brand voice (brand-kit/blurb.txt): "Private cashflow infrastructure for the stablecoin era." Confident, compressed, sentence case, headlines end with a period; "selective disclosure", never "anonymous". "Built by Monaris · powered by Payy".

## Danger zones
- Replacing `src/index.css` token values without keeping the semantic-token names breaks all shadcn UI + NotFound.
- New design's nav anchors (`#calculator #credit #treasury #advantage`) fully diverge from old (`#product #traction #melt #risk`) — external deep links to old anchors will dead-scroll after cutover.
- Prototype OG/meta is absent — must carry over/rewrite meta in index.html or SEO regresses.
- Storm Shield state-machine JS in the prototype references `.ss-chip`/`#ss-footnote` elements that don't exist in its markup (inert dead code) — decide to add chips or ship static Healthy state.

## Decision log
- 2026-07-03 — Repo cleanup executed: 5-tier evidence-backed deletion (root cruft → assets → dead ui → deps), gates green, render probe clean. Plan: docs/02-repo-cleanup-plan.md. Deferred: App.tsx provider slimming (react-query/Toasters — would free 6 more deps but touches live wiring).
- 2026-07-03 — Landing redesign: in-place rewrite with additive volt/ink/paper tokens, self-hosted Satoshi + Inter body, static Storm Shield, marquee seam fix. Plan: docs/01-monaris-landing-redesign-plan.md (telemetry inside). Branch `monaris-landing-redesign`.

## New invariants from the redesign plan
- `--background` value re-pointed to paper `#F7F8F2`; semantic token NAMES remain untouched (docs/01 §corrections 1).
- Ported landing markup must use explicit radii `rounded-[2px]/[6px]/[8px]` (never rounded-sm/md/lg — those are shadcn-mapped to var(--radius), tailwind.config.ts:68-72).
- boxShadow sm/md/lg overrides removed → stock Tailwind neutrals; shadcn radius overrides KEPT.
- Satoshi self-hosted weights 300/400/500/700/900 only; body font is Inter (400/500/600/700 via Google Fonts); never rely on Satoshi 600/800.

## Lessons
- (reserved for prism-retro)
