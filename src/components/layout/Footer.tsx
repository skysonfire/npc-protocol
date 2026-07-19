"use client";

import React from 'react';
import Link from 'next/link';
import { clientConfig } from '@/content/client-config';

interface FooterProps {
  className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
  return (
    <footer className={`py-8 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-text-secondary">{clientConfig.footer.copyright}</p>
          </div>
          
          <div className="flex space-x-6">
            {clientConfig.footer.links.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className="text-text-secondary hover:text-brand transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;