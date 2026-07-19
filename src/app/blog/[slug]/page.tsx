import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import PageWrapper from '@/components/layout/PageWrapper';
import PostLayout from '@/components/blog/PostLayout';
import { getAllPostSlugs, getPostBySlug } from '@/lib/content';

interface BlogPostPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: BlogPostPageProps): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <PageWrapper>
      <PostLayout title={post.title} date={post.date} readTime={post.readTime} author={post.author}>
        <MDXRemote source={post.content} />
      </PostLayout>
    </PageWrapper>
  );
}
