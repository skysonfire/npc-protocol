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
        variant="card-grid" 
        title="Our Services"
        description="We provide everything you need to succeed in the digital landscape."
        items={[
           { title: "Website Design", description: "Custom, subscription-based websites built to convert.", icon: "💻" },
           { title: "AI Automation", description: "Streamline your operations with intelligent workflows.", icon: "🤖" },
           { title: "Marketing & Lead Gen", description: "Grow your pipeline with targeted campaigns.", icon: "📈" },
         ]}
      />
      <Testimonials 
        variant="carousel" 
        title="What Our Clients Say"
        description="Hear from agencies who have transformed their delivery process."
        testimonials={[
          { name: "Placeholder Client", role: "Agency Director", content: "Great service, would recommend." },
        ]}
      />
    </PageWrapper>
  );
};

export default HomePage;