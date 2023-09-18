const express = require('express');
const axios = require("axios");

const app = express();

const instanciaAxios = axios.create({
    baseURL: 'http://localhost:3001',

})

app.use(express.json());

app.get('/', async (req, res) => {
    //res.json('api 1. porta 3000')
    // const result = await instanciaAxios.get('/carros')

    const novoCarro = {
        modelo: "Celta",
        marca: "GM"
    }
    const resultadoAxios = await instanciaAxios.post('/carros', novoCarro)

    res.status(200).json(resultadoAxios.data)
})


app.listen(3000);