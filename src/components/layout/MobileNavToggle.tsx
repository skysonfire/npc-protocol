"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface NavLink {
  name: string;
  href: string;
}

interface MobileNavToggleProps {
  navLinks: NavLink[];
}

/**
 * Isolated client-leaf for the mobile navigation. Everything else in Nav
 * stays a Server Component; only this interactive island ships JS.
 */
const MobileNavToggle = ({ navLinks }: MobileNavToggleProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-menu"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        className="flex h-10 w-10 items-center justify-center rounded-md text-text-primary transition-colors duration-200 hover:bg-surface-alt focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
      >
        {isOpen ? (
          <X aria-hidden="true" className="h-6 w-6" strokeWidth={1.5} />
        ) : (
          <Menu aria-hidden="true" className="h-6 w-6" strokeWidth={1.5} />
        )}
      </button>

      {isOpen && (
        <div
          id="mobile-nav-menu"
          className="absolute inset-x-0 top-full z-40 border-t border-text-secondary/10 bg-surface shadow-lg"
        >
          <nav aria-label="Mobile" className="flex flex-col px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="py-3 text-base text-text-primary transition-colors duration-200 hover:text-brand"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default MobileNavToggle;
