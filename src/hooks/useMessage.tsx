import { useState } from 'react';

import { toast } from 'react-toastify';

import type { Message } from '@/types';

type Return = (message: Message) => {
  isRead: boolean;
  isDeleted: boolean;
  handleReadClick: () => Promise<void>;
  handleDeleteClick: () => Promise<Response | undefined>;
};

const useReadButton: Return = (message: Message) => {
  const [isRead, setIsRead] = useState<boolean>(message.read);
  const [isDeleted, setIsDeleted] = useState<boolean>(false);

  const handleDeleteClick = async () => {
    try {
      const res = await fetch(`/api/messages/${message._id}`, {
        method: 'DELETE'
      });

      if (res.status === 200) {
        setIsDeleted(true);
        toast.success('Message Deleted');
      }
    } catch (err: unknown) {
      console.log(err);
      return new Response('Message was not deleted');
    }
  };

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
    isDeleted,
    handleReadClick,
    handleDeleteClick
  };
};

export default useReadButton;
