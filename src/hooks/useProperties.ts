import { useEffect, useState } from 'react';

import type { Property } from '@/types';

const useProperties = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(3);
  const [totalItems, setTotalItems] = useState<number>(0);

  properties.sort((a, b) => {
    return Number(new Date(b.createdAt)) - Number(new Date(a.createdAt));
  });

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const res = await fetch(
          `/api/properties?page=${page}&pageSize=${pageSize}`,
          { cache: 'no-cache' }
        );

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const { total, properties } = await res.json();
        setProperties(properties);
        setTotalItems(total);
      } catch (err: unknown) {
        console.log(err);
        return [];
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [page, pageSize]);

  return {
    properties,
    loading,
    totalItems,
    page,
    pageSize,
    setPage
  };
};

export default useProperties;
