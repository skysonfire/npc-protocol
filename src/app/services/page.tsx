"use client";

import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import Hero from '@/components/sections/Hero';
import ServicesGrid from '@/components/sections/ServicesGrid';

const ServicesPage = () => {
  return (
    <PageWrapper>
      <Hero 
        variant="split" 
        title="Our Services" 
        subtitle="Subscription-based web design, AI automation, and marketing — built once, managed forever." 
      />
      <ServicesGrid 
        variant="card-grid" 
        title="Our Services"
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