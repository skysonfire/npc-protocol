import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const PageWrapper = ({ children, className = '' }: PageWrapperProps) => {
  return (
    <div className={`flex min-h-screen flex-col ${className}`}>
      <Nav />
      <main id="main-content" className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageWrapper;
