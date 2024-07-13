import type { FC } from 'react';

import { FaBookmark, FaShare } from 'react-icons/fa';

import ContactForm from './contact-form';

const ContactSidebar: FC = () => {
  return (
    <aside className="space-y-4">
      <button className="flex w-full items-center justify-center rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600">
        <FaBookmark className="mr-2" /> Bookmark Property
      </button>

      <button className="flex w-full items-center justify-center rounded-full bg-orange-500 px-4 py-2 font-bold text-white hover:bg-orange-600">
        <FaShare className="mr-2" /> Share Property
      </button>

      <div className="rounded-lg bg-white p-6 shadow-md">
        <h3 className="mb-6 text-xl font-bold">Contact Property Manager</h3>

        <ContactForm />
      </div>
    </aside>
  );
};

export default ContactSidebar;
