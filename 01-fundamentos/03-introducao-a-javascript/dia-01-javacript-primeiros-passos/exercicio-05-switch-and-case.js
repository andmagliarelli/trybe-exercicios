// Crie uma variável para armazenar o status da pessoa candidata no processo seletivo, que pode ser: 'aprovada', 'lista' ou 'reprovada';
// Crie uma estrutura condicional com o switch/case que irá imprimir as seguintes mensagens:
// Caso 'aprovada', imprima “Parabéns, você foi aprovada(o)!”.
// Caso 'lista', imprima “Você está na nossa lista de espera”.
// Caso 'reprovada', imprima “Você foi reprovada(o)”.
// Caso default, imprima a mensagem de “Informação incorreta”.

resultado = 'lista';

switch (resultado) {
  case 'aprovada':
  console.log(resultado = "Parabéns, você foi aprovada(o)!");
  break;
  case 'lista':
  console.log(resultado = "Você está na nossa lista de espera.");
  break;
  case 'reprovada':
  console.log(resultado = "Você foi reprovada(o).");
  break;
  default:
  console.log("Informação incorreta.");
}

// Outra forma de resolver, colocando o valor na variável:

resultado = 'reprovada';
let mensagem;

switch (resultado) {
  case 'aprovada':
  mensagem = "Parabéns, você foi aprovada(o)!";
  break;
  case 'lista':
  mensagem = "Você está na nossa lista de espera.";
  break;
  case 'reprovada':
  mensagem = "Você foi reprovada(o).";
  break;
  default:
  mensagem = "Informação incorreta.";
}

console.log(mensagem);
