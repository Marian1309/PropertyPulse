import { useEffect } from 'react';

import type { Session } from 'next-auth';

import useGlobalContext from './use_GlobalContext';

type Return = (session: Session | null) => number | undefined;

const useUnreadCount: Return = (session) => {
  const context = useGlobalContext();

  useEffect(() => {
    if (!session) return;

    const fetchUnreadMessageCount = async () => {
      try {
        const res = await fetch('/api/messages/unread-count');

        if (res.status === 200) {
          const data = await res.json();
          context?.setUnreadCount(data.count);
        }
      } catch (err: unknown) {
        console.log(err);
      }
    };

    fetchUnreadMessageCount();
  }, [context, session]);

  return context?.unreadCount;
};

export default useUnreadCount;
