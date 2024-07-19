import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import { getServerSession } from 'next-auth';
import 'photoswipe/dist/photoswipe.css';

import '@/assets/styles/globals.scss';

import { authOptions } from '@/config';

import { cn } from '@/lib/utils';

import { Footer, Navbar } from '@/components/layout';

import { AuthProvider, ContextProvider, ToastProvider } from '@/providers';

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

const RootLayout = async ({ children }: Props) => {
  const session = await getServerSession(authOptions);

  return (
    <AuthProvider>
      <ContextProvider>
        <html lang="en">
          <body
            className={cn(poppins.className, 'flex min-h-[100vh] flex-col')}
          >
            <Navbar session={session} />
            <main className="flex-1 bg-blue-50">{children}</main>
            <Footer />

            <ToastProvider />
          </body>
        </html>
      </ContextProvider>
    </AuthProvider>
  );
};

export default RootLayout;
