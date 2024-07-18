import type { FC } from 'react';

import type { Property } from '@/types';
import type { MessageT } from '@/types/schemas';

type Props = {
  message: MessageT & {
    sender: {
      userName: string;
    };
    userName: string;
    title: string;
    property: Property;
  };
};

const Message: FC<Props> = ({ message }) => {
  return (
    <div className="relative rounded-md border border-gray-200 bg-white p-4 shadow-md">
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

      <button className="mr-3 mt-4 rounded-md bg-blue-500 px-3 py-1 text-white">
        Mark As Read
      </button>

      <button className="mt-4 rounded-md bg-red-500 px-3 py-1 text-white">
        Delete
      </button>
    </div>
  );
};

export default Message;
