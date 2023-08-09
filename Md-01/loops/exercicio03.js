const palavra = "aabcdaaia";

let quantidade = 0;

for (let letraA of palavra) {
    if (letraA == "a") {
        quantidade++;
    }
}

console.log(quantidade);