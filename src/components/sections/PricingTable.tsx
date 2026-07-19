import React from 'react';
import { Check } from 'lucide-react';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export interface PricingPlan {
  name: string;
  price: string;
  description?: string;
  features?: string[];
  isPopular?: boolean;
}

interface PricingTableProps {
  title?: string;
  description?: string;
  plans?: PricingPlan[];
}

const PricingTable = ({ title, description, plans = [] }: PricingTableProps) => {
  if (plans.length === 0) return null;

  return (
    <section id="pricing" className="py-xxl md:py-32">
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

        <div className="grid grid-cols-1 gap-lg md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              shadow={plan.isPopular ? 'lg' : 'sm'}
              rounded="lg"
              className={`relative flex flex-col p-lg ${
                plan.isPopular ? 'border-2 border-brand' : 'border border-text-secondary/10'
              }`}
            >
              {plan.isPopular && (
                <Badge variant="primary" className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Most Popular
                </Badge>
              )}

              <h3 className="font-heading text-xl font-semibold text-text-primary">{plan.name}</h3>
              <div className="mt-md">
                <span className="font-heading text-3xl font-semibold text-text-primary">
                  {plan.price}
                </span>
                <span className="text-text-secondary">/month</span>
              </div>
              {plan.description && <p className="mt-sm text-text-secondary">{plan.description}</p>}

              {plan.features && plan.features.length > 0 && (
                <ul className="mt-lg flex-1 space-y-sm">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-sm">
                      <Check aria-hidden="true" className="mt-0.5 h-5 w-5 flex-shrink-0 text-accent" strokeWidth={1.5} />
                      <span className="text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              <Button
                href="/contact"
                variant={plan.isPopular ? 'primary' : 'outline'}
                fullWidth
                className="mt-lg"
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
