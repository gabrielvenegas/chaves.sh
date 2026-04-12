import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { getAllPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div
      className="min-h-screen font-mono"
      style={{ backgroundColor: "#1d2021", color: "#ebdbb2" }}
    >
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 pt-28 pb-20">
        <p className="text-xs mb-2" style={{ color: "#928374" }}>
          // blog
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Notes from building CHAVES
        </h1>
        <p className="max-w-2xl text-sm sm:text-base mb-12" style={{ color: "#928374" }}>
          Local Markdown posts for product notes, rationale, and essays. Simple
          structure for now, ready to grow into a proper blog.
        </p>

        <div className="grid grid-cols-1 gap-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={post.slug === "why" ? "/why" : `/blog/${post.slug}`}
              className="no-underline border p-6 transition-colors"
              style={{ borderColor: "#3c3836", backgroundColor: "#282828" }}
            >
              <p className="text-xs mb-3" style={{ color: "#b8bb26" }}>
                {post.date}
              </p>
              <h2 className="text-xl font-semibold mb-3" style={{ color: "#ebdbb2" }}>
                {post.title}
              </h2>
              <p className="text-sm mb-4" style={{ color: "#928374" }}>
                {post.description}
              </p>
              <p className="text-xs" style={{ color: "#d5c4a1" }}>
                {post.audience}
              </p>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
