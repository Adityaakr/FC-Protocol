# 02 — Repo cleanup: remove scaffold cruft, dead shadcn surface, unused deps

*2026-07-03 · /prism-plan (6 lenses, 4-way independent import-graph derivation; verification by execution gates). Branch: `monaris-landing-redesign`.*

## Recommendation

Five-tier evidence-backed deletion, lowest risk first, with a `tsc && vite build` gate after every tier and a rendered-page probe at the end. Nothing in the live closure is touched.

## The live closure (DO-NOT-TOUCH manifest) `grounded`

- `index.html`, `src/main.tsx`, `src/App.tsx`, `src/index.css`, `src/vite-env.d.ts`, `src/pages/{Index,NotFound}.tsx`
- `src/components/landing/*` — all 13 files
- `src/components/ui/{toast,toaster,sonner,tooltip}.tsx`, `src/hooks/use-toast.ts`, `src/lib/utils.ts`
- `src/assets/monaris/*` (5), `public/fonts/*` (5), `public/mon.png`, `public/robots.txt`
- Deps that MUST stay: react, react-dom, react-router-dom, @tanstack/react-query, lucide-react, sonner, **next-themes** (ui/sonner.tsx:1), @radix-ui/react-toast, @radix-ui/react-tooltip, class-variance-authority, clsx, tailwind-merge; dev: vite, @vitejs/plugin-react-swc, **lovable-tagger** (vite.config.ts:4 top-level import), typescript+@types, eslint stack, tailwindcss, **tailwindcss-animate** (kept toast/tooltip animations), postcss, autoprefixer.

## Tiers

**T1 — root cruft (zero code risk):** `rm -rf dist`; `rm screen7.md`; `git rm --cached` the two broken submodule gitlinks `FC` + `flex-mobile-clean` (mode 160000, no .gitmodules); `git rm -r` `'Monaris-Autopilot-Money-OS-codebase (1)'` (a whole separate Next.js app, 792K/76 files — recoverable from git history), `hero-terminal.html`, `PROJECT_OVERVIEW.md` (1 byte), `.bolt/`, `bun.lockb` (stale dual lockfile; npm is installer of record). Fix `.gitignore`: remove the `*.md` ignore (scaffold accident that blocks tracking docs/).

**T2 — dead assets:** delete 5 unreferenced `src/assets/` root images (~2.5 MB incl. 1.84 MB ChatGPT png), 7 unreferenced `public/` files (~700 KB flex-era branding incl. `favicon.ico` — old brand, index.html uses /mon.png), 2 stray screenshots (src/hooks/, public/).

**T3 — dead src:** delete 47 of 51 `src/components/ui/*` (everything except toast/toaster/sonner/tooltip; includes floating-dock, sidebar, chart, and the 82-byte `ui/use-toast.ts` re-export shim) + `src/hooks/use-mobile.tsx` (only consumer was dead sidebar). All grep-verified zero live importers.

**T4 — deps:** `npm uninstall` ~40 packages: framer-motion + motion (landing imports NEITHER — pure CSS animation), recharts, react-hook-form, @hookform/resolvers, zod, date-fns, embla-carousel-react, cmdk, vaul, input-otp, react-day-picker, react-resizable-panels, @tabler/icons-react, @tailwindcss/typography, and all @radix-ui/* except react-toast + react-tooltip. Runtime deps drop ~46 → ~12.

**T5 — deferred (explicitly NOT in this change):** App.tsx provider slimming (dropping react-query/Toasters/TooltipProvider would free 6 more deps but edits live entry wiring — against the safety brief); README rewrite; robots.txt sitemap.

**Gate after each tier:** `npx tsc -p tsconfig.app.json --noEmit && npm run build`. Final gate: headless render of `/` and a bad route → all sections render, assets 200, zero console errors.

## Steelman of the rejected option

*Do it all in one sweep, single commit:* faster, and the gates would still catch breakage. Rejected because when a gate fails mid-sweep you can't tell which of 90 deletions caused it; tiers make every failure attributable and individually revertable.

## Assumptions & falsifiers

- The Autopilot Next.js app has no other home → git history is its archive. Falsifier: if it's meant to live on, extract to its own repo first (say so and I'll `git subtree split` it instead).
- shadcn components can be re-added later via CLI (components.json kept) → pruning is reversible.
- No CI/scripts use bun (grep: none) → bun.lockb removable.

## Verification note

> Cross-tier verification reduces instance-/tier-level error correlation but not shared-lineage
> blind spots. Treat cross-tier survival as weaker evidence than grounding.

Skeptic panel replaced by execution gates (deviation, per user's parallelism-by-evidence preference): the claims are mechanical grep facts independently derived by 4 lenses; a failed build/render gate is a stronger refuter than a read-only skeptic.

## Telemetry
- divergence: 0.37 (evidence 0.55, conclusion 0.10) | threshold 0.30 UNCALIBRATED
- models: draft=fable · skeptics=execution-gates (deviation; grep facts 4-way decorrelated at fan-out)
- claims: closure-manifest grounded · dep-map grounded · stray-root-unreferenced grounded · npm-lockfile grounded
- fleet: 6 lenses (first-principles, adversary, practitioner, dead-code, deps/build, keep-list)
