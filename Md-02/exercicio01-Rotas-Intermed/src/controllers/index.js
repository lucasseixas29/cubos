const carros = require("../dataBase/carros");

const listarCarros = (req, res) => {
    const { marca, cor } = req.query;
    let resultado = carros;

    if (marca) {
        resultado = carros.filter((carro) => {
            return carro.marca === marca
        })

    }

    if (cor) {
        resultado = carros.filter((carro) => {
            return carro.cor === cor
        })
    }

    if (marca && cor) {
        resultado = carros.filter((carro) => {
            return carro.marca === marca && carro.cor === cor
        })
    }
    res.send(resultado)
}

const listarCarroPorId = (req, res) => {
    let id = req.params.id;
    let resultado = carros.find((carro) => {
        return carro.id === Number(id)
    })

    if (resultado) {
        res.send(resultado)
    } else {
        res.send("Carro não encontrado.")
    }
}


module.exports = {
    listarCarros,
    listarCarroPorId
}