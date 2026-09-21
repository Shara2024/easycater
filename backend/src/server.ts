import { env } from '@/config/env';
import app from '@/app';
import { logger } from '@/config/logger';
import { connectDatabase } from '@/config/database';

await connectDatabase();

app.listen(env.port, () => {
  logger.info(`Server running on port ${env.port}`);
});
