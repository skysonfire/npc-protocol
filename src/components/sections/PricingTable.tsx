"use client";

import React from 'react';
import { clientConfig } from '@/content/client-config';

interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

interface PricingTableProps {
  variant?: 'basic' | 'featured';
  plans: PricingPlan[];
}

const PricingTable = ({ variant = 'basic', plans }: PricingTableProps) => {
  // Basic variant - simple grid layout
  if (variant === 'basic') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`border rounded-lg p-6 ${
              plan.popular 
                ? 'border-blue-500 bg-blue-50' 
                : 'border-gray-200'
            }`}
          >
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <p className="text-3xl font-bold mb-4">{plan.price}</p>
            <ul className="mb-6 space-y-2">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className={`w-full py-2 px-4 rounded ${
              plan.popular 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-800'
            }`}>
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    );
  }

  // Featured variant - more elaborate layout
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-4 text-left">Feature</th>
            {plans.map((plan, index) => (
              <th 
                key={index} 
                className={`border p-4 text-center ${
                  plan.popular ? 'bg-blue-50' : ''
                }`}
              >
                <div className="font-bold">{plan.name}</div>
                <div className="text-2xl font-bold mt-1">{plan.price}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {plans[0].features.map((_, featureIndex) => (
            <tr key={featureIndex}>
              <td className="border p-4">
                <span className="font-medium">Feature {featureIndex + 1}</span>
              </td>
              {plans.map((plan, planIndex) => (
                <td 
                  key={planIndex} 
                  className={`border p-4 text-center ${
                    plan.popular ? 'bg-blue-50' : ''
                  }`}
                >
                  {plan.features[featureIndex] || '-'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td className="border p-4 text-center" colSpan={plans.length + 1}>
              <button className={`py-2 px-6 rounded ${
                plans[0].popular 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-800'
              }`}>
                {plans[0].cta}
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default PricingTable;