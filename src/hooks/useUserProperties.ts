import { useEffect, useState } from 'react';

import type { Session } from 'next-auth';
import { toast } from 'react-toastify';

import type { Property } from '@/types';

type Return = (session: Session | null) => {
  profile: {
    name: string | null | undefined;
    email: string | null | undefined;
    image: string | null | undefined;
  };
  properties: Property[];
  loading: boolean;
  handleDeleteProperty: (propertyId: string) => Promise<void>;
};

const useUserProperties: Return = (session) => {
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

  const handleDeleteProperty = async (propertyId: string) => {
    const confirmed = window.confirm('Are you sure to delete this property?');

    if (!confirmed) {
      return;
    }

    try {
      const res = await fetch(`/api/properties/${propertyId}`, {
        method: 'DELETE'
      });

      if (res.status === 200) {
        const updatedProperties = properties.filter(
          (property) => property._id !== propertyId
        );

        setProperties(updatedProperties);
        toast.success('Property Deleted');
      } else {
        toast.error('Failed to delete property');
      }
    } catch (err: unknown) {
      console.log(err);
      toast.error('Failed to delete property');
    }
  };

  return {
    loading,
    profile,
    properties,
    handleDeleteProperty
  };
};

export default useUserProperties;
