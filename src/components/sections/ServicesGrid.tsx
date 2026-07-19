import React from 'react';
import * as Icons from 'lucide-react';
import { HelpCircle } from 'lucide-react';
import Card from '@/components/ui/Card';
import ImagePlaceholder from '@/components/ui/ImagePlaceholder';

export interface ServiceItem {
  title: string;
  description: string;
  /** kebab-case lucide-react icon name, e.g. "layout-template", "bot", "line-chart" */
  icon?: string;
}

interface ServicesGridProps {
  variant?: 'card-grid' | 'alternating-rows';
  title?: string;
  description?: string;
  items?: ServiceItem[];
}

function kebabToPascal(str: string) {
  return str
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

function ServiceIcon({ name }: { name?: string }) {
  if (!name) {
    return <HelpCircle aria-hidden="true" className="h-8 w-8 text-accent" strokeWidth={1.5} />;
  }
  const componentName = kebabToPascal(name);
  const IconComponent = (Icons as unknown as Record<string, React.ComponentType<{ className?: string; strokeWidth?: number; 'aria-hidden'?: boolean }>>)[
    componentName
  ];

  if (!IconComponent) {
    return <HelpCircle aria-hidden="true" className="h-8 w-8 text-accent" strokeWidth={1.5} />;
  }

  return <IconComponent aria-hidden className="h-8 w-8 text-accent" strokeWidth={1.5} />;
}

const ServicesGrid = ({
  variant = 'card-grid',
  title,
  description,
  items = [],
}: ServicesGridProps) => {
  if (items.length === 0) return null;

  if (variant === 'alternating-rows') {
    return (
      <section className="py-xxl md:py-32">
        <div className="mx-auto max-w-7xl px-md sm:px-lg lg:px-xl">
          {(title || description) && (
            <div className="mx-auto mb-xxl max-w-2xl text-center">
              {title && (
                <h2 className="font-heading text-3xl font-semibold text-text-primary md:text-4xl">
                  {title}
                </h2>
              )}
              {description && <p className="mt-md text-lg text-text-secondary">{description}</p>}
            </div>
          )}

          <div className="flex flex-col gap-xxl">
            {items.map((item, index) => (
              <div
                key={item.title}
                className={`flex flex-col items-center gap-xl lg:flex-row ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="w-full lg:w-1/2">
                  <ImagePlaceholder alt={`Illustration representing the ${item.title} service`} />
                </div>
                <div className="w-full lg:w-1/2">
                  <ServiceIcon name={item.icon} />
                  <h3 className="mt-md font-heading text-2xl font-semibold text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-sm text-text-secondary">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // card-grid (default)
  return (
    <section className="py-xxl md:py-32">
      <div className="mx-auto max-w-7xl px-md sm:px-lg lg:px-xl">
        {(title || description) && (
          <div className="mx-auto mb-xxl max-w-2xl text-center">
            {title && (
              <h2 className="font-heading text-3xl font-semibold text-text-primary md:text-4xl">
                {title}
              </h2>
            )}
            {description && <p className="mt-md text-lg text-text-secondary">{description}</p>}
          </div>
        )}

        <div className="grid grid-cols-1 gap-lg md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item.title} shadow="sm" rounded="lg" className="p-lg">
              <ServiceIcon name={item.icon} />
              <h3 className="mt-md font-heading text-xl font-semibold text-text-primary">
                {item.title}
              </h3>
              <p className="mt-sm text-text-secondary">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
