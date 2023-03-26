import * as Joi from 'joi';

export const ConfigValidation = Joi.object({
  PORT: Joi.number().required(),
  APP_URL: Joi.string().required(),
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'testing')
    .required(),
  TZ: Joi.string().required(),
});
