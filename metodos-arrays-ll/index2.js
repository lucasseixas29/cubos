// const imprimir = () => {
//     console.log("Alô você")
//     clearInterval(interval)
// }

// const interval = setInterval(imprimir, 2000);
let numero = 10;
const contador = setInterval(function () {
    console.log(numero);
    numero--
    if (numero < 0) {
        console.log("kabum")
        clearInterval(contador)
    }
}, 1000)