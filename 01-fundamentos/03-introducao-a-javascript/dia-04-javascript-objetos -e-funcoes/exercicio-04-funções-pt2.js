// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.
// function maiorNumero (a,b) {
//   let resultado;

//   if (a > b) {
//     resultado = a + ' é o maior número';
//   } else if (b > a) {
//     resultado = b + ' é o maior número';
//   } else {
//     resultado = 'Os números são idênticos';
//   }

//   return resultado
// }

// console.log(maiorNumero(34,35));

// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.
function maiorDeTres(numA, numB, numC) {
  if (numA > numB && numA > numC) {
    return 'O maior número é: ' + numA;
  } else if (numB > numA && numB > numC) {
    return 'O maior número é: ' + numB;
  } else {
    return 'O maior número é: ' + numC;
  }
}
console.log(maiorDeTres(39,38,36));

// Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.
// function positiveNegative (a) {
//   let resultado;

//   if (a > 0) {
//     resultado = 'positive';
//   } else if (a < 0) {
//     resultado = 'negative';
//   } else {
//     resultado = 0;
//   }

//   return resultado
// }

// console.log(positiveNegative(15));

// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
// COMO EU RESOLVI:
// function triangle (a,b,c) {
//   resultado = 0;
//   if(a <= 0 || b <= 0 || c <= 0) {
//     resultado = 'Inválido';
//   } else if(a + b + c !== 180) {
//     resultado = false;
//   } else {
//     resultado = true;
//   }
//   return resultado;
// }

// console.log(triangle(45,45,90))

// // GABARITO:
// Primeiro passo: Defina a função recebendo três ângulos como parâmetro.
// Segundo passo: Dentro da função, crie a variável sumOfAngles que deve receber o valor de todos os parâmetros somados.
// Terceiro passo: Crie dentro da função a variável allAnglesArePositives que deve receber como valor uma condicional que checa se todos os ângulos são positivos.
// Quarto passo: Utilize o if/else para checar se o resultado de allAnglesArePositives é verdadeiro ou falso. Caso seja falso, retorne um aviso de que algum ângulo é inválido.
// Quinto passo: Caso allAnglesArePositives seja verdadeira, teste se sumOfAngles é igual a 180. Retorne verdadeiro ou falso.

// function triangleAnglesValidate(a, b, c) {
//   let somaDosAngulos = a + b + c;
//   let todosAngulosPositivos = a > 0 && b > 0 && c > 0;

//   if (todosAngulosPositivos) {
//     if (somaDosAngulos === 180) {
//       return true;
//     } else {
//       return false;
//     }
//   } else {
//     return 'Erro: ângulo inválido';
//   }
// }