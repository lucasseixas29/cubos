/*const opcoes = ['Uma', 'Outra'];
let resultado = opcoes.join(" ");

console.log(resultado);*/

function inverterString(input) {
    const arrayDeLetras = input.split("").reverse();

    return arrayDeLetras.join("")
}

console.log(inverterString("Cubos Academy"));