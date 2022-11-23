/*
  Escreva uma função  fatorial que aceite um número e retorne o 
  fatorial desse número. Um fatorial é o produto de um inteiro 
  e todos os inteiros abaixo dele; por exemplo, fatorial 
  quatro (4!) é igual a 24, porque 4 * 3 * 2 * 1 é igual a 24. 
  Zero fatorial (0!) é sempre 1.

  Exemplos de entrada:
  factorial(1) // 1
  factorial(2) // 2
  factorial(4) // 24
  factorial(7) // 5040
*/

function factorial(x){
  if (x < 0 ) return 0;

  if (x <= 1 ) return 1;

  return x * factorial(x-1);
}

console.log(factorial(7));