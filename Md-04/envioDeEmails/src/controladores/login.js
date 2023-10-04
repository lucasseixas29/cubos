const transportador = require('../services/email');
const compiladorHtml = require('../utils/compiladorHtml');

const usuario = {
    nome: 'Lucas Seixas',
    email: "lucasseixas29@hotmail.com",
    senha: '123abc'
}

const login = async (req, res) => {
    const { email, senha } = req.body;

    if (usuario.email !== email) {
        return res.status(400).json({ mensagem: "Email ou senha inválidas." })
    }
    if (usuario.senha !== senha) {
        return res.status(400).json({ mensagem: "Email ou senha inválidas." })
    }
    const html = await compiladorHtml('./src/templates/login.html', {
        nomeusuario: usuario.nome
    });

    transportador.sendMail({
        from: `${process.env.MAIL_NAME}<${process.env.MAIL_FROM}>`,
        to: `${usuario.nome} <${usuario.email}`,
        subject: 'Tentativa de Login',
        html
    })

    return res.json({ mensagem: "login efetuado com sucesso" })
}


module.exports = {
    login
}
    ;