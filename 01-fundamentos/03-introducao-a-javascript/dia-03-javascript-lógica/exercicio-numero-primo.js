// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.

let maiorNumeroPrimo = 0;

for (let numAtual = 2; numAtual <= 50; numAtual += 1) {
  let numPrimo = true;
  for (let divAtual = 2; divAtual < numAtual; divAtual += 1) {
    if (numAtual % divAtual === 0) {
      numPrimo = false;
    }
  }
  if (numPrimo) {
    maiorNumeroPrimo = numAtual;
  }
}

console.log(maiorNumeroPrimo);