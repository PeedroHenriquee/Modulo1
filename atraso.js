let valorOriginal, taxaJuros, diasAtraso, valorPrestacaoAtraso

valorOriginal = 800;

taxaJuros = 3.85;
    
diasAtraso = 10;

valorPrestacaoAtraso = valorOriginal + (valorOriginal * (taxaJuros/100) * diasAtraso)

console.log("O valor da prestação em atraso é de R$ " + valorPrestacaoAtraso.toFixed(2))


