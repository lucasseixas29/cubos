const pessoaObj = {
    nome: "João",
    idade: 12,
    altura: 1.4,
    profissao: 'Estudante',
    definindoFaixaEtaria: function () {
        if (this.idade < 21) {
            return "Jovem";
        } else if (this.idade < 66) {
            return "Adulto(a)";
        } else {
            return "Idoso(a)";
        }
    },
    apresentar: function () {
        const faixaEtaria = this.definindoFaixaEtaria(this.idade)
        return `Olá, meu nome é ${this.nome}, sou um ${faixaEtaria} de ${this.idade} anos, ${this.altura}m de altura e sou ${this.profissao}`
    }
}

console.log(pessoaObj.apresentar());