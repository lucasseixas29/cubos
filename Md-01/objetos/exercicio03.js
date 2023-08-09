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

cartaoConsumo.idadeCliente = 18;
console.log(cartaoConsumo.nomeCliente);
console.log(cartaoConsumo.idadeCliente);
console.log(cartaoConsumo.produtosConsumidos[0].nomeProduto);
console.log(cartaoConsumo.produtosConsumidos[produtosConsumidos.length - 1].precoUnit);