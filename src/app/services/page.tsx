"use client";

import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import Hero from '@/components/sections/Hero';
import ServicesGrid from '@/components/sections/ServicesGrid';

const ServicesPage = () => {
  return (
    <PageWrapper>
      <Hero variant="video-bg" />
      <ServicesGrid variant="alternatingRows" />
    </PageWrapper>
  );
};

export default ServicesPage;