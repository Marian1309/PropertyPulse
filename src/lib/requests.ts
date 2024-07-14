import env from '@/env';

const api_domain = env.client.NEXT_PUBLIC_API_DOMAIN;

const fetchProperties = async () => {
  try {
    if (!api_domain) {
      return [];
    }

    const res = await fetch(`${api_domain}/properties`, {
      cache: 'no-store'
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (err: unknown) {
    console.log(err);
    return [];
  }
};

const fetchProperty = async (id: string) => {
  try {
    if (!api_domain) {
      return null;
    }

    const res = await fetch(`${api_domain}/properties/${id}`);

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (err: unknown) {
    console.log(err);
    return null;
  }
};

export { fetchProperties, fetchProperty };
