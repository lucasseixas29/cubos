let nome = "jose messias e junior";


/*let nomesArray = nome.split(" ");
let novoNome = []

for (let item of nomesArray) {
    novoNome.push(item.replace(item[0], item[0].toUpperCase()));
}
console.log(novoNome.join(" "));
*/


const arrayDeNomes = nome.split(" ");
let nomeFormatado = "";
for (let item of arrayDeNomes) {
    let primeiraLetra = item.slice(0, 1);
    let restanteDoNome = item.slice(1);

    nomeFormatado += primeiraLetra.toUpperCase() + restanteDoNome + " ";
}

//console.log(nomeFormatado.trim());