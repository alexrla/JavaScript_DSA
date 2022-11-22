/*
  FREQUENCY COUNTER/MULTIPLE POINTERS
  
  Implemente uma função chamada areThereDuplicates que aceita um 
  número variável de argumentos e verifica se há duplicatas entre 
  os argumentos passados. Você pode resolver isso usando o padrão 
  de contador de frequência OU o padrão de ponteiros múltiplos.

  Exemplos:

  areThereDuplicates (1 , 2 , 3) // false   
  areThereDuplicates (1 , 2 , 2) // true 
  areThereDuplicates ('a' , 'b' , 'c' , 'a') // true
  
  Restrições:
  Tempo - O(n)
  Espaço - O(n)

  Bônus:
  Tempo - O(n log n)
  Espaço - O(1)
*/

// Frequency Counter
function areThereDuplicates(arguments) {
  let collection = {};

  for(let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }

  for(let key in collection) {
    if(collection[key] > 1) return true;
  }

  return false;
}

console.log(areThereDuplicates([1, 2, 3]))

// Multiple Pointers
function areThereDuplicates2(...args) {
  // Dois indicadores
  args.sort((a,b) => a > b);

  let start = 0, next = 1;

  while(next < args.length) {
    if(args[start] === args[next]) return true;

    start++
    next++
  }

  return false;
}

console.log(areThereDuplicates2(1 , 2 , 2));

// Solução em uma linha
function areThereDuplicates3(arguments) {
  return new Set(arguments).size !== arguments.length;
}

console.log(areThereDuplicates3(['a', 'b', 'c', 'a']));