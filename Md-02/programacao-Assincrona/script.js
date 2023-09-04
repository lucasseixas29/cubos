const { getCityFromZipcode, getStateFromZipcode } = require("utils-playground");

// getCityFromZipcode('41256250')
//     .then(cidade => {
//         console.log(cidade)
//     })
//     .catch(error => {
//         console.log(error)
//     })

// const cidade = getCityFromZipcode('41256250')

// cidade.then(cidade => {
//     console.log(cidade);
// })
//     .catch(error => {
//         console.log(error.message)
//     })


// getCityFromZipcode('41256250')
// .then(cidade => {
//     console.log(cidade)
// })
// .catch(error => {
//     console.log(error)
// })

// getStateFromZipcode('41256250')
// .then(uf => {
//     console.log(uf)
// })

// async / await
// (async function () {
//     const cidade = await getCityFromZipcode("41256250");

//     console.log(cidade)

//     const estado = await getStateFromZipcode("41256250");

//     console.log(estado)
// })();

//padrao normal
// async function teste() {
//     return 123
// }

//arrow function
const teste = async () => {
    let nome = await 'Lucas';
    return nome;
}

console.log(teste());