const professores = require('../bancoDeDados');

const filtrarProfessores = (req, res) => {

    let { stack } = req.query;
    let resultado = professores

    if (stack) {
        resultado = professores.filter((professor) => {
            return professor.stack === stack;
        })
    }
    res.send(resultado)
}

const encontrarUmProfessor = (req, res) => {
    let id = req.params.id;

    let professor = professores.find(professor => professor.id === Number(id));

    res.send(professor)
};

module.exports = {
    filtrarProfessores,
    encontrarUmProfessor
}