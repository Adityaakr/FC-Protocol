import { useEffect } from "react";

const DEFAULT_TITLE = "Monaris, Private credit layer for the stablecoin economy";
const DEFAULT_DESCRIPTION =
  "Monaris turns stablecoin receivables into instant, private liquidity. Issue an invoice, choose what to disclose, and get liquidity, private by default, compliant by design.";

/**
 * Runtime <title> + meta-description swap. Helps humans and Googlebot (which
 * renders JS). Social crawlers never see this; per-post share cards need the
 * static head-rewrite step (docs/03, fast-follow).
 */
export const usePageMeta = (title: string, description?: string) => {
  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (description) meta?.setAttribute("content", description);
    return () => {
      document.title = DEFAULT_TITLE;
      meta?.setAttribute("content", DEFAULT_DESCRIPTION);
    };
  }, [title, description]);
};
