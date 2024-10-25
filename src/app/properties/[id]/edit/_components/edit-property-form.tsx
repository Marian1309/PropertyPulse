'use client';

import type { ChangeEvent, FC } from 'react';

import { useParams, useRouter } from 'next/navigation';

import { useFormStatus } from 'react-dom';
import { toast } from 'react-toastify';

import useEditPropertyFields from '@/hooks/usuEditPropertyFields';

import {
  PropertyAmenities,
  PropertyFurniture,
  PropertyInput,
  PropertyLocation,
  PropertyRates,
  PropertyType
} from '@/components/form';
import { Spinner } from '@/components/ui';

const EditPropertyForm: FC = () => {
  const router = useRouter();
  const { id } = useParams() as { id: string };

  const { isMounted, fields, handleChange, loading, handleAmenitiesChange } =
    useEditPropertyFields(id);

  const { pending } = useFormStatus();

  if (!isMounted) {
    return <Spinner loading={!isMounted} />;
  }

  if (pending) {
    return <Spinner loading={pending} />;
  }

  if (loading) {
    return <Spinner loading={loading} />;
  }

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const formData = new FormData(e.target);

      const res = await fetch(`/api/properties/${id}`, {
        method: 'PUT',
        body: formData
      });

      if (res.status === 200) {
        router.push(`/properties/${id}?updated=true`);
      } else if (res.status === 401 || res.status === 403) {
        toast.error('Permission denied');
      } else {
        toast.error('Something went wrong');
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="mb-6 text-center text-3xl font-semibold">Edit Property</h2>

      <PropertyType fields={fields} handleChange={handleChange} />

      <PropertyInput
        handleChange={handleChange}
        label="Listing Name"
        name="name"
        placeholder="eg. Beautiful Apartment In Miami"
        value={fields.name}
      />

      <div className="mb-4">
        <label className="mb-2 block font-bold text-gray-700">
          Description
        </label>

        <textarea
          className="w-full rounded border px-3 py-2"
          name="description"
          onChange={handleChange}
          placeholder="Add an optional description of your property"
          rows={4}
          value={fields.description}
        />
      </div>

      <PropertyLocation
        handleChange={handleChange}
        location={fields.location}
      />

      <PropertyFurniture fields={fields} handleChange={handleChange} />

      <PropertyAmenities
        fields={fields}
        handleAmenitiesChange={handleAmenitiesChange}
      />

      <PropertyRates handleChange={handleChange} rates={fields.rates} />

      <PropertyInput
        handleChange={handleChange}
        label="Seller Name"
        name="seller_info.name"
        placeholder="Name"
        type="text"
        value={fields.seller_info.name}
      />

      <PropertyInput
        handleChange={handleChange}
        label="Seller Email"
        name="seller_info.email"
        placeholder="Email"
        type="email"
        value={fields.seller_info.email}
      />

      <PropertyInput
        handleChange={handleChange}
        label="Seller Phone"
        name="seller_info.phone"
        placeholder="Phone"
        value={fields.seller_info.phone}
      />

      <button
        className="focus:shadow-outline w-full rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600 focus:outline-none"
        type="submit"
      >
        Edit Property
      </button>
    </form>
  );
};

export default EditPropertyForm;
