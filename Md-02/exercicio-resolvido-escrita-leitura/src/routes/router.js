const express = require("express");
const { listarProdutos, vendasProdutos } = require("../controllers/listagemProdutos");

const router = express.Router();

router.get('/produtos', listarProdutos);
router.post('/produtos', vendasProdutos);



module.exports = router;