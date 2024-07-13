import type { ContactInput, Link, PropertyType } from '@/types';

export const LINKS: Link[] = [
  { id: 1, label: 'Home', pathname: '/' },
  { id: 2, label: 'Properties', pathname: '/properties' },
  { id: 3, label: 'Add Property', pathname: '/properties/add' }
];

export const PROPERTY_TYPE_OPTIONS: PropertyType[] = [
  { label: 'All' },
  { label: 'Apartment' },
  { label: 'Studio' },
  { label: 'Condo' },
  { label: 'House' },
  { label: 'Cabin or Cottage' },
  { label: 'Loft' },
  { label: 'Room' },
  { label: 'Other' }
];

export const CONTACT_INPUTS: ContactInput[] = [
  {
    id: 'name',
    label: 'Name:',
    type: 'text',
    placeholder: 'Enter your name'
  },
  {
    id: 'email',
    label: 'Email:',
    type: 'email',
    placeholder: 'Enter your email'
  },
  {
    id: 'phone',
    label: 'Phone:',
    type: 'text',
    placeholder: 'Enter your phone number'
  }
];
