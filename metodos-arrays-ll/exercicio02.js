const verificarVirus = (arquivo) => {
    const resultado = arquivo.some((item) => {
        return item.includes(".bat")
    });

    return resultado ? `Vírus detectado` : `Nenhum vírus encontrado.`
}

const arquivos = [
    'teste.txt',
    'foto.png',
    'contrato.doc',
    'instalador.exe',
    'joguinho.bat'
];
console.log(verificarVirus(arquivos))