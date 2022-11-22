/*
  SLIDING WINDOW

  Escreva uma função chamada findLongestSubstring, que aceita 
  uma string e retorna o comprimento da substring mais longa 
  com todos os caracteres distintos.

  findLongestSubstring("") // 0
  findLongestSubstring("rithmschool") // 7
  findLongestSubstring("thisisawesome") // 6
  findLongestSubstring("thecatinthehat") // 7
  findLongestSubstring("bbbbbb") // 1
  findLongestSubstring("longestsubstring") // 8
  findLongestSubstring("thisishowwedoit") // 6

  Complexidade de Tempo - O(n)
*/

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    
    // index - início da substring + 1 (para incluir atual na contagem)
    longest = Math.max(longest, i - start + 1);

    // Armazenar o índice do próximo caractere para não contar duas vezes
    seen[char] = i + 1;
  }

  return longest;
}