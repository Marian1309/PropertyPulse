import { useEffect, useState } from 'react';

import type { Property } from '@/types';

const useProperties = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  properties.sort((a, b) => {
    return Number(new Date(b.createdAt)) - Number(new Date(a.createdAt));
  });

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch('/api/properties', { cache: 'no-cache' });

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await res.json();
        setProperties(data);
      } catch (err: unknown) {
        console.log(err);
        return [];
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  return {
    properties,
    loading
  };
};

export default useProperties;
