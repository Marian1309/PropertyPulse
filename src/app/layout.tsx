import type { FC, ReactNode } from 'react';

import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';

import '@/assets/styles/globals.scss';

import { cn } from '@/lib/utils';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

const figtree = Figtree({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: {
    template: '%s • Fint The Perfect Rental',
    default: 'Property Pulse'
  },
  description: 'Find your dream rental property',
  keywords: ['rental, find rentals, find properties']
};

const RootLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={cn(figtree.className, 'flex flex-col')}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
