'use client';

import type { FC } from 'react';

import type { MessageT } from '@/types/schemas';

import { useMessages } from '@/hooks';

import { Spinner } from '@/components/ui';

import Message from './message';

const Messages: FC = () => {
  const { loading, messages } = useMessages();

  if (loading) {
    return <Spinner loading={loading} />;
  }

  const render = (messages: MessageT[]) => {
    if (messages.length === 0) {
      return <p>You have no messages.</p>;
    }

    return (
      <>
        {messages.map((message) => (
          <Message key={message._id} message={message} />
        ))}
      </>
    );
  };

  return (
    <section className="bg-blue-50">
      <div className="container m-auto max-w-6xl py-24">
        <div className="m-4 mb-4 rounded-md border bg-white px-6 py-8 shadow-md md:m-0">
          <h1 className="mb-4 text-3xl font-bold">Your Messages</h1>

          <div className="space-y-4">{render(messages)}</div>
        </div>
      </div>
    </section>
  );
};

export default Messages;
