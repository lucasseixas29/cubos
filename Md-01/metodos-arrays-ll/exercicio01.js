const verificarIdade = (usuario) => {
    const resultado = usuario.every((elemento) => {
        return elemento.idade > 17
    })

    if (resultado) {
        return `Festa liberada`
    } else {
        return `Festa barrada, possui menor de idade.`
    }
}

const usuarios = [
    { nome: 'joao', idade: 23 },
    { nome: 'maria', idade: 18 },
    { nome: 'ana', idade: 30 },
    { nome: 'rodrigo', idade: 17 }
];

console.log(verificarIdade(usuarios));
