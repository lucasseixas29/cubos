const pessoa = {
    nome: 'Lucas',
    idade: 2,
    role: 'estudante'
};

//pessoa.nome = "Pedro"
pessoa['nome'] = 'Pedro';

console.log(`Meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos e sou um ${pessoa.role}`)