"use client";

import React from 'react';

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

interface PricingTableProps {
  title: string;
  description: string;
  plans: PricingPlan[];
}

const PricingTable = ({ title, description, plans }: PricingTableProps) => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-text-primary mb-4">{title}</h2>
        <p className="text-text-secondary max-w-2xl mx-auto">{description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`rounded-xl p-8 border ${
              plan.isPopular 
                ? 'border-brand bg-brand/5 relative' 
                : 'border-gray-200'
            }`}
          >
            {plan.isPopular && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand text-white text-sm font-medium px-4 py-1 rounded-full">
                Most Popular
              </div>
            )}
            
            <h3 className="text-xl font-bold text-text-primary mb-2">{plan.name}</h3>
            <div className="mb-6">
              <span className="text-3xl font-bold text-text-primary">{plan.price}</span>
              <span className="text-text-secondary">/month</span>
            </div>
            <p className="text-text-secondary mb-6">{plan.description}</p>
            
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <svg 
                    className="h-5 w-5 text-green-500 mr-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            
            <button 
              className={`w-full py-3 px-6 rounded-lg font-medium ${
                plan.isPopular
                  ? 'bg-brand text-white hover:bg-brand-dark'
                  : 'bg-surface text-text-primary border border-gray-200 hover:bg-gray-50'
              } transition-colors`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;