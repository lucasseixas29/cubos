//fazer um programa que calcula e imprime na tela a soma dos itens de um array

const numeros = [0, 3, 18, 2, 11];
let soma = 0;


for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}

console.log(soma);