function determinarFaixaEtaria(idade) {
    if (idade < 21) {
        return "Jovem";
    } else if (idade < 66) {
        return "Adulto(a)";
    } else {
        return "Idoso(a)";
    }
}

function apresentacao(pessoa) {
    const faixaEtaria = determinarFaixaEtaria(pessoa.idade)
    return `Olá, meu nome é ${pessoa.nome}, sou um ${faixaEtaria} de ${pessoa.idade} anos, ${pessoa.altura}m de altura e sou ${pessoa.profissao}`
}

const pessoaObj = {
    nome: "João",
    idade: 12,
    altura: 1.4,
    profissao: 'Estudante'
}
console.log(apresentacao(pessoaObj));