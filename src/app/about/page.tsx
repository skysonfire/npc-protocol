"use client";

import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import Hero from '@/components/sections/Hero';

const AboutPage = () => {
  return (
    <PageWrapper>
      <Hero 
        variant="split" 
        title="About NPC Protocol" 
        subtitle="The foundation of our agency's delivery system" 
      />
    </PageWrapper>
  );
};

export default AboutPage;