import { useEffect, useState } from 'react';

type Return = {
  loading: boolean;
  messages: any[];
};

const useMessages = (): Return => {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLaoding] = useState<boolean>(true);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await fetch('/api/messages');

        if (res.status === 200) {
          const data = await res.json();
          setMessages(data);
        }
      } catch (err: unknown) {
        console.log('Error fetching messages: ', err);
      } finally {
        setLaoding(false);
      }
    };

    getMessages();
  }, []);

  return {
    loading,
    messages
  };
};

export default useMessages;
