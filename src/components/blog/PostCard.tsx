"use client";

import React from 'react';
import Link from 'next/link';

interface PostCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  image?: string;
  imageAlt?: string;
}

const PostCard = ({ title, excerpt, date, readTime, slug, image, imageAlt }: PostCardProps) => {
  return (
    <article className="bg-surface rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {image && (
        <img 
          src={image} 
          alt={imageAlt || `Featured image for ${title}`}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-6">
        <div className="flex items-center text-sm text-text-secondary mb-3">
          <time dateTime={date}>{date}</time>
          <span className="mx-2">•</span>
          <span>{readTime}</span>
        </div>
        <h2 className="text-xl font-bold text-text-primary mb-3">
          <Link href={`/blog/${slug}`} className="hover:text-brand transition-colors duration-200">
            {title}
          </Link>
        </h2>
        <p className="text-text-secondary mb-4">{excerpt}</p>
        <Link 
          href={`/blog/${slug}`} 
          className="text-brand hover:text-brand-dark font-medium inline-flex items-center transition-colors duration-200"
        >
          Read more
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default PostCard;