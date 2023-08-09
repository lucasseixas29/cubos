function filtrar80(dados) {
    const startIndex = Math.round(dados.length * 0.1);
    const endIndex = Math.floor(dados.length * 0.9);

    return dados.slice(startIndex, endIndex);
}

const dados = [0, 1, 5, 7, 10, 33, 55, 60, 57, 85, 45, 68, 49, 57, 89, 69, 57, 33, 24, 11, 5, 3, 1, 0, 0];

console.log(filtrar80(dados));