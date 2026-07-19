"use client";

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Card from '@/components/ui/Card';
import Avatar from '@/components/ui/Avatar';
import type { TestimonialItem } from './Testimonials';

interface TestimonialCarouselProps {
  testimonials: TestimonialItem[];
}

/**
 * Isolated client-leaf: interactive carousel logic lives here so the parent
 * Testimonials section can remain a Server Component.
 */
const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
  const [index, setIndex] = useState(0);

  if (testimonials.length === 0) return null;

  const current = testimonials[index];

  const goTo = (nextIndex: number) => {
    const total = testimonials.length;
    setIndex(((nextIndex % total) + total) % total);
  };

  return (
    <div className="mx-auto max-w-3xl">
      <Card shadow="md" rounded="lg" className="relative p-xl md:p-xxl">
        <Quote aria-hidden="true" className="h-8 w-8 text-accent" strokeWidth={1.5} />
        <blockquote className="mt-md">
          <p className="text-lg text-text-primary md:text-xl">&ldquo;{current.content}&rdquo;</p>
        </blockquote>
        <figcaption className="mt-lg flex items-center gap-md">
          <Avatar name={current.name} src={current.avatar} />
          <div>
            <p className="font-medium text-text-primary">{current.name}</p>
            <p className="text-sm text-text-secondary">
              {current.role}
              {current.company ? `, ${current.company}` : ''}
            </p>
          </div>
        </figcaption>
      </Card>

      {testimonials.length > 1 && (
        <div className="mt-lg flex items-center justify-center gap-md">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-text-secondary/20 text-text-primary transition-colors duration-200 hover:bg-surface-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <ChevronLeft aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} />
          </button>

          <div className="flex gap-sm" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show testimonial from ${t.name}`}
                onClick={() => goTo(i)}
                className={`h-2.5 w-2.5 rounded-full transition-colors duration-200 ${
                  i === index ? 'bg-brand' : 'bg-text-secondary/30'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-text-secondary/20 text-text-primary transition-colors duration-200 hover:bg-surface-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <ChevronRight aria-hidden="true" className="h-5 w-5" strokeWidth={1.5} />
          </button>
        </div>
      )}
    </div>
  );
};

export default TestimonialCarousel;
