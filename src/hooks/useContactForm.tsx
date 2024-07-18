import type { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

import { toast } from 'react-toastify';

import type { ContactInput, Property } from '@/types';

type Return = (property: Property) => {
  wasSubmitted: boolean;
  contactInputs: ContactInput[];
  handleSubmit: (e: ChangeEvent<HTMLFormElement>) => Promise<void>;
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
};

const useContactForm: Return = (property: Property) => {
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

  const handleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      name,
      email,
      phone,
      message,
      recipient: property.owner,
      property: property._id
    };

    try {
      const res = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (res.status === 200) {
        toast.success('Message sent successfully');
        setWasSubmitted(true);
      } else if (res.status === 400 || res.status === 401) {
        const responseData = await res.json();
        toast.error(responseData.message);
      } else {
        toast.error('Error sending form');
      }
    } catch (err: unknown) {
      console.log(err);
      toast.error('Error sending form');
    } finally {
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }
  };

  return {
    wasSubmitted,
    contactInputs: CONTACT_INPUTS,
    handleSubmit,
    message,
    setMessage
  };
};

export default useContactForm;
