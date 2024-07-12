import type { FC, ReactNode } from 'react';

import Link from 'next/link';

import { cn } from '@/lib/utils';

type Props = {
  heading: string;
  backgroundColor?: string;
  textColor?: string;
  buttonInfo: {
    link: string;
    text: string;
    backgroundColor: string;
  };
  children: ReactNode;
};

const InfoBox: FC<Props> = ({
  heading,
  backgroundColor = 'bg-gray-100',
  textColor = 'text-gray-800',
  buttonInfo,
  children
}) => {
  return (
    <div className={cn('rounded-lg p-6 shadow-md', backgroundColor)}>
      <h2 className={cn('text-2xl font-bold', textColor)}>{heading}</h2>

      <p className={cn('mb-4 mt-2', textColor)}>{children}</p>

      <Link
        className={cn(
          'inline-block rounded-lg px-4 py-2 text-white hover:opacity-80',
          buttonInfo.backgroundColor
        )}
        href={buttonInfo.link}
      >
        {buttonInfo.text}
      </Link>
    </div>
  );
};

export default InfoBox;
