/*
  Escreva uma função recursiva chamada isPalindrome que retorna 
  true se a string passada para ela for um palíndromo (lê o mesmo 
  para frente e para trás). Caso contrário, retorna falso.

  Exemplos de entrada:
  isPalindrome("awesome") // false
  isPalindrome("foobar") // false
  isPalindrome("tacocat") // true
  isPalindrome("amanaplanacanalpanama") // true
  isPalindrome("amanaplanacanalpandemonium") // false
*/

function isPalindrome(str){
  if(str.length === 1) return true;
  if(str.length === 2) return str[0] === str[1];
  if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  
  return false;
}

console.log(isPalindrome("nattan"));