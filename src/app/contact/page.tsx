"use client";

import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import Hero from '@/components/sections/Hero';

const ContactPage = () => {
  return (
    <PageWrapper>
      <Hero 
        variant="centered" 
        title="Get in Touch" 
        subtitle="We'd love to hear from you" 
      />
    </PageWrapper>
  );
};

export default ContactPage;
