import { useEffect, useState } from 'react';

import { toast } from 'react-toastify';

import type { Property } from '@/types';

type Return = {
  loading: boolean;
  properties: Property[];
};

const useSavedProperties = (): Return => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSavedProoerties = async () => {
      try {
        const res = await fetch(`/api/bookmarks`);

        if (res.status === 200) {
          const data = await res.json();
          setProperties(data);
        } else {
          console.log(res.statusText);
          toast.error('Failed to fetch saved properties');
        }
      } catch (err: unknown) {
        console.log(err);
        toast.error('Failed to fetch saved properties');
      } finally {
        setLoading(false);
      }
    };

    fetchSavedProoerties();
  }, []);

  return {
    loading,
    properties
  };
};

export default useSavedProperties;
