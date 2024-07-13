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

type Location = {
  street: string;
  city: string;
  state: string;
  zipcode: string;
};
type Rates = {
  weekly: number;
  monthly?: number;
  nightly?: number;
};

type SellerInfo = {
  name: string;
  email: string;
  phone: string;
};
