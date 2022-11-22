/*
  Escreva uma função chamada maxSubarraySum que aceita um array 
  de inteiros e um número chamado n. A função deve calcular a 
  soma máxima de n elementos consecutivos na matriz.
*/

function maxSubarraySum(arr, num){
  let maxSum = 0, tempSum = 0;

  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  
  return maxSum;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5],4));

// Complexidade de tempo: O(N)