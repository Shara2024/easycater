import {env} from './config/env.js';
import app from './app.js';
import {logger} from './config/logger.js';
import {connectDatabase} from './config/database.js';

await connectDatabase();

app.listen(env.port, () => {
  logger.info(`Server running on port ${env.port}`);
});
