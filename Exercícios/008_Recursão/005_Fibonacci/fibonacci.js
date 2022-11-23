/*
  Escreva uma função recursiva chamada fib que aceita um número e 
  retorna o enésimo número na sequência de Fibonacci. Lembre-se 
  de que a sequência de Fibonacci é a sequência de números 
  inteiros 1, 1, 2, 3, 5, 8, ... que começa com 1 e temos que 
  cada número subsequente é igual à soma dos dois números 
  anteriores.

  Exemplos de entrada:
  fib(4) // 3
  fib(10) // 55
  fib(28) // 317811
  fib(35) // 9227465
*/

function fib(n){
  if(n <= 2) return 1;

  return fib(n - 1) + fib(n - 2);
}

console.log(fib(10));