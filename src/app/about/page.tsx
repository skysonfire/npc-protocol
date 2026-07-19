import React from 'react';
import type { Metadata } from 'next';
import PageWrapper from '@/components/layout/PageWrapper';
import Hero from '@/components/sections/Hero';
import { clientConfig } from '@/content/client-config';

export const metadata: Metadata = {
  title: 'About',
  description: clientConfig.about.missionBody,
};

export default function AboutPage() {
  return (
    <PageWrapper>
      <Hero
        variant="split"
        title={clientConfig.aboutHero.title}
        subtitle={clientConfig.aboutHero.subtitle}
        ctaText={clientConfig.aboutHero.ctaText}
        ctaLink={clientConfig.aboutHero.ctaLink}
        imageAlt={clientConfig.aboutHero.imageAlt}
      />

      <section className="py-xxl">
        <div className="mx-auto max-w-4xl px-md text-center sm:px-lg lg:px-xl">
          <h2 className="font-heading text-3xl font-semibold text-text-primary md:text-4xl">
            {clientConfig.about.missionTitle}
          </h2>
          <p className="mx-auto mt-md max-w-2xl text-lg text-text-secondary">
            {clientConfig.about.missionBody}
          </p>
        </div>
      </section>

      {clientConfig.about.values.length > 0 && (
        <section className="bg-surface-alt py-xxl">
          <div className="mx-auto max-w-7xl px-md sm:px-lg lg:px-xl">
            <div className="grid grid-cols-1 gap-lg md:grid-cols-3">
              {clientConfig.about.values.map((value) => (
                <div key={value.title} className="rounded-lg bg-surface p-lg shadow-sm">
                  <h3 className="font-heading text-xl font-semibold text-text-primary">
                    {value.title}
                  </h3>
                  <p className="mt-sm text-text-secondary">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageWrapper>
  );
}
