'use client';

import type { FC } from 'react';

import type { Property } from '@/types';

import BookmarkButton from './bookmark-button';
import ContactForm from './contact-form';
import ShareButton from './share-button';

type Props = {
  property: Property;
};

const ContactSidebar: FC<Props> = ({ property }) => {
  return (
    <aside className="space-y-4">
      <BookmarkButton property={property} />

      <ShareButton property={property} />

      <div className="rounded-lg bg-white p-6 shadow-md">
        <h3 className="mb-6 text-xl font-bold">Contact Property Manager</h3>

        <ContactForm property={property} />
      </div>
    </aside>
  );
};

export default ContactSidebar;
