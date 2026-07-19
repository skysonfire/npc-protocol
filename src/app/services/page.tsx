"use client";

import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import Hero from '@/components/sections/Hero';
import ServicesGrid from '@/components/sections/ServicesGrid';

const ServicesPage = () => {
  return (
    <PageWrapper>
      <Hero 
        variant="video-bg" 
        title="Our Services" 
        subtitle="Comprehensive solutions for modern agencies" 
      />
      <ServicesGrid 
        variant="alternating-rows" 
        title="Service Offerings"
        description="We provide everything you need to succeed in the digital landscape."
        items={[
          { title: "Website Design", description: "Custom, subscription-based websites built to convert.", icon: "💻" },
          { title: "AI Automation", description: "Streamline your operations with intelligent workflows.", icon: "🤖" },
          { title: "Marketing & Lead Gen", description: "Grow your pipeline with targeted campaigns.", icon: "📈" },
        ]}
      />
    </PageWrapper>
  );
};

export default ServicesPage;