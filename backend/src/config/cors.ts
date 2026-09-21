import cors from 'cors';
import { env } from '@/config/env';

export const corsConfig = cors({
  origin: (origin, callback) => callback(null, !origin || env.corsOrigins.includes(origin)),
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
});
