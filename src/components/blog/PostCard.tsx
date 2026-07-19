"use client";

import React from 'react';
import Link from 'next/link';

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
}

interface PostCardProps {
  post: BlogPost;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="bg-surface rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Placeholder image */}
      <div className="bg-gray-200 border-2 border-dashed rounded-t-lg w-full h-48 flex items-center justify-center text-gray-500">
        Blog Image
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-sm text-text-secondary mb-3">
          <time dateTime={post.date}>{post.date}</time>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
        </div>
        
        <h3 className="text-xl font-bold text-text-primary mb-3">
          <Link href={`/blog/${post.slug}`}>
            {post.title}
          </Link>
        </h3>
        
        <p className="text-text-secondary mb-4">{post.excerpt}</p>
        
        <Link 
          href={`/blog/${post.slug}`} 
          className="text-brand hover:text-brand-dark font-medium flex items-center transition-colors duration-200"
        >
          Read more
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;