//crie um algoritmo que imprima na tela o fatorial de 10.
//COMO EU RESOLVI:
let fatorial = 10;
let resultado = 0;

for(let index = fatorial - 1; index >= 1; index -= 1) {
    if(resultado === 0) {
     resultado = fatorial * index;
    } else {
    resultado = resultado * index;
    }
  }
console.log(resultado)