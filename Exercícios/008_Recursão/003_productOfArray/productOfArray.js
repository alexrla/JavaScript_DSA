/*
  Escreva uma função chamada productOfArray que receba um array 
  de números e retorne o produto de todos eles.

  Exemplos de entrada:
  productOfArray([1,2,3]) // 6
  productOfArray([1,2,3,10]) // 60
*/

function productOfArray(arr) {
  if(arr.length === 0) {
      return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([1,2,3,10]));