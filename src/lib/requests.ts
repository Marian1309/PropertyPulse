import env from '@/env';

export const fetchProperties = async () => {
  try {
    if (!env.client.NEXT_PUBLIX_API_DOMAIN) {
      return [];
    }

    const res = await fetch(`${env.client.NEXT_PUBLIX_API_DOMAIN}/properties`);

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (err: unknown) {
    console.log(err);
    return [];
  }
};
