import type { Dispatch, SetStateAction } from 'react';

import type { MessageT } from './schemas';

export type Pathname = '/' | '/properties' | '/properties/add';

export type Link = {
  id: number;
  label: 'Home' | 'Properties' | 'Add Property';
  pathname: Pathname;
};

export type PropertyType = {
  label: string;
};

export type Property = {
  _id: string;
  owner: string;
  name: string;
  type: string;
  description: string;
  location: Location;
  beds: number;
  baths: number;
  square_feet: number;
  amenities: string[];
  rates: Rates;
  seller_info: SellerInfo;
  images: string[];
  is_featured: boolean;
  createdAt: string;
  updatedAt: string;
};

export type Location = {
  street: string;
  city: string;
  state: string;
  zipcode: string;
  [key: string]: any;
};
export type Rates = {
  weekly: number | string;
  monthly?: number | string;
  nightly?: number | string;
  [key: string]: any;
};

type SellerInfo = {
  name: string;
  email: string;
  phone: string;
};

export type ContactInput = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  setter: Dispatch<SetStateAction<string>>;
};

export type RentType = 'nightly' | 'weekly' | 'monthly';

export type RentObj = {
  id: number;
  label: string;
  type: RentType;
};

export type AddPropertyFields = {
  type: string;
  name: string;
  description: string;
  location: Location;
  beds: string;
  baths: string;
  square_feet: string;
  amenities: string[];
  rates: Rates;
  seller_info: SellerInfo;
  images: File[];
  [key: string]: any;
};

export type EditPropertyFields = {
  type: string;
  name: string;
  description: string;
  location: Location;
  beds: string;
  baths: string;
  square_feet: string;
  amenities: string[];
  rates: Rates;
  seller_info: SellerInfo;
  [key: string]: any;
};

export type Message = MessageT & {
  sender: {
    userName: string;
  };
  userName: string;
  title: string;
  property: Property;
};
