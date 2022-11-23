/*
  Escreva uma função recursiva chamada capitalizeFirst. Dada uma 
  array de strings, coloque em maiúscula a primeira letra de 
  cada string do array.
*/

function capitalizeFirst (array) {
  if(array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }

  const res = capitalizeFirst(array.slice(0, -1));

  const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
  
  res.push(string);

  return res;
}

console.log(capitalizeFirst(["car","taco","banana"]));