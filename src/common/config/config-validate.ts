import * as Joi from 'joi';

export const ConfigValidation = Joi.object({

  // COMMON
  PORT: Joi.number().required(),
  APP_URL: Joi.string().required(),
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'testing')
    .required(),
  TZ: Joi.string().required(),


  // DATABASE
  DATABASE_USER: Joi.string().required(),
  DATABASE_PASS: Joi.string().required(),
  DATABASE_HOST: Joi.string().required(),
  DATABASE_NAME: Joi.string().required(),
  DATABASE_URL: Joi.string().required(),

  // JWT
  JWT_ACCESS_TOKEN_SECRET: Joi.string().required(),
  JWT_ACCESS_TOKEN_EXPIRE: Joi.string().required(),
  JWT_REFRESH_TOKEN_SECRET: Joi.string().required(),
  JWT_REFRESH_TOKEN_EXPIRE: Joi.string().required(),


});
