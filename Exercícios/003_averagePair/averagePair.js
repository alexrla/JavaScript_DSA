/*
  MULTIPLE POINTERS

  Escreva uma função chamada averagePair. Dada uma matriz 
  classificada de inteiros e uma média de destino, determine 
  se há um par de valores na matriz em que a média do par é 
  igual à média de destino. Pode haver mais de um par que 
  corresponda ao alvo médio.

  Restrições de bônus:
  Tempo: O(N)
  Espaço: O(1)

  Exemplo de entrada:
  averagePair ([ 1 , 2 , 3 ], 2.5) // true
  averagePair ([ 1 , 3 , 3 , 5 , 6 , 7 , 10 , 12 , 19 ], 8) // true 
  averagePair ([- 1 , 0 , 3 , 4 , 5 , 6 ], 4.1) // false 
  averagePair ([], 4) // false
*/

function averagePair(arr, num){
  let start = 0;
  let end = arr.length-1;

  while(start < end) {
    let avg = (arr[start]+arr[end]) / 2; 

    if(avg === num) return true;
    else if(avg < num) start++;
    else end--;
  }

  return false;
}

console.log(averagePair([ 1 , 3 , 3 , 5 , 6 , 7 , 10 , 12 , 19 ], 8))