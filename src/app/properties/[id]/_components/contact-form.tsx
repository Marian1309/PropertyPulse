import type { ChangeEvent, FC } from 'react';
import { useState } from 'react';

import { FaPaperPlane } from 'react-icons/fa';

import type { Property } from '@/types';

import { handleChange } from '@/lib/utils';

import ContactInput from './contact-input';

type Props = {
  property: Property;
};

const ContactForm: FC<Props> = ({ property }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [wasSubmitted, setWasSubmitted] = useState<boolean>(false);

  const CONTACT_INPUTS = [
    {
      id: 'name',
      label: 'Name:',
      type: 'text',
      placeholder: 'Enter your name',
      value: name,
      setter: setName
    },
    {
      id: 'email',
      label: 'Email:',
      type: 'email',
      placeholder: 'Enter your email',
      value: email,
      setter: setEmail
    },
    {
      id: 'phone',
      label: 'Phone:',
      type: 'text',
      placeholder: 'Enter your phone number',
      value: phone,
      setter: setPhone
    }
  ];

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      name,
      email,
      phone,
      message,
      recipient: property.owner,
      property: property._id
    };

    console.log(data);
  };

  const render = () => {
    if (wasSubmitted) {
      return (
        <p className="mb-4 text-gray-500">
          Your message has been sent successfully
        </p>
      );
    }

    return (
      <form onSubmit={handleSubmit}>
        {CONTACT_INPUTS.map((contact_input) => (
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
