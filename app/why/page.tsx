import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { getPostBySlug, markdownToHtml } from "@/lib/blog";

export default function WhyPage() {
  const post = getPostBySlug("why");
  const html = markdownToHtml(post.content);

  return (
    <div
      className="min-h-screen font-mono"
      style={{ backgroundColor: "#1d2021", color: "#ebdbb2" }}
    >
      <Navbar />

      <main className="max-w-3xl mx-auto px-6 pt-28 pb-20">
        <p className="text-xs mb-3" style={{ color: "#928374" }}>
          <span style={{ color: "#b8bb26" }}>~/</span>chaves / why
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          {post.title}
        </h1>
        <p className="text-sm sm:text-base mb-6" style={{ color: "#928374" }}>
          {post.description}
        </p>
        <div className="flex flex-wrap gap-3 text-xs mb-10" style={{ color: "#928374" }}>
          <span>{post.date}</span>
          <span>{post.author}</span>
          <span>{post.audience}</span>
        </div>

        <article
          className="blog-article"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </main>

      <Footer />
    </div>
  );
}
