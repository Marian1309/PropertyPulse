import mongoose from 'mongoose';

import env from '@/env';

let connected = false;

const connectDB = async () => {
  mongoose.set('strictQuery', true);

  if (connected) {
    console.log('MongoDB is already connected...');
    return;
  }

  try {
    await mongoose.connect(env.server.MONGODB_URL!);
    connected = true;
    console.log('MongoDB connected');
  } catch (err: unknown) {
    console.log(err);
  }
};

export default connectDB;
