'use client';

import type { Dispatch, FC, ReactNode, SetStateAction } from 'react';
import { createContext, useEffect, useState } from 'react';

import { useSession } from 'next-auth/react';

type Context = {
  unreadCount: number;
  setUnreadCount: Dispatch<SetStateAction<number>>;
};

export const GlobalContext = createContext<Context | null>(null);

type Props = {
  children: ReactNode;
};

const ContextProvider: FC<Props> = ({ children }) => {
  const { data: session } = useSession();

  const [unreadCount, setUnreadCount] = useState<number>(0);

  useEffect(() => {
    if (!session) return;

    const fetchUnreadMessageCount = async () => {
      try {
        const res = await fetch('/api/messages/unread-count');

        if (res.status === 200) {
          const data = await res.json();
          setUnreadCount(data.count);
        }
      } catch (err: unknown) {
        console.log(err);
      }
    };

    fetchUnreadMessageCount();
  }, [session]);

  return (
    <GlobalContext.Provider value={{ unreadCount, setUnreadCount }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default ContextProvider;
