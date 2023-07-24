function inverterString(input) {
    //return input.split("").reverse().join("");
    const arrayDeLetras = input.split("").reverse();
    let textoInvertido = "";
    for (let letra of arrayDeLetras) {
        textoInvertido += letra;
    }
    return textoInvertido;
}

console.log(inverterString("Cubos Academy"));