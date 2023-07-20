//saber se um email é válido
//tem que ter pelo menos um @
//tem que ter pelo menos um ponto depois do @

let email = "email@.doecom";

const indexArromba = email.indexOf("@");

if (email.indexOf(".", indexArromba) > -1) {
    console.log("É um email.")
} else {
    console.log("Não é um email")
}

console.log(email.indexOf(".", indexArromba));