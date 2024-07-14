import type { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { logo } from '@/assets/images';

const Footer: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-gray-200 py-4">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row">
        <div className="mf:block flex items-center justify-center gap-x-3">
          <div className="mb-4 md:mb-0">
            <Image
              alt="Logo"
              className="h-8 w-auto"
              height={50}
              src={logo.src}
              width={50}
            />
          </div>

          <div className="mb-4 flex flex-wrap justify-center md:mb-0 md:justify-start">
            <ul className="flex space-x-4">
              <li>
                <Link href="/properties">Properties</Link>
              </li>

              <li>
                <Link href="/">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <p className="mt-2 text-sm text-gray-500 md:mt-0">
            &copy; {currentYear} PropertyPulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
