let word = 'ANDERSON';
let invert = [];

for(let index = 0; index < word.length; index +=1) {
  invert.unshift(word[index]);
}
console.log(invert.join(""))
