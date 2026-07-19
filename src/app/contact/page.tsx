"use client";

import React from 'react';
import PageWrapper from '@/components/layout/PageWrapper';
import Hero from '@/components/sections/Hero';
import ContactForm from '@/components/sections/ContactForm';
import CTA from '@/components/sections/CTA';
import PricingTable from '@/components/sections/PricingTable';

const ContactPage = () => {
  return (
    <PageWrapper>
      <Hero 
        variant="centered" 
        title="Get in Touch" 
        subtitle="Have questions about our services? We'd love to hear from you." 
      />
      <ContactForm />
      <div className="my-12">
        <CTA 
          title="Ready to get started?"
          description="Contact us today for a free consultation and see how we can help your business grow."
          buttonText="Schedule a Call"
          buttonLink="/contact"
        />
      </div>
      <div className="my-12">
        <PricingTable 
          title="Simple, transparent pricing"
          description="Choose the plan that works best for you. All plans include our core features."
          plans={[
            {
              name: "Starter",
              price: "$29",
              description: "Perfect for individuals and small projects",
              features: [
                "Basic features",
                "Email support",
                "1GB storage",
                "5 projects"
              ]
            },
            {
              name: "Professional",
              price: "$79",
              description: "Ideal for growing businesses",
              features: [
                "All starter features",
                "Priority support",
                "10GB storage",
                "Unlimited projects",
                "Advanced analytics"
              ],
              isPopular: true
            },
            {
              name: "Enterprise",
              price: "$199",
              description: "For large organizations",
              features: [
                "All professional features",
                "24/7 dedicated support",
                "50GB storage",
                "Unlimited projects",
                "Advanced analytics",
                "Custom integrations"
              ]
            }
          ]}
        />
      </div>
    </PageWrapper>
  );
};

export default ContactPage;
