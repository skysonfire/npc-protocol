import React from 'react';
import type { Metadata } from 'next';
import PageWrapper from '@/components/layout/PageWrapper';
import BlogIndexGrid from '@/components/blog/BlogIndexGrid';
import { getAllPosts } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts, ideas, and insights from our team.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <PageWrapper>
      <BlogIndexGrid
        title="Blog"
        description="Thoughts, ideas, and insights from our team."
        posts={posts}
      />
    </PageWrapper>
  );
}
