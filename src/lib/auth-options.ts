import type { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import env from '@/env';

import { User } from '@/models';

import connectDB from './database';

const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: env.server.GOOGLE_CLIENT_ID!,
      clientSecret: env.server.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: 'consent',
          access_type: 'offline',
          response_type: 'code'
        }
      }
    })
  ],
  callbacks: {
    signIn: async ({ profile }) => {
      try {
        await connectDB();

        const userExists = await User.findOne({ email: profile?.email });

        if (!userExists) {
          const userName = profile?.name?.slice(0, 20);

          await User.create({
            email: profile?.email,
            userName,
            image: profile?.image
          });
        }

        return true;
      } catch (error) {
        console.error('Error in signIn callback:', error);
        return false;
      }
    },
    session: async ({ session }) => {
      try {
        const user = await User.findOne({ email: session?.user?.email });

        session.user.id = user._id.toString();

        return session;
      } catch (error) {
        console.error('Error in session callback:', error);
        return session;
      }
    }
  }
};

export default authOptions;
