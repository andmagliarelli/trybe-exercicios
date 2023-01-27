// Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo:

let jogadora = {
  nome: 'Marta',
  sobrenome: 'Silva',
  idade: 34,
  medalhas: { ouro: 2,prata: 3 }
}
// Acesse as chaves name, lastName e age, usando a sintaxe meuObjeto.chave, e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: “A jogadora Marta Silva tem 34 anos de idade”.

console.log('A jogadora ' + jogadora.nome +' '+ jogadora.sobrenome +' tem ' + jogadora.idade + ' anos de idade.')


// Adicione ao objeto a chave bestInTheWorld, usando a sintaxe meuObjeto.chave = valor, e atribua a essa chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

jogadora.melhorDoMundo = [2006, 2007, 2008, 2009, 2010, 2018];

// Acesse a chave bestInTheWorld, usando a sintaxe meuObjeto['chave'], e faça um console.log no seguinte formato: “A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”.

console.log('A jogadora ' + jogadora['nome'] + ' ' + jogadora['sobrenome'] + ' foi eleita a melhor do mundo por ' + jogadora['melhorDoMundo'].length + ' vezes.');

// Acesse a chave medals, usando a sintaxe meuObjeto.chave, e faça um console.log no seguinte formato: “A jogadora possui 2 medalhas de ouro e 3 medalhas de prata”.

console.log('A jogadora possui ' + jogadora.medalhas.ouro + ' medalhas de ouro e ' + jogadora.medalhas.prata + ' medalhas de prata.');