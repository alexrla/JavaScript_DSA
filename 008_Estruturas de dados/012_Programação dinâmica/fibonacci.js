/*
  - Fib(n) = Fib(n - 1) + Fib(n - 2);
  - Fib(2) = 1;
  - Fib(1) = 1;
*/

// Solução recursiva
function fibonacci(n) {
  if(n <= 2) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));

// BIG-O: O(2^n)
/*
  - Problema: a repetição de várias coisas (os mesmos cálculos
  são repetidos várias vezes);

  - A grande solução seria obter uma forma de lembrar os valores
  antigos, ao invés de ficar sempre fazendo a mesma operação. E é
  aí que entra a programação dinâmica: "Usar o conhecimento passado 
  para facilitar a solução de um problema futuro";
*/