import Joi from 'joi';

export const envSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production', 'test').default('development'),

  PORT: Joi.number().integer().min(1).max(65535).default(5000),

  CORS_ORIGINS: Joi.string()
    .custom((value, helpers) => {
      const origins = value
        .split(',')
        .map((origin: string) => origin.trim())
        .filter(Boolean);

      for (const origin of origins) {
        const { error: originError } = Joi.string().uri().validate(origin);

        if (originError) {
          return helpers.error('string.uri');
        }
      }

      return origins;
    })
    .default('http://localhost:3000'),
  LOG_LEVEL: Joi.string()
    .valid('error', 'warn', 'info', 'http', 'verbose', 'debug', 'silly')
    .default('info'),
  MONGODB_URI: Joi.string().uri().required(),
}).unknown(true);
