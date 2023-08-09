const numeros = [1, 4, 4, 5, 3, 1, 8];
const nomes = ['joao', 'maria', 'joao', 'jose'];


// const resultado = numeros.filter((numero) => {
//     return numero % 2 === 0;
// });
const resultado = nomes.filter((nome) => {
    return nome[0] === 'j';
});
console.log(resultado);