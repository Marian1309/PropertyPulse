'use client';

import type { FC } from 'react';

import Image from 'next/image';

import { useSession } from 'next-auth/react';

import { profile as profileImage } from '@/assets/images';

import { useUserProperties } from '@/hooks';

import { ProfileListings } from './_components';

const ProfilePage: FC = () => {
  const { data: session } = useSession();

  const { profile, properties, loading } = useUserProperties(session);

  return (
    <section className="container">
      <div className="my-8 w-full rounded-md border bg-white px-6 py-8 shadow-md">
        <h1 className="text-3xl font-bold">Your Profile</h1>

        <div className="flex flex-col justify-around md:flex-row">
          <div className="mt-10">
            <div className="mb-4">
              <Image
                alt="User"
                className="mx-auto h-32 w-32 rounded-full md:mx-0 md:h-48 md:w-48"
                height={100}
                src={profile.image || profileImage.src}
                width={100}
              />
            </div>

            <h2 className="mb-4 text-xl">
              <span className="block font-bold">Name: </span> {profile.name}
            </h2>

            <h2 className="text-xl">
              <span className="block font-bold">Email: </span> {profile.email}
            </h2>
          </div>

          <ProfileListings loading={loading} properties={properties} />
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
