import type { FC } from 'react';

import Image from 'next/image';

import { Gallery, Item } from 'react-photoswipe-gallery';

type Props = {
  images: string[];
};

const PropertyImages: FC<Props> = ({ images }) => {
  const render = (images: string[]) => {
    if (images.length === 1) {
      return (
        <Item
          height="600"
          original={images[0]}
          thumbnail={images[0]}
          width="1000"
        >
          {({ ref, open }) => (
            <Image
              alt=""
              className="mx-auto h-[400px] rounded-xl object-cover"
              height={400}
              onClick={open}
              priority
              ref={ref}
              src={images[0]}
              width={1800}
            />
          )}
        </Item>
      );
    }

    return (
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div
            className={`${images.length === 3 && index === 2 ? 'col-span-2' : 'col-span-1'} `}
            key={index}
          >
            <Item height="600" original={image} thumbnail={image} width="1000">
              {({ ref, open }) => (
                <Image
                  alt=""
                  className="mx-auto h-[400px] rounded-xl object-cover"
                  height={400}
                  onClick={open}
                  priority
                  ref={ref}
                  src={image}
                  width={1800}
                />
              )}
            </Item>
          </div>
        ))}
      </div>
    );
  };
  return (
    <Gallery>
      <section className="bg-blue-50 p-4">
        <div className="container mx-auto">{render(images)}</div>
      </section>
    </Gallery>
  );
};

export default PropertyImages;
