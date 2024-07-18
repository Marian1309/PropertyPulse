import type { FC } from 'react';

import { cn } from '@/lib/utils';

type Props = {
  isRead: boolean;
  handleReadClick: () => Promise<void>;
};

const ReadButton: FC<Props> = ({ isRead, handleReadClick }) => {
  return (
    <button
      className={cn(
        'mr-3 mt-4 rounded-md bg-blue-500 px-3 py-1',
        isRead ? 'bg-gray-300' : 'bg-blue-500 text-white'
      )}
      onClick={handleReadClick}
    >
      {isRead ? 'Mark As Read' : 'Mark As Read'}
    </button>
  );
};

export default ReadButton;
