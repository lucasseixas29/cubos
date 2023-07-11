const temIngresso = true;
const censura = 16;
const idade = 15;


//se a idade da pessoa for maior ou igual que a censura e tiver ingresso pode entrar.
if (temIngresso) {
    if (idade >= censura) {
        console.log("Pode entrar")
    } else {
        console.log("Barrada pela censura")
    }
} else {
    console.log("Barrada por falta de ingresso")
}
