const express = require('express');
const { filtrarProfessores, encontrarUmProfessor } = require('./controllers/professores');

const app = express();

const intermediarioIndependente = (req, res, next) => {
    console.log('passei no primeiro middleware.')
    next();
};
const intermediarioRota = (req, res, next) => {
    let verificacao = true;
    if (verificacao) {
        console.log('passei no middleware da rota.')
        next();
    } else {
        console.log("não passou no middleware da rota.")
    }
};

app.use(intermediarioIndependente);

app.get('/professores', intermediarioRota, filtrarProfessores);

app.get('/professores/:id', encontrarUmProfessor)

app.listen(3000);