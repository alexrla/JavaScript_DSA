/*
  Escreva uma função chamada potência que aceita uma base e um 
  expoente. A função deve retornar a potência da base ao expoente. 
  Esta função deve imitar a funcionalidade de Math.pow() - não 
  se preocupe com bases e expoentes negativos.

  Exemplos de entrada:
  power(2, 0) // 1
  power(2, 2) // 4
  power(2, 4) // 16
*/

function power(base, exponent){
  if(exponent === 0) return 1;

  return base * power(base, exponent - 1);
}

console.log(power(2, 4));