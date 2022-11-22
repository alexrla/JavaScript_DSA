/*
  Dado um array ordenado de inteiros, escreva uma função chamada search, 
  que aceita um valor e retorna o índice onde está localizado o valor 
  passado para a função. Se o valor não for encontrado, retorne -.
*/

function search(arr, val){
  for(let i = 0; i < arr.length; i++) {
      if(arr[i] === val) {
          return i;
      }
  }
  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4));

// Busca linear
// Complexidade de tempo: O(N)