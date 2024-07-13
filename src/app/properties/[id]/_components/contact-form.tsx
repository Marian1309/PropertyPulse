import type { FC } from 'react';

import { FaPaperPlane } from 'react-icons/fa';

import { CONTACT_INPUTS } from '@/constants';

import ContactInput from './contact-input';

const ContactForm: FC = () => {
  return (
    <form>
      {CONTACT_INPUTS.map((contact_input) => (
        <ContactInput contactInput={contact_input} key={contact_input.id} />
      ))}

      <div className="mb-4">
        <label
          className="mb-2 block text-sm font-bold text-gray-700"
          htmlFor="message"
        >
          Message:
        </label>

        <textarea
          className="focus:shadow-outline h-44 w-full appearance-none rounded border px-3 py-2 text-gray-700 shadow focus:outline-none"
          id="message"
          placeholder="Enter your message"
        />
      </div>

      <button
        className="focus:shadow-outline flex w-full items-center justify-center rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600 focus:outline-none"
        type="submit"
      >
        <FaPaperPlane className="mr-2" /> Send Message
      </button>
    </form>
  );
};

export default ContactForm;
