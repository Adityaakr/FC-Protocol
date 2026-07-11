import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import BlogNav from "@/components/blog/BlogNav";
import TopReads from "@/components/blog/TopReads";
import Finale from "@/components/landing/Finale";
import Footer from "@/components/landing/Footer";
import { formatPostDate, posts, type PostMeta } from "@/content/blog/posts";
import { usePageMeta } from "@/hooks/usePageMeta";

/* Every post is a full-bleed editorial block: cover, ink-bar title, read link.
   The newest carries the "Featured" prefix; the rest run in date order below it. */
const PostBlock = ({ post, featured }: { post: PostMeta; featured: boolean }) => {
  /* Stacked posts only overlay their text from xl up; below that the cover sits above
     the text at its native ratio, so a wide lockup is never cropped or written over. */
  const stacked = post.stackedCover;
  return (
  <Link
    to={`/blog/${post.slug}`}
    className={`group relative block overflow-hidden bg-dark focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-volt ${
      stacked
        ? "xl:h-[64vh] xl:max-h-[720px] xl:min-h-[440px]"
        : "h-[64vh] max-h-[720px] min-h-[440px]"
    }`}
  >
    {post.cover ? (
      <img
        src={post.cover}
        alt=""
        className={`w-full motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:scale-[1.02] ${
          stacked
            ? "aspect-[16/9] object-cover object-center xl:absolute xl:inset-0 xl:aspect-auto xl:h-full"
            : "absolute inset-0 h-full object-cover object-center"
        } ${post.coverClass ?? ""}`}
      />
    ) : (
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(180deg,#E9FC66,#DBF227 55%,#C8FF00)" }}
      />
    )}
    <div
      className={`bg-gradient-to-t from-dark/50 via-transparent to-transparent ${
        stacked ? "hidden xl:absolute xl:inset-0 xl:block" : "absolute inset-0"
      }`}
    />

    <div
      className={`relative mx-auto flex max-w-7xl flex-col justify-end px-4 sm:px-6 lg:px-8 ${
        stacked
          ? "py-8 sm:py-10 xl:absolute xl:inset-0 xl:h-full xl:py-0 xl:pb-14"
          : "h-full pb-10 sm:pb-14"
      }`}
    >
      <span className="inline-flex w-fit items-center gap-2 bg-volt px-2.5 py-1 text-[11px] font-bold uppercase tracking-[.14em] text-ink">
        {featured ? `Featured · ${post.category}` : post.category}
        <time dateTime={post.date}>{formatPostDate(post.date)}</time>
      </span>
      {/* bar height must equal line advance (1em + 2*.15em = 1.3 leading), or
          each line's bar paints over the previous line's descenders */}
      {/* line-height rides each size variant (slash syntax): a plain leading-*
          utility loses to sm:text-4xl's own line-height, and any advance below
          1.3em lets each line's bar paint over the previous line's text */}
      <h2 className="mt-4 max-w-4xl font-sans text-2xl/[1.3] font-bold tracking-[-.02em] sm:text-4xl/[1.3] lg:text-[44px]/[1.3]">
        <span className="box-decoration-clone bg-ink px-3 py-[0.15em] text-paper">
          {post.title}
        </span>
      </h2>
      <p className="mt-3 max-w-2xl font-display text-sm/[1.5] font-medium sm:text-lg/[1.5]">
        <span className="box-decoration-clone bg-ink/90 px-3 py-[0.25em] text-volt">
          {post.description}
        </span>
      </p>
      <span className="mt-6 inline-flex w-fit items-center gap-2 bg-paper px-4 py-2.5 text-[13px] font-bold text-ink transition-colors group-hover:bg-volt">
        Read post <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
      </span>
    </div>
  </Link>
  );
};

const BlogIndex = () => {
  usePageMeta(
    "Blog · Monaris",
    "Notes on private credit, stablecoin cashflow, and what we are building at Monaris.",
  );

  return (
    // overflow-x-clip, not -hidden: hidden turns this div into the scroll
    // container and silently kills the nav's position:sticky
    <div className="blog-bg min-h-screen overflow-x-clip">
      <BlogNav />

      {/* Editorial hero: dark ink band, then the wordmark cropped by the band's
          bottom edge - the Aztec-journal device, in Monaris volt. */}
      <header className="blog-hero-band overflow-hidden text-paper">
        <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 sm:pt-16 lg:px-8">
          <div className="flex items-end justify-between border-b border-paper/15 pb-4">
            <span className="text-[13px] font-medium uppercase tracking-tight text-volt sm:text-sm">
              Monaris journal
            </span>
            <span className="text-[13px] font-medium text-paper/50 sm:text-sm">
              ({String(posts.length).padStart(2, "0")})
            </span>
          </div>
          <h1 className="mt-8 font-sans text-5xl leading-[1.02] tracking-[-.03em] sm:text-7xl">
            <span className="font-light italic">Inside</span>{" "}
            <span className="font-bold">Monaris</span>
          </h1>
          <p className="mt-5 max-w-xl font-display text-base leading-relaxed text-paper/70 sm:text-lg">
            Notes on private credit and{" "}
            <span className="marker font-medium">the stablecoin economy.</span>
          </p>
        </div>

        {/* Giant wordmark, bottom-cropped by the band edge */}
        <div
          aria-hidden
          className="pointer-events-none relative mt-10 h-[15vw] select-none overflow-hidden border-b border-volt/20 sm:mt-14"
        >
          <span className="absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap font-sans text-[21.5vw] font-black leading-none tracking-[-.05em] text-volt">
            Monaris
          </span>
        </div>
      </header>

      {/* Every post is its own full-bleed block, newest first */}
      <main className="mb-16 flex flex-col gap-4 sm:mb-24 sm:gap-6">
        {posts.map((post, i) => (
          <PostBlock key={post.slug} post={post} featured={i === 0} />
        ))}
      </main>

      <TopReads />

      <Finale />
      <Footer />
    </div>
  );
};

export default BlogIndex;
