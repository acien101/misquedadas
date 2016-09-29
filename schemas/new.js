var Joi = require('joi');
module.exports = Joi.object().required().keys({
   nombre: Joi.string().required(),
   foto: Joi.string().required(),
   sitio: Joi.string().required(),
   penia: Joi.string().required(),
   fecha: Joi.date().format('DD/MM/YYYY').max('01/01/3000').min('now'),
   descripcion: Joi.string()
   //priority: Joi.number().integer().default(0)
//
});
