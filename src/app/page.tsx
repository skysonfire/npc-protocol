import React from 'react';
import type { Metadata } from 'next';
import PageWrapper from '@/components/layout/PageWrapper';
import Hero from '@/components/sections/Hero';
import ServicesGrid from '@/components/sections/ServicesGrid';
import Testimonials from '@/components/sections/Testimonials';
import CTA from '@/components/sections/CTA';
import { clientConfig } from '@/content/client-config';

export const metadata: Metadata = {
  title: 'Home',
  description: clientConfig.companyDescription,
};

export default function HomePage() {
  return (
    <PageWrapper>
      <Hero
        variant="centered"
        title={clientConfig.hero.title}
        subtitle={clientConfig.hero.subtitle}
        ctaText={clientConfig.hero.ctaText}
        ctaLink={clientConfig.hero.ctaLink}
        imageAlt={clientConfig.hero.imageAlt}
      />
      <ServicesGrid
        variant="card-grid"
        title={clientConfig.services.title}
        description={clientConfig.services.description}
        items={clientConfig.services.items}
      />
      <Testimonials
        variant="carousel"
        title={clientConfig.testimonials.title}
        description={clientConfig.testimonials.description}
        testimonials={clientConfig.testimonials.testimonials}
      />
      <CTA
        title={clientConfig.cta.title}
        description={clientConfig.cta.description}
        buttonText={clientConfig.cta.buttonText}
        buttonLink={clientConfig.cta.buttonLink}
      />
    </PageWrapper>
  );
}
