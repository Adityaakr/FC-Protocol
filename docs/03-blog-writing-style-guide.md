# 03 — Monaris blog writing style guide

Every new post in the Monaris blog follows this structure. Do not invent a new style per
post. Reference implementation: `src/content/blog/posts/monaris-private-credit-layer.tsx`
(the canonical example of all rules below).

## File mechanics

- One post = one file: `src/content/blog/posts/<slug>.tsx`, default-exporting plain
  semantic JSX rendered inside `.prose` on the BlogPost page.
- Register the post in `src/content/blog/posts.ts`: metadata in `POST_META` (keep it
  serializable — no JSX, no asset imports) and a `lazy()` entry in `BODIES` at module
  scope (never inside a render).
- Cover images go in `public/blog-covers/<slug>.jpg`, referenced by public path.
- Set `readMinutes` (~200 words/min) and flag standout posts `topRead: true` — the dark
  "Top reads" strip on the blog index shows up to 4 flagged posts (falls back to latest).

## Typography (inverse of the landing site)

- Headings: Inter (`.prose h2` handles it). Body: Satoshi (`.prose` handles it).
- Satoshi ships 300/400/500/700/900 only — bold inside prose is 700, never 600/800.

## Voice and punctuation

- Sentence case everywhere except the post title, which ends with a period (site voice).
- **No em-dashes, ever.** Use commas, colons, or a period and a new sentence.
- Confident, compressed, active voice. "Selective disclosure", never "anonymous".

## Structure (the editorial arc)

1. **Hook intro** — open with the macro trend, then land the problem as a two-sided gap
   before introducing Monaris as the bridge. First marker highlight lives here.
2. **Numbered sections** — headings are numbered with a dash, never a period:

   ```tsx
   <h2><span className="tnum text-volt-text">01</span> - Turning cashflow into instant liquidity</h2>
   ```

   Sentence case after the number. Sections build: problem → mechanism → why it matters →
   where the market is going → what Monaris is building.
3. **Closing** — a bolded tagline folded into a real closing sentence, then the CTA row.

## Emphasis system

- **Key lines** (3–5 per post, roughly one per major section): volt highlighter via
  `<span className="marker">One or two punchy sentences.</span>`, usually as the first
  line of a section. This is the post's skimmable spine.
- **Secondary emphasis**: `<strong>` beats ("That is the Monaris loop.").
- **Lists**: bold lead-in, lowercase continuation, no trailing periods:

  ```tsx
  <li><strong>Working capital</strong> powered by receivables and recurring cashflow</li>
  ```

## Paragraphs

Real paragraphs of 2–4 sentences. Single-sentence paragraphs are allowed only as
deliberate beats (a highlight line or a section closer), never as the default rhythm.

## Closing CTA (every post ends with this)

```tsx
<div className="mt-8 flex flex-wrap gap-3">
  <a className="cta cta-dark inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-sm font-semibold" href="https://docs.monaris.co">Read the docs</a>
  <a className="cta cta-ghost inline-flex items-center rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold transition-colors hover:border-ink/30" href="/#cta">Launch app</a>
</div>
```

## What NOT to do

- No new heading styles, no periods after heading numbers, no title-case headings.
- No walls of one-line paragraphs (the pre-rewrite failure mode).
- No pure white backgrounds anywhere in blog surfaces (see `.blog-bg` / `.blog-hero-band`
  in `src/index.css`).
- No unstyled markdown dumps: post bodies are hand-rolled semantic JSX per above.
