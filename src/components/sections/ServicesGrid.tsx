"use client";

import React from 'react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}

interface ServicesGridProps {
  variant?: 'card-grid' | 'alternating-rows';
  title: string;
  description: string;
  items: ServiceItem[];
}

const ServicesGrid = ({
  variant = 'card-grid',
  title,
  description,
  items
}: ServicesGridProps) => {
  const renderCardGrid = () => (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {title}
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Card key={index} shadow="md" rounded="lg">
              <div className="p-6">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-text-secondary">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAlternatingRows = () => (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            {title}
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="space-y-12">
          {items.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
            >
              <div className="md:w-1/2">
                <Card shadow="md" rounded="lg">
                  <div className="p-6">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold text-text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </div>
              <div className="md:w-1/2">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center text-gray-500">
                  Placeholder Image
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  switch (variant) {
    case 'alternating-rows':
      return renderAlternatingRows();
    default:
      return renderCardGrid();
  }
};

export default ServicesGrid;