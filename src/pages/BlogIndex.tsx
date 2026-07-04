import BlogNav from "@/components/blog/BlogNav";
import { BlogCard, FeaturedBlogCard } from "@/components/blog/BlogCard";
import Finale from "@/components/landing/Finale";
import Footer from "@/components/landing/Footer";
import { posts } from "@/content/blog/posts";
import { usePageMeta } from "@/hooks/usePageMeta";

const BlogIndex = () => {
  usePageMeta(
    "Blog · Monaris",
    "Notes on private credit, stablecoin cashflow, and what we are building at Monaris.",
  );

  // Under 3 posts the grid looks sparse; lead with a wide featured card instead.
  const featured = posts.length < 3 ? posts[0] : null;
  const gridPosts = featured ? posts.slice(1) : posts;

  return (
    <div className="min-h-screen overflow-x-hidden">
      <BlogNav />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <header className="pt-12 sm:pt-16">
          <div className="flex items-end justify-between border-b border-ink/10 pb-4">
            <span className="text-[13px] sm:text-sm font-medium uppercase tracking-tight text-volt-text">Blog</span>
            <span className="text-[13px] sm:text-sm font-medium text-ink/40">({String(posts.length).padStart(2, "0")})</span>
          </div>
          <h1 className="mt-6 max-w-3xl font-sans text-4xl font-bold tracking-[-.025em] leading-[1.05] text-ink sm:text-6xl">
            Notes on private credit <span className="text-ink/45">and the stablecoin economy.</span>
          </h1>
        </header>

        <section className="mt-10 pb-20 sm:mt-12">
          {featured && <FeaturedBlogCard post={featured} />}
          {gridPosts.length > 0 && (
            <div className={`grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 ${featured ? "mt-5" : ""}`}>
              {gridPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </section>
      </main>
      <Finale />
      <Footer />
    </div>
  );
};

export default BlogIndex;
