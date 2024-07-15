'use client';

import type { ChangeEvent, FC } from 'react';

import { useParams, useRouter } from 'next/navigation';

import { toast } from 'react-toastify';

import useEditPropertyFields from '@/hooks/usuEditPropertyFields';

import { Spinner } from '@/components/ui';

import AddPropertyAmenities from '@/app/properties/add/_components/amenities';
import AddPropertyFurniture from '@/app/properties/add/_components/furniture';
import AddPropertyInput from '@/app/properties/add/_components/input';
import AddPropertyLocation from '@/app/properties/add/_components/location';
import AddPropertyRates from '@/app/properties/add/_components/rates';
import AddPropertyType from '@/app/properties/add/_components/type';

const EditPropertyForm: FC = () => {
  const router = useRouter();
  const { id } = useParams();
  const { isMounted, fields, handleChange, loading, handleAmenitiesChange } =
    useEditPropertyFields();

  if (!isMounted) {
    return null;
  }

  if (loading) {
    return (
      <div className="h-adaptive">
        <Spinner loading={loading} />;
      </div>
    );
  }

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast.success('Good');

    return;

    try {
      const formData = new FormData(e.target);

      const res = await fetch(`/api/properties/${id}`, {
        method: 'PUT',
        body: formData
      });

      if (res.status === 200) {
        router.push(`/properties/${id}`);
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

      <AddPropertyType />

      <AddPropertyInput
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

      <AddPropertyLocation
        handleChange={handleChange}
        location={fields.location}
      />

      <AddPropertyFurniture fields={fields} handleChange={handleChange} />

      <AddPropertyAmenities
        fields={fields}
        handleAmenitiesChange={handleAmenitiesChange}
      />

      <AddPropertyRates handleChange={handleChange} rates={fields.rates} />

      <AddPropertyInput
        handleChange={handleChange}
        label="Seller Name"
        name="seller_info.name"
        placeholder="Name"
        type="text"
        value={fields.seller_info.name}
      />

      <AddPropertyInput
        handleChange={handleChange}
        label="Seller Email"
        name="seller_info.email"
        placeholder="Email"
        type="email"
        value={fields.seller_info.email}
      />

      <AddPropertyInput
        handleChange={handleChange}
        label="Seller Phone"
        name="seller_info.phone"
        placeholder="Phone"
        value={fields.seller_info.phone}
      />

      <div>
        <button
          className="focus:shadow-outline w-full rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600 focus:outline-none"
          type="submit"
        >
          Edit Property
        </button>
      </div>
    </form>
  );
};

export default EditPropertyForm;
