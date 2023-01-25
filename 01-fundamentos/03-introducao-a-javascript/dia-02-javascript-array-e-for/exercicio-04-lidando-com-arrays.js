// Iremos utilizar esse array para realizar os próximos exercícios.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// // Percorra o array imprimindo todos os valores nele contidos com a função console.log();
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
}

// Some todos os valores contidos no array e imprima o resultado;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;
for (let index = 0; index < numbers.length; index += 1) {
  resultado = resultado + numbers[index];
}
console.log(resultado);

// Calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
  resultado += numbers[index];
}

let media = resultado / numbers.length;

console.log(media);

// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
  resultado += numbers[index];
}

resultado = resultado / numbers.length;

if (resultado > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;
// o valor da variável higherNumber poderia ser qualquer um, desde que fosse menor que o menor número do array numbers. Caso atribuíssemos o valor 101 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número maior que 101 no array. Para resolver esse problema, vamos iniciar a variável com o primeiro valor do array. Dessa forma, podemos pular a posição 0 e iniciar com index = 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
}
console.log(higherNumber);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;

//COMO EU RESOLVI:
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    impares = impares + 1;
  } else {
    impares = impares;
  }
}

if (impares === 0) {
  console.log('Nenhum valor ímpar encontrado');
} else {
  console.log('Encontrados ' + impares + ' valores ímpares');
}


// Utilizando for, descubra qual o menor valor contido no array e imprima-o;
// COMO EU RESOLVI
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = numbers[0];

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < menorNumero) {
    menorNumero = numbers[index];
  } else {
    menorNumero = menorNumero;
  }
}
console.log(menorNumero)

// GABARITO

// o valor da variável smallestNumber poderia ser qualquer um, desde que fosse maior que o maior número do array numbers. Caso atribuíssemos o valor 1 para a variável, nosso algoritmo estaria errado, pois ele nunca acharia um número menor que 1 no array. Para resolver esse problema vamos iniciar a variável com o primeiro valor do array. Dessa forma podemos pular a posição 0 e iniciar com index = 1
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] < menorNumero) {
    menorNumero = numbers[index];
  }
}

console.log(menorNumero);


// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
// COMO EU RESOLVI
let numbers = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index < 25) {
  numbers.push(index + 1)
  } 
}
numbers.shift()
console.log(numbers)

//GABARITO
let numbers = [];

for (let index = 1; index <= 25; index += 1) {
  numbers.push(index);
}
console.log(numbers);

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index] / 2);
};