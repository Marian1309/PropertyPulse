const env = {
  server: {
    MONGODB_URL: process.env.MONGODB_URL
  },
  client: {
    NEXT_PUBLIX_DOMAIN: process.env.NEXT_PUBLIX_DOMAIN,
    NEXT_PUBLIX_API_DOMAIN: process.env.NEXT_PUBLIX_API_DOMAIN
  }
};

export default env;
