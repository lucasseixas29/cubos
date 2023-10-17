const joi = require('joi');

const usuarioSchema = joi.object({
    nome: joi.string().trim().required().messages({
        'any.required': 'O campo nome é obrigatório',
        'string.empty': 'O campo nome é obrigatório.'
    }),
    email: joi.string().email().required().messages({
        'any.required': 'O campo email é obrigatório',
        'string.empty': 'O campo email é obrigatório.',
        'string.email': 'O campo email precisa ter um formato válido.'
    }),
    senha: joi.string().required().messages({
        'any.required': 'O campo senha é obrigatório',
        'string.empty': 'O campo senha é obrigatório.',
    }),
    telefone: joi.string().required().messages({
        'any.required': 'O campo telefone é obrigatório',
        'string.empty': 'O campo telefone é obrigatório.',
    }),
})

module.exports = usuarioSchema;