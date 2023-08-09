const express = require('express');
const { listarCarros, listarCarroPorId } = require('./controllers/index')
const { validarSenha } = require('./middleware/intermediario');

const app = express();

app.use(validarSenha);

app.get('/carros', listarCarros)

app.get('/carros/:id', listarCarroPorId)

app.listen(3000);