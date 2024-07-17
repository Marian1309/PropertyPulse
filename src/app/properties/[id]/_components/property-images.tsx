import type { FC } from 'react';

import Image from 'next/image';

type Props = {
  images: string[];
};

const PropertyImages: FC<Props> = ({ images }) => {
  const render = (images: string[]) => {
    if (images.length === 1) {
      return (
        <Image
          alt=""
          className="mx-auto h-[400px] rounded-xl object-cover"
          height={400}
          priority
          src={images[0]}
          width={1800}
        />
      );
    }

    return (
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div
            className={`${images.length === 3 && index === 2 ? 'col-span-2' : 'col-span-1'} `}
            key={index}
          >
            <Image
              alt=""
              className="h-[400px] w-full rounded-xl object-cover"
              height={400}
              priority
              sizes="100vw"
              src={image}
              width={0}
            />
          </div>
        ))}
      </div>
    );
  };
  return (
    <section className="bg-blue-50 p-4">
      <div className="container mx-auto">{render(images)}</div>
    </section>
  );
};

export default PropertyImages;
