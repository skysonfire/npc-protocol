"use client";

import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import Hero from '@/components/sections/Hero';

const AboutPage = () => {
  return (
    <PageWrapper>
      <Hero 
        variant="centered" 
        title="About NPC Protocol" 
        subtitle="We build subscription-based websites, AI automation, and marketing systems for growing businesses." 
      />
    </PageWrapper>
  );
};

export default AboutPage;