"use client";

import React from 'react';
import Button from '../ui/Button';
import Container from '../ui/Container';

interface HeroProps {
  variant?: 'centered' | 'split' | 'video-bg';
  title: string;
  subtitle: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  imageSrc?: string;
  imageAlt?: string;
  videoSrc?: string;
}

const Hero = ({
  variant = 'centered',
  title,
  subtitle,
  ctaPrimary,
  ctaSecondary,
  imageSrc,
  imageAlt,
  videoSrc
}: HeroProps) => {
  const renderCenteredHero = () => (
    <div className="py-16 md:py-24">
      <Container>
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
            {title}
          </h1>
          <p className="text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {ctaPrimary && (
              <Button variant="primary">
                {ctaPrimary}
              </Button>
            )}
            {ctaSecondary && (
              <Button variant="outline">
                {ctaSecondary}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </div>
  );

  const renderSplitHero = () => (
    <div className="py-16 md:py-24">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6">
              {title}
            </h1>
            <p className="text-xl text-text-secondary mb-10">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {ctaPrimary && (
                <Button variant="primary">
                  {ctaPrimary}
                </Button>
              )}
              {ctaSecondary && (
                <Button variant="outline">
                  {ctaSecondary}
                </Button>
              )}
            </div>
          </div>
          <div className="md:w-1/2">
            {imageSrc ? (
              <img 
                src={imageSrc} 
                alt={imageAlt || "Hero image"} 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            ) : (
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 md:h-80 flex items-center justify-center text-gray-500">
                Placeholder Image
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );

  const renderVideoHero = () => (
    <div className="py-16 md:py-24 relative overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        {videoSrc ? (
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-brand to-brand-dark"></div>
        )}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <Container>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-surface mb-6">
            {title}
          </h1>
          <p className="text-xl text-surface mb-10 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {ctaPrimary && (
              <Button variant="primary">
                {ctaPrimary}
              </Button>
            )}
            {ctaSecondary && (
              <Button variant="outline">
                {ctaSecondary}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </div>
  );

  switch (variant) {
    case 'split':
      return renderSplitHero();
    case 'video-bg':
      return renderVideoHero();
    default:
      return renderCenteredHero();
  }
};

export default Hero;