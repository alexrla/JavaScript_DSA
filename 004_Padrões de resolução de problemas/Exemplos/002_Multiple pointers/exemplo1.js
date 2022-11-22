/*
  Escreva uma função chamada sumZero que aceita um array ordenado 
  de inteiros. A função deve encontrar o primeiro par onde a soma 
  é 0. Retorna uma matriz que inclui ambos os valores que somam 
  zero ou indefinido se um par não existir.
*/

function sumZero(arr){
  for(let i = 0; i < arr.length; i++){
      for(let j = i + 1; j < arr.length; j++){
          if(arr[i] + arr[j] === 0){
              return [arr[i], arr[j]];
          }
      }
  }
}

console.log(sumZero([-3,-2,-1,0,1,2,3]));

// Complexidade de Tempo - O(N²)
// Complexidade Espacial/de espaço - O(1)