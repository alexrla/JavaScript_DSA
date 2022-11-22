/*
  Escreva uma função chamada sumZero que aceita um array ordenado 
  de inteiros. A função deve encontrar o primeiro par onde a soma 
  é 0. Retorna uma matriz que inclui ambos os valores que somam 
  zero ou indefinido se um par não existir.
*/

function sumZero(arr){
  let left = 0;
  let right = arr.length - 1;

  while(left < right){
      let sum = arr[left] + arr[right];
      
      if(sum === 0){
          return [arr[left], arr[right]];
      } else if(sum > 0){
          right--;
      } else {
          left++;
      }
  }
}

console.log(sumZero([-3,-2,-1,0,1,2,3]));

// Complexidade de Tempo - O(N)
// Complexidade Espacial/de espaço - O(1)