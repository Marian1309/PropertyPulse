'use client';

import type { FC } from 'react';

import { FaBookmark } from 'react-icons/fa';

import type { Property } from '@/types';

import { useBookmarkButton } from '@/hooks';

type Props = {
  property: Property;
};

const BookmarkButton: FC<Props> = ({ property }) => {
  const { loading, isBookMarked, handleClick } = useBookmarkButton(property);

  if (loading) {
    return <p className="text-center">Loading...</p>;
  }

  if (isBookMarked) {
    return (
      <button
        className="flex w-full items-center justify-center rounded-full bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-600"
        onClick={handleClick}
      >
        <FaBookmark className="mr-2" /> Remove Bookmark
      </button>
    );
  }

  return (
    <button
      className="flex w-full items-center justify-center rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
      onClick={handleClick}
    >
      <FaBookmark className="mr-2" /> Add Bookmark
    </button>
  );
};

export default BookmarkButton;
