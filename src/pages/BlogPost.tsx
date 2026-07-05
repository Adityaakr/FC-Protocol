import { Suspense } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import BlogNav from "@/components/blog/BlogNav";
import Finale from "@/components/landing/Finale";
import Footer from "@/components/landing/Footer";
import { formatPostDate, getBody, getPost } from "@/content/blog/posts";
import { usePageMeta } from "@/hooks/usePageMeta";

const BlogPost = () => {
  const { slug = "" } = useParams();
  const post = getPost(slug);
  const Body = getBody(slug);

  usePageMeta(post ? `${post.title} · Monaris blog` : "Blog · Monaris", post?.description);

  if (!post || !Body) return <Navigate to="/blog" replace />;

  return (
    // overflow-x-clip, not -hidden: hidden turns this div into the scroll
    // container and silently kills the nav's position:sticky
    <div className="blog-bg min-h-screen overflow-x-clip">
      <BlogNav />

      {/* Dark editorial header band; the cover image below overlaps its bottom edge */}
      <header className={`blog-hero-band text-paper ${post.cover ? "pb-24 sm:pb-32" : "pb-12 sm:pb-16"}`}>
        <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 sm:pt-16 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-paper/60 transition-colors hover:text-paper"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden /> All posts
            </Link>

            <div className="mt-8 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.16em]">
              <span className="text-volt">{post.category}</span>
              <span className="h-1 w-1 rounded-full bg-paper/25" />
              <time dateTime={post.date} className="text-paper/60">{formatPostDate(post.date)}</time>
            </div>
            <h1 className="mt-4 text-balance font-sans text-4xl font-bold leading-[1.05] tracking-[-.025em] text-paper sm:text-[40px]">
              {post.title}
            </h1>
            <p className="mt-4 font-display text-lg leading-relaxed text-paper/70">{post.description}</p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-2xl pb-12 sm:pb-16">
          {post.cover && (
            <img
              src={post.cover}
              alt=""
              className="-mt-14 aspect-[16/10] w-full rounded-[24px] object-cover card-float sm:-mt-20"
            />
          )}

          <div className="prose mt-10">
            <Suspense fallback={null}>
              <Body />
            </Suspense>
          </div>
        </article>
      </main>

      <Finale />
      <Footer />
    </div>
  );
};

export default BlogPost;
