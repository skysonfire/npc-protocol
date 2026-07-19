import React from 'react';
import Button from '@/components/ui/Button';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';

interface HeroProps {
  variant?: 'centered' | 'split' | 'video-bg';
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  /** Alt text for the image/video placeholder slot. Required for split/video-bg variants for a11y. */
  imageAlt?: string;
}

const Hero = ({
  variant = 'centered',
  title,
  subtitle,
  ctaText,
  ctaLink = '/',
  imageAlt = 'Placeholder hero image',
}: HeroProps) => {
  if (variant === 'split') {
    return (
      <section className="py-xxl md:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-xl px-md sm:px-lg lg:grid-cols-2 lg:px-xl">
          <div>
            <h1 className="font-heading text-4xl font-semibold text-text-primary md:text-5xl">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-md max-w-xl text-lg text-text-secondary md:text-xl">{subtitle}</p>
            )}
            {ctaText && (
              <div className="mt-lg">
                <Button href={ctaLink} size="lg">
                  {ctaText}
                </Button>
              </div>
            )}
          </div>
          <div>
            <ImagePlaceholder alt={imageAlt} aspect="aspect-square" />
          </div>
        </div>
      </section>
    );
  }

  if (variant === 'video-bg') {
    return (
      <section className="relative overflow-hidden py-xxl md:py-32">
        <div className="absolute inset-0 -z-10">
          <div
            role="img"
            aria-label={imageAlt}
            className="h-full w-full bg-brand-dark"
          />
          <div className="absolute inset-0 bg-brand-dark/60" aria-hidden="true" />
        </div>
        <div className="mx-auto max-w-4xl px-md text-center sm:px-lg lg:px-xl">
          <h1 className="font-heading text-4xl font-semibold text-surface md:text-5xl">{title}</h1>
          {subtitle && (
            <p className="mx-auto mt-md max-w-2xl text-lg text-surface/85 md:text-xl">{subtitle}</p>
          )}
          {ctaText && (
            <div className="mt-lg flex justify-center">
              <Button href={ctaLink} size="lg" variant="secondary">
                {ctaText}
              </Button>
            </div>
          )}
        </div>
      </section>
    );
  }

  // centered (default)
  return (
    <section className="py-xxl md:py-32">
      <div className="mx-auto max-w-4xl px-md text-center sm:px-lg lg:px-xl">
        <h1 className="font-heading text-4xl font-semibold text-text-primary md:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mx-auto mt-md max-w-2xl text-lg text-text-secondary md:text-xl">{subtitle}</p>
        )}
        {ctaText && (
          <div className="mt-lg flex justify-center">
            <Button href={ctaLink} size="lg">
              {ctaText}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;
