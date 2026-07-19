import React from 'react';
import Button from '@/components/ui/Button';

interface CTAProps {
  title: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

const CTA = ({ title, description, buttonText, buttonLink = '/contact' }: CTAProps) => {
  return (
    <section className="bg-brand py-xxl">
      <div className="mx-auto max-w-3xl px-md text-center sm:px-lg lg:px-xl">
        <h2 className="font-heading text-3xl font-semibold text-surface md:text-4xl">{title}</h2>
        {description && <p className="mx-auto mt-md max-w-2xl text-lg text-surface/85">{description}</p>}
        {buttonText && (
          <div className="mt-lg flex justify-center">
            <Button href={buttonLink} variant="secondary" size="lg">
              {buttonText}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CTA;
