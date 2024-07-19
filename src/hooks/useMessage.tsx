import { useState } from 'react';

import { toast } from 'react-toastify';

import type { Message } from '@/types';

import useGlobalContext from './use_GlobalContext';

type Return = (message: Message) => {
  isRead: boolean;
  isDeleted: boolean;
  handleReadClick: () => Promise<void>;
  handleDeleteClick: () => Promise<Response | undefined>;
};

const useReadButton: Return = (message: Message) => {
  const [isRead, setIsRead] = useState<boolean>(message.read);
  const [isDeleted, setIsDeleted] = useState<boolean>(false);

  const context = useGlobalContext();

  const handleDeleteClick = async () => {
    const confirmed = window.confirm('Are you sure to delete this message?');

    if (!confirmed) {
      return;
    }

    try {
      const res = await fetch(`/api/messages/${message._id}`, {
        method: 'DELETE'
      });

      if (res.status === 200) {
        setIsDeleted(true);
        context?.setUnreadCount((prevCount) => prevCount - 1);
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
        context?.setUnreadCount((prevCount) =>
          read ? prevCount - 1 : prevCount + 1
        );

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
