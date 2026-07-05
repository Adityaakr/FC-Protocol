import { lazy } from "react";
import type { ComponentType, LazyExoticComponent } from "react";

export interface PostMeta {
  slug: string; // becomes /blog/<slug>
  title: string; // sentence case, ends with a period (site voice)
  description: string; // 1-2 lines; card copy + meta description
  category: string; // "Announcement" | "Product" | "Engineering" | "Vision"
  date: string; // ISO, e.g. "2026-07-05"
  cover?: string; // public path e.g. "/blog-covers/<slug>.jpg"; omit for the volt fallback card
}

// KEEP THIS ARRAY SERIALIZABLE: no JSX, no asset imports. The per-post share-card
// build script (docs/03, fast-follow) imports it in Node.
export const POST_META: PostMeta[] = [
  {
    slug: "monaris-private-credit-layer-stablecoin-economy",
    title: "Monaris: The Private Credit Layer for the Stablecoin Economy.",
    description:
      "How Monaris turns receivables and recurring cashflow into instant liquidity - backed by private, verifiable credit. One layer for payments, working capital, and treasury.",
    category: "Vision",
    date: "2026-07-05",
    cover: "/blog-covers/monaris-private-credit-layer.jpg",
  },
];

// lazy() is created once at module scope. Never call lazy() inside a component
// render: it recreates the component and remounts the body forever.
const BODIES: Record<string, LazyExoticComponent<ComponentType>> = {
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
