/*
  Escreva uma função chamada recursiveRange que aceita um número 
  e soma todos os números de 0 até o número passado para a função. 

  Exemplos de entrada:
  recursiveRange(6) // 21
  recursiveRange(10) // 55 
*/

function recursiveRange(x){
  if (x === 0 ) return 0;

  return x + recursiveRange(x - 1);
}

console.log(recursiveRange(10));