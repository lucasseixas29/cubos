const numeros = [0, 1, 2, 3, 4];


console.log(numeros.reduce((acm, valorAtual) => {
    return acm + valorAtual;
}, 10))