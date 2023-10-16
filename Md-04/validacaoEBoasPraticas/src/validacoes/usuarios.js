const joi = require('joi');

const schemaUsuario = joi.object({
    nome: joi.string().required().trim().messages({
        'any.required': "O campo nome é obrigatório.",
        'string.empty': "O campo nome não pode ser vazio."

    }),
    email: joi.string().email().required().messages({
        'any.required': "O campo email é obrigatório.",
        'string.email': "O campo email precisa ter um formato válido.",
        'string.empty': "O campo nome não pode ser vazio."

    }),
    senha: joi.string().min(5).required().messages({
        'any.required': "O campo senha é obrigatório.",
        'string.empty': "O campo nome não pode ser vazio.",
        'string.min': "A senha tem que ter no mínimo 5 caracteres."
    }),
    idade: joi.number().positive().messages({
        'number.positive': "O campo idade precisa ser um número positivo.",
        'number.base': "O campo idade precisa ser um número."
    }),
    ativo: joi.boolean().messages({
        'boolean.base': "O campo ativo precisa ser um booleano."
    })
});


module.exports = schemaUsuario