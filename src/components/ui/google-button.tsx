'use client';

import type { FC } from 'react';

import type { ClientSafeProvider } from 'next-auth/react';
import { signIn } from 'next-auth/react';
import { FaGoogle } from 'react-icons/fa';

type Props = {
  provider?: ClientSafeProvider;
};

const GoogleButton: FC<Props> = ({ provider }) => {
  const handleSignIn = () => signIn(provider?.id);

  return (
    <button
      className="flex items-center rounded-md bg-gray-700 px-3 py-2 text-white hover:bg-gray-900 hover:text-white"
      onClick={handleSignIn}
    >
      <FaGoogle className="mr-2 text-white" />
      <span>Login or Register</span>
    </button>
  );
};

export default GoogleButton;
