// // EXERCÍCIO TABUADA
var numero = 7;

for(var index = 1; index <=9; index += 1) {
  console.log("espaço")
  console.log(numero * index)
}

// //EXERCIIO BOAS-VINDAS
var listaDeNomes = ['João','Maria','Lucas'];
for(var index = 0; index < listaDeNomes.length; index += 1) {
  var mensagem = "Boas vindas, " + listaDeNomes[index] + '!';
  console.log(mensagem)
}

// Utilize o for para imprimir os elementos da lista groceryList com o console.log():
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
for(var index = 0; index < groceryList.length; index += 1) {
  console.log(groceryList[index]);
}