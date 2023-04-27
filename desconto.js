
let valorProduto = 200;

let valorDesconto = valorProduto * 0.12;


let novoValor = valorProduto - valorDesconto;


console.log("O valor original do produto era R$ " + valorProduto.toFixed(2) + ".");
console.log("O desconto foi de R$ " + valorDesconto.toFixed(2) + ".");
console.log("O novo valor do produto é R$ " + novoValor.toFixed(2) + ".");
