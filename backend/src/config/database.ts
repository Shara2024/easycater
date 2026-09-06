import mongoose from 'mongoose';
import { env } from './env.js';
import { logger } from './logger.js';
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
