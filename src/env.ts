const env = {
  server: {
    MONGODB_URL: process.env.MONGODB_URL
  },
  client: {
    NEXT_PUBLIC_DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
    NEXT_PUBLIC_API_DOMAIN: process.env.NEXT_PUBLIC_API_DOMAIN
  }
};

export default env;
