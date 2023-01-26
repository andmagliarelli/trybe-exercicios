let letras = ['A','B','C','D','E'];
let numeros = [1,2,3,4,5];


//FOR ANINHADO:
for(let indexletras = 0; indexletras < letras.length; indexletras += 1) { //for percorre o array letras
  console.log('Letras ' + letras[indexletras]);
  for(let indexnumeros = 0; indexnumeros < numeros.length; indexnumeros += 1) { // for percorre o array numeros
    console.log('Números ' + numeros[indexnumeros]);
  }
}