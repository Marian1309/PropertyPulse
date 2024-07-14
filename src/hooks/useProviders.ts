import { useEffect, useState } from 'react';

import type { BuiltInProviderType } from 'next-auth/providers/index';
import type { ClientSafeProvider, LiteralUnion } from 'next-auth/react';
import { getProviders } from 'next-auth/react';

const useProviders = () => {
  const [providers, setProiders] = useState<Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null>();

  useEffect(() => {
    const setAuthProviders = async () => {
      const providers = await getProviders();
      setProiders(providers);
    };

    setAuthProviders();
  }, []);

  return providers;
};

export default useProviders;
