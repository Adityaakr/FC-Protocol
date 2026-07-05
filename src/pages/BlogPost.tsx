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
    <div className="min-h-screen overflow-x-hidden">
      <BlogNav />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-2xl py-12 sm:py-16">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink/60 transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" /> All posts
          </Link>

          <div className="mt-8 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.16em]">
            <span className="text-volt-text">{post.category}</span>
            <span className="h-1 w-1 rounded-full bg-ink/20" />
            <time dateTime={post.date} className="text-ink/50">{formatPostDate(post.date)}</time>
          </div>
          <h1 className="mt-4 font-sans text-4xl font-bold tracking-[-.025em] leading-[1.05] text-ink sm:text-[40px] text-balance">{post.title}</h1>
          <p className="mt-4 font-display text-lg leading-relaxed text-ink/65">{post.description}</p>

          {post.cover && (
            <img
              src={post.cover}
              alt=""
              className="mt-8 aspect-[16/10] w-full rounded-[24px] object-cover card-soft"
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
