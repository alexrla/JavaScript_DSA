/*
  ANAGRAMAS

  Dadas duas strings, escreva uma função para determinar se a segunda string é um anagrama da primeira. 
  Um anagrama é uma palavra, frase ou nome formado pelo rearranjo das letras de outro, como cinema, 
  formado a partir de iceman.
*/

function validAnagram(first, second)  {
  if(first.length !== second.length) return false;

  const lookup = {};

  for(let i = 0; i < first.length; i++) {
    let letter = first[i];
    // Se a letra existir, incremente, caso contrário, defina como 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  console.log(lookup);

  for(let i = 0; i < second.length; i++)  {
    let letter = second[i];
    console.log(second[i], lookup[letter])
    /*
      Quando letter não é encontrado ou quando a quantidade de ocorrências
      de lookup[letter] passa a ser igual a zero (um caractere existe na 
      segunda string, mas não existe na primeira), então não é um anagrama
    */
    if(!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

console.log(validAnagram("anagrama", "nagarama"));