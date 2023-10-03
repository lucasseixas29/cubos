const express = require('express');
const usuarios = require('../controllers/usuarios');

const router = express.Router();


router.get('/usuarios', usuarios.listar);
router.get('/usuarios/:id', usuarios.obter);
router.post('/usuarios', usuarios.cadastrar);
router.put('/usuarios/:id', usuarios.atualizar);
router.delete('/usuarios/:id', usuarios.excluir);


module.exports = router;