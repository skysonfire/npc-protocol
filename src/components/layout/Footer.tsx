import React from 'react';
import Link from 'next/link';
import { clientConfig } from '@/content/client-config';
import Container from '@/components/ui/Container';

interface FooterProps {
  className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
  return (
    <footer className={`border-t border-text-secondary/10 py-xl ${className}`}>
      <Container>
        <div className="flex flex-col items-center justify-between gap-md md:flex-row">
          <p className="text-sm text-text-secondary">{clientConfig.footer.copyright}</p>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap justify-center gap-lg">
              {clientConfig.navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors duration-200 hover:text-brand"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
