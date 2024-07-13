import type { FC, ReactNode } from 'react';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import '@/assets/styles/globals.scss';

import { cn } from '@/lib/utils';

import { Footer, Navbar } from '@/components/layout';

import { AuthProvider } from '@/providers';

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: {
    template: '%s • Find The Perfect Rental',
    default: 'Property Pulse'
  },
  description: 'Find your dream rental property',
  keywords: ['rental, find rentals, find properties']
};

type Props = {
  children: ReactNode;
};

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={cn(poppins.className, 'flex flex-col')}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default RootLayout;
