"use client";

import React from 'react';
import { clientConfig } from '@/content/client-config';

interface CTAProps {
  variant?: 'basic' | 'hero';
  title: string;
  description?: string;
  ctaText: string;
  ctaLink?: string;
}

const CTA = ({ variant = 'basic', title, description, ctaText, ctaLink }: CTAProps) => {
  // Basic variant - simple call to action
  if (variant === 'basic') {
    return (
      <div className="bg-gray-50 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        {description && <p className="mb-6">{description}</p>}
        <button className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition">
          {ctaText}
        </button>
      </div>
    );
  }

  // Hero variant - full-width call to action with background
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg p-8 text-center text-white">
      <h3 className="text-3xl font-bold mb-4">{title}</h3>
      {description && <p className="mb-6 text-blue-100">{description}</p>}
      <button className="bg-white text-blue-600 py-3 px-8 rounded-lg font-bold hover:bg-gray-100 transition">
        {ctaText}
      </button>
    </div>
  );
};

export default CTA;