const Joi = require('joi');

module.exports = Joi.object({
  name: Joi.string().max(120).required(),
  CRM: Joi.number().max(9999999).required(),
  telephone: Joi.number(),
  cellphone: Joi.number().required(),
  CEP: Joi.number().required(),
  // eslint-disable-next-line camelcase
  specialty_id: Joi.array().min(2).required(),
});
