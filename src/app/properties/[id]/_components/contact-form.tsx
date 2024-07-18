import type { FC } from 'react';

import { useSession } from 'next-auth/react';
import { FaPaperPlane } from 'react-icons/fa';

import type { Property } from '@/types';

import { handleChange } from '@/lib/utils';

import { useContactForm } from '@/hooks';

import ContactInput from './contact-input';

type Props = {
  property: Property;
};

const ContactForm: FC<Props> = ({ property }) => {
  const { data: session } = useSession();

  const { wasSubmitted, handleSubmit, contactInputs, message, setMessage } =
    useContactForm(property);

  const render = () => {
    if (!session) {
      return <p>You must be logged in to send a message.</p>;
    }

    if (wasSubmitted) {
      return (
        <p className="mb-4 text-green-500">
          Your message has been sent successfully
        </p>
      );
    }

    return (
      <form onSubmit={handleSubmit}>
        {contactInputs.map((contact_input) => (
          <ContactInput contactInput={contact_input} key={contact_input.id} />
        ))}

        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-gray-700">
            Message:
          </label>

          <textarea
            className="focus:shadow-outline h-44 w-full appearance-none rounded border px-3 py-2 text-gray-700 shadow focus:outline-none"
            onChange={handleChange(setMessage)}
            placeholder="Enter your message"
            value={message}
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

  return <>{render()}</>;
};

export default ContactForm;
