"use client";

import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import Hero from '@/components/sections/Hero';
import ServicesGrid from '@/components/sections/ServicesGrid';
import Testimonials from '@/components/sections/Testimonials';

const HomePage = () => {
  return (
    <PageWrapper>
      <Hero variant="centered" />
      <ServicesGrid variant="cardGrid" />
      <Testimonials variant="carousel" />
    </PageWrapper>
  );
};

export default HomePage;