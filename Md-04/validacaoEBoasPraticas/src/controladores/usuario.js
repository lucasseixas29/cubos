const { usuarios } = require('../bancodedados');

const listarUsuarios = async (req, res) => {
    return res.status(200).json(usuarios)
}


const cadastrarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;

    try {
        const novoUsuario = {
            nome,
            email,
            senha
        }
        usuarios.push(novoUsuario);

        return res.status(201).json(novoUsuario);
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}



module.exports = {
    listarUsuarios,
    cadastrarUsuario
}