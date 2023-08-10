const express = require("express");
const instrutores = require("./controllers/instrutores");
const aulas = require("./controllers/aulas");

const router = express.Router();

router.get("/instrutores", instrutores.listarInstrutores);
router.get("/instrutores/:id", instrutores.obterInstrutor);
router.post("/instrutores", instrutores.criarInstrutor);
router.put("/instrutores/:id", instrutores.atualizarInstrutor);
router.patch("/instrutores/:id/status", instrutores.atualizarStatusInstrutor);
router.delete("/instrutores/:id", instrutores.excluirInstrutor);

router.post("/instrutores/:idInstrutor/aulas", aulas.cadastrarAula)

router.get("/aulas", aulas.listarAulas) //todas coleções
router.get("/aulas/:id", aulas.obterAula) //listar aula por id

router.get("/instrutores/:idInstrutor/aulas", aulas.obterAulaInstrutor)


module.exports = router;