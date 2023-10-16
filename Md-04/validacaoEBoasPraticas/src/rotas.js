const { Router } = require('express');
const usuario = require('./controladores/usuario');
const validarCorpoRequisicao = require('./intermediarios/validarCorpoRequisicao');
const schemaUsuario = require('./validacoes/usuarios');

const rotas = Router();

rotas.post('/usuario', validarCorpoRequisicao(schemaUsuario), usuario.cadastrarUsuario);

rotas.get('/usuario', usuario.listarUsuarios);



module.exports = rotas;