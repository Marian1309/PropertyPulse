import { v2 as cloudinary } from 'cloudinary';

import env from '@/env';

cloudinary.config({
  cloud_name: env.server.CLOUDINARY_CLOUD_NAME,
  api_key: env.server.CLOUDINARY_API_KEY,
  api_secret: env.server.CLOUDINARY_API_SECRET
});

export default cloudinary;
