import Joi from '@hapi/joi';

export const userValidation = Joi.object({
  username: Joi.string().min(3).required(),
  mail: Joi.string().email().required(),
  password: Joi.string().min(3).required(),
  role: Joi.number().required()
});

export const userLoginValidation = Joi.object({
  mail: Joi.string().email().required(),
  password: Joi.string().min(3).required()
});
