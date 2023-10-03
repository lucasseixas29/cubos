const express = require("express");
const knex = require('./conexao');


const app = express();

app.use(express.json());



app.get('/anotacoes', async (req, res) => {

    const anotacoes = await knex('anotacoes')
        .join('agenda', 'anotacoes.agenda_id', 'agenda.id')
        .select('anotacoes.*', 'agenda.nome');

    return res.json(anotacoes)
})

app.post('/:id/anotacoes', async (req, res) => {
    const { id } = req.params;
    const { nota } = req.body;

    const anotacoes = await knex('anotacoes')
        .insert({
            agenda_id: id,
            nota
        })
        .returning('*');

    return res.json(anotacoes)
})

app.put('/:id', async (req, res) => {
    const { nome, email, telefone } = req.body;
    const { id } = req.params;

    const agendaAtualizada = await knex('agenda').update({ nome, email, telefone }).where('id', id).returning('*');


    return res.json(agendaAtualizada)
});


app.delete('/:id', async (req, res) => {
    const { id } = req.params;

    const agendaExcluida = await knex('agenda').del().where('id', id).returning('*');


    return res.json(agendaExcluida);
})
app.listen(3000);