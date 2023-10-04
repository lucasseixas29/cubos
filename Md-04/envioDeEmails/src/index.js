require('dotenv').config();
const express = require('express');
const { login } = require('./controladores/login');


const app = express();

app.use(express.json());

app.post('/login', login);

const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log(`${port}`)
})