import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import logoMark from "@/assets/monaris/monaris-m-black.png";
import { DOCS_URL } from "@/components/landing/data";

// Slim top bar for blog pages. Dark ink glass so it welds into the blog's dark
// editorial hero band instead of cutting a light strip above it. The landing
// nav lives inside Hero and is welded to the gradient hero visuals.
const BlogNav = () => (
  <nav className="sticky top-0 z-40 bg-ink">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
      <Link to="/" className="flex items-center gap-2.5">
        {/* the mark ships black-on-transparent; invert renders it paper-white */}
        <img src={logoMark} alt="Monaris" className="h-7 w-7 invert" />
        <span className="font-display text-[16px] font-black tracking-[.14em] text-paper">MONARIS</span>
      </Link>
      <div className="hidden items-center gap-1 text-sm font-medium text-paper/70 sm:flex">
        <Link to="/blog" className="flex items-center gap-1.5 rounded-full bg-volt px-4 py-1.5 font-semibold text-ink">
          <span className="h-1.5 w-1.5 rounded-full bg-ink" />Blog
        </Link>
        <a href={DOCS_URL} className="rounded-full px-4 py-1.5 transition-colors hover:text-paper">Docs</a>
      </div>
      <a href="/#cta" className="inline-flex items-center gap-2 rounded-full bg-paper py-1.5 pl-4 pr-1.5 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5">
        Launch app{" "}
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-ink text-volt">
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </a>
    </div>
  </nav>
);

export default BlogNav;
