function hash(key, arrayLen) {
  let total = 0;

  for (let char of key) {
    // Mapeia "a" para 1, "b" para 2, "c" para 3, etc.
    let value = char.charCodeAt(0) - 96;

    total = (total + value) % arrayLen;
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
  Problemas existentes nessa função

  1 - Aceita apenas strings;
  2- Tempo não constante (linear de acordo com o comprimento da chave);
  3 - Pode ser um pouco mais aleatório (acaba existindo colisões, 
  para algumas chaves, acaba retornando o mesmo total e assim
  os dados seriam armazenandos no mesmo índice - o que iria
  sobreescrever);
*/