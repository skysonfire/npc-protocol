"use client";

import React from 'react';
import { notFound } from 'next/navigation';
import PageWrapper from '@/components/layout/PageWrapper';
import PostLayout from '@/components/blog/PostLayout';

// This would be replaced with actual content loading in a real implementation
const samplePosts = [
  {
    slug: "first-post",
    title: "First Blog Post",
    date: "2023-01-01",
    readTime: "5 min read",
    content: "This is the content of the first blog post.",
  },
  {
    slug: "second-post",
    title: "Second Blog Post",
    date: "2023-01-02",
    readTime: "3 min read",
    content: "This is the content of the second blog post.",
  }
];

const BlogPostPage = ({ params }: { params: { slug: string } }) => {
  const post = samplePosts.find(p => p.slug === params.slug);
  
  if (!post) {
    return notFound();
  }

  return (
    <PageWrapper>
      <PostLayout 
        title={post.title}
        date={post.date}
        readTime={post.readTime}
        content={<p>{post.content}</p>}
      />
    </PageWrapper>
  );
};

export default BlogPostPage;