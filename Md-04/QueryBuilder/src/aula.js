const express = require("express");
const knex = require('./conexao');


const app = express();

app.use(express.json());



app.get('/', async (req, res) => {
    //const agenda = await knex('agenda').debug();
    //const agenda = await knex('agenda').where('id', "!=", 5).debug();
    //const agenda = await knex('agenda').wjere('id', 5).debug();

    //const agenda = await knex('agenda').where({ id: 5 }).select('id', 'nome').first().debug();
    //const agenda = await knex('agenda').whereNull('email').debug();
    //const agenda = await knex('agenda').whereBetween('id', [5, 10]).debug();
    //const agenda = await knex('agenda').whereBetween('id', [5, 10]).orderBy('id', 'desc').debug();
    //const agenda = await knex('agenda').distinct('email').debug();
    //const agenda = await knex('agenda').select('email').groupBy('email').count('email').debug();
    //const agenda = await knex('agenda').limit(5).offset(2).debug();
    // const agenda = await knex('agenda').whereNull('email').count().debug();
    //const agenda = await knex('agenda').whereNull('email').sum('id').debug();
    //const agenda = await knex('agenda').whereNull('email').avg('id').debug();
    //const agenda = await knex('agenda').whereNull('email').min('id').debug();
    //const agenda = await knex('agenda').whereNull('email').max('id').debug();

    const agenda = await knex('agenda').insert([maria, joao]).returning('*')

    return res.json(agenda)
})

app.put('/:id', async (req, res) => {
    const { nome, email, telefone } = req.body;
    const { id } = req.params;

    const agendaAtualizada = await knex('agenda').update({ nome, email, telefone }).where('id', id).returning('*');


    return res.json(agendaAtualizada)
});

app.listen(3000);