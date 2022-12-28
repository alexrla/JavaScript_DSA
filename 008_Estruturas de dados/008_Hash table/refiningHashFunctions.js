function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME_NUMBER = 31;

  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96

    total = (total * WEIRD_PRIME_NUMBER + value) % arrayLen;
  }

  return total;
}

console.log(hash("rosa", 10)); // 3
console.log(hash("azul", 10)); // 0
console.log(hash("laranja", 10)); // 7
console.log(hash("vermelho", 10)); // 8
console.log(hash("amarelo", 10)); // 5
console.log(hash("preto", 10)); // 4
console.log(hash("branco", 10)); // 3
console.log(hash("ciano", 10)); // 2

/*
  - Temos i i < Math.min(key.length, 100), para podermos aceitar somentes
  palavras (cores) que possuam no máximo, 10 caracteres; 
  - O número primos é utilizado na tentativa de minimizar as colisões;
*/