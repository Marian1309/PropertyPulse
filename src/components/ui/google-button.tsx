import type { FC } from 'react';

import { FaGoogle } from 'react-icons/fa';

const GoogleButton: FC = () => {
  return (
    <button className="flex items-center rounded-md bg-gray-700 px-3 py-2 text-white hover:bg-gray-900 hover:text-white">
      <FaGoogle className="mr-2 text-white" />
      <span>Login or Register</span>
    </button>
  );
};

export default GoogleButton;
