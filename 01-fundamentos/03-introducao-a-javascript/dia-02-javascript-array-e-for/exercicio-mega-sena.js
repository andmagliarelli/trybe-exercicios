// 1. JOGADA
let minhaJogada = [12,34,6,24,28,50];
let megaSena = [48,14,15,28,34,8];

//2. CRIAÇÃO DE NÚMEROS ALEATÓRIOS
let primeiroNumeroSorteado = Math.floor(Math.random() * 60) + 1;
let segundoNumeroSorteado = Math.floor(Math.random() * 60) + 1;
let terceiroNumeroSorteado = Math.floor(Math.random() * 60) + 1;
let quartoNumeroSorteado = Math.floor(Math.random() * 60) + 1;
let quintoNumeroSorteado = Math.floor(Math.random() * 60) + 1;
let sextoNumeroSorteado = Math.floor(Math.random() * 60) + 1;

//3. CRIAR ARRAY PARA UNIR OS 6 NÚMEROS ALEATÓRIOS
console.log('ARRAY COM NÚMEROS SORTEADOS:')
console.log('-------------')
let megaSenaNumeros = [primeiroNumeroSorteado,segundoNumeroSorteado,terceiroNumeroSorteado,quartoNumeroSorteado,quintoNumeroSorteado,sextoNumeroSorteado];
console.log(megaSenaNumeros);
console.log('-------------')

//4. PERCORRER OS NÚMEROS DO ARRAY DA PESSOA E DA MEGASENA
// 1 - Declaração do index, 
// 2 - Condição de parada, 
// 3 - Executa o bloco de código, 
// 4 - Incremento, volta ao passo 2

//for(onde ele inicia ; onde ele para ; de quanto em quanto tempo) {
  //bloco de código }
console.log('MEUS NÚMEROS:')
console.log('-------------')
for(let index = 0; index < minhaJogada.length; index += 1) {
  console.log(minhaJogada[index]);
} 
console.log('-------------')

console.log('NÚMEROS SORTEADOS:')
console.log('-------------')
for(let indexMega = 0; indexMega < megaSenaNumeros.length; indexMega += 1) {
  console.log(megaSenaNumeros[indexMega]);
} 
//4. COMPARANDO
// PERCORRER ARRAY DA MEGA SENA
// PERCORRER ARRAY MEUS NÚMEROS
// FAZER COMPARAÇÃO DOS NÚMEROS
// SE FOREM IGUAIS SOMA + 1
// SE NÃO FOREM IGUAIS, SEGUE P/ PRÓXIMA JOGADA
console.log('COMPARAÇÃO DOS NÚMEROS')
let contagemNumerosSorteados = 0;
//PASSA PELOS NUMEROS DA MEGASENA
for(let indexMega = 0; indexMega < megaSenaNumeros.length; indexMega += 1) {
console.log('> Nº MEGA > ' + megaSenaNumeros[indexMega]);
// PASSA PELOS NUMEROS DA JOGADA
for(let index = 0; index < minhaJogada.length; index += 1) {
console.log('MEU NÚM > ' + minhaJogada[index]);
// FAZ A VERIFICAÇÃO
if(megaSenaNumeros[indexMega] === minhaJogada[index]) {
console.log('> ACERTOU') ;
// SE ACERTOU, SOMA + 1
contagemNumerosSorteados = contagemNumerosSorteados +1;
    }
  }
}

console.log('Números Sorteados > '+ megaSenaNumeros);
console.log('Minha jogada > '+ minhaJogada);
console.log('Acertos > '+ contagemNumerosSorteados);

// 1. A variável "contagemNumerosSorteados" é inicializada com o valor 0.
// 2 . Um loop "for" é iniciado com a variável "indexMega" sendo inicializada com 0. O loop continuará enquanto "indexMega" for menor que o tamanho do array "megaSenaNumeros" e a cada iteração, "indexMega" é incrementado em 1.
// 3. Dentro do loop, é impresso no console o texto "> Nº MEGA > " seguido pelo valor na posição "indexMega" do array "megaSenaNumeros".
// 4. Um segundo loop "for" é iniciado com a variável "index" sendo inicializada com 0. O loop continuará enquanto "index" for menor que o tamanho do array "minhaJogada" e a cada iteração, "index" é incrementado em 1.
// 5. Dentro do segundo loop, é impresso no console o texto "MEU NÚM > " seguido pelo valor na posição "index" do array "minhaJogada".
// 6. Dentro do segundo loop, é verificado se o valor na posição "indexMega" do array "megaSenaNumeros" é igual ao valor na posição "index" do array "minhaJogada".
// 7. Se a condição for verdadeira, é impresso no console o texto "> ACERTOU".
// 8. A variável "contagemNumerosSorteados" é incrementada em 1.
// 9. Após a finalização do segundo loop, o loop "for" iniciado no passo 2 continua até que todos os elementos do array "megaSenaNumeros" tenham sido verificados.
// 10. Após a finalização do loop, a variável "contagemNumerosSorteados" terá o valor total de números que o jogador acertou.
