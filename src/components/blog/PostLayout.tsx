"use client";

import React from 'react';

interface PostLayoutProps {
  title: string;
  date: string;
  readTime: string;
  content: React.ReactNode;
}

const PostLayout = ({ title, date, readTime, content }: PostLayoutProps) => {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <article className="prose prose-lg md:prose-xl max-w-none">
          <header className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">{title}</h1>
            <div className="flex items-center justify-center text-text-secondary mb-6">
              <time dateTime={date} className="mr-4">{date}</time>
              <span>•</span>
              <span className="ml-4">{readTime}</span>
            </div>
          </header>
          
          <div className="mb-12">
            {/* Placeholder image */}
            <div className="bg-gray-200 border-2 border-dashed rounded-lg w-full h-64 flex items-center justify-center text-gray-500 mb-8">
              Blog Post Image
            </div>
          </div>
          
          <div className="text-text-primary leading-relaxed">
            {content}
          </div>
        </article>
      </div>
    </div>
  );
};

export default PostLayout;