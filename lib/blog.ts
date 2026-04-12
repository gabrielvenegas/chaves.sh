import fs from "node:fs";
import path from "node:path";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  audience: string;
  content: string;
};

type Frontmatter = Omit<BlogPost, "slug" | "content">;

function parseFrontmatter(fileContent: string): { meta: Frontmatter; body: string } {
  const match = fileContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

  if (!match) {
    throw new Error("Invalid markdown file. Expected frontmatter block.");
  }

  const [, rawFrontmatter, body] = match;
  const entries = rawFrontmatter.split("\n").map((line) => line.trim()).filter(Boolean);

  const data = entries.reduce<Record<string, string>>((acc, line) => {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) return acc;

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim().replace(/^"(.*)"$/, "$1");
    acc[key] = value;
    return acc;
  }, {});

  return {
    meta: {
      title: data.title ?? "Untitled",
      description: data.description ?? "",
      date: data.date ?? "",
      author: data.author ?? "CHAVES",
      audience: data.audience ?? "",
    },
    body: body.trim(),
  };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function renderInline(text: string) {
  return escapeHtml(text)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}

export function markdownToHtml(markdown: string) {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const html: string[] = [];
  let paragraph: string[] = [];
  let listItems: string[] = [];
  let inCodeBlock = false;
  let codeLines: string[] = [];

  const flushParagraph = () => {
    if (!paragraph.length) return;
    html.push(`<p>${renderInline(paragraph.join(" "))}</p>`);
    paragraph = [];
  };

  const flushList = () => {
    if (!listItems.length) return;
    html.push(`<ul>${listItems.map((item) => `<li>${renderInline(item)}</li>`).join("")}</ul>`);
    listItems = [];
  };

  const flushCodeBlock = () => {
    if (!codeLines.length) return;
    html.push(`<pre><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
    codeLines = [];
  };

  for (const line of lines) {
    if (line.startsWith("```")) {
      flushParagraph();
      flushList();
      if (inCodeBlock) {
        flushCodeBlock();
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
      }
      continue;
    }

    if (inCodeBlock) {
      codeLines.push(line);
      continue;
    }

    if (!line.trim()) {
      flushParagraph();
      flushList();
      continue;
    }

    if (line.startsWith("### ")) {
      flushParagraph();
      flushList();
      html.push(`<h3>${renderInline(line.slice(4))}</h3>`);
      continue;
    }

    if (line.startsWith("## ")) {
      flushParagraph();
      flushList();
      html.push(`<h2>${renderInline(line.slice(3))}</h2>`);
      continue;
    }

    if (line.startsWith("# ")) {
      flushParagraph();
      flushList();
      html.push(`<h1>${renderInline(line.slice(2))}</h1>`);
      continue;
    }

    if (line.startsWith("- ")) {
      flushParagraph();
      listItems.push(line.slice(2));
      continue;
    }

    paragraph.push(line.trim());
  }

  flushParagraph();
  flushList();
  if (inCodeBlock) flushCodeBlock();

  return html.join("");
}

export function getAllPosts() {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      return getPostBySlug(slug);
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string): BlogPost {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    throw new Error(`Post not found: ${slug}`);
  }

  const fileContent = fs.readFileSync(filePath, "utf8");
  const { meta, body } = parseFrontmatter(fileContent);

  return {
    slug,
    ...meta,
    content: body,
  };
}
