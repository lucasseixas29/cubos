/*function replaceAll(original, text, newText) {
    let novoValor = "";
    for (let caractere of original) {
        novoValor += caractere.replace(text, newText)
    }
    return novoValor
}
*/
//numero.replace == 1.350,00

function replaceAll(original, text, newText) {
    while (original !== original.replace(text, newText)) {
        original = original.replace(text, newText)
    }
    return original;
}

let numero = "1,350,000";

console.log(replaceAll(numero, ",", "."));