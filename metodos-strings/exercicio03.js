function imprimirData(dia, mes, ano) {
    const diaFormatado = String(dia).padStart(2, "0")
    const mesFormatado = String(mes).padStart(2, "0")
    return `${diaFormatado}/${mesFormatado}/${ano}`
}

console.log(imprimirData(1, 2, 2021));