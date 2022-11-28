/*
  Escreva uma função chamada binarySearch que aceite um array 
  classificado e um valor e retorne o índice no qual o valor 
  existe. Caso contrário, retorne -1.
*/

function binarySearch(arr, element) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while(start <= end) {
    if(arr[middle] === element) return middle;
    else if(element < arr[middle]) end = middle - 1;
    else start = middle + 1;

    middle = Math.floor((start + end) / 2);
  }

  return -1;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 28)); // 6
console.log(binarySearch([1 , 2 , 3 , 4 , 5], 2)); // 1 
console.log(binarySearch([1 , 2 , 3 , 4 , 5 ], 3)); // 2 
console.log(binarySearch([1 , 2 , 3 , 4 , 5], 5)); // 4 
console.log(binarySearch([1 , 2 , 3 , 4 , 5], 6)); // -1 
console.log(
  binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99
  ], 10)
); // 2
console.log(
  binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,          
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99         
  ], 95)
); // 16
console.log(
  binarySearch([
    5, 6, 10, 13, 14, 18, 30, 34, 35, 37,          
    40, 44, 64, 79, 84, 86, 95, 96, 98, 99         
  ], 100)
); // -1

// Outras formas de escrita
// - 1
function binarySearch2(arr, element) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while(arr[middle] !== element && start <= end) {
    if(element < arr[middle]) end = middle - 1;
    else start = middle + 1;

    middle = Math.floor((start + end) / 2);
  }

  if(arr[middle] === element) return middle;
  return -1;
}

// - 2
function binarySearch3(arr, element) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while(arr[middle] !== element && start <= end) {
    if(element < arr[middle]) end = middle - 1;
    else start = middle + 1;

    middle = Math.floor((start + end) / 2);
  }

  return arr[middle] === element ? middle : -1;
}