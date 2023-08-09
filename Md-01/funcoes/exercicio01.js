const pessoaObj = {
    nome: "Lucas",
    idade: 18,
    profissao: "Dev",
    altura: 1.50
}

/*function apresentacao(nome, idade, profissao, altura) {
    console.log(`Olá! Meu nome é ${nome}, sou um jovem de ${idade} anos, ${altura} de altura e sou ${profissao}`);
}

const { nome, idade, profissao, altura } = pessoaObj;

apresentacao(nome, idade, profissao, altura);*/

function apresentacao(pessoa) {
    console.log(`Olá! Meu nome é ${pessoa.nome}, sou um jovem de ${pessoa.idade} anos, ${pessoa.altura} de altura e sou ${pessoa.profissao}`);
}
apresentacao(pessoaObj);