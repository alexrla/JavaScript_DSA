/*
  MULTIPLES POINTERS

  Escreva uma função chamada isSubsequence que receba duas 
  strings e verifique se os caracteres da primeira string 
  formam uma subsequência dos caracteres da segunda string. 
  Em outras palavras, a função deve verificar se os caracteres 
  da primeira string aparecem em algum lugar da segunda string, 
  sem que sua ordem mude.

  Exemplos:
  isSubsequence("hello", "hello world"); // true  
  isSubsequence ("sing", "sting"); // true  
  isSubsequence("abc", "abracadabra"); // true
  isSubsequence ("abc", "acb"); // false (a ordem é importante)

  Sua solução DEVE ter PELO MENOS as seguintes complexidades:
  Complexidade de Tempo - O(N + M);
  Complexidade Espacial - O(1);
*/

// Solução iterativa
function isSubsequence(str1, str2) {
  let i = 0, j = 0;

  if (!str1) return true;

  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;

    if (i === str1.length) return true;

    j++;
  }

  return false;
}

console.log(isSubsequence("hello", "hello world"));


// Solução recursiva, mas complexidade de espaço não é O(1)
function isSubsequence(str1, str2) {
  if(str1.length === 0) return true;
  if(str2.length === 0) return false;
  if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1)); 
  
  return isSubsequence(str1, str2.slice(1));
}

console.log(isSubsequence("abc", "acb"));