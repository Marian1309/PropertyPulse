import type { Link, PropertType } from '@/types';

export const LINKS: Link[] = [
  { id: 1, label: 'Home', pathname: '/' },
  { id: 2, label: 'Properties', pathname: '/properties' },
  { id: 3, label: 'Add Property', pathname: '/properties/add' }
];

export const PROPERTY_TYPE_OPTIONS: PropertType[] = [
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
