import React from 'react';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';

interface PostLayoutProps {
  title: string;
  date?: string;
  readTime?: string;
  author?: string;
  children: React.ReactNode;
}

const PostLayout = ({ title, date, readTime, author, children }: PostLayoutProps) => {
  return (
    <article className="py-xxl md:py-32">
      <div className="mx-auto max-w-3xl px-md sm:px-lg lg:px-xl">
        <header className="mb-xl text-center">
          <h1 className="font-heading text-3xl font-semibold text-text-primary md:text-4xl">
            {title}
          </h1>
          <div className="mt-md flex items-center justify-center gap-sm text-sm text-text-secondary">
            {date && <time dateTime={date}>{date}</time>}
            {date && readTime && <span aria-hidden="true">&middot;</span>}
            {readTime && <span>{readTime}</span>}
            {(date || readTime) && author && <span aria-hidden="true">&middot;</span>}
            {author && <span>{author}</span>}
          </div>
        </header>

        <div className="mb-xl">
          <ImagePlaceholder alt={`Cover image for the blog post titled "${title}"`} />
        </div>

        <div className="prose max-w-none prose-headings:font-heading prose-headings:text-text-primary prose-p:text-text-secondary prose-a:text-brand prose-strong:text-text-primary">
          {children}
        </div>
      </div>
    </article>
  );
};

export default PostLayout;
