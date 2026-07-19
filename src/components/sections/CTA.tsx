"use client";

import React from 'react';
import Link from 'next/link';

interface CTAProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

const CTA = ({ title, description, buttonText, buttonLink }: CTAProps) => {
  return (
    <div className="bg-surface rounded-xl p-8 md:p-12 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">{title}</h2>
      <p className="text-text-secondary mb-6 max-w-2xl mx-auto">{description}</p>
      <Link 
        href={buttonLink}
        className="inline-block bg-brand text-white px-6 py-3 rounded-lg font-medium hover:bg-brand-dark transition-colors"
      >
        {buttonText}
      </Link>
    </div>
  );
};

export default CTA;