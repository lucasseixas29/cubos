// spread ...

const pessoa = {
    nome: 'José',
    idade: 20,
    cidade: 'Salvador',
    profissao: 'dev'
};

const endereco = {
    rua: "Aqui",
    numero: 123,
    bairro: "algum legal"
}

const objetoFundido = {
    ...pessoa,
    ...endereco,
    novaPropriedade: 20
};

console.log(objetoFundido);