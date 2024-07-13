import type { FC } from 'react';

import Image from 'next/image';

type Props = {
  image: string;
};

const PropertyHeaderImage: FC<Props> = ({ image }) => {
  return (
    <section>
      <div className="container-xl m-auto">
        <div className="grid grid-cols-1">
          <Image
            alt=""
            className="h-[400px] w-full object-cover"
            height={0}
            priority
            sizes="100vw"
            src={`/properties/${image}`}
            width={0}
          />
        </div>
      </div>
    </section>
  );
};

export default PropertyHeaderImage;
