const numeros = [1, 2, 3, 4];
const nomes = ['joao', 'maria', 'jose', 'rodrigo'];

const resultado = numeros.some((elemento) => {
    return elemento % 2 === 0;
})



// const resultado = nomes.some((nome) => {
//     return nome == 'Lucas'
// })

console.log(resultado);