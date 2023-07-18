function faixaEtaria(idade) {
    if (idade < 22) {
        return "Jovem"
    } else if (idade < 66) {
        return "Adulto(a)"
    } else {
        return "Idoso(a)"
    }
}

const retornoDaFaixaEtaria = faixaEtaria(21);

console.log(retornoDaFaixaEtaria);