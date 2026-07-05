import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/**
 * Route-change scroll handling for a BrowserRouter SPA with global
 * `html { scroll-behavior: smooth }` (index.css).
 *
 * - PUSH/REPLACE without hash: jump to top instantly (never animate a route change).
 * - Any navigation with a hash: scroll to the target after paint. This also fixes
 *   cold loads of /#anchor, where the browser tries the fragment before React
 *   has rendered the target and gives up.
 * - POP without hash: do nothing; the browser's native scroll restoration wins.
 *   (A blanket scroll-to-top here would break back/forward position restore.)
 */
const ScrollManager = () => {
  const { pathname, hash } = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "instant" });
      });
      return;
    }
    if (navType === "POP") return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash, navType]);

  return null;
};

export default ScrollManager;
