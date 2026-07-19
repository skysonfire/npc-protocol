import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

export interface PostFrontmatter {
  title: string;
  date: string;
  author?: string;
  tags?: string[];
  excerpt?: string;
}

export interface BlogPostMeta extends PostFrontmatter {
  slug: string;
  readTime: string;
}

export interface BlogPostFull extends BlogPostMeta {
  content: string;
}

function estimateReadTime(content: string): string {
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 200));
  return `${minutes} min read`;
}

function getSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export function getAllPostSlugs(): string[] {
  return getSlugs();
}

export function getPostBySlug(slug: string): BlogPostFull | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title ?? 'Untitled',
    date: data.date ?? '',
    author: data.author,
    tags: data.tags ?? [],
    excerpt: data.excerpt ?? content.trim().split('\n').find((line) => line && !line.startsWith('#'))?.slice(0, 160) ?? '',
    readTime: estimateReadTime(content),
    content,
  };
}

export function getAllPosts(): BlogPostMeta[] {
  return getSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is BlogPostFull => post !== null)
    .map(({ content, ...meta }) => meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
