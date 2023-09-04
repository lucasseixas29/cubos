const fs = require("fs/promises");

console.log('Antes de ler');

// const a = fs.readFile('a.txt');

// a.then((data) => {
//     console.log(data.toString());
// })
//     .catch((error) => {
//         console.log(error)
//     })

(async function () {
    const a = await fs.readFile('a.txt');
    console.log(a.toString())
})();

console.log("depois de ler")