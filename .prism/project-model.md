# Project Model — FC-Protocol (Monaris marketing site)

*Updated 2026-07-04 (second pass) by /prism-understand — footer area mapped, then cinematic video footer shipped on `blog-section` (see Decision log). Earlier same-day full re-map: redesign is MERGED into `main` (branch `monaris-landing-redesign` fully contained in main, still exists locally + on origin; main == origin/main == e07e9a5). `tsc -b --noEmit` and `vite build` both pass clean (build ~0.9s, JS 373 kB / 113 kB gzip). Remote: https://github.com/Adityaakr/FC-Protocol.git.*

## Current landing structure (post-redesign, on main)
- `src/pages/Index.tsx:13-23` → 9 top-level sections in `src/components/landing/`: Hero (owns the nav), Statement (scroll parallax), CalculatorSection (interactive advance calculator), CreditLayer (coin bounce), Testimonials (CSS marquee, seam-fixed with per-card margins), Treasury (bento; embeds StormShield as tile 04), Advantage, Finale, Footer. 12 .tsx files total — SectionBadge, CursorTag (Treasury-only), StormShield are sub-components; none dead.
- Shared data: `src/components/landing/data.ts` — TESTIMONIALS (5, with avatar imports), TERMS=[30,60,90], DOCS_URL/SITE_URL/X_URL.
- Anchor map (all resolve, verified 2026-07-04): `#top`=Hero:7, `#statement`=Statement:120 (nothing links to it), `#calculator`=CalculatorSection:95, `#credit`=CreditLayer:44, `#treasury`=Treasury:24, `#advantage`=Advantage:16, `#cta`=Finale:2. Testimonials has no id (scroll-only).
- Old `src/components/sections/*`, `Navbar.tsx`, `NavLink.tsx` deleted in the redesign.
- Brand assets: `src/assets/monaris/` (ESM-imported, hashed); Satoshi woff2 self-hosted in `public/fonts/` (@font-face src/index.css:7-11); Inter via Google Fonts (index.html:11-13).

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
- Favicon `/mon.png` → `public/mon.png` exists. OG/Twitter meta live in index.html:8-21 (no analytics scripts; og:image/twitter:image missing — see Known debt).
- Calculator underwriting math is all in CalculatorSection.tsx:14-27,65-71: advanceToday = min(amt, vol×coverageMultiple(score)) × advanceRate(score) × termFactor × verificationFactor − 15% lock; monthlyUnlocked = advanceToday × 30/term. The Calculate button is cosmetic (pop animation only, :73-79) — outputs are reactive.

## Conventions
- Section components live in `src/components/landing/`, each an anchored `<section id=...>`; the nav lives INSIDE Hero (Hero.tsx:29-51 — desktop-only pill, `hidden md:flex`, no mobile menu). (Old `sections/` + `Navbar.tsx` convention deleted 2026-07-03.)
- shadcn config: components.json (style default, baseColor slate, cssVariables true, lucide icons; also registers an `@aceternity` registry, components.json:21-23).
- Prototype design-system CSS lives in src/index.css:110-220: `.card-soft`/`.card-float` shadows, `.bg-grad`/`.bg-grad-dark` gradient borders, `hero-clip`, `.stars`, marquee keyframes `mqx`/`mqx2` (48s linear), `.rvb` reveal — all gated by `prefers-reduced-motion` (index.css:176-178).
- Scroll animation pattern (Statement.tsx:25-117, CreditLayer.tsx:14-41): reduced-motion bail first, passive scroll+resize listener, rAF-gated (self-halting lerp in Statement at factor 0.09), cleanup on unmount. Follow this shape for any new scroll effects.
- Two parallel color systems: brand hexes volt/ink/paper/dark/lime-soft are static hex in tailwind.config.ts:21-32 (used by all landing components); shadcn HSL vars remain BLUE-ish boilerplate (--primary is sky blue, index.css:25) used only by NotFound + dead ui/ components.

## Monaris design handoff bundle (scratchpad, 2026-07-03)
Extracted at `/private/tmp/claude-501/-Users-adityakrx-FC-Protocol/fe4e1c80-166d-4249-8f0e-c7c43529f176/scratchpad/monaris/monaris-design-system/project/` (source zip: `~/Downloads/Monaris Design System-handoff (1).zip` — re-extract if scratchpad is gone).
- Primary design: `ui_kits/landing-main/index.html` (861 lines, self-contained; Tailwind Play CDN + inline config + one 147-line script). Siblings `landing-dark.html`/`landing-light-v1.html` are superseded variants.
- Palette: volt `#C8FF00`, volt-bright `#DDFC01`, volt-sky `#DBF227`, volt-dark `#7CB518`, volt-text `#67790A`, ink `#131720`, paper `#F7F8F2`, dark `#0B0D07`. `bg-lime-soft` used but undefined in the prototype (latent bug — define a pale lime).
- Fonts: Satoshi local woff2 (weights 300/400/500/700/900 only — no 600/800) + Inter (sans) + JetBrains Mono via Google Fonts.
- 9 sections: hero (V-clip, chartreuse gradient), statement (parallax coins), interactive calculator, credit layer (coin bounce), testimonial marquee, treasury bento (Storm Shield), advantage 3-cards, dark finale, chartreuse footer.
- Assets to ship (~7 MB): hero-visual-finance.png (1.8 MB), chip-mountains.png (1 MB), credit-card-visual.png (1.8 MB), coins-3d.png (1.5 MB), monaris-m-black.png, 5 Satoshi woff2. Crypto coin SVGs come from spothq CDN (not bundled; have onerror fallbacks).
- Brand voice (brand-kit/blurb.txt): "Private cashflow infrastructure for the stablecoin era." Confident, compressed, sentence case, headlines end with a period; "selective disclosure", never "anonymous". The brand kit's "Built by Monaris · powered by Payy" tagline was shipped then removed (2026-07-03, user request): no Payy mention in LANDING copy. **SUPERSEDED for the blog (2026-07-04, user request):** the blog's only post is the Monaris × Payy SDK announcement (`posts/monaris-x-payy.tsx`) — Payy is allowed in blog content; landing sections still carry no Payy mention.

## Known debt (verified 2026-07-04)
- **Dead provider stack:** QueryClientProvider (App.tsx:12), TooltipProvider (App.tsx:13), Radix Toaster (App.tsx:14), Sonner (App.tsx:15) are mounted but never exercised — `toast()` defined only at src/hooks/use-toast.ts:137, never called; no useQuery/Tooltip anywhere. `src/lib/utils.ts` (cn) is transitively dead (only imported by ui/toast.tsx + ui/tooltip.tsx). This is the deferred T5 of docs/02.
- **Page weight:** hero-visual-finance.png 1.7M, credit-card-visual.png 1.7M, coins-3d.png 1.4M — the WebP conversion "required fast-follow" from docs/01:28 was never executed. ~4.8 MB of PNG on one page.
- **SEO:** `og:image` and `twitter:image` missing from index.html (card is summary_large_image with no image, index.html:15-21); no sitemap in robots.txt.
- **No mobile nav:** below `md` the pill menu is hidden with no hamburger (Hero.tsx:34) — mobile gets logo + Launch app only.
- **README.md is misleading:** describes Solidity contracts / credit-treasury-risk engines / SDKs that don't exist in this repo (README.md:17-73), dead placeholder link `https://monaris` (:103), claims MIT "see LICENSE" but no LICENSE file is tracked (:110). Known-stale per docs/02:27.
- **Loose tooling:** TS strict off (tsconfig.json:9-14, tsconfig.app.json), `no-unused-vars` off (eslint.config.js:23) — dead code is invisible to gates. No StrictMode in main.tsx:5.
- **Runtime CDN dependency:** Statement coin SVGs load from cdn.jsdelivr.net spothq (Statement.tsx:5); most have onError fallbacks but the usdt chip at Statement.tsx:163 does not.
- Dark mode configured (tailwind.config.ts:4, .dark vars index.css:56-84) but unreachable — nothing sets the class. `tailwind.config.ts:5` content globs include nonexistent `./pages ./components ./app`.

## Danger zones
- Replacing `src/index.css` token values without keeping the semantic-token names breaks all shadcn UI + NotFound.
- New design's nav anchors (`#calculator #credit #treasury #advantage`) fully diverge from old (`#product #traction #melt #risk`) — external deep links to old anchors will dead-scroll after cutover.
- Prototype OG/meta is absent — must carry over/rewrite meta in index.html or SEO regresses.
- Storm Shield state-machine JS in the prototype references `.ss-chip`/`#ss-footnote` elements that don't exist in its markup (inert dead code) — decide to add chips or ship static Healthy state.

## Decision log
- 2026-07-04 — Blog content replaced (user request, on `blog-section`): removed "Introducing the Monaris blog" (meta entry, BODIES entry, posts/introducing-the-monaris-blog.tsx, sitemap URL); the single remaining post is the Monaris × Payy SDK announcement — title "Monaris is integrating the Payy SDK." (NEVER "ecosystem program"/"design partner" — user correction), circuits are Noir + Barretenberg per docs.payy.network (NOT Halo2), body carries the announcement's five mono Eyebrow kickers (`!mt-3` on following h2 to beat `.prose h2` margin, posts/monaris-x-payy.tsx).
- 2026-07-04 — Cinematic video footer (user request, spec supplied, on `blog-section`): Footer.tsx fully re-skinned — full-bleed 14 MB CloudFront mp4 background (autoPlay/loop/muted/playsInline, deep-navy `hsl(201 100% 13%)` fallback), Instrument Serif display type (added to the Google Fonts link, index.html:13), `.liquid-glass` + `fade-rise` utilities in index.css (reduced-motion-gated). ALL previous copy/links/wordmark/copyright preserved verbatim (user constraint "keep what we written Monaris there"). Old lime-gradient panel design removed. Finale untouched (`#cta` anchor target). Video weight is a known page-cost — flagged to user.
- 2026-07-04 — Blog section planned (not yet built): zero-new-dep TSX posts + typed registry (`src/content/blog/posts.ts`, serializable meta + module-scope lazy bodies), 2 lazy routes `/blog` + `/blog/:slug` above the catch-all, BlogNav (Hero nav not reusable), Footer/Hero hash anchors → `/#anchor`, ScrollManager gated on `useNavigationType()!=="POP"` (naive pathname scroll-to-top was refuted 3-0: kills back-button restoration), hand-rolled `.prose` (~100 lines; typography plugin rejected: its 600-weight defaults conflict with available Satoshi weights), covers in `public/blog-covers/` (serializable paths for the share-card fast-follow). V1 SEO: default og:image/og:url, sitemap, runtime title swap, hosting rewrite config (LAUNCH BLOCKER — none exists, /blog/:slug 404s on refresh). Fast-follow #1: per-post static head rewrite (zero-dep post-build script over registry meta, or vite-prerender-plugin spike). Open: deploy host, og:image asset/domain, 3-vs-4-col grid. Plan: docs/03-blog-section-plan.md.

## Blog invariants (BUILT 2026-07-04 on branch `blog-section`; verified via Playwright against the prod build)
- Blog `POST_META` stays serializable: no JSX or asset imports in the meta array (src/content/blog/posts.ts:15-16 comment; the post-build head-rewrite script will import it in Node).
- `lazy()` for post bodies is created at module scope only, never inside render (posts.ts BODIES map).
- ScrollManager (src/components/ScrollManager.tsx) skips POP navigations (native restoration wins — verified: Back restores scroll) and handles `location.hash` after paint (fixes cold-load /#anchor — verified: /#calculator from /blog lands with the section at viewport top).
- **Blog typography is INVERTED vs landing (user decision 2026-07-04, stated twice):** headings = Inter (`font-sans` 700: index/post h1, card h3, `.prose` h2/h3), body/content = Satoshi (`.prose` font-family, post lede, card descriptions via `font-display`). Landing keeps Satoshi headings — the inversion is blog-scoped ONLY. `.prose strong` is 700 (Satoshi has no 600). Any blog content the user supplies (any format) is converted to `posts/<slug>.tsx` and inherits this from `.prose` — never hand-style post headings back to Satoshi. Verified via computed styles: post h1 Inter 700, prose body Satoshi 400, landing h1 still Satoshi.
- Footer internal anchors are `/#x`, not `#x` (Footer.tsx) so the footer works from /blog/* routes. Hero keeps bare `#x` (renders only on `/`) except the new Blog `<Link>`.
- Blog authoring = 3 steps: cover in `public/blog-covers/<slug>.jpg` (optional — volt-gradient fallback card renders logo + "Monaris blog", never the title, which always sits below), append to POST_META + one BODIES line, write `src/content/blog/posts/<slug>.tsx` (plain semantic JSX, no classNames). Update public/sitemap.xml per post.
- Hosting: vercel.json rewrite + public/_redirects both present (each a no-op on the other host). og.jpg (1200×630, generated from hero visual via sips) wired as og:image/twitter:image with og:url in index.html.
- Pre-existing lint error `tailwind.config.ts:97` require() — NOT from the blog work; fails `npm run lint` on main too.
- ~~Payy check before shipping blog changes: `grep -rin payy src/ index.html public/` must stay empty~~ **OBSOLETE 2026-07-04 (user request):** the blog now intentionally carries the Monaris × Payy SDK announcement (posts.ts meta + posts/monaris-x-payy.tsx + sitemap entry). The no-Payy rule now applies to LANDING sections only.
- 2026-07-03 — Repo cleanup executed: 5-tier evidence-backed deletion (root cruft → assets → dead ui → deps), gates green, render probe clean. Plan: docs/02-repo-cleanup-plan.md. Deferred: App.tsx provider slimming (react-query/Toasters — would free 6 more deps but touches live wiring).
- 2026-07-03 — Landing redesign: in-place rewrite with additive volt/ink/paper tokens, self-hosted Satoshi + Inter body, static Storm Shield, marquee seam fix. Plan: docs/01-monaris-landing-redesign-plan.md (telemetry inside). Branch `monaris-landing-redesign` — MERGED to main 2026-07-03; polish continued directly on main (testimonials w/ real avatars, calculator underwriting math 248708f, hero subcopy 0eeffdc, built-by attribution removed 79d546f, no-Payy memory e07e9a5). `grep -rin payy src/` = zero matches (re-verified 2026-07-04).

## New invariants from the redesign plan
- `--background` value re-pointed to paper `#F7F8F2`; semantic token NAMES remain untouched (docs/01 §corrections 1).
- Ported landing markup must use explicit radii `rounded-[2px]/[6px]/[8px]` (never rounded-sm/md/lg — those are shadcn-mapped to var(--radius), tailwind.config.ts:68-72).
- boxShadow sm/md/lg overrides removed → stock Tailwind neutrals; shadcn radius overrides KEPT.
- Satoshi self-hosted weights 300/400/500/700/900 only; body font is Inter (400/500/600/700 via Google Fonts); never rely on Satoshi 600/800.

## Lessons
- (reserved for prism-retro)
