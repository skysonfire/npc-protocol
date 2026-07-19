"use client";

import React from 'react';
import Link from 'next/link';

interface PostLayoutProps {
  title: string;
  date: string;
  readTime: string;
  content: React.ReactNode;
  previousPost?: { title: string; slug: string };
  nextPost?: { title: string; slug: string };
  image?: string;
  imageAlt?: string;
}

const PostLayout = ({ title, date, readTime, content, previousPost, nextPost, image, imageAlt }: PostLayoutProps) => {
  return (
    <article className="max-w-4xl mx-auto">
      {image && (
        <img 
          src={image} 
          alt={imageAlt || `Featured image for ${title}`}
          className="w-full h-64 md:h-96 object-cover rounded-lg mb-8"
        />
      )}
      
      <div className="flex items-center text-sm text-text-secondary mb-6">
        <time dateTime={date}>{date}</time>
        <span className="mx-2">•</span>
        <span>{readTime}</span>
      </div>
      
      <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">{title}</h1>
      
      <div className="prose prose-lg max-w-none text-text-secondary">
        {content}
      </div>
      
      {(previousPost || nextPost) && (
        <nav className="mt-12 pt-8 border-t border-surface-border flex justify-between">
          {previousPost && (
            <Link 
              href={`/blog/${previousPost.slug}`} 
              className="flex items-center text-brand hover:text-brand-dark transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              {previousPost.title}
            </Link>
          )}
          
          {nextPost && (
            <Link 
              href={`/blog/${nextPost.slug}`} 
              className="flex items-center text-brand hover:text-brand-dark transition-colors duration-200"
            >
              {nextPost.title}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </nav>
      )}
    </article>
  );
};

export default PostLayout;