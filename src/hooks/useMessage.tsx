import { useState } from 'react';

import { toast } from 'react-toastify';

import type { Message } from '@/types';

type Return = (message: Message) => {
  isRead: boolean;
  handleReadClick: () => Promise<void>;
};

const useReadButton: Return = (message: Message) => {
  const [isRead, setIsRead] = useState(message.read);

  const handleReadClick = async () => {
    try {
      const res = await fetch(`/api/messages/${message._id}`, {
        method: 'PUT'
      });

      if (res.status === 200) {
        const { read } = await res.json();
        setIsRead(read);

        if (read) {
          toast.success('Marked as read');
        } else {
          toast.success('Marked as new');
        }
      }
    } catch (err: unknown) {
      console.log(err);
      toast.error('Something went wrong.');
    }
  };

  return {
    isRead,
    handleReadClick
  };
};

export default useReadButton;
