let { identificadorAula, instrutores, aulas } = require("../bancoDeDados")

const cadastrarAula = (req, res) => {
    const { idInstrutor } = req.params;
    const { titulo, descricao } = req.body;

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(idInstrutor);
    })
    if (!instrutor) {
        return res.status(404).json({ message: "Instrutor não existe" })
    }

    const aula = {
        id: identificadorAula++,
        instrutor_id: Number(idInstrutor),
        titulo,
        descricao
    }

    aulas.push(aula)
    return res.status(201).json(aula)
}

const listarAulas = (req, res) => {

    return res.json(aulas)
}

const obterAula = (req, res) => {
    const { id } = req.params;

    const aula = aulas.find((aula) => {
        return aula.id === Number(id);
    })
    if (!aula) {
        return res.status(404).json({ message: "Aula não encontrada." })
    }

    return res.json(aula)
}

const obterAulaInstrutor = (req, res) => {
    const { idInstrutor } = req.params;

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(idInstrutor);
    })

    if (!instrutor) {
        return res.status(404).json({ message: "O instrutor não existe" })
    }

    const aulasEncontradas = aulas.filter((aula) => {
        return aula.instrutor_id === instrutor.id;
    })

    if (!aulas) {
        return res.status(404).json({ message: "Aula não encontrada." })
    }

    return res.json(aulasEncontradas)
}


module.exports = {
    cadastrarAula,
    listarAulas,
    obterAula,
    obterAulaInstrutor
}