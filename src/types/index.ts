export type Pathname = '/' | '/properties' | '/properties/add';

export type Link = {
  id: number;
  label: 'Home' | 'Properties' | 'Add Property';
  pathname: Pathname;
};
