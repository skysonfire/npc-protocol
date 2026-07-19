"use client";

import React from 'react';
import Card from '../ui/Card';
import { clientConfig } from '../../content/client-config';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

interface TestimonialsProps {
  variant?: 'carousel' | 'grid';
  title?: string;
  description?: string;
  testimonials?: Testimonial[];
}

const Testimonials = ({
  variant = 'grid',
  title,
  description,
  testimonials
}: TestimonialsProps) => {
  // Use client config values if no props are provided
  const effectiveTitle = title || clientConfig.testimonials.title;
  const effectiveDescription = description || clientConfig.testimonials.description;
   const effectiveTestimonials = testimonials || clientConfig.testimonials.testimonials.map((testimonial: any) => ({
     ...testimonial,
     avatar: testimonial.avatar || undefined
   }));

  const renderGridTestimonials = () => (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {effectiveTitle}
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            {effectiveDescription}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {effectiveTestimonials.map((testimonial: Testimonial, index: number) => (
            <Card key={index} shadow="md" rounded="lg">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {testimonial.avatar ? (
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full mr-4"
                    />
                  ) : (
                    <div className="bg-gray-200 border-2 border-dashed rounded-full w-12 h-12 mr-4 flex items-center justify-center text-gray-500">
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h4 className="font-bold text-text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-text-secondary">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-text-secondary italic">"{testimonial.content}"</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCarouselTestimonials = () => {
    // Simple implementation with a single testimonial for now
    // In a real implementation, this would use a carousel component
    if (effectiveTestimonials.length === 0) {
      return null;
    }
    
    const firstTestimonial = effectiveTestimonials[0];
    
    return (
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              {effectiveTitle}
            </h2>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto">
              {effectiveDescription}
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card shadow="md" rounded="lg">
              <div className="p-8 md:p-12">
                <div className="flex items-center mb-6">
                  {firstTestimonial.avatar ? (
                    <img 
                      src={firstTestimonial.avatar} 
                      alt={firstTestimonial.name} 
                      className="w-16 h-16 rounded-full mr-6"
                    />
                  ) : (
                    <div className="bg-gray-200 border-2 border-dashed rounded-full w-16 h-16 mr-6 flex items-center justify-center text-gray-500">
                      {firstTestimonial.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <h4 className="font-bold text-text-primary text-xl">{firstTestimonial.name}</h4>
                    <p className="text-text-secondary">{firstTestimonial.role}</p>
                  </div>
                </div>
                <p className="text-text-secondary text-lg italic">"{firstTestimonial.content}"</p>
              </div>
            </Card>
            
            <div className="mt-8 flex justify-center space-x-2">
              {effectiveTestimonials.map((_testimony: Testimonial, index: number) => (
                <div 
                  key={index} 
                  className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-brand' : 'bg-gray-300'}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  switch (variant) {
    case 'carousel':
      return renderCarouselTestimonials();
    default:
      return renderGridTestimonials();
  }
};

export default Testimonials;