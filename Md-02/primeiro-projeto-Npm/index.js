const { uniq } = require("lodash");
const { arrayNumeros, arrayLetras } = require('./array');



const arrayUnico = uniq(arrayLetras)

console.log(arrayUnico);