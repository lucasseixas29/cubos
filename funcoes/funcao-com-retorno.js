function verificarMaiorIdade(idade) {
    if (idade >= 18) {
        return `É maior de idade`;
    } else {
        return `Não é maior de idade`;
    }
}

const retornoDaFuncao = verificarMaiorIdade(18);
console.log(retornoDaFuncao);