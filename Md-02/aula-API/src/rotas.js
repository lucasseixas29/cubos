const express = require("express");
const instrutores = require("./controllers/instrutores");

const router = express.Router();

router.get("/instrutores", instrutores.listarInstrutores);
router.get("/instrutores/:id", instrutores.obterInstrutor);
router.post("/instrutores", instrutores.criarInstrutor);
router.put("/instrutores/:id", instrutores.atualizarInstrutor);
router.patch("/instrutores/:id/status", instrutores.atualizarStatusInstrutor);
router.delete("/instrutores/:id", instrutores.excluirInstrutor);

module.exports = router;