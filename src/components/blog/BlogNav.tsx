import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import logoMark from "@/assets/monaris/monaris-m-black.png";
import { DOCS_URL } from "@/components/landing/data";

// Slim top bar for blog pages. The landing nav lives inside Hero and is welded
// to the gradient hero visuals, so blog pages get their own.
const BlogNav = () => (
  <nav className="sticky top-0 z-40 border-b border-ink/10 bg-paper/85 backdrop-blur-xl">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
      <Link to="/" className="flex items-center gap-2.5">
        <img src={logoMark} alt="Monaris" className="h-7 w-7" />
        <span className="font-display font-black tracking-[.14em] text-[16px] text-[#0d0d0d]">MONARIS</span>
      </Link>
      <div className="hidden items-center gap-1 text-sm font-medium text-[#0d0d0d]/70 sm:flex">
        <Link to="/blog" className="flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-[#0d0d0d] card-soft">
          <span className="h-1.5 w-1.5 rounded-full bg-volt-dark" />Blog
        </Link>
        <a href={DOCS_URL} className="rounded-full px-4 py-1.5 transition-colors hover:text-[#0d0d0d]">Docs</a>
      </div>
      <a href="/#cta" className="inline-flex items-center gap-2 rounded-full bg-[#0d0d0d] py-1.5 pl-4 pr-1.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5">
        Launch app{" "}
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-volt text-[#0d0d0d]">
          <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </a>
    </div>
  </nav>
);

export default BlogNav;
