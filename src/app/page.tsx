"use client";

import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import Hero from '@/components/sections/Hero';
import ServicesGrid from '@/components/sections/ServicesGrid';
import Testimonials from '@/components/sections/Testimonials';

const HomePage = () => {
  return (
    <PageWrapper>
      <Hero 
        variant="centered" 
        title="Websites That Grow With Your Business" 
        subtitle="Subscription-based web design, AI automation, and marketing — built once, managed forever." 
      />
      <ServicesGrid 
        variant="cardGrid" 
        services={[
          { title: "Website Design", description: "Custom, subscription-based websites built to convert." },
          { title: "AI Automation", description: "Streamline your operations with intelligent workflows." },
          { title: "Marketing & Lead Gen", description: "Grow your pipeline with targeted campaigns." },
        ]}
      />
      <Testimonials 
        variant="carousel" 
        testimonials={[
          { name: "Placeholder Client", quote: "Great service, would recommend." },
        ]}
      />
    </PageWrapper>
  );
};

export default HomePage;
