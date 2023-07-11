const temIngresso = false;
const censura = 16;
const idade = 14;
const estaComOsPais = true;

// tem ingresso E 
// tem idade maior ou igual a censura ou está com os pais

if (temIngresso) {
    if (idade >= censura || estaComOsPais) {
        console.log("Pode entrar")
    } else {
        console.log("Barrada pela censura.")
    }
} else {
    console.log('Barrada!')
}