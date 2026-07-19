"use client";

import React from 'react';
import PostCard from './PostCard';

interface BlogIndexGridProps {
  posts: {
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    slug: string;
    image?: string;
    imageAlt?: string;
  }[];
}

const BlogIndexGrid = ({ posts }: BlogIndexGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post, index) => (
        <PostCard key={index} {...post} />
      ))}
    </div>
  );
};

export default BlogIndexGrid;