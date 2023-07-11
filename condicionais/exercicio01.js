const valorDaCompra = 100;
const numeroDeParcelas = 3;
const desconto = 0.1;
const calculoComDesconto = valorDaCompra - (desconto * valorDaCompra);
const calculoParcelado = valorDaCompra / numeroDeParcelas;

if (numeroDeParcelas === 1) {
    console.log(`O pagamento à vista sai por ${calculoComDesconto} reais`)
} else {
    console.log(`Você deve pagar ${valorDaCompra} reais dividido em ${numeroDeParcelas}x fica ${calculoParcelado.toFixed(2)} reais.`)
}