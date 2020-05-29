import Joi from '@hapi/joi';

export const userValidation = Joi.object({
  username: Joi.string().min(3).required(),
  mail: Joi.string().email().required(),
  password: Joi.string().min(3).required(),
  image: Joi.any(),
  role: Joi.any().required()
});

export const userLoginValidation = Joi.object({
  mail: Joi.string().email().required(),
  password: Joi.string().min(3).required()
});
