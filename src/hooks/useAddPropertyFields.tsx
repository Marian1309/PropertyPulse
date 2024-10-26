import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';

import type { AddPropertyFields } from '@/types';

type Return = {
  fields: AddPropertyFields;
  isMounted: boolean;
  handleChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  handleAmenitiesChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const useAddPropertyFields = (): Return => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [fields, setFields] = useState<AddPropertyFields>({
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
    },
    images: []
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

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

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    const updatedImages = [...fields.images];

    if (files) {
      for (const file of Array.from(files)) {
        updatedImages.push(file);
      }

      setFields((prevFields: AddPropertyFields) => ({
        ...prevFields,
        images: updatedImages
      }));
    }
  };

  return {
    fields,
    isMounted,
    handleChange,
    handleAmenitiesChange,
    handleImageChange
  };
};

export default useAddPropertyFields;
