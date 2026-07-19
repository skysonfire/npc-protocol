import React from 'react';
import PostCard from './PostCard';
import type { BlogPostMeta } from '@/lib/content';

interface BlogIndexGridProps {
  title?: string;
  description?: string;
  posts?: BlogPostMeta[];
}

const BlogIndexGrid = ({ title = 'Blog', description, posts = [] }: BlogIndexGridProps) => {
  return (
    <section className="py-xxl md:py-32">
      <div className="mx-auto max-w-7xl px-md sm:px-lg lg:px-xl">
        <div className="mx-auto mb-xxl max-w-2xl text-center">
          <h1 className="font-heading text-3xl font-semibold text-text-primary md:text-4xl">
            {title}
          </h1>
          {description && <p className="mt-md text-lg text-text-secondary">{description}</p>}
        </div>

        {posts.length === 0 ? (
          <p className="text-center text-text-secondary">No posts published yet. Check back soon.</p>
        ) : (
          <div className="grid grid-cols-1 gap-lg md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogIndexGrid;
