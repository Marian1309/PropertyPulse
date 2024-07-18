'use client';

import type { FC } from 'react';

import type { Message as MessageT } from '@/types';

import { useMessage } from '@/hooks';

import ReadButton from './read-button';

type Props = {
  message: MessageT;
};

const Message: FC<Props> = ({ message }) => {
  const { isRead, handleReadClick } = useMessage(message);

  return (
    <div className="relative rounded-md border border-gray-200 bg-white p-4 shadow-md">
      {!isRead && (
        <div className="absolute right-2 top-2 rounded-md bg-yellow-500 px-2 py-1 text-white">
          New
        </div>
      )}

      <h2 className="mb-4 text-xl">
        <span className="font-bold">Property Inquiry: </span>
        {message.property.name}
      </h2>

      <p className="text-gray-700">{message.body}</p>

      <ul className="mt-4">
        <li>
          <strong>Name:</strong> {message.sender.userName}
        </li>

        <li>
          <strong>Reply Email: </strong>
          <a className="text-blue-500" href={`mailto:${message.email}`}>
            {message.email}
          </a>
        </li>

        <li>
          <strong>Reply Phone: </strong>
          <a className="text-blue-500" href={`tel:${message.phone}`}>
            {message.phone}
          </a>
        </li>

        <li>
          <strong>Received: </strong>{' '}
          {new Date(message.createdAt).toLocaleString()}
        </li>
      </ul>

      <ReadButton handleReadClick={handleReadClick} isRead={isRead} />

      <button className="mt-4 rounded-md bg-red-500 px-3 py-1 text-white">
        Delete
      </button>
    </div>
  );
};

export default Message;
