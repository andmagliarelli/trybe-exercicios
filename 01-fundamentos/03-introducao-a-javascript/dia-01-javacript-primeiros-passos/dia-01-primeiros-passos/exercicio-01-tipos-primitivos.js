// Vamos praticar o que aprendemos no vídeo? 💪 Abra o seu VS Code e faça os exercícios a seguir.

// De olho na dica 👀: Com o plugin Code Runner que vimos no vídeo você pode executar o seu código no VS Code com o atalho ctrl + alt + n. Aqui você encontra mais sobre o Code Runner e sobre outras extensões úteis para o VS Code!

// Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina).
// Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.
// Crie uma variável let chamada birthYear e atribua a ela o ano em que você nasceu.
// Utilize o console.log() para imprimir as constantes e variáveis que você criou.
// Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
// Altere o valor atribuído à constante birthCity. Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro? 🤔

let myName = 'Anderson';
const birthCity = 'Guarulhos-SP';
let birthYear = 1991;

birthYear = 2030;
birthCity = 'Jaraguá do Sul-SC';

console.log(myName, birthCity, birthYear);

console.log(birthYear);

console.log(birthCity);
// --> O erro acontece devido ao fato de uma constante não poder ter seu valor alterado.