import { useEffect, useState } from 'react';

import type { ReadonlyURLSearchParams } from 'next/navigation';

import type { Property } from '@/types';

type Return = (searchParams: ReadonlyURLSearchParams) => {
  loading: boolean;
  properties: Property[];
};

const useSearchResults: Return = (searchParams) => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const location = searchParams.get('locatio');
  const propertyType = searchParams.get('propertyType');

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const res = await fetch(
          `/api/properties/search?location=${location}&propertyType=${propertyType}`
        );

        if (res.status === 200) {
          const data = await res.json();
          setProperties(data);
        } else {
          setProperties([]);
        }
      } catch (err: unknown) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [location, propertyType]);

  return {
    loading,
    properties
  };
};

export default useSearchResults;
