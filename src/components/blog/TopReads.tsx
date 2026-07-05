import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import logoMark from "@/assets/monaris/monaris-m-black.png";
import { formatPostDate, posts, type PostMeta } from "@/content/blog/posts";

// Dark "Top reads" strip on the blog index (Aztec-journal style): mono meta row,
// big paper titles, hover-revealed volt "Read more". Shows posts flagged
// topRead in POST_META, falling back to the latest posts; max 4.
const flagged = posts.filter((p) => p.topRead);
const picks = (flagged.length > 0 ? flagged : posts).slice(0, 4);

const CoverFallback = () => (
  <div
    className="flex h-full w-full items-end justify-between p-5"
    style={{ background: "linear-gradient(180deg,#E9FC66,#DBF227 55%,#C8FF00)" }}
  >
    <img src={logoMark} alt="" className="h-8 w-8 opacity-90" />
    <span className="text-[11px] font-semibold uppercase tracking-[.18em] text-ink/50">Monaris blog</span>
  </div>
);

const TopReadCard = ({ post }: { post: PostMeta }) => (
  <Link
    to={`/blog/${post.slug}`}
    className="group flex flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-volt"
  >
    <div className="aspect-[16/10] w-full overflow-hidden bg-paper/5">
      {post.cover ? (
        <img
          src={post.cover}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.03]"
        />
      ) : (
        <CoverFallback />
      )}
    </div>
    <div className="mt-4 flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[.08em] text-paper/50">
      <time dateTime={post.date}>{formatPostDate(post.date)}</time>
      <span className="h-1 w-1 rounded-full bg-volt/60" aria-hidden />
      <span>{post.readMinutes ?? 4} min read</span>
    </div>
    <h3 className="mt-3 font-sans text-xl font-bold leading-[1.3] tracking-[-.02em] text-paper transition-colors group-hover:text-volt">
      {post.title}
    </h3>
    {/* always visible on touch widths; hover/focus-revealed on desktop */}
    <span className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-bold text-volt transition-opacity lg:opacity-0 lg:group-hover:opacity-100 lg:group-focus-visible:opacity-100">
      Read more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
    </span>
  </Link>
);

const TopReads = () =>
  picks.length > 0 ? (
    <section className="blog-hero-band mb-16 text-paper sm:mb-24">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div className="flex items-end justify-between border-b border-paper/15 pb-4">
          <span className="font-mono text-[13px] font-semibold uppercase tracking-[.16em] text-volt">
            Top reads
          </span>
          <span className="text-[13px] font-medium text-paper/50 sm:text-sm">
            ({String(picks.length).padStart(2, "0")})
          </span>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {picks.map((post) => (
            <TopReadCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  ) : null;

export default TopReads;
