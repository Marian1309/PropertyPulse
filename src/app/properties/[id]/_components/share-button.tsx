import type { FC } from 'react';

import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton
} from 'react-share';

import env from '@/env';

import type { Property } from '@/types';

type Props = {
  property: Property;
};

const ShareButton: FC<Props> = ({ property }) => {
  const shareUrl = `${env.client.NEXT_PUBLIC_API_DOMAIN}/properties/${property._id}`;

  return (
    <>
      <h3 className="pt-2 text-center text-xl font-bold">
        Share This Property
      </h3>

      <div className="flex justify-center gap-3 pb-5">
        <FacebookShareButton
          hashtag={`${property.type}ForRent`}
          title={property.name}
          url={shareUrl}
        >
          <FacebookIcon round size={40} />
        </FacebookShareButton>

        <TwitterShareButton
          hashtags={[`${property.type.replace(/\s/g, '')}ForRent`]}
          title={property.name}
          url={shareUrl}
        >
          <TwitterIcon round size={40} />
        </TwitterShareButton>

        <WhatsappShareButton
          separator=":: "
          title={property.name}
          url={shareUrl}
        >
          <WhatsappIcon round size={40} />
        </WhatsappShareButton>

        <LinkedinShareButton title={property.name} url={shareUrl}>
          <LinkedinIcon round size={40} />
        </LinkedinShareButton>
      </div>
    </>
  );
};

export default ShareButton;
