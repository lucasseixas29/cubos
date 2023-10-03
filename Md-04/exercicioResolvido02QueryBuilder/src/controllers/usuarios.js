const knex = require("../database/conexao")


const listar = async (req, res) => {
    try {
        const usuarios = await knex('usuarios');
        return res.status(200).json(usuarios);
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

const obter = async (req, res) => {
    const { id } = req.params;

    try {
        const usuario = await knex('usuarios').where('id', id).first();

        if (!usuario) {
            return res.status(404).json("Usuário não encontrado.")
        }

        return res.status(200).json(usuario);
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

const cadastrar = async (req, res) => {
    const { id } = req.params;
    const { nome, email, senha } = req.body;

    try {
        if (!nome || !email || !senha) {
            return res.status(404).json("Falta campos obrigatórios.")
        }

        const novoUsuario = await knex('usuarios').insert({ nome, email, senha }).returning('*');

        if (novoUsuario.length === 0) {
            return res.status(400).json("Não foi possível cadastrar o usuário.")
        }

        return res.status(200).json(novoUsuario[0]);

    } catch (error) {
        return res.status(500).json(error.message)
    }
}

const atualizar = async (req, res) => {
    const { id } = req.params;
    const { nome, email, senha } = req.body;

    try {

        const usuarioExiste = await knex('usuarios').where({ id }).first();

        if (!usuarioExiste) {
            return res.status(400).json("Usuário não encontrado.")
        }

        const usuario = await knex('usuarios').update({ nome, email, senha }).where({ id }).returning(['id', 'nome', 'email']);

        if (!usuario) {
            return res.status(400).json("Não foi possível atualizar o usuário.")
        }

        return res.status(200).json(usuario[0]);

    } catch (error) {
        return res.status(500).json(error.message)
    }
}

const excluir = async (req, res) => {
    const { id } = req.params;

    try {

        const usuarioExiste = await knex('usuarios').where({ id }).first();

        if (!usuarioExiste) {
            return res.status(400).json("Usuário não encontrado.")
        }

        const usuario = await knex('usuarios').del().where({ id }).returning(['id', 'nome', 'email']);

        if (!usuario) {
            return res.status(400).json("Não foi possível excluir o usuário.")
        }

        return res.status(200).json(usuario[0]);

    } catch (error) {
        return res.status(500).json(error.message)
    }
}


module.exports = {
    listar,
    obter,
    cadastrar,
    atualizar,
    excluir
}