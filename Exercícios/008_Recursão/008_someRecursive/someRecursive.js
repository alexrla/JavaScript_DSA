/*
  Escreva uma função recursiva chamada someRecursive que aceita 
  um array e uma callback. A função retorna true se um único 
  valor na matriz retornar true quando passado para o retorno de
  chamada. Caso contrário, retorna falso.

  Exemplos de entrada:
  const isOdd = val => val % 2 !== 0;
  someRecursive([1,2,3,4], isOdd) // true
  someRecursive([4,6,8,9], isOdd) // true
  someRecursive([4,6,8], isOdd) // false
  someRecursive([4,6,8], val => val > 10); // false
*/

const isOdd = val => val % 2 !== 0;

function someRecursive(array, callback) {
  if(array.length === 0) return false;
  if(callback(array[0])) return true;

  return someRecursive(array.slice(1), callback);
}

console.log(someRecursive([1,2,3,4], isOdd));