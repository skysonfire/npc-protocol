"use client";

import React from 'react';
import Link from 'next/link';
import { clientConfig } from '@/content/client-config';

interface NavProps {
  className?: string;
}

const Nav = ({ className = '' }: NavProps) => {
  return (
    <nav className={`py-4 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link 
            href="/" 
            className="text-xl font-bold text-text-primary hover:text-brand transition-colors duration-200"
          >
            {clientConfig.navigation.logo}
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {clientConfig.navigation.links.map((link) => (
              <Link 
                key={link.name}
                href={link.href}
                className="text-text-secondary hover:text-brand transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <button 
            className="md:hidden text-text-primary"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;