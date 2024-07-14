import type { FC } from 'react';

import { useFields } from '@/hooks';

const AddPropertyImages: FC = () => {
  const { handleImageChange } = useFields();

  return (
    <div className="mb-4">
      <label className="mb-2 block font-bold text-gray-700">
        Images (Select up to 4 images)
      </label>

      <input
        accept="image/*"
        className="w-full rounded border px-3 py-2"
        multiple
        name="images"
        onChange={handleImageChange}
        type="file"
      />
    </div>
  );
};

export default AddPropertyImages;
