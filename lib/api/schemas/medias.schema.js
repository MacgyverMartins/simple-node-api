import { Joi } from 'express-validation'

const createSchema = {
  body: Joi.object({
    name: Joi.string().required(),
    duration: Joi.number().required().strict(),
    provider: Joi.string().required(),
    media_type: Joi.string().required(),
    provider_id: Joi.string().required(),
    expires_at: Joi.date().timestamp().required()
  })
}

const updateSchema = {
  body: Joi.object({
    name: Joi.string().optional(),
    duration: Joi.number().optional(),
    provider: Joi.string().optional(),
    media_type: Joi.string().optional(),
    provider_id: Joi.string().optional(),
    expires_at: Joi.date().timestamp().optional()
  })
}

export {
  createSchema,
  updateSchema
}