import { useEffect, useState } from 'react';

import { useParams } from 'next/navigation';

import type { Property } from '@/types';

import { fetchProperty } from '@/lib/requests';

const useProperty = () => {
  const { id } = useParams<{ id: string }>();

  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPropertyData = async () => {
      if (!id) {
        return;
      }

      try {
        const property = await fetchProperty(id);
        setProperty(property);
      } catch (err: unknown) {
        console.error('Error fetching property: ', err);
      } finally {
        setLoading(false);
      }
    };

    if (property === null) {
      fetchPropertyData();
    }
  }, [id, property]);

  return {
    property,
    loading
  };
};

export default useProperty;
