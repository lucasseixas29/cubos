const knex = require('../conexao');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const hash = process.env.JWT_HASH;

const login = async (req, res) => {
    const { email, senha } = req.body;

    try {
        const usuario = await knex('usuarios').where({ email }).first();

        if (!usuario) {
            return res.status(404).json({ message: 'O usuario não foi encontrado' });
        }

        const senhaCorreta = await bcrypt.compare(senha, usuario.senha);

        if (!senhaCorreta) {
            return res.status(400).json({ message: "Email e senha não confere" });
        }

        const token = jwt.sign({ id: usuario.id }, hash, { expiresIn: '8h' });

        const { senha: _, ...dadosUsuario } = usuario;

        return res.status(200).json({
            usuario: dadosUsuario,
            token
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: "Erro interno do servidor." });
    }
}

module.exports = {
    login
}