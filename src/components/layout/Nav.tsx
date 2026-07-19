import React from 'react';
import Link from 'next/link';
import { clientConfig } from '@/content/client-config';
import MobileNavToggle from './MobileNavToggle';

interface NavProps {
  className?: string;
}

const Nav = ({ className = '' }: NavProps) => {
  return (
    <header className={`relative border-b border-text-secondary/10 bg-surface/95 backdrop-blur ${className}`}>
      <nav aria-label="Primary" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="font-heading text-xl font-semibold text-text-primary transition-colors duration-200 hover:text-brand"
          >
            {clientConfig.companyName}
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {clientConfig.navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-brand"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <MobileNavToggle navLinks={clientConfig.navLinks} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
