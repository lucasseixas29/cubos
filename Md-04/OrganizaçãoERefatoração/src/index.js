require('dotenv').config();
const express = require('express');
const app = express();
const rotas = require('./rotas');


app.use(express.json());



app.use(rotas);

app.listen(process.env.PORT, () => {
    console.log(`rodando na porta: ${process.env.PORT}`)
});