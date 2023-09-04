const express = require("express");
const fs = require('fs/promises');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    await fs.writeFile('./src/a.txt', 'deu certo certo');
    res.json('ok')
})

app.post('/', async (req, res) => {
    const { nome, idade } = req.body;

    try {

        const teste = await fs.readFile('./src/usuarios.json')

        const pessoas = JSON.parse(teste);

        pessoas.push({ nome, idade })

        const pessoasStringfy = JSON.stringify(pessoas);

        await fs.writeFile('./src/usuarios.json', pessoasStringfy)


        return res.json({ "message": "Pessoa cadastrada com sucesso" })
    } catch (erro) {
        return res.json({ "message": `${erro.message}` })
    } finally {
        console.log("Isso sempre será executado.")
    }
})

app.listen(3000);