/*
  Escreva uma função chamada maxSubarraySum que aceita um array 
  de inteiros e um número chamado n. A função deve calcular a 
  soma máxima de n elementos consecutivos na matriz.
*/

function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }

  let max = -Infinity;

  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;

    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }

    if (temp > max) {
      max = temp;
    }
  }

  return max;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5],4));

// Complexidade de tempo: O(N²)