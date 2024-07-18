import type { InferSchemaType } from 'mongoose';

import type { MessageSchema } from '@/models/message';

export type MessageT = InferSchemaType<typeof MessageSchema> & {
  _id: string;
};
