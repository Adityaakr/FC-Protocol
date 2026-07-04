# 03 · Blog section plan (Monaris)

*2026-07-04 · produced by /prism-plan (looped, 6 lenses, verified). Status: approved-pending-user on 3 open questions below.*

## 1. Recommendation

Ship a **zero-new-dependency, in-repo blog**: TSX post files plus a typed registry, two lazy routes, a dedicated blog nav, and a card-grid index matching the reference layout. Ship the SEO *foundation* in v1 (default og:image, og:url, sitemap, runtime title swap) and per-post static share cards as the first named fast-follow. A hosting rewrite config ships **with** v1: it is a launch blocker, not polish.

## 2. The design

### Content model (`src/content/blog/`)

- `posts.ts`: the registry, cloning the `data.ts` idiom (data.ts:7-45).

```ts
import { lazy } from "react";

export interface PostMeta {
  slug: string;          // becomes /blog/<slug>
  title: string;         // sentence case, ends with a period (site voice)
  description: string;   // 1-2 lines, card + meta description
  category: string;      // "Engineering" | "Product" | "Announcement"
  date: string;          // ISO "2026-07-04"
  cover: string;         // "/blog-covers/<slug>.jpg" (public path, see below)
}

// KEEP META SERIALIZABLE: no JSX, no asset imports in this array.
// A future post-build head-rewrite script will import it in Node.
export const POST_META: PostMeta[] = [ /* newest first or sort by date */ ];

// lazy() created ONCE at module scope. Never call lazy() inside a
// component render: it recreates the component and remounts forever.
const BODIES: Record<string, ReturnType<typeof lazy>> = {
  // "my-post": lazy(() => import("./posts/my-post")),
};

export const getPost = (slug: string) =>
  POST_META.find(p => p.slug === slug);
export const getBody = (slug: string) => BODIES[slug];
```

- `posts/<slug>.tsx`: default-exports the body as plain semantic JSX (`h2`, `p`, `ul`, `img`, `blockquote`, `pre`, `table`), styled by a `.prose` class. No classNames needed in post bodies.
- Covers live in `public/blog-covers/<slug>.jpg`. This deviates from the ESM-import convention (data.ts:1-5) deliberately: a public path is stable and serializable, which the fast-follow share-card script and per-post `og:image` both require. Target ~1600px wide, 16:10, compressed (the landing already carries ~4.8 MB of PNG debt; do not add to it).

**Authoring a post = 3 steps:** drop cover in `public/blog-covers/`, append one object to `POST_META` + one line to `BODIES`, create `posts/<slug>.tsx` and write.

### Routing (`src/App.tsx`)

Two `React.lazy` routes above the catch-all (App.tsx:19 comment says exactly this), wrapped in `Suspense fallback={null}`. Landing stays eagerly imported: its bundle is untouched (verified: no lazy exists today, App.tsx:6-7).

```tsx
const BlogIndex = lazy(() => import("./pages/BlogIndex"));
const BlogPost  = lazy(() => import("./pages/BlogPost"));
// <Route path="/blog" .../> and <Route path="/blog/:slug" .../> above "*"
```

**ScrollManager** (new, mounted inside BrowserRouter). The naive pathname-effect version was refuted in verification: it fires on POP and destroys native back-button scroll restoration. Correct version:

```tsx
const ScrollManager = () => {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();          // exists in RR 6.30.1 (verified)
  useEffect(() => {
    if (navType === "POP") return;              // let the browser restore
    if (hash) {
      requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "instant" });
      });
      return;
    }
    window.scrollTo({ top: 0, behavior: "instant" }); // overrides global smooth (index.css:93)
  }, [pathname, hash, navType]);
  return null;
};
```

The hash branch also fixes the cold-load `/#calculator` gap: on a full navigation the browser tries the fragment before React renders, lands at top, and never retries. `"instant"` is a valid `ScrollBehavior` in TS 5.8 lib.dom (verified, lib.dom.d.ts:29582).

### Pages and components

- `src/components/blog/BlogNav.tsx`: Hero's nav is not reusable (welded into the gradient hero block, hash-anchored, Hero.tsx:29-51). Small sticky bar: `bg-paper/80 backdrop-blur`, logo mark + wordmark linking to `/` (borrow Hero.tsx:30-33), links Blog + Docs (`DOCS_URL`, data.ts:49), and the Launch-app pill verbatim (Hero.tsx:44-49). Mobile: logo + CTA only (`hidden sm:flex` on links), matching the site's existing no-hamburger precedent (Hero.tsx:34).
- `src/components/blog/BlogCard.tsx`: whole card is ONE `<Link>`.
  - Shell `rounded-[24px] bg-white bg-grad card-soft p-3` (Treasury.tsx:37); cover inside `rounded-[16px] overflow-hidden aspect-[16/10]`, `loading="lazy"`.
  - Meta row: `text-[11px] font-semibold uppercase tracking-[.16em]`, category in `text-volt-text` (Testimonials.tsx:48), date `text-ink/50`, format `JUL 4, 2026`. **Not mono**: no mono webfont exists (tailwind.config.ts:19 is a system stack).
  - Title `disp text-[20px] font-bold text-ink leading-[1.15] line-clamp-3` (Satoshi 700; 600/800 do not exist, index.css:5-11). Description `text-[13.5px] text-neutral-500 line-clamp-2`.
  - Hover: `hover:-translate-y-0.5` + shadow bump to `card-float` (button idiom, Hero.tsx:44; no card-hover precedent exists). Focus: `focus-visible:outline-2 outline-offset-4 outline-volt-dark` (idiom at index.css:210-212).
  - Missing cover fallback: volt gradient panel (Footer.tsx:6 gradient) with the title overlaid, like the reference's fourth card.
- `src/pages/BlogIndex.tsx`: BlogNav → header (eyebrow pattern from Testimonials.tsx:48-52, headline in site voice with dimmed second clause, e.g. `Notes on private credit.`) → grid `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5`, container `max-w-7xl` (Treasury.tsx:24) → Finale + Footer. With fewer than 3 posts, render the newest as a featured wide 2-col card instead of a sparse grid.
- `src/pages/BlogPost.tsx`: resolve slug via `getPost`/`getBody`, unknown slug → `<Navigate to="/blog" replace />`. Meta row → `h1` `disp text-4xl sm:text-5xl font-bold leading-[1.05]` → description lede → cover `rounded-[24px]` → `.prose` body in `max-w-2xl` (Hero.tsx:60 precedent, ~68ch) → back-to-blog link → Finale + Footer.
- `.prose` in `src/index.css`: hand-rolled, realistically **~80-120 lines** (not 30: headings, paragraphs, lists, links, blockquote, inline+block code, tables, images, margin rhythm, first/last resets). Reason to hand-roll rather than restore `@tailwindcss/typography`: the plugin's defaults lean on font-weight 600, which Satoshi does not have here, so we would fight it; the repo's culture is hand-rolled CSS (index.css:110-220). Note honestly: the plugin is dev-only (zero runtime weight), so this is a control decision, not a hygiene one.

### Wiring the blog into the site

- `Footer.tsx`: add `Blog` as a `<Link to="/blog">` in the Resources column (Footer.tsx:51-57; Footer gains its first react-router import).
- `Footer.tsx` + `Hero.tsx` hash anchors: rewrite bare `#x` to `/#x` (Footer.tsx:24,44-63; Hero's nav can stay `#x` since Hero only renders on `/`, but `/#x` is harmless and uniform). Verified behavior-preserving on `/`: same resolved URL, same-document fragment navigation, no reload. From `/blog/*` it is a full navigation back to the landing plus the ScrollManager hash fix.
- `Hero.tsx` nav: add a `Blog` link (`/blog`); without a landing-page entry point the blog is undiscoverable, which defeats it.
- Also fix while there: `NotFound.tsx:16` raw `<a href="/">` → `Link` (it now sits on the blog's mistyped-slug path).

### SEO/share (v1 vs fast-follow)

V1 (ships with the blog):
- `index.html`: add default `og:image` + `twitter:image` (1200×630 asset, absolute URL) and `og:url`. The twitter card is declared `summary_large_image` today with no image at all (index.html:19), broken site-wide.
- `usePageMeta(title, description)` hook on both blog pages: sets `document.title` + meta description. Helps humans and Googlebot (which renders JS); does nothing for social crawlers, and we say so.
- `public/sitemap.xml` (static, one `<url>` per post, maintained by hand at monthly cadence) + `Sitemap:` line in `public/robots.txt`.
- **Hosting rewrite config** (launch blocker: `/blog/:slug` hard-404s on refresh/share today because no config exists; dev server masks it). Vercel: `vercel.json` `{"rewrites":[{"source":"/(.*)","destination":"/index.html"}]}`. Netlify: `public/_redirects` `/* /index.html 200`. Which one depends on the deploy target (open question 1).

Fast-follow #1 (first thing after launch, before promoting posts): per-post static share cards. Two candidate routes, spike-then-pick:
- (a) ~40-line Node post-build script: for each `POST_META` entry, copy `dist/index.html` to `dist/blog/<slug>/index.html` rewriting `<title>`, description, `og:*`, `twitter:*` from the registry (this is why meta stays serializable). Zero deps, no headless browser.
- (b) `vite-prerender-plugin` (0.5.13, maintained, no Puppeteer): full prerender per route. Unverified with RR 6.30 as of this plan; needs the spike.
Emit JSON-LD `Article` in the same step, not before (social crawlers ignore it; Google only reads it usefully from static HTML).

LATER: RSS, category filter UI (at ~15+ posts), auto reading time, analytics.
NEVER (for now): MDX (revisit only if TSX authoring friction proves real; the registry's opaque body seam makes adoption non-breaking), CMS, comments, search, pagination, multi-author, syntax-highlighting libs.

## 3. Steelman of the rejected options

**MDX + @tailwindcss/typography (the practitioner case).** Strongest form: both are build-time deps, so the 13-runtime-dep discipline is technically untouched; markdown authoring is genuinely lower-friction than TSX for long prose; the typography plugin is battle-tested against edge cases a hand-rolled `.prose` will hit one by one. This nearly won. We passed because: the founder writes TSX daily; plain-JSX bodies under a `.prose` class remove the per-paragraph className tax that motivates MDX; the plugin's weight-600 defaults conflict with the available Satoshi weights; and the registry keeps the body component opaque, so MDX can be adopted later purely additively. If a non-technical writer ever joins, this decision flips (falsifier below).

**Per-post prerender in v1 (the SEO case).** Strongest form: social share cards are the primary distribution mechanism for a crypto startup blog, crawlers do not run JS, so launching without per-post cards arguably launches a blog that cannot do its job. We sequenced it as fast-follow #1 rather than v1 because the blog launches with zero-to-one posts (nothing to share yet), the Vite 5 + RR 6.30 prerender recipe is unverified, and the serializable-meta seam means the script route is a bounded, zero-dep addition. The skeptic panel's zero-dep script counterproposal was folded in as the leading candidate rather than discarded.

## 4. Assumptions and falsifiers

- **Assumes** the founder remains the only author and is TSX-fluent. A non-technical author joining falsifies the zero-dep choice → adopt MDX behind the existing seam.
- **Assumes** "Satoshi font and Inter for heading" in the request meant the established brand convention (Satoshi headings / Inter body, enforced globally at index.css:100-102). If Inter headings on blog pages were literally intended, it is a one-selector override, but confirm first.
- **Assumes** deploy target is a static host with configurable rewrites. A host without rewrites (bare S3 website endpoint, GH Pages without hacks) falsifies BrowserRouter for the blog → HashRouter or prerendered files become mandatory.
- **Assumes** post cadence ~monthly. Weekly-or-faster cadence makes the hand-maintained sitemap and per-post script entries annoying → automate generation from the registry at build.
- **Payy constraint** (project memory, commit e07e9a5): the reference screenshot is a Payy blog. Layout inspiration only; no copy, assets, or comments referencing it may enter the repo. Re-run `grep -rin payy src/ index.html public/` before shipping.

## 5. Open questions

1. **Where does this deploy?** Decides which rewrite config ships (vercel.json vs _redirects vs other) and the fast-follow's serving details. Blocking for launch, not for build.
2. **Default og:image asset**: needs a designed 1200×630 brand card and the production domain for absolute URLs (`SITE_URL` in data.ts:49; confirm it is the real domain).
3. **Grid at xl**: reference is 4-col; Satoshi 700 titles clamp hard at ~300px columns. Plan caps at `lg:grid-cols-3`; approve or ask for `xl:grid-cols-4`.

## 6. Verification record

Grounding: 15/15 codebase and library claims verified against files/installed types (react-router-dom 6.30.1 exports `useNavigationType` and `Navigate`; Vite 5.4.19 glob/dynamic-import chunking; TS 5.8.3 `ScrollBehavior` includes `"instant"`; `@tailwindcss/typography` uninstalled at docs/02:25; no hosting config anywhere; index.html og gaps at :15-21).

Skeptic panel (2× Opus + 1× Sonnet, refute-by-default): C1 zero-dep survives 2-1 (corrected: `.prose` is ~100 lines, plugin is dev-only so the hygiene framing was overstated; decision now rests on weight-control + culture); C2 anchor rewrite survives 3-0 (cold-load hash scroll gap folded in as the ScrollManager hash branch); C3 defer-prerender survives 2-1 (the refuting skeptic's zero-dep head-rewrite script was adopted as fast-follow candidate (a) and drove the serializable-meta design); C4 naive ScrollToTop REFUTED 3-0 (POP navigation clobbers native scroll restoration) → replaced with the navigation-type-gated ScrollManager, whose API was then verified against installed types.

> Cross-tier verification reduces instance-/tier-level error correlation but not shared-lineage
> blind spots. Treat cross-tier survival as weaker evidence than grounding.

Claim labels: C1 `cross-tier-survived` (+grounded premises) · C2 `grounded` · C3 `grounded` (crawler behavior source-cited) · C4 struck-and-replaced; replacement `grounded`.

## Addendum 2026-07-04: typography inversion (user decision, post-build)

Assumption 2 in §4 was falsified: the user confirmed (twice) that blog typography inverts the site convention. Blog headings are **Inter** (index/post h1, card titles, `.prose` h2/h3, all `font-sans` 700), body/content is **Satoshi** (`.prose` font-family, post lede, card descriptions). Landing headings stay Satoshi; the inversion is blog-scoped only. `.prose strong` moved 600 → 700 (Satoshi has no 600). Standing convention for all future posts regardless of source format; recorded in `.prism/project-model.md` and auto-memory. Verified via computed styles on the dev server: post h1 = Inter 700, prose body = Satoshi 400, landing h1 = Satoshi.

## Telemetry
- divergence: 0.53 (evidence 0.55, conclusion 0.50) | threshold 0.30 UNCALIBRATED
- models: draft=fable · skeptics=2x-opus+1x-sonnet (cross-tier; version axis unavailable)
- claims: C2 grounded · C3 grounded · C1 cross-tier-survived · C4 struck→replacement grounded
- fleet: 6 lenses (first-principles, adversary, practitioner, UX, YAGNI, SEO) + 1 grounding verifier + 3 skeptics
