/*const numeros = [1, 2, 3, 4];

console.log(numeros.every((elemento) => {
    return elemento < 5;
}))
*/
//testa se TODOS os elementos são menores que 5

const frutas = ['abacaxi', 'manga', 'melancia'];

const resultados = frutas.every((elementoAtual) => {
    return elementoAtual !== "banana"
})

console.log(resultados);