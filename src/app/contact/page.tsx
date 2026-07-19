import React from 'react';
import type { Metadata } from 'next';
import PageWrapper from '@/components/layout/PageWrapper';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';
import PricingTable from '@/components/sections/PricingTable';
import { clientConfig } from '@/content/client-config';

export const metadata: Metadata = {
  title: 'Contact',
  description: clientConfig.contact.description,
};

export default function ContactPage() {
  return (
    <PageWrapper>
      <Hero
        variant="centered"
        title={clientConfig.contactHero.title}
        subtitle={clientConfig.contactHero.subtitle}
        ctaText={clientConfig.contactHero.ctaText}
        ctaLink={clientConfig.contactHero.ctaLink}
        imageAlt={clientConfig.contactHero.imageAlt}
      />

      <section className="py-xxl">
        <div className="mx-auto max-w-4xl px-md sm:px-lg lg:px-xl">
          <div className="mx-auto mb-xl max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-semibold text-text-primary md:text-4xl">
              {clientConfig.contact.title}
            </h2>
            <p className="mt-md text-lg text-text-secondary">{clientConfig.contact.description}</p>
          </div>
          <ContactForm />
        </div>
      </section>

      <PricingTable
        title={clientConfig.pricing.title}
        description={clientConfig.pricing.description}
        plans={clientConfig.pricing.plans}
      />
    </PageWrapper>
  );
}
