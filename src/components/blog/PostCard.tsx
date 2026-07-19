import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';
import type { BlogPostMeta } from '@/lib/content';

interface PostCardProps {
  post: BlogPostMeta;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <article className="overflow-hidden rounded-lg bg-surface shadow-sm transition-shadow duration-300 hover:shadow-md">
      <ImagePlaceholder
        alt={`Cover image for the blog post titled "${post.title}"`}
        rounded="sm"
        className="rounded-b-none"
      />

      <div className="p-lg">
        <div className="flex items-center gap-sm text-sm text-text-secondary">
          {post.date && <time dateTime={post.date}>{post.date}</time>}
          {post.date && post.readTime && <span aria-hidden="true">&middot;</span>}
          {post.readTime && <span>{post.readTime}</span>}
        </div>

        <h3 className="mt-sm font-heading text-xl font-semibold text-text-primary">
          <Link href={`/blog/${post.slug}`} className="hover:text-brand">
            {post.title}
          </Link>
        </h3>

        {post.excerpt && <p className="mt-sm text-text-secondary">{post.excerpt}</p>}

        <Link
          href={`/blog/${post.slug}`}
          className="mt-md inline-flex items-center gap-sm font-medium text-brand transition-colors duration-200 hover:text-brand-dark"
        >
          Read more
          <ArrowRight aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
        </Link>
      </div>
    </article>
  );
};

export default PostCard;
