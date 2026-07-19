import React from 'react';
import Card from '@/components/ui/Card';
import Avatar from '@/components/ui/Avatar';
import TestimonialCarousel from './TestimonialCarousel';

export interface TestimonialItem {
  name: string;
  role: string;
  company?: string;
  content: string;
  avatar?: string;
}

interface TestimonialsProps {
  variant?: 'carousel' | 'grid';
  title?: string;
  description?: string;
  testimonials?: TestimonialItem[];
}

const Testimonials = ({
  variant = 'grid',
  title,
  description,
  testimonials = [],
}: TestimonialsProps) => {
  if (testimonials.length === 0) return null;

  return (
    <section className="bg-surface-alt py-xxl md:py-32">
      <div className="mx-auto max-w-7xl px-md sm:px-lg lg:px-xl">
        {(title || description) && (
          <div className="mx-auto mb-xxl max-w-2xl text-center">
            {title && (
              <h2 className="font-heading text-3xl font-semibold text-text-primary md:text-4xl">
                {title}
              </h2>
            )}
            {description && <p className="mt-md text-lg text-text-secondary">{description}</p>}
          </div>
        )}

        {variant === 'carousel' ? (
          <TestimonialCarousel testimonials={testimonials} />
        ) : (
          <div className="grid grid-cols-1 gap-lg md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} shadow="sm" rounded="lg" className="p-lg">
                <div className="flex items-center gap-md">
                  <Avatar name={testimonial.name} src={testimonial.avatar} />
                  <div>
                    <p className="font-medium text-text-primary">{testimonial.name}</p>
                    <p className="text-sm text-text-secondary">
                      {testimonial.role}
                      {testimonial.company ? `, ${testimonial.company}` : ''}
                    </p>
                  </div>
                </div>
                <p className="mt-md text-text-secondary">&ldquo;{testimonial.content}&rdquo;</p>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
