import env from '@/env';

const fetchProperties = async () => {
  try {
    if (!env.client.NEXT_PUBLIC_API_DOMAIN) {
      return [];
    }

    const res = await fetch(`${env.client.NEXT_PUBLIC_API_DOMAIN}/properties`);

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
    if (!env.client.NEXT_PUBLIC_API_DOMAIN) {
      return null;
    }

    const res = await fetch(
      `${env.client.NEXT_PUBLIC_API_DOMAIN}/properties/${id}`
    );

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
