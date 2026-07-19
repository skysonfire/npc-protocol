import React from 'react';
import type { Metadata } from 'next';
import PageWrapper from '@/components/layout/PageWrapper';
import Hero from '@/components/sections/Hero';
import ServicesGrid from '@/components/sections/ServicesGrid';
import PricingTable from '@/components/sections/PricingTable';
import CTA from '@/components/sections/CTA';
import { clientConfig } from '@/content/client-config';

export const metadata: Metadata = {
  title: 'Services',
  description: clientConfig.services.description,
};

export default function ServicesPage() {
  return (
    <PageWrapper>
      <Hero
        variant="split"
        title={clientConfig.servicesHero.title}
        subtitle={clientConfig.servicesHero.subtitle}
        ctaText={clientConfig.servicesHero.ctaText}
        ctaLink={clientConfig.servicesHero.ctaLink}
        imageAlt={clientConfig.servicesHero.imageAlt}
      />
      <ServicesGrid
        variant="alternating-rows"
        title={clientConfig.services.title}
        description={clientConfig.services.description}
        items={clientConfig.services.items}
      />
      <PricingTable
        title={clientConfig.pricing.title}
        description={clientConfig.pricing.description}
        plans={clientConfig.pricing.plans}
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
