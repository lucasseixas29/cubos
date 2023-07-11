const valorDaCompra = 100;
const numeroDeParcelas = 12;
const desconto = 0.1;
const calculoComDesconto = valorDaCompra - (desconto * valorDaCompra);
const calculoParcelado = valorDaCompra / numeroDeParcelas;



if (numeroDeParcelas === 1) {
    console.log(`O pagamento à vista sai por ${calculoComDesconto} reais`)
} else if (numeroDeParcelas <= 6) {
    console.log(`Você deve pagar ${valorDaCompra} reais dividido em ${numeroDeParcelas}x fica ${calculoParcelado.toFixed(2)} reais.`)
} else if (numeroDeParcelas <= 12) {
    const calculoParceladoComJuros = valorDaCompra * (1 + 1 / 100) ** numeroDeParcelas;
    const valorAPagar = calculoParceladoComJuros / numeroDeParcelas;
    console.log(`Você deve pagar ${calculoParceladoComJuros.toFixed(2)} dividido em ${numeroDeParcelas}x fica ${valorAPagar.toFixed(2)} reais.`)
} else {
    console.log("Número de parcelas inválido")
}

