const express = require("express");
const knex = require('./conexao');


const app = express();

app.use(express.json());



app.get('/', async (req, res) => {

    //1 const qtdMedicamentos = await knex('farmacia').count();

    //2 const idadeMaisNovo = await knex('usuarios').min('idade');

    //3 const categoriasNaoNulas = await knex('farmacia').select('categoria').whereNotNull('categoria').sum('estoque').groupBy('categoria');

    //4 const qtdMedicamentosSemCategoria = await knex('farmacia').whereNull('categoria').count('medicamento').debug();

    //5 const questao05 = await knex.select('categoria').from('farmacia').whereNotNull('categoria').groupBy('categoria').count().debug();

    //6 const questao06 = await knex.select('idade').from('usuarios').count().groupBy('idade').where('idade', '>=', 18);

    // return res.json(questao06)
})

app.listen(3000);