//Crie uma lista com 5 países 
const paises = ["Brasil", "Argentina", "França", "Alemanha", "Holanda"];

//adicionar país fim da lista
paises.push("Itália");
//console.log(paises);

//remover um país do fim da lista
paises.pop();
//console.log(paises);

//adicionar país início da lista
paises.unshift("Senegal");
//console.log(paises);

//remover país do início da lista
paises.shift();
//console.log(paises);

//último país da lista
console.log(paises[paises.length - 1]);

//o segundo país da lista
console.log(paises[1]);

//o país no índice 2
console.log(paises[2]);