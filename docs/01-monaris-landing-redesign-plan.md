# 01 — Monaris landing redesign: port `landing-main` prototype to React

*2026-07-03 · produced by /prism-plan (6 lenses, grounding check, 3 cross-tier skeptics, 1 loop round). Branch: `monaris-landing-redesign`.*

## Recommendation

Rewrite the landing in place: swap the children of `src/pages/Index.tsx` for 9 new section components under `src/components/landing/`, extend Tailwind additively with the volt/ink/paper palette, port the prototype's custom CSS into `src/index.css` `@layer`, self-host Satoshi + add Inter, and port the 147-line script to React idioms. Delete the old sections at the end of the port, in the same branch.

## Why

1. `Index.tsx` is already a thin composition shell; replacement is just swapping its children (src/pages/Index.tsx:14-33). No migration scaffolding needed.
2. All needed deps exist (framer-motion 12, lucide-react 0.462, tailwindcss 3.4) — the prototype's CDN crutches (Tailwind Play, UMD lucide, Google-Fonts-only) all have first-class local equivalents.
3. Additive tokens keep the shadcn semantic-token invariant intact (project-model: Invariants) — 50 ui components + NotFound keep working untouched.

## Steelman of the rejected options

**(b) Parallel page + route flip** — strongest case: zero risk to the live page mid-port, easy A/B. Rejected because all old sections are being fully discarded; a git branch gives the same safety without a throwaway route to clean up. **(c) Serve the prototype as static HTML** — strongest case: pixel-perfect by construction, zero port effort. Rejected because the calculator/marquee/parallax belong in React for maintainability, and ejecting strands the Vite pipeline and the SPA router.

## Verified corrections folded in (what the skeptics changed)

1. **Body background**: `--background` is white and body applies `bg-background` (src/index.css:12,99) — the design needs paper `#F7F8F2` visible at hero gutters/section gaps. Fix: re-point `--background`'s HSL **value** to paper (names untouched). `grounded`
2. **Shadow scale**: `tailwind.config.ts:57-62` overrides `shadow-sm/md/lg` to sky-blue-tinted values; prototype pills use `shadow-lg/md` expecting stock neutrals. Fix: delete the boxShadow overrides in the token step. `grounded`
3. **Radius scale**: `tailwind.config.ts:68-72` maps `rounded-sm/md/lg` to `var(--radius)` (shadcn convention — keep it). Ported markup uses explicit `rounded-[2px]/[6px]/[8px]` where the prototype used `rounded-sm/md/lg`. `grounded`
4. **Storm Shield ships static** ("Healthy 42%"). The prototype's state machine binds to `.ss-chip`/`#ss-footnote` that don't exist in its markup — the interaction never ran; static IS the faithful port. `grounded`
5. **Marquee seam fix**: the prototype's `-50%` loop with flex `gap` jumps by g/2 each cycle (real prototype bug). Port uses per-card `mr-4 sm:mr-5` instead of container gap so pitch = exactly 50%; duplicate set is `aria-hidden`; keys are positional. `grounded`
6. **Calculator initial note** must be computed from the formula (`≈ $8,500 unlocked monthly · instead of waiting Net 60`) — the static markup string ("settled privately in seconds") is overwritten on load in the prototype. `grounded`
7. **Fonts**: self-host the 5 Satoshi woff2 (300/400/500/700/900, 126 KB) with `font-display: swap`, preload Bold; **drop Fontshare**; add Google Fonts Inter `400;500;600;700` (body switches Satoshi→Inter per prototype line 45); **drop JetBrains Mono** (one 11.5px caption → system mono stack). Footer `h4 font-semibold` falls back 600→700 identically in prototype and port — no regression. `grounded`
8. **Images**: `src/assets/monaris/` ESM imports (hashed). Resize chip-mountains 1000px/1MB → 128px (it renders at ~40px). Payload grows ~3.1 MB → ~5.1 MB pre-WebP; WebP conversion is a required fast-follow (no encoder installed today — `brew install webp`). `grounded`
9. **Meta**: rewrite title/OG for the new positioning; current head has no `og:image` despite `twitter:card=summary_large_image` — add one. Keep `#root` + `/src/main.tsx` module tag. `grounded`
10. **Icons**: all lucide names verified present in lucide-react 0.462 (MousePointer2, TriangleAlert, Twitter, BadgeCheck, Workflow, Gauge, ShieldAlert, RefreshCcw, Zap). `grounded`
11. No StrictMode in main.tsx → no double-effect concern; scroll effects still get proper cleanup + rAF throttling (prototype's `tick` guard is vestigial dead code). `grounded`

## Build order (runnable checkpoint after each)

0. **Assets**: copy 4 brand PNGs (chip resized) + `monaris-m-black.png` → `src/assets/monaris/`; 5 Satoshi woff2 → `public/fonts/`.
1. **Tokens**: `tailwind.config.ts` — add flat hex colors (volt, volt-bright `#DDFC01`, volt-sky `#DBF227`, volt-dark `#7CB518`, volt-text `#67790A`, ink `#131720`, paper `#F7F8F2`, dark `#0B0D07`, lime-soft ≈ `#EFF8CE`), fontFamily `sans: Inter`, keep `display: Satoshi`, mono → system stack; delete boxShadow sm/md/lg overrides. `index.css` — re-point `--background` to paper; add `@font-face` ×5; port prototype CSS (`.disp .tnum .card-soft .card-float .bg-grad .bg-grad-dark .marker .hero-clip .stars`, range-slider thumbs, `rise/floaty/mqx/mqx2` keyframes, `.mq-l/.mq-r`, `::selection`, reduced-motion block). `index.html` — drop Fontshare, add Inter link + font preload, rewrite meta.
2. **Shared primitives** (`src/components/landing/`): `SectionBadge`, `ArrowButton`, `CursorTag`, `data.ts` (testimonials, TERMS).
3. **Static sections**, wired into `Index.tsx` one at a time: `Hero` (incl. new nav), `Statement`, `Calculator` (markup), `CreditLayer`, `Testimonials`, `Treasury` + `StormShield` (static), `Advantage`, `Finale`, `Footer`.
4. **Interactivity**: calculator `useState` (raw-string inputs, format-on-blur, derived output via `splitMoney` JSX, WAAPI pop via `ref.animate`, reset); marquee CSS-only doubled JSX; statement parallax + coin bounce as `useEffect` + rAF + reduced-motion guard + cleanup.
5. **Cleanup**: rewrite `Index.tsx` final tree; delete old sections (all 14), `Navbar.tsx`, `NavLink.tsx`, `.text-gradient/.glow-primary/.animate-fade-up` utilities; verify `npm run build` + visual pass.

## Assumptions & falsifiers

- New landing uses no shadcn primitives that render Satoshi-600 headings (falsifier: wiring `CardTitle`/`DialogTitle` into a landing section → add a 600 woff2 or override the heading rule).
- Old anchor deep-links (`#product` etc.) have no meaningful external traffic (falsifier: analytics show inbound anchors → add scroll-redirect shim).
- spothq CDN acceptable for 4 decorative coin SVGs (onerror fallbacks) — vendor locally later if offline matters.

## Open questions (non-blocking, defaults chosen)

- Mobile nav: prototype ships **no** nav links below `md` (logo + Launch app only). Default: match prototype; add a mobile menu as follow-up if wanted.
- WebP conversion: deferred to fast-follow (needs `brew install webp` or `vite-imagetools`).
- Follow-up hygiene PR: prune 45 unused shadcn components + `recharts` + duplicate `motion` dep + stray root folders.

> Cross-tier verification reduces instance-/tier-level error correlation but not shared-lineage
> blind spots. Treat cross-tier survival as weaker evidence than grounding.

## Changelog

Loop round 1 (verify) refuted 3 of 4 draft claims in part: token plan gained the paper-background re-point + shadow-override removal + explicit radii; Storm Shield flipped interactive→static; marquee gained the seam fix; image framing corrected from "drop" to "growth requiring WebP follow-up". No claims fell entirely; round 2 deemed unnecessary (all fixes grounded directly in file evidence).

## Telemetry

- divergence: 0.61 (evidence 0.75, conclusion 0.40) | threshold 0.30 UNCALIBRATED
- models: draft=fable · skeptics=2x-opus+1x-sonnet (cross-tier; version axis unavailable)
- claims: C1 grounded (2 fixes) · C2 grounded · C3 grounded (2 fixes) · C4 grounded (3 fixes)
- fleet: 6 lenses (first-principles, adversary, practitioner, UX-fidelity, YAGNI, performance)
