import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';

import { useParams } from 'next/navigation';

import type { EditPropertyFields } from '@/types';

import { fetchProperty } from '@/lib/requests';

type Return = {
  fields: EditPropertyFields;
  isMounted: boolean;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  handleAmenitiesChange: (e: ChangeEvent<HTMLInputElement>) => void;
  loading: boolean;
};

const useEditPropertyFields = (): Return => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [fields, setFields] = useState<EditPropertyFields>({
    type: '',
    name: '',
    description: '',
    location: {
      street: '',
      city: '',
      state: '',
      zipcode: ''
    },
    beds: '',
    baths: '',
    square_feet: '',
    amenities: ['Wifi'],
    rates: {
      weekly: '',
      monthly: '',
      nightly: ''
    },
    seller_info: {
      name: '',
      email: '',
      phone: ''
    }
  });

  useEffect(() => {
    setIsMounted(true);

    const fetchPropertyData = async () => {
      try {
        const propertyData = await fetchProperty(id as string);
        setFields(propertyData);
      } catch (err: unknown) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPropertyData();
  }, [id]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (name.includes('.')) {
      const [outerKey, innerKey] = name.split('.');

      setFields((prevFields) => ({
        ...prevFields,
        [outerKey]: {
          ...prevFields[outerKey],
          [innerKey]: value
        }
      }));
    } else {
      setFields((prevFields) => ({
        ...prevFields,
        [name]: value
      }));
    }
  };

  const handleAmenitiesChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    const updatedAmenities = [...fields.amenities];

    if (checked) {
      updatedAmenities.push(value);
    } else {
      const index = updatedAmenities.indexOf(value);

      if (index !== -1) {
        updatedAmenities.splice(index, 1);
      }
    }

    setFields((prevFields) => ({
      ...prevFields,
      amenities: updatedAmenities
    }));
  };

  return {
    fields,
    isMounted,
    handleChange,
    handleAmenitiesChange,
    loading
  };
};

export default useEditPropertyFields;
