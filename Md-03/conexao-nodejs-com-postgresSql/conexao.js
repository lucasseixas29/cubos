const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'luislucas',
    database: 'aula_conexao_node_pg'
});

module.exports = pool;