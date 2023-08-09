const produtosConsumidos = [
    {
        nomeProduto: 'Coca-Cola',
        precoUnit: 500,
        qtdComprada: 2
    },
    {
        nomeProduto: 'água',
        precoUnit: 200,
        qtdComprada: 2
    },
    {
        nomeProduto: 'Energético',
        precoUnit: 1000,
        qtdComprada: 1
    }
]

const cartaoConsumo = {
    nomeCliente: 'Lucas',
    idadeCliente: 2,
    produtosConsumidos
}
let totalAPagar = 0;

for (let produto of produtosConsumidos) {
    totalAPagar += produto.precoUnit * produto.qtdComprada;
}

let texto = `Olá, ${cartaoConsumo.nomeCliente} o valor total da sua conta a pagar é: R$ ${(totalAPagar / 100).toFixed(2)} reais`;

console.log(texto);

