import type { ChangeEvent, FC } from 'react';

type Props = {
  handleImageChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const AddPropertyImages: FC<Props> = ({ handleImageChange }) => {
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
        required
        type="file"
      />
    </div>
  );
};

export default AddPropertyImages;
