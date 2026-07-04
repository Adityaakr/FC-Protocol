import { Link } from "react-router-dom";
import logoMark from "@/assets/monaris/monaris-m-black.png";
import { formatPostDate, type PostMeta } from "@/content/blog/posts";

// Decorative volt panel for posts without a cover image. The title is NOT
// repeated here; it always renders below the cover.
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
  <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.16em]">
    <span className="text-volt-text">{post.category}</span>
    <span className="h-1 w-1 rounded-full bg-ink/20" />
    <time dateTime={post.date} className="text-ink/50">{formatPostDate(post.date)}</time>
  </div>
);

export const BlogCard = ({ post }: { post: PostMeta }) => (
  <Link
    to={`/blog/${post.slug}`}
    className="group flex flex-col rounded-[24px] bg-white bg-grad card-soft p-3 transition-all hover:-translate-y-0.5 hover:card-float focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-volt-dark"
  >
    <div className="aspect-[16/10] overflow-hidden rounded-[16px]">
      {post.cover ? (
        <img src={post.cover} alt="" loading="lazy" className="h-full w-full object-cover" />
      ) : (
        <CoverFallback />
      )}
    </div>
    <div className="flex flex-1 flex-col p-4">
      <MetaRow post={post} />
      <h3 className="mt-3 font-sans text-[20px] font-bold tracking-[-.02em] leading-[1.15] text-ink line-clamp-3">{post.title}</h3>
      <p className="mt-2 font-display text-[14px] leading-relaxed text-neutral-500 line-clamp-2">{post.description}</p>
    </div>
  </Link>
);

// Wide 2-column variant used while the grid is sparse (fewer than 3 posts).
export const FeaturedBlogCard = ({ post }: { post: PostMeta }) => (
  <Link
    to={`/blog/${post.slug}`}
    className="group grid rounded-[24px] bg-white bg-grad card-soft p-3 transition-all hover:-translate-y-0.5 hover:card-float focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-volt-dark lg:grid-cols-2 lg:gap-2"
  >
    <div className="aspect-[16/10] overflow-hidden rounded-[16px]">
      {post.cover ? (
        <img src={post.cover} alt="" loading="lazy" className="h-full w-full object-cover" />
      ) : (
        <CoverFallback />
      )}
    </div>
    <div className="flex flex-col justify-center p-5 sm:p-8">
      <MetaRow post={post} />
      <h3 className="mt-4 font-sans text-2xl font-bold tracking-[-.02em] leading-[1.12] text-ink sm:text-3xl">{post.title}</h3>
      <p className="mt-3 font-display text-[15px] leading-relaxed text-neutral-500">{post.description}</p>
      <span className="mt-5 text-sm font-semibold text-ink/60 transition-colors group-hover:text-ink">Read the post</span>
    </div>
  </Link>
);
