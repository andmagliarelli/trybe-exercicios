// Usando o objeto abaixo, utilize for/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.
let nomes = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (let index in nomes) {
  console.log('Olá ' + nomes[index]);
}

// Usando o objeto abaixo, utilize for/in e imprima um console.log com as chaves e valores desse objeto.
let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let index in car) {
  console.log(index + ': ', car[index]);
}