
let valorHora = 30;
let numAulas = 30;
let percentualDesconto = 2;


let salarioBruto = valorHora * numAulas;
let desconto = (percentualDesconto / 100) * salarioBruto;


let salarioLiquido = salarioBruto - desconto;

console.log("O salário líquido do professor é R$ " + salarioLiquido.toFixed(2) + ".");
