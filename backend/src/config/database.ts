import mongoose from 'mongoose';
import { env } from '@/config/env';
import { logger } from '@/config/logger';
import { errorMonitor } from 'node:stream';

export async function connectDatabase(): Promise<void> {
  try {
    await mongoose.connect(env.mongodbUri);
    logger.info('Database connected successfully');
  } catch (error) {
    logger.error('Error connecting to database', { error });
    throw error;
  }
}
