"use client";

import React from 'react';
import Link from 'next/link';
import PostCard from './PostCard';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
}

const BlogIndexGrid = () => {
  // Sample data - this would be replaced with actual content loading in a real implementation
  const posts: BlogPost[] = [
    {
      slug: "first-post",
      title: "First Blog Post",
      date: "2023-01-01",
      readTime: "5 min read",
      excerpt: "This is the excerpt of the first blog post."
    },
    {
      slug: "second-post",
      title: "Second Blog Post",
      date: "2023-01-02",
      readTime: "3 min read",
      excerpt: "This is the excerpt of the second blog post."
    }
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">Blog</h1>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Thoughts, ideas, and insights from our team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogIndexGrid;