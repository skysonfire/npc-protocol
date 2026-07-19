import type { Metadata } from 'next';
import { Source_Serif_4, Work_Sans } from 'next/font/google';
import './globals.css';
import { clientConfig } from '@/content/client-config';

const sourceSerif4 = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-source-serif-4',
  display: 'swap',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-work-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: clientConfig.companyName,
    template: `%s | ${clientConfig.companyName}`,
  },
  description: clientConfig.companyDescription,
  metadataBase: new URL('https://example.com'),
  openGraph: {
    title: clientConfig.companyName,
    description: clientConfig.companyDescription,
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sourceSerif4.variable} ${workSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
