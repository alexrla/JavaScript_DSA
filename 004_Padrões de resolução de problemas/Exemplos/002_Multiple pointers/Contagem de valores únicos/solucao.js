/*
  Contar valores únicos

  Implemente uma função chamada countUniqueValues, que usa um 
  array classificado (ordenado) e conta os valores únicos no 
  array. Pode haver números negativos na matriz, mas ela sempre 
  será classificada (ordenada).
*/

function countUniqueValues(arr) {
  if(arr.length === 0) return 0;

  let i = 0;

  for(let j = 1; j < arr.length; j++)  {
    if(arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))
console.log(countUniqueValues([]))