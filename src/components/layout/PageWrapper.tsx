"use client";

import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const PageWrapper = ({ children, className = '' }: PageWrapperProps) => {
  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      <Nav />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageWrapper;