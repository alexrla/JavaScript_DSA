/*
  SLIDING WINDOW

  Escreva uma função chamada minSubArrayLen que aceita dois 
  parâmetros - uma matriz de inteiros positivos e um inteiro 
  positivo.

  Essa função deve retornar o comprimento mínimo de um subarray 
  contíguo cuja soma seja maior ou igual ao inteiro passado para 
  a função. Se não houver um, retorne 0 em seu lugar.

  Exemplos:
  minSubArrayLen([2, 3, 1, 2, 4, 3], 7) // 2 -> porque [4, 3] é o menor subarray  
  minSubArrayLen([2, 1, 6, 5, 4], 9) // 2 -> porque [5,4] é o menor subarray  
  minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52) // 1 -> porque [62] é maior que 52  
  minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39) // 3 
  minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55 ) // 5 
  minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2        
  minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95) // 0 
  Complexidade de Tempo - O(n)

  Complexidade Espacial - O(1)
*/

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    /*
      Se a janela atual não corresponder à soma especificada, 
      mova a janela para a direita
    */
    if(total < sum && end < nums.length) {
      total += nums[end];
			end++;
    }

    /*
      Se a janela atual soma pelo menos a soma dada, então 
      podemos encolher a janela
    */
    else if(total >= sum) {
      minLen = Math.min(minLen, end - start);
			total -= nums[start];
			start++;
    } 

    // Total atual menor que o total necessário, mas chegamos ao fim, precisamos disso ou então estaremos em um loop infinito
    else break;
  }

  return minLen === Infinity ? 0 : minLen;
}