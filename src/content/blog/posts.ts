import { lazy } from "react";
import type { ComponentType, LazyExoticComponent } from "react";

export interface PostMeta {
  slug: string; // becomes /blog/<slug>
  title: string; // sentence case, ends with a period (site voice)
  description: string; // 1-2 lines; card copy + meta description
  category: string; // "Announcement" | "Product" | "Engineering" | "Vision"
  date: string; // ISO, e.g. "2026-07-05"
  cover?: string; // public path e.g. "/blog-covers/<slug>.jpg"; omit for the volt fallback card
  coverClass?: string; // object-fit/position utilities for the cover; defaults to cover+center
  stackedCover?: boolean; // below xl, lay the cover above the text instead of behind it
  readMinutes?: number; // shown as "N min read"; ~200 words/min, defaults to 4
  topRead?: boolean; // pins the post into the dark "Top reads" strip (max 4 shown)
}

// New posts MUST follow docs/03-blog-writing-style-guide.md (numbered "01 - " dash
// headings, .marker highlights, closing CTA row; monaris-private-credit-layer.tsx
// is the reference implementation).
// KEEP THIS ARRAY SERIALIZABLE: no JSX, no asset imports. The per-post share-card
// build script (docs/04, fast-follow) imports it in Node.
export const POST_META: PostMeta[] = [
  {
    slug: "monaris-payy-ecosystem",
    title: "Excited to Join the Payy Ecosystem.",
    description:
      "Monaris is joining the Payy ecosystem to build structured, private credit for stablecoin businesses. Payments raced ahead. Credit stayed behind.",
    category: "Announcement",
    date: "2026-07-11",
    cover: "/blog-covers/monaris-payy-ecosystem.jpg",
    // The lockup sits at ~59% of the cover's height while the overlaid text starts at
    // ~42%, so on any block narrower than xl they collide whatever the crop. Below xl
    // the cover is stacked above the text (16/9, its native ratio, so nothing is cut);
    // from xl the block is wide enough to overlay, cropping the sky from the bottom so
    // the lockup lifts clear of the title bars.
    stackedCover: true,
    coverClass: "xl:object-cover xl:object-bottom",
    readMinutes: 4,
    topRead: true,
  },
  {
    slug: "monaris-private-credit-layer-stablecoin-economy",
    title: "The Stablecoin Economy Is Missing Its Credit Layer.",
    description:
      "Settlement is solved. Credit is the opportunity. Monaris is building it.",
    category: "Vision",
    date: "2026-07-05",
    cover: "/blog-covers/monaris-private-credit-layer.jpg",
    readMinutes: 6,
    topRead: true,
  },
];

// lazy() is created once at module scope. Never call lazy() inside a component
// render: it recreates the component and remounts the body forever.
const BODIES: Record<string, LazyExoticComponent<ComponentType>> = {
  "monaris-payy-ecosystem": lazy(() => import("./posts/monaris-payy-ecosystem")),
  "monaris-private-credit-layer-stablecoin-economy": lazy(
    () => import("./posts/monaris-private-credit-layer"),
  ),
};

export const posts: PostMeta[] = [...POST_META].sort(
  (a, b) => +new Date(b.date) - +new Date(a.date),
);

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
export const getBody = (slug: string) => BODIES[slug];

export const formatPostDate = (iso: string) =>
  new Date(iso + "T00:00:00")
    .toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    .toUpperCase();
