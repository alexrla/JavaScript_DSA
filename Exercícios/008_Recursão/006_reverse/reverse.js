/*
  Escreva uma função recursiva chamada reverse que aceita uma 
  string e retorna uma nova string inversa.

  Exemplos de entrada:
  reverse("alex") // "xela"
*/

function reverse(str){
	if(str.length <= 1) return str;

	return reverse(str.slice(1)) + str[0];
}

console.log(reverse("alex"));