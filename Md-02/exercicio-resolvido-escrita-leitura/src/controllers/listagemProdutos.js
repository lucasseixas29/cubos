const produtos = require("../../dataBase/produtos");
const fs = require('fs/promises');


const listarProdutos = async (req, res) => {
    return res.json(produtos)
}

const vendasProdutos = async (req, res) => {
    const { produto_id, quantidade } = req.body;

    const produtoEncontrado = produtos.find((produto) => {
        return produto.id === Number(produto_id);
    });

    console.log(produtoEncontrado)

    if (!produtoEncontrado) {
        return res.status(404).json({ "message": "Produto não encontrado." })
    }

    try {
        const vendas = await fs.readFile('./src/vendas.json');

        const parseVendas = JSON.parse(vendas);

        parseVendas.vendas.push({
            produto: produtoEncontrado,
            quantidade
        })

        await fs.writeFile('./src/vendas.json', JSON.stringify(parseVendas));

        return res.status(201).json('Vendas registradas com sucesso.')

    } catch (erro) {
        return res.status(400).json({ "message": "Erro do servidor." })
    }

}


module.exports = {
    listarProdutos,
    vendasProdutos
}