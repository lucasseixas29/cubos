const { Router } = require('express');

const rotas = Router();

const filtroLogin = require('./intermediarios/filtroLogin');
const { cadastrarUsuario, obterPerfil, atualizarPerfil } = require('./controladores/usuarios');
const { login } = require('./controladores/login');
const validarRequisicao = require('./intermediarios/validarRequisicao');
const usuarioSchema = require('./validacoes/usuario');
const loginSchema = require('./validacoes/loginSchema');


rotas.post('/usuarios', validarRequisicao(usuarioSchema), cadastrarUsuario);

rotas.post('/login', validarRequisicao(loginSchema), login);

rotas.use(filtroLogin);

rotas.get('/perfil', obterPerfil);

rotas.put('/perfil', validarRequisicao(usuarioSchema), atualizarPerfil);

module.exports = rotas;