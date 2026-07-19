"use client";

import React from 'react';
import Link from 'next/link';
import { clientConfig } from '../../content/client-config';

interface HeroProps {
  variant?: 'centered' | 'split' | 'video-bg';
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

const Hero = ({ variant = 'centered', title, subtitle, ctaText, ctaLink }: HeroProps) => {
  // Use client config values if no props are provided
  const effectiveTitle = title || clientConfig.hero.title;
  const effectiveSubtitle = subtitle || clientConfig.hero.subtitle;
  const effectiveCtaText = ctaText || clientConfig.hero.ctaText;
  const effectiveCtaLink = ctaLink || "/";

  const renderContent = () => {
    switch (variant) {
      case 'split':
        return (
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">{effectiveTitle}</h1>
              <p className="text-xl text-text-secondary mb-6">{effectiveSubtitle}</p>
              <Link href={effectiveCtaLink} className="inline-block bg-brand text-white px-6 py-3 rounded-md font-medium hover:bg-brand-dark transition-colors duration-200">
                {effectiveCtaText}
              </Link>
            </div>
            <div className="md:w-1/2">
              {/* Placeholder for image/video */}
              <div className="bg-gray-200 border-2 border-dashed rounded-lg w-full h-64 flex items-center justify-center text-gray-500">
                {variant === 'split' ? 'Split Image' : 'Video Background'}
              </div>
            </div>
          </div>
        );
      case 'video-bg':
        return (
          <div className="relative">
            {/* Video background placeholder */}
            <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
              <div className="text-white text-xl">Video Background</div>
            </div>
            
            <div className="relative z-10 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{effectiveTitle}</h1>
              <p className="text-xl text-gray-200 mb-6 max-w-2xl mx-auto">{effectiveSubtitle}</p>
              <Link href={effectiveCtaLink} className="inline-block bg-brand text-white px-6 py-3 rounded-md font-medium hover:bg-brand-dark transition-colors duration-200">
                {effectiveCtaText}
              </Link>
            </div>
          </div>
        );
      default: // centered
        return (
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">{effectiveTitle}</h1>
            <p className="text-xl text-text-secondary mb-6 max-w-2xl mx-auto">{effectiveSubtitle}</p>
            <Link href={effectiveCtaLink} className="inline-block bg-brand text-white px-6 py-3 rounded-md font-medium hover:bg-brand-dark transition-colors duration-200">
              {effectiveCtaText}
            </Link>
          </div>
        );
    }
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {renderContent()}
      </div>
    </section>
  );
};

export default Hero;