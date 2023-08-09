function apresentacao(pessoa) {
    if (pessoa.idade < 21) {
        return `Sou ${pessoa.nome}, sou um(a) jovem de ${pessoa.idade} anos e sou ${pessoa.profissao}`
    } else if (pessoa.idade < 65) {
        return `Sou ${pessoa.nome}, sou um(a) adulto(a) de ${pessoa.idade} anos e sou ${pessoa.profissao}`
    } else {
        return `Sou ${pessoa.nome}, sou um(a) idoso(a) de ${pessoa.idade} anos e sou ${pessoa.profissao}`
    }
}

const pessoaObj = {
    nome: "José",
    idade: 30,
    profissao: "Dev"
}
console.log(apresentacao(pessoaObj));

const pessoaObj2 = {
    nome: "João",
    idade: 22,
    profissao: "Estudante"
}
console.log(apresentacao(pessoaObj2));

const pessoaObj3 = {
    nome: "Antônio",
    idade: 66,
    profissao: "Professor"
}

console.log(apresentacao(pessoaObj3));