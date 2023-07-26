const usuarios = [
    { id: 11, nome: "joao", idade: 23 },
    { id: 2, nome: "maria", idade: 18 },
    { id: 4, nome: "ana", idade: 30 },
    { id: 1, nome: "rodrigo", idade: 17 },
    { id: 123, nome: "rodrigo", idade: 17 },
]





const resultado = usuarios.reduce((acumulador, valorAtual) => {
    let maior = acumulador
    if (valorAtual.idade > maior.idade) {
        maior = valorAtual;
    }

    return maior;
})


console.log(resultado);






