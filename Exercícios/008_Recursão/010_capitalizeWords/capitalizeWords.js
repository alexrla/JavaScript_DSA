/*
  Escreva uma função recursiva chamada capitalizeWords. Dada um
  array de strings, coloque em maiúscula todas as letras de cada 
  string do array.
*/

function capitalizeWords (array) {
  if(array.length === 1) {
    return [array[0].toUpperCase()];
  }

  let res = capitalizeWords(array.slice(0, -1));

  res.push(array.slice(array.length-1)[0].toUpperCase());

  return res;
}

console.log(capitalizeWords(["carro","taco","banana"]));