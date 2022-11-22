/*
  Dado um array ordenado de inteiros, escreva uma função chamada search, 
  que aceita um valor e retorna o índice onde está localizado o valor 
  passado para a função. Se o valor não for encontrado, retorne -.
*/

function search(array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
      let middle = Math.floor((min + max) / 2);
      let currentElement = array[middle];

      if (array[middle] < val) {
          min = middle + 1;
      }
      else if (array[middle] > val) {
          max = middle - 1;
      }
      else {
          return middle;
      }
  }

  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4));

// Busca binária
// Complexidade de tempo: O(log n)