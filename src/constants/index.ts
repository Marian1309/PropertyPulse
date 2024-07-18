import type { Link, PropertyType, RentObj } from '@/types';

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

export const ADD_PROPERTY_FORM_SELECT_OPTIONS = [
  {
    id: 1,
    value: 'Apartment'
  },
  {
    id: 2,
    value: 'Condo'
  },
  {
    id: 3,
    value: 'House'
  },
  {
    id: 4,
    value: 'Cabin Or Cottage'
  },
  {
    id: 5,
    value: 'Room'
  },
  {
    id: 6,
    value: 'Studio'
  },
  {
    id: 7,
    value: 'Other'
  }
];

export const LOCATION_INPUTS = [
  {
    id: 1,
    name: 'location.street',
    placeholder: 'Street'
  },
  {
    id: 2,
    name: 'location.city',
    placeholder: 'City'
  },
  { id: 3, name: 'location.state', placeholder: 'State' },
  { id: 4, name: 'location.zipcode', placeholder: 'Zipcode' }
];

export const ADD_PROPERTY_FORM_FUNTITURES = [
  {
    id: 1,
    label: 'Beds',
    name: 'beds'
  },
  {
    id: 2,
    label: 'Baths',
    name: 'baths'
  },
  {
    id: 3,
    label: 'Square Feet',
    name: 'square_feet'
  }
];

export const ADD_PROPERTY_AMENITIES_CHECKBOXES = [
  {
    id: 1,
    value: 'Wifi'
  },
  {
    id: 2,
    value: 'Full kitchen'
  },
  {
    id: 3,
    value: 'Washer & Dryer'
  },
  {
    id: 4,
    value: 'Free Parking'
  },
  {
    id: 5,
    value: 'Swimming Pool'
  },
  {
    id: 6,
    value: 'Hot Tub'
  },
  {
    id: 7,
    value: '24/7 Security'
  },
  {
    id: 8,
    value: 'Wheelchair Accessible'
  },
  {
    id: 9,
    value: 'Elevator Access'
  },
  {
    id: 10,
    value: 'Dishwasher'
  },
  {
    id: 11,
    value: 'Gym/Fitness Center'
  },
  {
    id: 12,
    value: 'Air Conditioning'
  },
  {
    id: 13,
    value: 'Balcony/Patio'
  },
  {
    id: 14,
    value: 'Smart TV'
  },
  {
    id: 15,
    value: 'Coffee Maker'
  }
];

export const ADD_PROPERTY_RATES = [
  {
    id: 1,
    label: 'Weekly',
    name: 'rates.weekly'
  },
  {
    id: 2,
    label: 'Monthly',
    name: 'rates.monthly'
  },
  {
    id: 3,
    label: 'Nightly',
    name: 'rates.nightly'
  }
];

export const RENT_TYPES: RentObj[] = [
  { id: 1, label: 'Nightly', type: 'nightly' },
  { id: 2, label: 'Weekly', type: 'weekly' },
  { id: 3, label: 'Monthly', type: 'monthly' }
];
