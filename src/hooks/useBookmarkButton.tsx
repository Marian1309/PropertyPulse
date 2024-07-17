import { useEffect, useState } from 'react';

import { useSession } from 'next-auth/react';
import { toast } from 'react-toastify';

import type { Property } from '@/types';

type Return = {
  isBookMarked: boolean;
  loading: boolean;
  handleClick: () => Promise<void>;
};

const useBookmarkButton = (property: Property): Return => {
  const { data: session } = useSession();

  const userId = session?.user.id;

  const [isBookMarked, setIsBookMarked] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!userId) {
      setLoading(false);
      return;
    }

    const checkBoomarkStatus = async () => {
      try {
        const res = await fetch(`/api/bookmarks/check`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            propertyId: property._id
          })
        });

        if (res.status === 200) {
          const data = await res.json();
          setIsBookMarked(data.isBookMarked);
        }
      } catch (err: unknown) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    checkBoomarkStatus();
  }, [property._id, userId]);

  const handleClick = async () => {
    if (!userId) {
      toast.error('You need to sign in to bookmark the property');
      return;
    }

    try {
      const res = await fetch(`/api/bookmarks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          propertyId: property._id
        })
      });

      if (res.status === 200) {
        const data = await res.json();
        toast.success(data.message);
        setIsBookMarked(data.isBookMarked);
      }
    } catch (err: unknown) {
      console.log(err);
      toast.error('Something went wrong');
    }
  };

  return {
    isBookMarked,
    loading,
    handleClick
  };
};

export default useBookmarkButton;
