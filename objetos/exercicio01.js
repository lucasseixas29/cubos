const pessoa = {
    nome: 'José',
    idade: '30',
    altura: 1.73,
    cnh: true,
    apelidos: ['Jr', 'Juninho']
}
let temCNH = pessoa.cnh ? "possui CNH" : "não possui CNH";



let texto = `${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa['altura']}m de altura, ${temCNH} e tem os seguintes apelidos:`;

console.log(texto);
for (let apelido of pessoa.apelidos) {
    console.log(`- ${apelido}`);
}