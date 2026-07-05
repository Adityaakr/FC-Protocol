import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import logoMark from "@/assets/monaris/monaris-m-black.png";
import { formatPostDate, type PostMeta } from "@/content/blog/posts";

const CoverFallback = () => (
  <div
    className="flex h-full w-full items-end justify-between p-5"
    style={{ background: "linear-gradient(180deg,#E9FC66,#DBF227 55%,#C8FF00)" }}
  >
    <img src={logoMark} alt="" className="h-8 w-8 opacity-90" />
    <span className="text-[11px] font-semibold uppercase tracking-[.18em] text-ink/50">Monaris blog</span>
  </div>
);

const MetaRow = ({ post }: { post: PostMeta }) => (
  <div className="flex items-center gap-3 text-[11.5px] font-bold uppercase tracking-[.08em]">
    <span className="text-volt-text">{post.category}</span>
    <time dateTime={post.date} className="text-ink/40 font-semibold">{formatPostDate(post.date)}</time>
  </div>
);

export const BlogCard = ({ post }: { post: PostMeta }) => (
  <Link
    to={`/blog/${post.slug}`}
    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white transition-all hover:border-ink/20 hover:shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-volt-dark"
  >
    <div className="aspect-[16/10] w-full overflow-hidden border-b border-ink/10 bg-ink/5">
      {post.cover ? (
        <img src={post.cover} alt="" loading="lazy" className="h-full w-full object-cover transition-opacity group-hover:opacity-90" />
      ) : (
        <CoverFallback />
      )}
    </div>
    <div className="flex flex-1 flex-col p-5 sm:p-6">
      <MetaRow post={post} />
      <h3 className="mt-3 font-sans text-xl font-bold leading-[1.25] tracking-[-.02em] text-ink transition-colors group-hover:text-ink/80 sm:text-[22px] line-clamp-3">
        {post.title}
      </h3>
      <p className="mb-6 mt-2.5 font-display text-[15px] leading-relaxed text-ink/65">
        {post.description}
      </p>
      
      <div className="mt-auto flex items-center text-[13px] font-bold tracking-wide text-volt-text transition-colors group-hover:text-[#5c6d09]">
        Read post <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  </Link>
);
