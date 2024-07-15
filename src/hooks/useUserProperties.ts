import { useEffect, useState } from 'react';

import { useSession } from 'next-auth/react';

import type { Property } from '@/types';

type Return = {
  profile: {
    name: string | null | undefined;
    email: string | null | undefined;
    image: string | null | undefined;
  };
  properties: Property[];
  loading: boolean;
};

const useUserProperties = (): Return => {
  const { data: session } = useSession();

  const profileName = session?.user.name;
  const profileEmail = session?.user.email;
  const profileImage = session?.user.image;

  const profile = {
    name: profileName,
    email: profileEmail,
    image: profileImage
  };

  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProperties = async (userId: string) => {
      if (!userId) {
        return;
      }

      try {
        const res = await fetch(`/api/properties/user/${userId}`);

        if (res.status === 200) {
          const userProperties = await res.json();
          setProperties(userProperties);
        }
      } catch (err: unknown) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    if (session?.user.id) {
      fetchUserProperties(session.user.id);
    }
  }, [session]);

  return {
    profile,
    properties,
    loading
  };
};

export default useUserProperties;
