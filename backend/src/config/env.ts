import dotenv from 'dotenv';
import { envSchema } from './env.schema.js';

dotenv.config();

const { error, value: envValues } = envSchema.validate(process.env, { abortEarly: false });

if (error) {
  throw new Error(`Environment variables validation error: ${error.message}`);
}

export interface Env {
  nodeEnv: string;
  port: number;
  corsOrigins: string[];
  logLevel: string;
  mongodbUri: string;
}

export const env: Env = {
  nodeEnv: envValues.NODE_ENV,
  port: envValues.PORT,
  corsOrigins: envValues.CORS_ORIGINS,
  logLevel: envValues.LOG_LEVEL,
  mongodbUri: envValues.MONGODB_URI,
};
